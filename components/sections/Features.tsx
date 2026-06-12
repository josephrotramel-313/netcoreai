"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FeaturesSection } from "@/components/blocks/features-8"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 px-6 border-t border-stone-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-400 text-sm font-medium mb-6"
          >
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-stone-50 leading-tight mb-4"
          >
            Services built around
            <br />
            <span className="text-amber-500">your ambitions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-stone-400 text-lg leading-relaxed"
          >
            From concept to launch, we handle every layer of the stack — design,
            development, performance, and security.
          </motion.p>
        </div>

        <FeaturesSection />
      </div>
    </section>
  )
}
