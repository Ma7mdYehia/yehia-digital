"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { proofVoices } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

export default function ProofVoicesSection() {
  const isClient = useIsClient();
  const [active, setActive] = useState(0);
  const voice = proofVoices.voices[active];

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: "easeOut", delay },
  });

  return (
    <section
      id="proof"
      aria-label="Proof and voices"
      className="px-6 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium">
            {proofVoices.label}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {proofVoices.heading}
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {proofVoices.subtitle}
          </motion.p>
        </div>

        {/* Panel */}
        <motion.div
          {...reveal(0.16)}
          className="relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr]">

            {/* Left column — voice card + selector row */}
            <div className="p-7 lg:p-8 flex flex-col gap-6">

              {/* Voice card (testimonial-style) */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 flex flex-col gap-5 min-h-[230px]">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium">
                    {voice.sector}
                  </span>
                  <Quote size={26} strokeWidth={1.5} className="text-[#3DBA8C]/40 shrink-0" aria-hidden />
                </div>

                {/* Pending placeholder quote — intentionally not a fake testimonial */}
                <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed italic">
                  {voice.text}
                </p>

                {/* Footer: monogram + project + status */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                  <span
                    aria-hidden
                    className="flex-none w-10 h-10 rounded-full border border-[#3DBA8C]/25 bg-[#3DBA8C]/[0.07] flex items-center justify-center text-xs font-semibold text-[#3DBA8C] tracking-wide"
                  >
                    {voice.initials}
                  </span>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-sm font-medium text-[#E8EDF2] leading-snug truncate">
                      {voice.project}
                    </p>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]/60" />
                      <span className="text-[11px] text-[#94A3B8]/70">{voice.status}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Selector row */}
              <div
                role="group"
                aria-label="Choose a client voice"
                className="flex flex-wrap gap-2"
              >
                {proofVoices.voices.map((v, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={v.sector}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 transition-colors duration-200",
                        isActive
                          ? "bg-[#3DBA8C]/[0.12] border-[#3DBA8C]/40"
                          : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.18]",
                      ].join(" ")}
                    >
                      <span
                        aria-hidden
                        className={[
                          "w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-semibold tracking-wide",
                          isActive
                            ? "bg-[#3DBA8C]/20 text-[#3DBA8C]"
                            : "bg-white/[0.05] text-[#94A3B8]",
                        ].join(" ")}
                      >
                        {v.initials}
                      </span>
                      <span
                        className={[
                          "text-xs font-medium",
                          isActive ? "text-[#3DBA8C]" : "text-[#94A3B8]",
                        ].join(" ")}
                      >
                        {v.sector}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right column — project overview */}
            <div className="p-7 lg:p-8 border-t border-white/[0.07] lg:border-t-0 lg:border-l lg:border-white/[0.08] flex flex-col gap-4">
              <p className="text-[10.5px] text-[#94A3B8]/60 uppercase tracking-[0.18em] font-medium">
                {proofVoices.projectOverviewLabel}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {proofVoices.projectOverview.map((cat, i) => (
                  <motion.div
                    key={cat}
                    {...reveal(0.2 + i * 0.04)}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                  >
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]/70 shrink-0" />
                    <span className="text-[12px] text-[#E8EDF2]/90 leading-tight">{cat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
