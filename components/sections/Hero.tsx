"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Typewriter } from "@/components/ui/typewriter"
import { fadeUpVariants } from "@/lib/animation"

const typewriterPhrases = [
  "Websites That Convert.",
  "Interfaces That Impress.",
  "Experiences That Retain.",
  "Products That Scale.",
  "Code That Performs.",
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const reducedFadeUp = prefersReducedMotion
    ? {
        hidden: { opacity: 0, y: 0 },
        visible: fadeUpVariants.visible,
      }
    : fadeUpVariants

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/60 via-[#0C0A09]/40 to-[#0C0A09]/80" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,181,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(100,181,246,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={reducedFadeUp}
          className="text-stone-400 text-sm font-medium tracking-widest uppercase mb-8"
        >
          Premium Web Development Agency
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={reducedFadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-50 leading-none mb-4"
        >
          We Build
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={reducedFadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-accent leading-none mb-8 min-h-[1.2em]"
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
          variants={reducedFadeUp}
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
          variants={reducedFadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-base transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-stone-700 hover:border-accent/50 text-stone-300 hover:text-stone-50 font-semibold text-base transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Learn More
          </a>
        </motion.div>
      </div>

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
