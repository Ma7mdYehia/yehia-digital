"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/homepage";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.42, ease: "easeOut", delay },
});

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-screen flex items-center px-6 lg:pl-24 lg:pr-16 pt-20 lg:pt-0"
    >
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

        {/* Left — text content */}
        <div className="flex flex-col gap-6 order-1">

          {/* Eyebrow */}
          <motion.div
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 self-start text-xs font-medium text-[#94A3B8] tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
            Based between Ajman, UAE &amp; Cairo, Egypt
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#E8EDF2] leading-[1.05] tracking-tight"
          >
            {hero.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            {...fadeUp(0.18)}
            className="text-lg sm:text-xl text-[#3DBA8C] font-medium leading-snug max-w-lg"
          >
            {hero.title}
          </motion.p>

          {/* Value statement */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl"
          >
            {hero.valueStatement}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3 mt-1">
            <a
              href={hero.ctas.primary.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3DBA8C] text-[#0B1220] text-sm font-semibold hover:bg-[#35a87d] transition-colors focus-visible:ring-2 focus-visible:ring-[#3DBA8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-sm font-medium text-[#E8EDF2] hover:text-white transition-colors"
            >
              {hero.ctas.secondary.label}
            </a>
          </motion.div>

          {/* Credibility line — quiet supporting footer */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-xs text-[#94A3B8]/60 tracking-wide pt-5 mt-1 border-t border-white/[0.06] max-w-xl leading-relaxed"
          >
            {hero.credibilityLine}
          </motion.p>
        </div>

        {/* Right — executive identity card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="order-2 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
            <div className="glass rounded-3xl border border-white/[0.12] p-7 flex flex-col items-center text-center overflow-hidden">
              {/* Subtle top sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.05] to-transparent" />

              {/* Monogram */}
              <div className="relative w-24 h-24 rounded-full border border-[#3DBA8C]/25 bg-[#3DBA8C]/[0.06] flex items-center justify-center">
                <span className="text-3xl font-semibold tracking-tight text-[#3DBA8C] select-none">
                  MY
                </span>
              </div>

              {/* Name + role */}
              <p className="relative mt-5 text-base font-semibold text-[#E8EDF2]">
                {hero.name}
              </p>
              <p className="relative mt-1 text-xs text-[#94A3B8] leading-relaxed px-2">
                Growth Marketing, E-commerce &amp; AI Transformation
              </p>

              {/* Divider */}
              <div className="relative my-5 h-px w-full bg-white/[0.08]" />

              {/* Role tags */}
              <div className="relative flex flex-wrap justify-center gap-2">
                {["Growth", "E-commerce", "AI-Augmented Operations"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#94A3B8] bg-white/[0.04] border border-white/[0.08] rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status chip */}
              <div className="relative mt-5 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C] animate-none" />
                <span className="text-xs font-medium text-[#3DBA8C]">
                  {hero.statusChip}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
