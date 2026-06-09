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
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="how"
      aria-label="How I work"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">

        {/* Left — editorial column */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium"
          >
            {howIWork.eyebrow}
          </motion.p>

          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {howIWork.heading}
          </motion.h2>

          <div className="flex flex-col gap-5 mt-2">
            {howIWork.body.map((paragraph, i) => (
              <motion.p
                key={i}
                {...reveal(0.14 + i * 0.06)}
                className="text-base sm:text-[17px] text-[#94A3B8] leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right — operating model card */}
        <motion.aside
          {...reveal(0.18)}
          aria-labelledby="operating-model-title"
          className="glass rounded-2xl border border-white/[0.10] p-6 sm:p-7 flex flex-col gap-6 lg:sticky lg:top-24"
        >
          <header className="flex items-center justify-between gap-3">
            <p
              id="operating-model-title"
              className="text-[11px] text-[#94A3B8]/70 tracking-widest uppercase font-medium"
            >
              Operating model
            </p>
            <span className="text-[10.5px] text-[#94A3B8]/40 tracking-wide">
              Four working modes
            </span>
          </header>

          <ol className="flex flex-col gap-5">
            {howIWork.model.map((step, i) => (
              <li key={step.id} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="flex-none text-[11px] font-semibold text-[#3DBA8C] tracking-wider tabular-nums w-7 pt-0.5"
                >
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#E8EDF2] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                    {step.phrase}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Badge strip */}
          <div className="pt-5 mt-1 border-t border-white/[0.07] flex flex-wrap gap-1.5">
            {howIWork.badges.map((badge) => (
              <span
                key={badge}
                className="text-[10.5px] font-medium text-[#94A3B8]/80 bg-white/[0.03] border border-white/[0.07] rounded-full px-2.5 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.aside>

      </div>
    </section>
  );
}
