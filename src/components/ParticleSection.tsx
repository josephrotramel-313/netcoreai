"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

export default function ParticleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 overflow-hidden border-y border-white/[0.05]" aria-label="Build Ship Scale">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <ParticleTextEffect words={["BUILD", "SHIP", "SCALE", "NET CORE"]} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-center text-white/25 text-xs tracking-[0.2em] uppercase mt-6 font-display"
        >
          Right-click and hold to interact
        </motion.p>
      </div>
    </section>
  );
}
