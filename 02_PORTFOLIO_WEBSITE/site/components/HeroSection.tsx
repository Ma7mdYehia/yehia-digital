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
        <div className="flex flex-col gap-7 order-2 lg:order-1">

          {/* Credibility tags */}
          <motion.p
            {...fadeUp(0.05)}
            className="text-xs text-[#94A3B8] tracking-wider font-medium"
          >
            {hero.credibilityLine}
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
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
          <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3">
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
        </div>

        {/* Right — hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Placeholder headshot frame */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl glass border border-white/[0.12] flex items-center justify-center overflow-hidden">
              {/* Frosted placeholder interior */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
              <div className="relative flex flex-col items-center gap-3 text-[#94A3B8]">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center">
                  <span className="text-2xl font-semibold text-[#3DBA8C]/60 select-none">MY</span>
                </div>
                <span className="text-xs text-[#94A3B8]/60">Photo coming soon</span>
              </div>
            </div>

            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="glass px-3 py-1.5 rounded-full text-xs font-medium text-[#3DBA8C] border border-[#3DBA8C]/25">
                {hero.statusChip}
              </span>
            </motion.div>

            {/* Profile summary card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.45 }}
              className="absolute -top-4 -right-4 lg:-right-8"
            >
              <div className="glass px-3 py-2 rounded-xl border border-white/[0.10] max-w-[180px]">
                <p className="text-[10px] text-[#94A3B8] leading-relaxed">{hero.profileSummary}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
