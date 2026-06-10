"use client";

import { motion } from "framer-motion";
import { tools, toolGroups, toolsMeta } from "@/content/homepage";
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
      aria-label="Tools behind my work"
      className="px-6 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium">
            {toolsMeta.label}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {toolsMeta.heading}
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {toolsMeta.intro}
          </motion.p>
        </div>

        {/* Operating-stack panel */}
        <motion.div
          {...reveal(0.16)}
          className="relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">

            {/* Left — operating-stack explanation */}
            <div className="p-7 lg:p-8 flex flex-col gap-4 lg:border-r lg:border-white/[0.08]">
              <h3 className="text-lg font-semibold text-[#E8EDF2] leading-snug max-w-xs">
                {toolsMeta.panelTitle}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {toolsMeta.panelBody}
              </p>
              {/* Quiet legend of the layers */}
              <ul className="flex flex-col gap-2 mt-2">
                {toolGroups.map((g) => (
                  <li key={g.id} className="flex items-center gap-2.5">
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]/70" />
                    <span className="text-[13px] text-[#94A3B8]">{g.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — tool groups */}
            <div className="p-7 lg:p-8 flex flex-col gap-7 border-t border-white/[0.07] lg:border-t-0">
              {toolGroups.map((group, gi) => {
                const groupTools = tools.filter((t) => t.category === group.id);
                if (groupTools.length === 0) return null;
                return (
                  <motion.div key={group.id} {...reveal(0.2 + gi * 0.05)} className="flex flex-col gap-3">
                    <p className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium">
                      {group.label}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {groupTools.map((tool) => (
                        <div
                          key={tool.name}
                          className="rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.16] transition-colors duration-200 p-3.5 flex items-start gap-3"
                        >
                          <span
                            aria-hidden
                            className="flex-none w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-[10px] font-semibold text-[#94A3B8] tracking-wide select-none"
                          >
                            {initials(tool.name)}
                          </span>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <p className="text-sm font-semibold text-[#E8EDF2] leading-snug">{tool.name}</p>
                            <p className="text-xs text-[#94A3B8] leading-relaxed">{tool.use}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
