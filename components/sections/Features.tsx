"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FeaturesSection } from "@/components/blocks/features-8"
import { fadeUpVariants } from "@/lib/animation"
import { SectionBadge } from "@/components/ui/SectionBadge"

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
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            variants={fadeUpVariants}
          >
            <SectionBadge>What We Do</SectionBadge>
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-extrabold text-stone-50 leading-tight mb-4"
          >
            Services built around
            <br />
            <span className="text-accent">your ambitions.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUpVariants}
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
