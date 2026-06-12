"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { Code2, Palette, Gauge, Lock, Sliders, Globe } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Handcrafted code built for your specific needs. No page builders, no bloated plugins — just clean, maintainable code that performs.",
    size: "large",
    tag: "Core Service",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces that guide users naturally toward action. Every layout decision is intentional, every interaction purposeful.",
    size: "medium",
    tag: "Design",
  },
  {
    icon: Gauge,
    title: "Performance-First",
    description:
      "Lighthouse scores that matter. Sub-second load times, optimized assets, and architecture built for speed.",
    size: "medium",
    tag: "Optimization",
  },
  {
    icon: Sliders,
    title: "100% Customizable",
    description:
      "Your website should reflect your brand, not a template. Every element is built to your specifications.",
    size: "small",
    tag: "Flexibility",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description:
      "Security best practices built in from the ground up. No afterthoughts, no vulnerabilities left unaddressed.",
    size: "small",
    tag: "Security",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description:
      "Foundations designed to grow. Whether you need to handle 100 or 100,000 users, we build for tomorrow.",
    size: "small",
    tag: "Infrastructure",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay },
  }),
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {/* Large featured card */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
        variants={cardVariants}
        className="md:col-span-2 p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all duration-300 group"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/15 transition-colors duration-300">
            <Code2 size={22} className="text-amber-500" />
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-500/70 uppercase tracking-wider">
              {services[0].tag}
            </span>
            <h3 className="text-xl font-bold text-stone-50 mt-0.5">
              {services[0].title}
            </h3>
          </div>
        </div>
        <p className="text-stone-400 text-base leading-relaxed">
          {services[0].description}
        </p>
        <div className="mt-8 pt-6 border-t border-stone-800">
          <div className="flex flex-wrap gap-2">
            {["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-400 text-xs font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Medium card - UI/UX */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.1}
        variants={cardVariants}
        className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all duration-300 group"
      >
        <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/15 transition-colors duration-300">
          <Palette size={20} className="text-amber-500" />
        </div>
        <span className="text-xs font-semibold text-amber-500/70 uppercase tracking-wider">
          {services[1].tag}
        </span>
        <h3 className="text-lg font-bold text-stone-50 mt-1 mb-3">
          {services[1].title}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          {services[1].description}
        </p>
      </motion.div>

      {/* Medium card - Performance */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.2}
        variants={cardVariants}
        className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all duration-300 group"
      >
        <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/15 transition-colors duration-300">
          <Gauge size={20} className="text-amber-500" />
        </div>
        <span className="text-xs font-semibold text-amber-500/70 uppercase tracking-wider">
          {services[2].tag}
        </span>
        <h3 className="text-lg font-bold text-stone-50 mt-1 mb-3">
          {services[2].title}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed">
          {services[2].description}
        </p>
        {/* Visual element */}
        <div className="mt-4 flex items-end gap-1.5 h-10">
          {[85, 60, 90, 70, 95, 80, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${h}%` } : { height: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
              className="flex-1 rounded-sm bg-amber-500/30 group-hover:bg-amber-500/50 transition-colors duration-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Small cards row */}
      {services.slice(3).map((service, i) => {
        const Icon = service.icon
        return (
          <motion.div
            key={service.title}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3 + i * 0.1}
            variants={cardVariants}
            className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/15 transition-colors duration-300">
              <Icon size={18} className="text-amber-500" />
            </div>
            <span className="text-xs font-semibold text-amber-500/70 uppercase tracking-wider">
              {service.tag}
            </span>
            <h3 className="text-base font-bold text-stone-50 mt-1 mb-2">
              {service.title}
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
