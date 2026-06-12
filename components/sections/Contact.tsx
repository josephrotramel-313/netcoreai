"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, ArrowRight, MessageCircle } from "lucide-react"
import { fadeUpVariants } from "@/lib/animation"
import { SectionBadge } from "@/components/ui/SectionBadge"
import { IconBox } from "@/components/ui/IconBox"
import { LampContainer } from "@/components/ui/lamp"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="border-t border-stone-800"
    >
      <LampContainer className="pt-12 pb-0">
        <div className="w-full max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              variants={fadeUpVariants}
            >
              <SectionBadge>Get in Touch</SectionBadge>
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-extrabold text-stone-50 leading-tight mb-6"
            >
              Ready to build
              <br />
              <span className="text-accent">something great?</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              variants={fadeUpVariants}
              className="text-stone-400 text-lg leading-relaxed mb-8"
            >
              Whether you have a fully formed idea or just a rough direction —
              we&apos;re here to help you think it through and build it right.
              Reach out and let&apos;s talk.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUpVariants}
              className="flex flex-col gap-4"
            >
              <a
                href="mailto:netcoreaisolutions@gmail.com"
                className="inline-flex items-center gap-3 group cursor-pointer"
                aria-label="Email Net Core AI"
              >
                <IconBox icon={Mail} size="lg" />
                <div>
                  <p className="text-stone-500 text-xs font-medium mb-0.5">Email us directly</p>
                  <p className="text-stone-200 font-semibold group-hover:text-accent transition-colors duration-200">
                    netcoreaisolutions@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="mailto:netcoreaisolutions@gmail.com?subject=Project%20Inquiry&body=Hi%20Net%20Core%20AI%20team%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AHere%27s%20a%20brief%20overview%3A%0A"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-base transition-all duration-200 hover:scale-105 cursor-pointer w-fit"
              >
                <MessageCircle size={18} />
                Start a Conversation
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800">
              <h3 className="text-stone-50 font-bold text-lg mb-3">
                What to expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Free 30-minute discovery call",
                  "Detailed proposal within 3 business days",
                  "No hidden fees — ever",
                  "Dedicated point of contact throughout",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <p className="text-stone-300 text-sm leading-relaxed italic">
                &ldquo;We don&apos;t take on every project — we take on the right ones.
                If we&apos;re a good fit, we&apos;ll tell you. If we&apos;re not, we&apos;ll
                point you in the right direction.&rdquo;
              </p>
              <p className="text-accent text-sm font-semibold mt-4">
                — Net Core AI Team
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </LampContainer>
    </section>
  )
}
