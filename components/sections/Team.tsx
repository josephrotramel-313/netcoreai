"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone } from "lucide-react"
import { fadeUpVariants } from "@/lib/animation"
import { SectionBadge } from "@/components/ui/SectionBadge"

const team = [
  {
    name: "Joseph Rotramel",
    initials: "JR",
    title: "Chief Executive Officer",
    phone: "(469) 442-5018",
    tel: "+14694425018",
    bio: "Leads the company vision, client relationships, and strategic direction. Obsessed with delivering outcomes, not just deliverables.",
    hue: "from-amber-600 to-amber-800",
  },
  {
    name: "Felix Odunayo",
    initials: "FO",
    title: "Chief Technology Officer",
    phone: "(214) 962-7439",
    tel: "+12149627439",
    bio: "Architects the technical foundation for every project. Brings deep expertise in modern web technologies and scalable systems.",
    hue: "from-stone-600 to-stone-800",
  },
  {
    name: "James Williams",
    initials: "JW",
    title: "Chief Marketing Officer",
    phone: "(214) 636-4709",
    tel: "+12146364709",
    bio: "Drives growth strategy, brand positioning, and client acquisition. Turns great products into compelling stories.",
    hue: "from-amber-700 to-stone-700",
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="team"
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
            <SectionBadge>The Team</SectionBadge>
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-extrabold text-stone-50 leading-tight mb-4"
          >
            The people behind
            <br />
            <span className="text-amber-500">every great build.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUpVariants}
            className="max-w-xl mx-auto text-stone-400 text-lg leading-relaxed"
          >
            A small, focused team with sharp skills and a relentless commitment
            to quality. We don&apos;t scale by adding headcount — we scale by
            getting better.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2 + i * 0.12}
              variants={fadeUpVariants}
              className="group p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Monogram avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.hue} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                  {member.initials}
                </span>
              </div>

              <h3 className="text-stone-50 font-bold text-xl mb-0.5">
                {member.name}
              </h3>
              <p className="text-amber-500 text-sm font-semibold mb-3">
                {member.title}
              </p>
              <p className="text-stone-400 text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              <a
                href={`tel:${member.tel}`}
                className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm font-medium transition-colors duration-200 cursor-pointer"
                aria-label={`Call ${member.name}`}
              >
                <Phone size={14} />
                {member.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
