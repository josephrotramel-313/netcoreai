"use client"

import { useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Typewriter } from "@/components/ui/typewriter"

const typewriterPhrases = [
  "Websites That Convert.",
  "Interfaces That Impress.",
  "Experiences That Retain.",
  "Products That Scale.",
  "Code That Performs.",
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay },
    }),
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/60 via-[#0C0A09]/40 to-[#0C0A09]/80" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(202,138,4,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(202,138,4,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Premium Web Development Agency
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-50 leading-none mb-4"
        >
          We Build
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-amber-500 leading-none mb-8 min-h-[1.2em]"
        >
          <Typewriter
            words={typewriterPhrases}
            speed={80}
            delayBetweenWords={2500}
            cursor={true}
            cursorChar="|"
          />
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-400 leading-relaxed mb-12"
        >
          Net Core AI crafts custom websites and web applications with precision.
          No templates. No shortcuts. Just thoughtful design and performant code
          built around your goals.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-stone-700 hover:border-amber-500/50 text-stone-300 hover:text-stone-50 font-semibold text-base transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
