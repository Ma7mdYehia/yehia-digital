"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whoIAm } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

const publicResultCards = [
  { value: "Growth", label: "Food industry growth systems" },
  { value: "+20%", label: "YoY enrollment growth across education ventures" },
  { value: "Multi-client", label: "Healthcare digital growth projects" },
  { value: "+250M", label: "Organic reach across platforms" },
  { value: "+5M", label: "Followers across platforms" },
];

export default function WhoIAmSection() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, ease: "easeOut", delay },
        }
      : {};

  return (
    <section
      id="about"
      aria-label="Who I am"
      className="px-6 lg:px-24 py-24 lg:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16 lg:gap-20">

        {/* Intro: editorial heading + profile copy */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — display heading */}
          <div className="flex flex-col gap-5">
            <motion.p
              {...reveal(0)}
              className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium"
            >
              {whoIAm.label}
            </motion.p>

            <motion.h2
              {...reveal(0.06)}
              className="font-display text-[#E8EDF2] leading-[0.9] tracking-[0.01em] text-6xl sm:text-7xl lg:text-[5.5rem]"
            >
              {whoIAm.headingLines.map((line, i) => (
                <span
                  key={line}
                  className={[
                    "block",
                    i === whoIAm.accentLineIndex ? "text-[#3DBA8C]" : "",
                  ].join(" ")}
                >
                  {line}
                </span>
              ))}
            </motion.h2>
          </div>

          {/* Right — profile copy */}
          <div className="flex flex-col gap-5 lg:pt-3 max-w-xl">
            {whoIAm.introParagraphs.map((segments, i) => (
              <motion.p
                key={i}
                {...reveal(0.12 + i * 0.07)}
                className="text-base sm:text-lg text-[#94A3B8] leading-relaxed"
              >
                {segments.map((seg, j) =>
                  seg.accent ? (
                    <span key={j} className="text-[#3DBA8C] font-medium">
                      {seg.text}
                    </span>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  )
                )}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Selected results — public-safe metrics, no direct company revenue amounts */}
        <div className="flex flex-col gap-7">
          <motion.p
            {...reveal(0.05)}
            className="text-xs text-[#94A3B8]/60 tracking-[0.2em] uppercase font-medium"
          >
            {whoIAm.resultsLabel}
          </motion.p>

          <div className="relative group/cards">
            {/* Soft sage glow — brightens slightly when a card is hovered */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 group-hover/cards:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(55% 55% at 50% 40%, rgba(61,186,140,0.10), transparent 70%)",
              }}
            />

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {publicResultCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  {...reveal(0.1 + i * 0.06)}
                  whileHover={animate ? { y: -3 } : undefined}
                  className={[
                    "rounded-2xl border border-white/[0.08] bg-[#0F1724]",
                    "hover:border-[#3DBA8C]/35 hover:shadow-[0_0_26px_-6px_rgba(61,186,140,0.22)]",
                    "transition-[border-color,box-shadow] duration-300",
                    "px-6 py-7 flex flex-col gap-3",
                    // Balanced 3-over-2 layout on desktop (centred second row)
                    "lg:col-span-2",
                    i === 3 ? "lg:col-start-2" : "",
                  ].join(" ")}
                >
                  {/* Restrained sage accent rule */}
                  <span aria-hidden className="block w-6 h-px bg-[#3DBA8C]/60" />

                  <span className="font-display text-4xl sm:text-5xl text-[#E8EDF2] leading-none tracking-[0.01em] tabular-nums">
                    {card.value}
                  </span>
                  <p className="text-sm text-[#94A3B8] leading-snug">{card.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
