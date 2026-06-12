"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { fadeUpVariants } from "@/lib/animation"
import { SectionBadge } from "@/components/ui/SectionBadge"

const steps = [
  {
    number: "01",
    title: "Book Meeting",
    description:
      "Schedule a free discovery call so we can understand your goals, timeline, and vision.",
  },
  {
    number: "02",
    title: "Contract Signing",
    description:
      "We formalize the scope, deliverables, and terms in a clear, straightforward agreement.",
  },
  {
    number: "03",
    title: "50% Deposit",
    description:
      "A 50% deposit secures your spot on our schedule and kicks off the project.",
  },
  {
    number: "04",
    title: "Send Necessary Assets",
    description:
      "You provide brand assets, images, copy, and any other materials we'll need.",
  },
  {
    number: "05",
    title: "UI/UX Approval",
    description:
      "We present the design mockups for your review. No development starts until you love the look.",
  },
  {
    number: "06",
    title: "Full Build",
    description:
      "Our team builds your site with clean, performant code — pixel-perfect to the approved design.",
  },
  {
    number: "07",
    title: "Edits & Final Approval",
    description:
      "You review the live staging site and request any refinements. We iterate until it's right.",
  },
  {
    number: "08",
    title: "Onboarding & Training",
    description:
      "We walk you through managing your site so you're confident and self-sufficient.",
  },
  {
    number: "09",
    title: "Complete Handoff",
    description:
      "All credentials, source files, and documentation are transferred to you cleanly.",
  },
  {
    number: "10",
    title: "Full Payment",
    description:
      "The remaining 50% is collected upon your complete satisfaction and site delivery.",
  },
  {
    number: "11",
    title: "Goal Setting with CSM",
    description:
      "Your dedicated Customer Success Manager helps you set post-launch KPIs and growth strategy.",
  },
]

const CARD_WIDTH = 288 + 20 // w-72 (288px) + gap-5 (20px)

export default function Workflow() {
  const sectionRef = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === "right" ? CARD_WIDTH : -CARD_WIDTH,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const index = Math.round(scrollRef.current.scrollLeft / CARD_WIDTH)
    setActiveIndex(Math.min(index, steps.length - 1))
  }

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="py-28 border-t border-stone-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUpVariants}
        >
          <SectionBadge>Our Process</SectionBadge>
        </motion.div>

        <div className="flex items-end justify-between">
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-extrabold text-stone-50 leading-tight"
          >
            A process built for
            <br />
            <span className="text-amber-500">clarity and results.</span>
          </motion.h2>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="cursor-pointer w-10 h-10 rounded-full border border-stone-700 hover:border-amber-500/50 flex items-center justify-center text-stone-400 hover:text-stone-50 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="cursor-pointer w-10 h-10 rounded-full border border-stone-700 hover:border-amber-500/50 flex items-center justify-center text-stone-400 hover:text-stone-50 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          variants={fadeUpVariants}
          className="max-w-xl text-stone-400 text-lg leading-relaxed mt-4"
        >
          From first call to final payment, every step is transparent, collaborative, and designed to make you confident.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex-shrink-0 w-[calc((100vw-72rem)/2)] hidden xl:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="relative flex-shrink-0 w-72 p-6 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all duration-300 group"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 group-hover:bg-amber-500/15 transition-colors duration-300">
                <span className="text-amber-500 font-extrabold text-lg">
                  {step.number}
                </span>
              </div>

              <h3 className="text-stone-50 font-bold text-lg mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-px bg-amber-500/20" />
              )}
            </motion.div>
          ))}

          <div className="flex-shrink-0 w-6" />
        </div>

        <div className="flex justify-center mt-6 gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollRef.current) return
                scrollRef.current.scrollTo({ left: i * CARD_WIDTH, behavior: "smooth" })
              }}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? "w-6 bg-amber-500" : "w-1.5 bg-stone-700"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-stone-600 text-xs mt-3">
          Scroll to see all {steps.length} steps →
        </p>
      </motion.div>
    </section>
  )
}
