"use client"

import { useEffect, useRef } from "react"

export function ShaderAnimation({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const container = mountRef.current

    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    script.async = true

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const THREE = (window as unknown as Record<string, any>).THREE
      if (!THREE || !container) return

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
      camera.position.z = 1

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `

      const fragmentShader = `
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;

        float line(vec2 uv, float y, float width) {
          return smoothstep(width, 0.0, abs(uv.y - y));
        }

        void main() {
          vec2 uv = vUv;
          uv.x *= uResolution.x / uResolution.y;

          vec3 color = vec3(0.392, 0.710, 0.965); // #64b5f6
          float alpha = 0.0;

          for (int i = 0; i < 8; i++) {
            float fi = float(i);
            float speed = 0.15 + fi * 0.04;
            float freq = 2.0 + fi * 0.8;
            float amp = 0.04 + fi * 0.015;
            float offset = fi * 0.13;

            float y = 0.5 + sin(uv.x * freq + uTime * speed + offset) * amp
                         + cos(uv.x * (freq * 0.5) + uTime * (speed * 0.7) + offset * 2.0) * amp * 0.5;

            float lineAlpha = line(uv, y, 0.002) * (0.12 - fi * 0.01);
            alpha += lineAlpha;
          }

          gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.35));
        }
      `

      const geometry = new THREE.PlaneGeometry(2, 2)
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uResolution: {
            value: new THREE.Vector2(container.clientWidth, container.clientHeight),
          },
        },
        transparent: true,
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      let animId: number
      const startTime = Date.now()

      const animate = () => {
        animId = requestAnimationFrame(animate)
        material.uniforms.uTime.value = (Date.now() - startTime) / 1000
        renderer.render(scene, camera)
      }
      animate()

      const handleResize = () => {
        if (!container) return
        renderer.setSize(container.clientWidth, container.clientHeight)
        material.uniforms.uResolution.value.set(container.clientWidth, container.clientHeight)
      }
      window.addEventListener("resize", handleResize)

      cleanupRef.current = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener("resize", handleResize)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
        }
      }
    }

    document.head.appendChild(script)

    return () => {
      cleanupRef.current?.()
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
