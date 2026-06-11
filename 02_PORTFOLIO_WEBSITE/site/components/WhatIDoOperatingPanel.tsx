"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whatIDo } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";
import { useMouseGlow } from "@/lib/useMouseGlow";

/* ---------------------------------------------------------------------------
   Brain / AI-operations visual — pure SVG, decorative, no external deps.
   Dark outline brain with subtle sage circuit lines and a soft inner glow.
--------------------------------------------------------------------------- */
function BrainVisual() {
  return (
    <svg
      viewBox="0 0 320 320"
      aria-hidden
      focusable="false"
      className="w-full max-w-[280px] h-auto"
    >
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3DBA8C" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#3DBA8C" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#3DBA8C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DBA8C" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#3DBA8C" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Soft sage glow behind the brain */}
      <circle cx="160" cy="160" r="120" fill="url(#brainGlow)" />

      {/* Outer guide ring — hairline, dashed */}
      <circle
        cx="160"
        cy="160"
        r="138"
        fill="none"
        stroke="#3DBA8C"
        strokeOpacity="0.10"
        strokeDasharray="2 6"
      />

      {/* Brain — two stylised hemispheres built from smooth curves */}
      <g
        fill="none"
        stroke="url(#brainStroke)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left hemisphere outline */}
        <path d="M158 78
                 C 120 78, 92 102, 92 134
                 C 76 142, 70 162, 82 178
                 C 70 192, 80 214, 100 218
                 C 102 240, 126 252, 150 244
                 C 154 252, 158 256, 158 256
                 Z" />
        {/* Right hemisphere outline */}
        <path d="M162 78
                 C 200 78, 228 102, 228 134
                 C 244 142, 250 162, 238 178
                 C 250 192, 240 214, 220 218
                 C 218 240, 194 252, 170 244
                 C 166 252, 162 256, 162 256
                 Z" />

        {/* Central sulcus */}
        <path d="M160 80 L160 256" strokeOpacity="0.45" />

        {/* Inner folds — left */}
        <path d="M108 124 C 124 130, 134 142, 132 162" strokeOpacity="0.55" />
        <path d="M96 168 C 116 168, 130 180, 132 198" strokeOpacity="0.55" />
        <path d="M118 214 C 132 208, 144 212, 150 224" strokeOpacity="0.55" />

        {/* Inner folds — right */}
        <path d="M212 124 C 196 130, 186 142, 188 162" strokeOpacity="0.55" />
        <path d="M224 168 C 204 168, 190 180, 188 198" strokeOpacity="0.55" />
        <path d="M202 214 C 188 208, 176 212, 170 224" strokeOpacity="0.55" />
      </g>

      {/* Circuit lines radiating outward — subtle, dashed */}
      <g
        stroke="#3DBA8C"
        strokeOpacity="0.28"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3 5"
      >
        <path d="M92 134 L48 110" />
        <path d="M228 134 L272 110" />
        <path d="M82 178 L36 178" />
        <path d="M238 178 L284 178" />
        <path d="M100 218 L60 246" />
        <path d="M220 218 L260 246" />
        <path d="M160 78 L160 38" />
        <path d="M160 256 L160 286" />
      </g>

      {/* Circuit terminal nodes */}
      <g fill="#3DBA8C">
        <circle cx="48" cy="110" r="2.5" fillOpacity="0.7" />
        <circle cx="272" cy="110" r="2.5" fillOpacity="0.7" />
        <circle cx="36" cy="178" r="2.5" fillOpacity="0.7" />
        <circle cx="284" cy="178" r="2.5" fillOpacity="0.7" />
        <circle cx="60" cy="246" r="2.5" fillOpacity="0.7" />
        <circle cx="260" cy="246" r="2.5" fillOpacity="0.7" />
        <circle cx="160" cy="38" r="2.5" fillOpacity="0.7" />
        <circle cx="160" cy="286" r="2.5" fillOpacity="0.7" />
      </g>

      {/* Central core — quiet AI focal point */}
      <circle cx="160" cy="166" r="14" fill="#0F1724" stroke="#3DBA8C" strokeOpacity="0.7" strokeWidth="1.4" />
      <circle cx="160" cy="166" r="4" fill="#3DBA8C" fillOpacity="0.9" />
    </svg>
  );
}

export default function WhatIDoOperatingPanel() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;
  const glowRef = useMouseGlow<HTMLElement>();
  const [modeIndex, setModeIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const reveal = (delay = 0) =>
    animate
      ? ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, ease: "easeOut", delay },
        } as const)
      : ({} as const);

  const activeMode = whatIDo.modes[modeIndex];

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = whatIDo.modes.length - 1;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setModeIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      ref={glowRef}
      id="capabilities"
      aria-label="What I do"
      className="px-6 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium"
          >
            {whatIDo.label}
          </motion.p>
          <motion.p
            {...reveal(0.08)}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed"
          >
            {whatIDo.intro.map((seg, i) =>
              seg.accent ? (
                <span key={i} className="text-[#E8EDF2] font-medium">
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </motion.p>
        </div>

        {/* Operating panel */}
        <motion.div
          data-glow
          {...reveal(0.16)}
          className="mouse-glow-panel relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent"
          />

          {/* Panel header — badge + mode tabs */}
          <div className="relative px-6 sm:px-8 pt-6 sm:pt-7 pb-5 flex flex-col gap-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C] shadow-[0_0_10px_rgba(61,186,140,0.6)]" />
              <span className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium">
                {whatIDo.badge}
              </span>
            </div>

            <div
              role="tablist"
              aria-label="Operating modes"
              className="flex flex-wrap gap-2"
            >
              {whatIDo.modes.map((m, i) => {
                const active = modeIndex === i;
                return (
                  <button
                    key={m.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`whatido-tab-${m.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`whatido-panel-${m.id}`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setModeIndex(i)}
                    onKeyDown={(e) => onTabKeyDown(e, i)}
                    className={[
                      "text-sm font-medium rounded-full px-4 py-2 border transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3DBA8C]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
                      active
                        ? "bg-[#3DBA8C]/[0.14] border-[#3DBA8C]/50 text-[#3DBA8C]"
                        : "bg-white/[0.03] border-white/[0.08] text-[#94A3B8] hover:text-[#E8EDF2] hover:border-white/[0.18]",
                    ].join(" ")}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active mode panel */}
          <div
            key={activeMode.id}
            role="tabpanel"
            id={`whatido-panel-${activeMode.id}`}
            aria-labelledby={`whatido-tab-${activeMode.id}`}
            className="relative"
          >
            {/* Top: title + description (left) + brain visual (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 lg:p-9 flex flex-col gap-4">
                <motion.h3
                  key={`${activeMode.id}-title`}
                  initial={animate ? { opacity: 0, y: 8 } : (false as const)}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-2xl sm:text-3xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
                >
                  {activeMode.cardTitle}
                </motion.h3>
                <motion.p
                  key={`${activeMode.id}-desc`}
                  initial={animate ? { opacity: 0, y: 8 } : (false as const)}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                  className="text-base text-[#94A3B8] leading-relaxed"
                >
                  {activeMode.cardDescription}
                </motion.p>
              </div>

              <div className="p-7 lg:p-9 border-t border-white/[0.07] lg:border-t-0 lg:border-l lg:border-white/[0.08] flex items-center justify-center">
                <BrainVisual />
              </div>
            </div>

            {/* Capabilities — 5 items, two-column on lg */}
            <div className="border-t border-white/[0.07] px-7 lg:px-9 py-7 lg:py-8">
              <p className="text-[11px] text-[#3DBA8C] tracking-[0.18em] uppercase font-medium mb-5">
                Capabilities
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                {activeMode.capabilities.map((cap, i) => (
                  <motion.li
                    key={`${activeMode.id}-cap-${i}`}
                    initial={animate ? { opacity: 0, y: 8 } : (false as const)}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.06 + i * 0.04 }}
                    className="flex gap-3.5"
                  >
                    <span
                      aria-hidden
                      className="flex-none w-7 h-7 rounded-lg bg-[#3DBA8C]/[0.10] border border-[#3DBA8C]/25 text-[#3DBA8C] text-xs font-semibold flex items-center justify-center mt-0.5"
                    >
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="text-sm font-semibold text-[#E8EDF2] leading-snug">
                        {cap.title}
                      </p>
                      <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                        {cap.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Compact tools row */}
            <div className="border-t border-white/[0.07] px-7 lg:px-9 py-5 flex flex-wrap items-center gap-2">
              <span className="text-[10.5px] text-[#94A3B8]/55 uppercase tracking-[0.18em] font-medium mr-1">
                Tools in this mode
              </span>
              {activeMode.tools.map((tool) => (
                <motion.span
                  key={`${activeMode.id}-${tool}`}
                  initial={animate ? { opacity: 0, y: 4 } : (false as const)}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-[11px] text-[#94A3B8] bg-white/[0.03] border border-white/[0.08] rounded-full px-2.5 py-1"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
