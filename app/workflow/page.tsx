"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ScanSearch,
  GitBranch,
  Settings2,
  FolderGit2,
  Sparkles,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

// ─── Workflow Steps ────────────────────────────────────────────────────────────

const steps = [
  {
    number: "00",
    label: "Discover",
    icon: ScanSearch,
    color: "#EF4444",
    glowColor: "rgba(239,68,68,0.35)",
    borderColor: "rgba(239,68,68,0.4)",
    bgColor: "rgba(239,68,68,0.06)",
    description:
      "Analyze your component structure and identify all required dependencies, integration points, and potential conflicts.",
    bullets: ["Audit existing codebase", "Map dependency graph", "Flag breaking changes"],
  },
  {
    number: "01",
    label: "Architect",
    icon: GitBranch,
    color: "#F97316",
    glowColor: "rgba(249,115,22,0.35)",
    borderColor: "rgba(249,115,22,0.4)",
    bgColor: "rgba(249,115,22,0.06)",
    description:
      "Review component arguments, state management needs, and required context providers or custom hooks.",
    bullets: ["Define prop interfaces", "Plan state architecture", "Identify context needs"],
  },
  {
    number: "02",
    label: "Configure",
    icon: Settings2,
    color: "#EAB308",
    glowColor: "rgba(234,179,8,0.35)",
    borderColor: "rgba(234,179,8,0.4)",
    bgColor: "rgba(234,179,8,0.06)",
    description:
      "Set up your project with shadcn/ui, Tailwind CSS, and TypeScript. Verify /components/ui directory structure.",
    bullets: ["shadcn CLI setup", "Tailwind v3 config", "TypeScript paths"],
  },
  {
    number: "03",
    label: "Integrate",
    icon: FolderGit2,
    color: "#84CC16",
    glowColor: "rgba(132,204,22,0.35)",
    borderColor: "rgba(132,204,22,0.4)",
    bgColor: "rgba(132,204,22,0.06)",
    description:
      "Copy components into /components/ui, install NPM dependencies, and wire up all imports and exports.",
    bullets: ["Copy to /components/ui", "npm install deps", "Wire up imports"],
  },
  {
    number: "04",
    label: "Enrich",
    icon: Sparkles,
    color: "#4ADE80",
    glowColor: "rgba(74,222,128,0.35)",
    borderColor: "rgba(74,222,128,0.4)",
    bgColor: "rgba(74,222,128,0.06)",
    description:
      "Fill image assets with high-quality visuals, swap in Lucide icons, and add polish to every interaction state.",
    bullets: ["Unsplash assets", "Lucide icon set", "Hover & focus states"],
  },
  {
    number: "05",
    label: "Ship",
    icon: Rocket,
    color: "#22C55E",
    glowColor: "rgba(34,197,94,0.35)",
    borderColor: "rgba(34,197,94,0.4)",
    bgColor: "rgba(34,197,94,0.06)",
    description:
      "Test responsive behavior across all breakpoints, verify every interaction, then deploy to production.",
    bullets: ["375px → 1440px audit", "A11y check", "Deploy & monitor"],
  },
];

// ─── Animated Connecting Line ─────────────────────────────────────────────────

function ConnectingLine({ inView }: { inView: boolean }) {
  return (
    <div className="hidden lg:block absolute top-[52px] left-[7%] right-[7%] h-px overflow-hidden">
      {/* Track */}
      <div className="absolute inset-0 bg-white/5 rounded-full" />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #EF4444 0%, #F97316 20%, #EAB308 40%, #84CC16 60%, #4ADE80 80%, #22C55E 100%)",
        }}
        initial={{ width: "0%" }}
        animate={inView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
      />
      {/* Glimmer */}
      {inView && (
        <motion.div
          className="absolute inset-y-0 w-16 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          }}
          initial={{ left: "-10%" }}
          animate={{ left: "110%" }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({
  step,
  index,
  inView,
}: {
  step: (typeof steps)[number];
  index: number;
  inView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative flex flex-col gap-4 p-5 rounded-2xl cursor-default group transition-shadow duration-300"
      style={{
        background: step.bgColor,
        border: `1px solid ${step.borderColor}`,
        boxShadow: `0 0 0 rgba(0,0,0,0)`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${step.glowColor}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
      }}
    >
      {/* Step number badge */}
      <div
        className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold font-mono z-10 shadow-lg"
        style={{ background: step.color, color: "#0A0A0A" }}
      >
        {step.number}
      </div>

      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 self-start"
        style={{
          background: `${step.bgColor}`,
          border: `1px solid ${step.borderColor}`,
        }}
        whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
      >
        <Icon className="w-6 h-6" style={{ color: step.color }} />
      </motion.div>

      {/* Label */}
      <div>
        <span
          className="text-xs font-mono font-semibold tracking-widest uppercase mb-1 block opacity-70"
          style={{ color: step.color }}
        >
          Step {step.number}
        </span>
        <h3 className="text-base font-extrabold text-[#EAEAEA] tracking-tight">
          {step.label}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#888] text-sm leading-relaxed flex-1">{step.description}</p>

      {/* Bullets */}
      <ul className="flex flex-col gap-1.5">
        {step.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-xs text-[#666]">
            <CheckCircle2
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: step.color }}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* Bottom glow bar */}
      <motion.div
        className="absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
      />
    </motion.div>
  );
}

// ─── Mobile Timeline (vertical, stacked) ─────────────────────────────────────

function MobileTimeline({ inView }: { inView: boolean }) {
  return (
    <div className="flex flex-col gap-0 lg:hidden">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;
        return (
          <div key={step.number} className="flex gap-4">
            {/* Left: icon + line */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.12, type: "spring", stiffness: 200 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: step.bgColor,
                  border: `1px solid ${step.borderColor}`,
                  boxShadow: `0 0 12px ${step.glowColor}`,
                }}
              >
                <Icon className="w-5 h-5" style={{ color: step.color }} />
              </motion.div>
              {!isLast && (
                <motion.div
                  className="w-px flex-1 my-1"
                  style={{
                    background: `linear-gradient(180deg, ${step.color}, ${steps[index + 1].color})`,
                    opacity: 0.4,
                  }}
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.12, duration: 0.4 }}
                />
              )}
            </div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.12, duration: 0.45 }}
              className={`flex-1 pb-6 ${isLast ? "" : ""}`}
            >
              <span
                className="text-[10px] font-mono font-semibold tracking-widest uppercase opacity-70"
                style={{ color: step.color }}
              >
                Step {step.number}
              </span>
              <h3 className="text-base font-extrabold text-[#EAEAEA] mt-0.5 mb-1">{step.label}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkflowPage() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center py-32 px-6 overflow-hidden bg-[#0C0A09]">
        <BackgroundPaths />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-stone-50 mb-6 leading-tight">
            Our Workflow
          </h1>
          <p className="text-stone-400 text-xl leading-relaxed mb-8">
            From first look to live deployment — a battle-tested 6-step process for integrating AI components that actually work.
          </p>
          <a
            href="https://calendly.com/netcoreaisolutions/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 hover:scale-105"
          >
            Start Your Project
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#7A00FF] border border-[#7A00FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A00FF]" />
              6-Step Integration Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] mb-4 tracking-tight">
              Build It{" "}
              <span className="text-gradient">Right.</span>
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Every component integration follows this process — from discovery to
              a polished, production-ready deployment.
            </p>
          </motion.div>

          {/* Desktop: horizontal grid with connecting line */}
          <div className="relative hidden lg:block">
            <ConnectingLine inView={inView} />
            <div className="grid grid-cols-6 gap-4 pt-4">
              {steps.map((step, index) => (
                <StepCard key={step.number} step={step} index={index} inView={inView} />
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <MobileTimeline inView={inView} />

          {/* Bottom CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="w-2 h-2 rounded-full"
                  style={{ background: step.color }}
                />
              ))}
            </div>
            <p className="text-[#888] text-sm text-center max-w-md">
              Ready to automate your business with battle-tested AI components?
            </p>
            <a
              href="https://calendly.com/netcoreaisolutions/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_32px_rgba(0,240,255,0.4)]"
              style={{ background: "linear-gradient(135deg, #00F0FF, #7A00FF)" }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
