"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision-First",
    description:
      "Every pixel, every line of code is deliberate. We don't ship until we're proud of it.",
  },
  {
    icon: Lightbulb,
    title: "Strategy-Driven",
    description:
      "Great websites start with a clear goal. We align design and development with your business objectives.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Performance, security, and scalability aren't afterthoughts — they're baked in from day one.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number], delay },
    }),
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6 border-t border-stone-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-400 text-sm font-medium mb-6"
            >
              About Us
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-stone-50 leading-tight mb-6"
            >
              Built by developers
              <br />
              <span className="text-amber-500">who care about craft.</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              variants={fadeUp}
              className="text-stone-400 text-lg leading-relaxed mb-6"
            >
              Net Core AI was founded on a simple belief: most businesses deserve
              better websites than they have. We started building for clients
              who were tired of cookie-cutter templates and agencies that
              over-promised and under-delivered.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUp}
              className="text-stone-400 text-lg leading-relaxed mb-8"
            >
              Over the past 3+ years, we&apos;ve developed a disciplined process —
              from strategy and design to development and handoff — that ensures
              every project launches on time, on budget, and above expectations.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              variants={fadeUp}
              className="flex flex-wrap gap-6"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-amber-500">3+</span>
                <span className="text-stone-400 text-sm mt-1">Years of Experience</span>
              </div>
              <div className="w-px bg-stone-700" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-amber-500">100%</span>
                <span className="text-stone-400 text-sm mt-1">Custom Code</span>
              </div>
              <div className="w-px bg-stone-700" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-amber-500">Full</span>
                <span className="text-stone-400 text-sm mt-1">Handoff & Training</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Values */}
          <div className="flex flex-col gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={0.2 + i * 0.12}
                  variants={fadeUp}
                  className="flex gap-5 p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Icon size={20} className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-stone-50 font-semibold text-lg mb-1">
                      {value.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
