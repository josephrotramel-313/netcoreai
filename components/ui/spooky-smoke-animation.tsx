"use client"

import { useEffect, useRef } from "react"

interface SmokeBackgroundProps {
  smokeColor?: string
  className?: string
}

export function SmokeBackground({
  smokeColor = "#64b5f6",
  className = "",
}: SmokeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2")
    if (!gl) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    // Parse hex color to rgb 0-1
    const hexToRgb = (hex: string): [number, number, number] => {
      const r = parseInt(hex.slice(1, 3), 16) / 255
      const g = parseInt(hex.slice(3, 5), 16) / 255
      const b = parseInt(hex.slice(5, 7), 16) / 255
      return [r, g, b]
    }
    const [cr, cg, cb] = hexToRgb(smokeColor)

    const vsSource = `#version 300 es
      in vec4 aPosition;
      void main() {
        gl_Position = aPosition;
      }
    `

    const fsSource = `#version 300 es
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uColor;
      out vec4 fragColor;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 5; i++) {
          v += amp * noise(p);
          p *= 2.0;
          amp *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        uv.y = 1.0 - uv.y;

        vec2 q = vec2(
          fbm(uv + vec2(0.0, uTime * 0.04)),
          fbm(uv + vec2(1.7, 9.2))
        );

        vec2 r = vec2(
          fbm(uv + 4.0 * q + vec2(1.7, 9.2) + 0.15 * uTime * 0.04),
          fbm(uv + 4.0 * q + vec2(8.3, 2.8) + 0.126 * uTime * 0.04)
        );

        float f = fbm(uv + 4.0 * r);
        float alpha = smoothstep(0.35, 0.85, f) * 0.25;

        fragColor = vec4(uColor, alpha);
      }
    `

    const compileShader = (type: number, src: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      return shader
    }

    const vs = compileShader(gl.VERTEX_SHADER, vsSource)
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource)
    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const posBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    const posLoc = gl.getAttribLocation(program, "aPosition")
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, "uTime")
    const uResolution = gl.getUniformLocation(program, "uResolution")
    const uColorLoc = gl.getUniformLocation(program, "uColor")

    gl.uniform3f(uColorLoc, cr, cg, cb)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    let animId: number
    const startTime = Date.now()

    const render = () => {
      animId = requestAnimationFrame(render)
      gl.uniform1f(uTime, (Date.now() - startTime) / 1000)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(posBuffer)
    }
  }, [smokeColor])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
