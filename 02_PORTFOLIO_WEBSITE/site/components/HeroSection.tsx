"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";
import InteractiveHeroOrb from "@/components/InteractiveHeroOrb";

export default function HeroSection() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  // SSR-safe reveal: nothing is hidden on first paint.
  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: "easeOut", delay },
        }
      : {};

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 lg:px-24 py-24"
    >
      {/* Interactive abstract background */}
      <InteractiveHeroOrb />

      {/* Handwritten side note — desktop, offset left */}
      <motion.p
        {...reveal(0.5)}
        aria-hidden
        className="hidden lg:block absolute left-[5%] xl:left-[7%] top-[14%] font-hand text-[#3DBA8C]/85 text-2xl xl:text-3xl leading-tight max-w-[190px] select-none z-10"
      >
        {/* rotate on inner span so it isn't overridden by Framer's transform */}
        <span className="inline-block -rotate-6">
          I build growth systems,
          <br />
          not just campaigns.
        </span>
      </motion.p>

      {/* Centered hero content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-5xl">

        {/* Name — MOHAMED · portrait · YEHIA (portrait beside the name, not inside a letter) */}
        <motion.h1
          {...reveal(0.08)}
          aria-label={hero.name}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-display text-[#E8EDF2] leading-[0.92] tracking-[0.01em] text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
        >
          <span aria-hidden>Mohamed</span>
          <span aria-hidden className="relative inline-flex shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mohamed-yehia-hero-o.png"
              alt=""
              width={220}
              height={220}
              loading="eager"
              decoding="async"
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-full object-cover object-center bg-[#0F1724] ring-1 ring-[#3DBA8C]/40 shadow-[0_0_34px_rgba(61,186,140,0.28)]"
            />
          </span>
          <span aria-hidden>Yehia</span>
        </motion.h1>

        {/* Title — supporting line directly under the name */}
        <motion.p
          {...reveal(0.16)}
          className="text-sm sm:text-base lg:text-lg font-medium text-[#3DBA8C] tracking-wide max-w-xl"
        >
          {hero.title}
        </motion.p>

        {/* CTAs */}
        <motion.div {...reveal(0.24)} className="flex flex-col sm:flex-row gap-3 mt-3">
          <a
            href={hero.ctas.primary.href}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#3DBA8C] text-[#0B1220] text-sm font-semibold hover:bg-[#35a87d] transition-colors focus-visible:ring-2 focus-visible:ring-[#3DBA8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            {hero.ctas.primary.label}
          </a>
          <a
            href={hero.ctas.secondary.href}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl glass glass-hover text-sm font-medium text-[#E8EDF2] hover:text-white transition-colors"
          >
            {hero.ctas.secondary.label}
          </a>
        </motion.div>

        {/* Handwritten note — mobile inline (offset hidden on lg) */}
        <motion.p
          {...reveal(0.3)}
          aria-hidden
          className="lg:hidden font-hand text-[#3DBA8C]/85 text-2xl leading-tight mt-1 select-none"
        >
          I build growth systems, not just campaigns.
        </motion.p>
      </div>

      {/* Location — calm geographic signature, lower-centre of the hero.
          Flex wrapper centres it (avoids Framer overriding -translate-x-1/2). */}
      <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-10 flex justify-center px-6">
        <motion.div
          {...reveal(0.4)}
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#94A3B8]/80"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
          {hero.location}
        </motion.div>
      </div>
    </section>
  );
}
