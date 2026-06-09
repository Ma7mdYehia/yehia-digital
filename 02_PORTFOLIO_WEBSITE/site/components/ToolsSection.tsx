"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { tools } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ToolsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="tools"
      aria-label="Tools behind my work"
      className="py-24 border-t border-white/[0.06]"
    >
      {/* Section header */}
      <div className="px-6 lg:pl-24 lg:pr-16 max-w-6xl mx-auto flex flex-col gap-3 mb-10">
        <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium">
          Operating stack
        </motion.p>
        <motion.h2
          {...reveal(0.06)}
          className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
        >
          Tools Behind My Work
        </motion.h2>
        <motion.p {...reveal(0.12)} className="text-base text-[#94A3B8] leading-relaxed max-w-xl">
          The platforms I use to connect strategy, marketing execution, e-commerce, reporting,
          content systems, and AI-assisted workflows.
        </motion.p>
      </div>

      {/* Carousel — full-bleed so edge fades look natural */}
      <motion.div
        initial={isClient ? { opacity: 0 } : false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: 0.18 }}
        className="relative"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 lg:w-24 z-10 bg-gradient-to-r from-[#0B1220] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 lg:w-24 z-10 bg-gradient-to-l from-[#0B1220] to-transparent" />

        <div
          ref={trackRef}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-6 lg:pl-24 lg:pr-24"
          style={{ scrollbarWidth: "none" }}
          role="list"
          aria-label="Tool cards"
        >
          {tools.map((tool) => (
            <div
              key={tool.name}
              role="listitem"
              className="flex-none snap-start w-[220px] sm:w-[240px] glass rounded-2xl border border-white/[0.10] p-5 flex flex-col gap-4 hover:border-white/[0.18] transition-colors duration-200"
            >
              {/* Initial badge */}
              <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.10] flex items-center justify-center">
                <span className="text-[11px] font-semibold text-[#94A3B8] tracking-wide select-none">
                  {initials(tool.name)}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-semibold text-[#E8EDF2] leading-snug">{tool.name}</p>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{tool.use}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <p className="px-6 lg:pl-24 mt-3 text-xs text-[#94A3B8]/40" aria-hidden>
        Scroll to explore →
      </p>
    </section>
  );
}
