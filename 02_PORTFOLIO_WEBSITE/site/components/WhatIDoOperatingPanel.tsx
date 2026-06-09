"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  ShoppingBag,
  Workflow,
  Repeat,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { whatIDo, type CapabilityPoint } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

const pointIcons: Record<CapabilityPoint["icon"], LucideIcon> = {
  acquisition: Target,
  ecommerce: ShoppingBag,
  erp: Workflow,
  content: Repeat,
  dashboard: BarChart3,
  ai: Sparkles,
};

/* Abstract systems visual — central operating node linked to six satellites.
   Pure SVG, restrained sage, gentle pulse (reduced-motion safe via CSS). */
function SystemsVisual() {
  const C = 150;
  const R = 100;
  const angles = [-90, -30, 30, 90, 150, 210];
  const nodes = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return { x: C + R * Math.cos(rad), y: C + R * Math.sin(rad) };
  });

  return (
    <svg
      viewBox="0 0 300 300"
      role="img"
      aria-label="Abstract diagram of a central operating model connected to growth, e-commerce, ERP, reporting, and AI workflows"
      className="w-full max-w-[250px] h-auto"
    >
      {/* Outer guide ring */}
      <circle
        cx={C}
        cy={C}
        r={128}
        fill="none"
        stroke="#3DBA8C"
        strokeOpacity="0.10"
        strokeDasharray="2 6"
      />

      {/* Connecting lines */}
      {nodes.map((n, i) => (
        <line
          key={`l-${i}`}
          x1={C}
          y1={C}
          x2={n.x}
          y2={n.y}
          stroke="#3DBA8C"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}

      {/* Satellite nodes */}
      {nodes.map((n, i) => (
        <g key={`n-${i}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r="12"
            fill="#3DBA8C"
            fillOpacity="0.06"
            className={i % 2 === 0 ? "sys-pulse" : undefined}
          />
          <circle cx={n.x} cy={n.y} r="4.5" fill="#3DBA8C" fillOpacity="0.55" />
        </g>
      ))}

      {/* Central pulsing ring */}
      <circle
        cx={C}
        cy={C}
        r="14"
        fill="none"
        stroke="#3DBA8C"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        className="sys-pulse-ring"
      />
      {/* Central node */}
      <circle cx={C} cy={C} r="22" fill="#3DBA8C" fillOpacity="0.08" />
      <circle cx={C} cy={C} r="11" fill="#0F1724" stroke="#3DBA8C" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx={C} cy={C} r="3.5" fill="#3DBA8C" />
    </svg>
  );
}

export default function WhatIDoOperatingPanel() {
  const isClient = useIsClient();
  const [mode, setMode] = useState(0);

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: "easeOut", delay },
  });

  return (
    <section
      id="capabilities"
      aria-label="What I do"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium">
            {whatIDo.label}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {whatIDo.heading}
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {whatIDo.intro}
          </motion.p>
        </div>

        {/* Operating panel */}
        <motion.div
          {...reveal(0.16)}
          className="relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden"
        >
          {/* Top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr_0.9fr]">

            {/* Left — operating summary */}
            <div className="md:col-span-2 lg:col-span-1 p-7 lg:p-8 flex flex-col gap-5">
              <h3 className="text-lg font-semibold text-[#E8EDF2] leading-snug">
                {whatIDo.summaryTitle}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {whatIDo.summaryBody}
              </p>

              {/* Mode buttons (visual toggle) */}
              <div className="flex flex-col gap-3 mt-1">
                <div className="inline-flex flex-wrap gap-2" role="group" aria-label="Operating model view">
                  {whatIDo.modes.map((m, i) => {
                    const active = mode === i;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMode(i)}
                        aria-pressed={active}
                        className={[
                          "text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors duration-200",
                          active
                            ? "bg-[#3DBA8C]/[0.12] border-[#3DBA8C]/40 text-[#3DBA8C]"
                            : "bg-white/[0.03] border-white/[0.08] text-[#94A3B8] hover:text-[#E8EDF2] hover:border-white/[0.18]",
                        ].join(" ")}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-[#94A3B8]/70 leading-relaxed">
                  {whatIDo.modes[mode].caption}
                </p>
              </div>
            </div>

            {/* Middle — capability points */}
            <ul className="p-7 lg:p-8 flex flex-col gap-3.5 border-t border-white/[0.07] lg:border-t-0 lg:border-l lg:border-white/[0.08]">
              {whatIDo.points.map((point, i) => {
                const Icon = pointIcons[point.icon];
                return (
                  <motion.li
                    key={point.text}
                    {...reveal(0.2 + i * 0.05)}
                    className="flex items-center gap-3"
                  >
                    <span className="flex-none w-8 h-8 rounded-lg bg-[#3DBA8C]/[0.08] border border-[#3DBA8C]/20 flex items-center justify-center text-[#3DBA8C]">
                      <Icon size={15} strokeWidth={1.9} aria-hidden />
                    </span>
                    <span className="text-sm text-[#E8EDF2] leading-snug">{point.text}</span>
                  </motion.li>
                );
              })}
            </ul>

            {/* Right — abstract systems visual */}
            <div className="p-7 lg:p-8 border-t border-white/[0.07] md:border-l md:border-white/[0.08] lg:border-t-0 flex items-center justify-center">
              <SystemsVisual />
            </div>
          </div>

          {/* Tags */}
          <div className="relative border-t border-white/[0.07] px-7 lg:px-8 py-5 flex flex-wrap items-center gap-2">
            <span className="text-[10.5px] text-[#94A3B8]/50 uppercase tracking-[0.18em] font-medium mr-1">
              Across the model
            </span>
            {whatIDo.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-[#94A3B8]/80 bg-white/[0.03] border border-white/[0.07] rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
