"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Phone } from "lucide-react"
import { fadeUpVariants } from "@/lib/animation"
import { SectionBadge } from "@/components/ui/SectionBadge"

const team = [
  {
    name: "Joseph Rotramel",
    title: "Chief Executive Officer",
    phone: "(469) 442-5018",
    tel: "+14694425018",
    photoId: "1472099645785-5658abf4ff4e",
    bio: "Leads the company vision, client relationships, and strategic direction. Obsessed with delivering outcomes, not just deliverables.",
  },
  {
    name: "Felix Odunayo",
    title: "Chief Technology Officer",
    phone: "(214) 962-7439",
    tel: "+12149627439",
    photoId: "1507003211169-0a1dd7228f2d",
    bio: "Architects the technical foundation for every project. Brings deep expertise in modern web technologies and scalable systems.",
  },
  {
    name: "James Williams",
    title: "Chief Marketing Officer",
    phone: "(214) 636-4709",
    tel: "+12146364709",
    photoId: "1500648767791-00dcc994a43e",
    bio: "Drives growth strategy, brand positioning, and client acquisition. Turns great products into compelling stories.",
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
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-5 border border-stone-700 group-hover:border-amber-500/40 transition-colors duration-300">
                <Image
                  src={`https://images.unsplash.com/photo-${member.photoId}?w=400&h=400&fit=crop&q=80`}
                  alt={`${member.name}, ${member.title} at Net Core AI`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
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
