"use client";

import { motion } from "framer-motion";
import { about } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

export default function AboutSnapshot() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : false as const,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="about"
      aria-label="About"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium">
            About
          </motion.p>

          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight max-w-xl"
          >
            {about.heading}
          </motion.h2>

          <motion.p
            {...reveal(0.12)}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl"
          >
            {about.body}
          </motion.p>

          <motion.div {...reveal(0.18)}>
            <a
              href={about.cta.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3DBA8C] hover:text-[#5ecba1] transition-colors group"
            >
              {about.cta.label}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
          </motion.div>
        </div>

        {/* Right — credential card */}
        <motion.div
          {...reveal(0.1)}
          className="glass rounded-2xl border border-white/[0.10] p-6 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#94A3B8]/60 uppercase tracking-widest font-medium">Role</p>
            <p className="text-sm font-medium text-[#E8EDF2] leading-snug">{about.credential.role}</p>
          </div>

          <div className="h-px bg-white/[0.07]" />

          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#94A3B8]/60 uppercase tracking-widest font-medium">Markets</p>
            <p className="text-sm text-[#E8EDF2]">{about.credential.markets}</p>
          </div>

          <div className="h-px bg-white/[0.07]" />

          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#94A3B8]/60 uppercase tracking-widest font-medium">Focus</p>
            <div className="flex flex-wrap gap-1.5">
              {about.credential.focus.map((f) => (
                <span
                  key={f}
                  className="text-[11px] font-medium text-[#94A3B8] bg-white/[0.04] border border-white/[0.08] rounded-full px-2.5 py-1"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/[0.07]" />

          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#94A3B8]/60 uppercase tracking-widest font-medium">Languages</p>
            {about.credential.languages.map((l) => (
              <div key={l.lang} className="flex items-center justify-between">
                <span className="text-sm text-[#E8EDF2]">{l.lang}</span>
                <span className="text-xs text-[#94A3B8]/60">{l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
