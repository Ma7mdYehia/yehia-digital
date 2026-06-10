"use client";

import { motion } from "framer-motion";
import {
  operatingStackMeta,
  operatingStackCategories,
  type ToolStackCategory,
  type ToolStackLane,
} from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

/* Lane accent treatments — sage for marketing, soft neutral-sage for systems,
   slightly brighter sage for the shared AI bridge layer. Restrained, no neon. */
const laneStyles: Record<
  ToolStackLane,
  { dot: string; chip: string; cardBorder: string }
> = {
  marketing: {
    dot: "bg-[#3DBA8C]/80",
    chip: "text-[#3DBA8C] border-[#3DBA8C]/30 bg-[#3DBA8C]/[0.07]",
    cardBorder: "border-white/[0.07] hover:border-[#3DBA8C]/30",
  },
  shared: {
    dot: "bg-[#3DBA8C] shadow-[0_0_8px_rgba(61,186,140,0.5)]",
    chip: "text-[#3DBA8C] border-[#3DBA8C]/40 bg-[#3DBA8C]/[0.10]",
    cardBorder: "border-[#3DBA8C]/25 hover:border-[#3DBA8C]/45",
  },
  systems: {
    dot: "bg-[#94A3B8]/80",
    chip: "text-[#A8B8C8] border-white/[0.14] bg-white/[0.04]",
    cardBorder: "border-white/[0.07] hover:border-white/[0.20]",
  },
};

function CategoryCard({
  category,
  reveal,
  delay,
}: {
  category: ToolStackCategory;
  reveal: (delay?: number) => object;
  delay: number;
}) {
  const style = laneStyles[category.lane];
  return (
    <motion.article
      {...reveal(delay)}
      className={[
        "rounded-2xl border bg-white/[0.02] transition-colors duration-200 p-5 sm:p-6 flex flex-col gap-3.5",
        style.cardBorder,
      ].join(" ")}
    >
      <div className="flex flex-col gap-2">
        <span
          className={[
            "self-start text-[10px] font-medium tracking-[0.14em] uppercase rounded-full border px-2.5 py-1",
            style.chip,
          ].join(" ")}
        >
          {category.laneLabel}
        </span>
        <h3 className="text-base sm:text-lg font-semibold text-[#E8EDF2] leading-snug">
          {category.title}
        </h3>
        <p className="text-[13px] text-[#94A3B8] leading-relaxed">
          {category.purpose}
        </p>
      </div>
      <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`${category.title} tools`}>
        {category.tools.map((tool) => (
          <li
            key={tool}
            className="text-[11.5px] text-[#C2CDD9] bg-white/[0.03] border border-white/[0.09] rounded-full px-2.5 py-1"
          >
            {tool}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function OperatingStackSection() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: "easeOut", delay },
  });

  const marketingCards = operatingStackCategories.filter((c) => c.lane === "marketing");
  const sharedCards = operatingStackCategories.filter((c) => c.lane === "shared");
  const systemsCards = operatingStackCategories.filter((c) => c.lane === "systems");

  return (
    <section
      id="tools"
      aria-label="Operating stack"
      className="px-6 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium"
          >
            {operatingStackMeta.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {operatingStackMeta.heading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed"
          >
            {operatingStackMeta.intro}
          </motion.p>
          <motion.p
            {...reveal(0.16)}
            className="text-sm text-[#94A3B8]/70 leading-relaxed"
          >
            {operatingStackMeta.note}
          </motion.p>
        </div>

        {/* Stack panel */}
        <motion.div
          {...reveal(0.2)}
          className="relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden"
        >
          {/* Top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          {/* Two-mode legend */}
          <div className="relative px-6 sm:px-8 pt-6 sm:pt-7 pb-5 border-b border-white/[0.06] flex flex-wrap items-center gap-x-6 gap-y-2.5">
            {operatingStackMeta.lanes.map((lane) => (
              <span key={lane.id} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={["w-1.5 h-1.5 rounded-full", laneStyles[lane.id].dot].join(" ")}
                />
                <span className="text-[11px] text-[#94A3B8] tracking-[0.14em] uppercase font-medium">
                  {lane.label}
                </span>
              </span>
            ))}
          </div>

          <div className="relative p-6 sm:p-8 flex flex-col gap-8">

            {/* Marketing lane */}
            <div className="flex flex-col gap-4">
              <motion.p
                {...reveal(0.24)}
                className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium"
              >
                Marketing &amp; Digital Growth
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {marketingCards.map((category, i) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    reveal={reveal}
                    delay={0.26 + i * 0.05}
                  />
                ))}
              </div>
            </div>

            {/* Shared AI bridge layer */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span aria-hidden className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent via-[#3DBA8C]/25 to-[#3DBA8C]/25" />
                <motion.p
                  {...reveal(0.3)}
                  className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium"
                >
                  Shared AI Layer
                </motion.p>
                <span aria-hidden className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent via-[#3DBA8C]/25 to-[#3DBA8C]/25" />
              </div>
              {sharedCards.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  reveal={reveal}
                  delay={0.34}
                />
              ))}
            </div>

            {/* Systems lane */}
            <div className="flex flex-col gap-4">
              <motion.p
                {...reveal(0.38)}
                className="text-[11px] text-[#A8B8C8] tracking-[0.18em] uppercase font-medium"
              >
                Business Systems &amp; Executive Ops
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {systemsCards.map((category, i) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    reveal={reveal}
                    delay={0.4 + i * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
