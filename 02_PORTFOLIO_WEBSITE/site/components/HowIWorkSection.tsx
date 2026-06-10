"use client";

import { motion } from "framer-motion";
import { howIWork } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

export default function HowIWorkSection() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: "easeOut", delay },
  });

  // Preserve existing copy: first paragraph as intro, the rest as the method narrative.
  const [intro, ...methodParagraphs] = howIWork.body;

  return (
    <section
      id="how"
      aria-label="How I work"
      className="px-6 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium">
            {howIWork.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {howIWork.heading}
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {intro}
          </motion.p>
        </div>

        {/* Operating-rhythm panel */}
        <motion.div
          {...reveal(0.16)}
          className="relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left — the method */}
            <div className="p-7 lg:p-8 flex flex-col gap-5 lg:border-r lg:border-white/[0.08]">
              <p className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium">
                The method
              </p>

              <div className="flex flex-col gap-4">
                {methodParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-[15px] text-[#94A3B8] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Principle chips */}
              <div className="pt-5 mt-auto border-t border-white/[0.07] flex flex-col gap-2.5">
                <p className="text-[10.5px] text-[#94A3B8]/50 uppercase tracking-[0.18em] font-medium">
                  Principles
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {howIWork.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[11px] font-medium text-[#94A3B8]/80 bg-white/[0.03] border border-white/[0.07] rounded-full px-2.5 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — operating model steps */}
            <div className="p-7 lg:p-8 flex flex-col gap-6 border-t border-white/[0.07] lg:border-t-0">
              <header className="flex items-center justify-between gap-3">
                <p className="text-[11px] text-[#94A3B8]/70 tracking-[0.18em] uppercase font-medium">
                  Operating model
                </p>
                <span className="text-[10.5px] text-[#94A3B8]/40 tracking-wide">
                  Four working modes
                </span>
              </header>

              <ol className="flex flex-col gap-5">
                {howIWork.model.map((step, i) => (
                  <motion.li
                    key={step.id}
                    {...reveal(0.22 + i * 0.05)}
                    className="flex items-start gap-4"
                  >
                    <span
                      aria-hidden
                      className="flex-none font-display text-2xl leading-none text-[#3DBA8C]/80 tabular-nums w-9 pt-0.5"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#E8EDF2] leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-[#94A3B8] leading-relaxed">{step.phrase}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
