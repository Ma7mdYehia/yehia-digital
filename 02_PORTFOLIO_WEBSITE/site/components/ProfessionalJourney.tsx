"use client";

import { motion } from "framer-motion";
import {
  journeyEyebrow,
  journeyHeading,
  journeyIntro,
  journeyItems,
  journeyNote,
  type JourneyItem,
} from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

function CurrentChip() {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#E0A458]/30 bg-[#E0A458]/[0.08]"
      aria-label="Current role"
    >
      <span className="w-1 h-1 rounded-full bg-[#E0A458]" />
      <span className="text-[10px] font-medium text-[#E0A458] tracking-wide uppercase">
        Current
      </span>
    </span>
  );
}

function TimelineNode({ item, isClient, delay }: { item: JourneyItem; isClient: boolean; delay: number }) {
  const dotInner = item.current ? "bg-[#E0A458]" : "bg-[#3DBA8C]";
  const dotRing = item.current ? "border-[#E0A458]/50" : "border-[#3DBA8C]/40";

  return (
    <motion.li
      initial={isClient ? { opacity: 0, y: 14 } : (false as const)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className="relative pl-12 sm:pl-14"
    >
      {/* Dot — sits centred on the rail */}
      <span
        aria-hidden
        className={[
          "absolute left-2 sm:left-[14px] top-5 w-3.5 h-3.5 rounded-full",
          "bg-[#0F1724] border-2",
          dotRing,
          "flex items-center justify-center",
        ].join(" ")}
      >
        <span className={["block w-1.5 h-1.5 rounded-full", dotInner].join(" ")} />
      </span>

      <article className="glass rounded-2xl border border-white/[0.10] hover:border-white/[0.16] transition-colors duration-200 p-5 sm:p-6 flex flex-col gap-2.5">
        {/* Year + current chip */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[#94A3B8]/80">
            {item.years}
          </span>
          {item.current && <CurrentChip />}
        </div>

        {/* Role + company */}
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base sm:text-[17px] font-semibold text-[#E8EDF2] leading-snug tracking-tight">
            {item.role}
          </h3>
          <p className="text-sm text-[#3DBA8C] font-medium">
            {item.company}
            {item.market && (
              <span className="text-[#94A3B8]/60 font-normal"> · {item.market}</span>
            )}
          </p>
        </div>

        {/* Achievement */}
        <p className="text-sm text-[#94A3B8] leading-relaxed">{item.achievement}</p>

        {/* Group context footer — nested current roles */}
        {item.underGroup && (
          <p className="text-[11px] text-[#94A3B8]/50 pt-3 mt-1 border-t border-white/[0.06]">
            Operates under{" "}
            <span className="text-[#94A3B8]/80 font-medium">{item.underGroup}</span>
          </p>
        )}
      </article>
    </motion.li>
  );
}

export default function ProfessionalJourney() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="experience"
      aria-label="Professional journey"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium">
            {journeyEyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {journeyHeading}
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base text-[#94A3B8] leading-relaxed">
            {journeyIntro}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical rail — runs from first dot to last dot */}
          <div
            aria-hidden
            className="absolute left-[14px] sm:left-5 top-3 bottom-3 w-px bg-gradient-to-b from-white/[0.04] via-white/[0.10] to-white/[0.04]"
          />

          <ol className="flex flex-col gap-6 sm:gap-7">
            {journeyItems.map((item, i) => (
              <TimelineNode key={item.id} item={item} isClient={isClient} delay={0.05 + i * 0.05} />
            ))}
          </ol>
        </div>

        {/* Footnote about overlapping current Al-Shehail roles */}
        <motion.p
          {...reveal(0.5)}
          className="text-xs text-[#94A3B8]/50 italic leading-relaxed max-w-2xl"
        >
          {journeyNote}
        </motion.p>
      </div>
    </section>
  );
}
