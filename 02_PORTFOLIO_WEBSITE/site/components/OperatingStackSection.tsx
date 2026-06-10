"use client";

import { motion } from "framer-motion";
import {
  operatingStackCategories,
  operatingStackStrip,
  stackCategoryShortLabels,
} from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

interface StripTool {
  name: string;
  categoryLabel: string;
  /** Optional path to an official logo (public/), to be supplied later. */
  logo?: string;
}

/* Flatten categories into a single deduped tool list (a tool keeps the
   category it first appears under, e.g. Canva → Creative). */
function flattenTools(): StripTool[] {
  const seen = new Set<string>();
  const out: StripTool[] = [];
  for (const category of operatingStackCategories) {
    const label = stackCategoryShortLabels[category.id] ?? category.title;
    for (const name of category.tools) {
      if (seen.has(name)) continue;
      seen.add(name);
      out.push({ name, categoryLabel: label });
    }
  }
  return out;
}

function monogram(name: string): string {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const stripTools = flattenTools();

export default function OperatingStackSection() {
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: "easeOut", delay },
  });

  return (
    <section
      id="tools"
      aria-label="Operating stack"
      className="px-6 lg:px-24 pb-20 -mt-6"
    >
      <motion.div
        {...reveal(0)}
        className="max-w-6xl mx-auto relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
      >
        {/* Header row — compact, single line on desktop */}
        <div className="px-5 sm:px-7 pt-5 pb-4 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4">
          <span className="text-[10.5px] text-[#3DBA8C] tracking-[0.22em] uppercase font-medium flex-none">
            {operatingStackStrip.eyebrow}
          </span>
          <h2 className="text-sm font-semibold text-[#E8EDF2] leading-snug flex-none">
            {operatingStackStrip.title}
          </h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed sm:truncate">
            {operatingStackStrip.line}
          </p>
        </div>

        {/* Scrolling chip track with edge fades */}
        <div className="relative border-t border-white/[0.06]">
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-[#0B1220] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-[#0B1220] to-transparent"
          />

          <ul
            aria-label="Tools in the operating stack"
            className="no-scrollbar flex gap-2.5 overflow-x-auto px-5 sm:px-7 py-4"
          >
            {stripTools.map((tool) => (
              <li
                key={tool.name}
                className="flex-none flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-[#3DBA8C]/35 transition-colors duration-200 pl-1.5 pr-3.5 py-1.5"
              >
                {tool.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={tool.logo}
                    alt=""
                    aria-hidden
                    className="w-7 h-7 rounded-lg object-contain"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex-none w-7 h-7 rounded-lg bg-[#3DBA8C]/[0.08] border border-[#3DBA8C]/20 flex items-center justify-center text-[9.5px] font-semibold text-[#3DBA8C] tracking-wide select-none"
                  >
                    {monogram(tool.name)}
                  </span>
                )}
                <span className="flex flex-col leading-none gap-0.5">
                  <span className="text-[12.5px] font-medium text-[#E8EDF2] whitespace-nowrap">
                    {tool.name}
                  </span>
                  <span className="text-[9.5px] text-[#94A3B8]/70 uppercase tracking-[0.12em]">
                    {tool.categoryLabel}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
