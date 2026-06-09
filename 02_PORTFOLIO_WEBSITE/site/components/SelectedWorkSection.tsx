"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  workFilters,
  workItems,
  workIntro,
  type WorkCategory,
  type WorkItem,
  type WorkVisual,
} from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

/* -------------------------------------------------------------------------- */
/*  Abstract sector visuals — pure SVG, no photos, no logos, no screenshots    */
/* -------------------------------------------------------------------------- */

function BakeryVisual() {
  // Warm honey wash + soft concentric grain arcs (HÄLSA, FMCG)
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="bk-glow" cx="20%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#E0A458" stopOpacity="0.32" />
          <stop offset="60%" stopColor="#0F1724" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="#0F1724" />
      <rect width="400" height="240" fill="url(#bk-glow)" />
      {[60, 96, 132, 168, 204].map((r, i) => (
        <circle
          key={r}
          cx="80"
          cy="240"
          r={r}
          fill="none"
          stroke="#E0A458"
          strokeOpacity={0.10 - i * 0.012}
          strokeWidth="1"
        />
      ))}
      {/* Grain dots */}
      {[
        [260, 70], [290, 92], [320, 78], [340, 110], [300, 130],
        [270, 150], [330, 145], [350, 165],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#E0A458" fillOpacity="0.35" />
      ))}
    </svg>
  );
}

function MachineryVisual() {
  // Industrial blueprint grid + machined geometric forms (El Shohail)
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <pattern id="mc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3DBA8C" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="#0F1724" />
      <rect width="400" height="240" fill="url(#mc-grid)" />
      {/* Concentric industrial circles */}
      <g transform="translate(280 120)" stroke="#3DBA8C" fill="none">
        <circle r="60" strokeOpacity="0.18" />
        <circle r="40" strokeOpacity="0.28" />
        <circle r="20" strokeOpacity="0.45" />
        <line x1="-72" y1="0" x2="72" y2="0" strokeOpacity="0.15" />
        <line x1="0" y1="-72" x2="0" y2="72" strokeOpacity="0.15" />
      </g>
      {/* Blueprint bar */}
      <rect x="40" y="180" width="120" height="2" fill="#3DBA8C" fillOpacity="0.4" />
      <rect x="40" y="190" width="80" height="1" fill="#3DBA8C" fillOpacity="0.25" />
      <rect x="40" y="196" width="40" height="1" fill="#3DBA8C" fillOpacity="0.18" />
    </svg>
  );
}

function ManufacturingVisual() {
  // Stacked production lines / layered bars (Al Shohail Food Industries)
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="mf-wash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DBA8C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0F1724" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="#0F1724" />
      <rect width="400" height="240" fill="url(#mf-wash)" />
      {/* Production lines */}
      {[
        { y: 70, w: 280, o: 0.22 },
        { y: 100, w: 320, o: 0.30 },
        { y: 130, w: 240, o: 0.20 },
        { y: 160, w: 360, o: 0.16 },
        { y: 190, w: 200, o: 0.12 },
      ].map((line, i) => (
        <g key={i}>
          <rect x="40" y={line.y} width={line.w} height="2" rx="1" fill="#3DBA8C" fillOpacity={line.o} />
          <circle cx={40 + line.w} cy={line.y + 1} r="3" fill="#3DBA8C" fillOpacity={line.o + 0.1} />
        </g>
      ))}
    </svg>
  );
}

function EducationVisual() {
  // Network of nodes & connecting lines — community/knowledge graph (IDEAEG)
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="ed-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3DBA8C" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#0F1724" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="#0F1724" />
      <rect width="400" height="240" fill="url(#ed-glow)" />
      {(() => {
        const nodes: { x: number; y: number; r: number }[] = [
          { x: 80, y: 70, r: 5 },
          { x: 200, y: 60, r: 4 },
          { x: 320, y: 80, r: 6 },
          { x: 130, y: 130, r: 4 },
          { x: 260, y: 140, r: 5 },
          { x: 200, y: 180, r: 7 },
          { x: 60, y: 170, r: 3 },
          { x: 340, y: 170, r: 4 },
        ];
        const edges: [number, number][] = [
          [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4],
          [3, 5], [4, 5], [3, 6], [4, 7], [5, 6], [5, 7],
        ];
        return (
          <>
            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].x} y1={nodes[a].y}
                x2={nodes[b].x} y2={nodes[b].y}
                stroke="#3DBA8C" strokeOpacity="0.18" strokeWidth="1"
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={n.r + 4} fill="#3DBA8C" fillOpacity="0.08" />
                <circle cx={n.x} cy={n.y} r={n.r} fill="#3DBA8C" fillOpacity="0.55" />
              </g>
            ))}
          </>
        );
      })()}
    </svg>
  );
}

function AgencyVisual() {
  // Flowing campaign waves with amber accent (Pointer)
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="ag-wash" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0F1724" />
          <stop offset="100%" stopColor="#1a2236" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#ag-wash)" />
      {[
        { d: "M 0 140 Q 100 90 200 140 T 400 140", c: "#E0A458", o: 0.30, w: 1.2 },
        { d: "M 0 160 Q 100 110 200 160 T 400 160", c: "#E0A458", o: 0.18, w: 1 },
        { d: "M 0 180 Q 100 130 200 180 T 400 180", c: "#3DBA8C", o: 0.22, w: 1 },
        { d: "M 0 120 Q 100 70 200 120 T 400 120", c: "#94A3B8", o: 0.08, w: 1 },
      ].map((wave, i) => (
        <path key={i} d={wave.d} fill="none" stroke={wave.c} strokeOpacity={wave.o} strokeWidth={wave.w} />
      ))}
    </svg>
  );
}

function ExportVisual() {
  // Global trade arcs — orbital lines suggesting export routes (CSC)
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <rect width="400" height="240" fill="#0F1724" />
      <g transform="translate(200 240)" fill="none" stroke="#3DBA8C">
        <ellipse rx="170" ry="170" strokeOpacity="0.10" />
        <ellipse rx="140" ry="140" strokeOpacity="0.14" />
        <ellipse rx="110" ry="110" strokeOpacity="0.20" />
        <ellipse rx="80" ry="80" strokeOpacity="0.28" />
      </g>
      {/* Trade points */}
      {[
        { x: 90, y: 130, label: "EGY" },
        { x: 220, y: 100, label: "KSA" },
        { x: 320, y: 130, label: "CHN" },
      ].map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="6" fill="#3DBA8C" fillOpacity="0.10" />
          <circle cx={p.x} cy={p.y} r="2.5" fill="#3DBA8C" fillOpacity="0.7" />
        </g>
      ))}
      {/* Trade arcs between points */}
      <path d="M 90 130 Q 155 60 220 100" fill="none" stroke="#3DBA8C" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M 220 100 Q 270 50 320 130" fill="none" stroke="#3DBA8C" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

function HealthcareVisual() {
  // Soft sage radial + restrained ECG pulse + faint clinic-grid dots.
  // No red cross, no hospital cliché.
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="hc-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3DBA8C" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#0F1724" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="#0F1724" />
      <rect width="400" height="240" fill="url(#hc-glow)" />

      {/* Faint clinic-grid dots */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={30 + col * 26}
            cy={30 + row * 26}
            r="1"
            fill="#3DBA8C"
            fillOpacity="0.10"
          />
        ))
      )}

      {/* ECG pulse line — calm, single trace */}
      <path
        d="M 0 130 L 80 130 L 100 130 L 110 110 L 122 150 L 134 90 L 146 130 L 165 130 L 200 130 L 215 130 L 226 110 L 238 152 L 250 110 L 262 130 L 400 130"
        fill="none"
        stroke="#3DBA8C"
        strokeOpacity="0.55"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Soft pulse "halo" trailing the trace */}
      <path
        d="M 0 130 L 400 130"
        fill="none"
        stroke="#3DBA8C"
        strokeOpacity="0.10"
        strokeWidth="6"
      />
    </svg>
  );
}

function HealthcarePlaceholderVisual() {
  // Even more restrained — reserved-slot feel without looking broken.
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <rect width="400" height="240" fill="#0F1724" />

      {/* Faint grid */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 30}
            cy={40 + row * 30}
            r="0.8"
            fill="#94A3B8"
            fillOpacity="0.10"
          />
        ))
      )}

      {/* Single calm pulse line at low opacity */}
      <path
        d="M 0 130 L 140 130 L 152 118 L 164 142 L 176 130 L 400 130"
        fill="none"
        stroke="#3DBA8C"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IumakVisual() {
  // Abstract phone outline + pharmacy nodes + app-flow lines. No fake screenshot.
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="iu-wash" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F1724" />
          <stop offset="100%" stopColor="#13202f" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#iu-wash)" />

      {/* Phone outline — abstract, centered */}
      <g transform="translate(170 50)">
        <rect width="60" height="140" rx="10" fill="none" stroke="#3DBA8C" strokeOpacity="0.45" strokeWidth="1.2" />
        <rect x="6" y="14" width="48" height="100" rx="4" fill="#3DBA8C" fillOpacity="0.06" />
        {/* Inner content bars suggesting an app layout — abstract only */}
        <rect x="12" y="22" width="36" height="4" rx="2" fill="#3DBA8C" fillOpacity="0.30" />
        <rect x="12" y="32" width="22" height="3" rx="1.5" fill="#3DBA8C" fillOpacity="0.18" />
        <rect x="12" y="44" width="36" height="14" rx="3" fill="#3DBA8C" fillOpacity="0.10" />
        <rect x="12" y="62" width="36" height="14" rx="3" fill="#3DBA8C" fillOpacity="0.10" />
        <rect x="12" y="80" width="36" height="14" rx="3" fill="#3DBA8C" fillOpacity="0.10" />
        {/* Home indicator */}
        <rect x="22" y="124" width="16" height="2" rx="1" fill="#3DBA8C" fillOpacity="0.32" />
      </g>

      {/* Pharmacy nodes flanking the phone */}
      {[
        { x: 80, y: 90 },
        { x: 60, y: 140 },
        { x: 100, y: 170 },
        { x: 320, y: 90 },
        { x: 340, y: 140 },
        { x: 300, y: 170 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="10" fill="#3DBA8C" fillOpacity="0.05" />
          <circle cx={n.x} cy={n.y} r="3" fill="#3DBA8C" fillOpacity="0.55" />
        </g>
      ))}

      {/* Flow lines connecting phone to nodes — abstract app-network feel */}
      {[
        "M 170 120 Q 130 100 80 90",
        "M 170 140 Q 130 140 60 140",
        "M 170 160 Q 130 170 100 170",
        "M 230 120 Q 270 100 320 90",
        "M 230 140 Q 285 140 340 140",
        "M 230 160 Q 270 170 300 170",
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#3DBA8C" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 3" />
      ))}
    </svg>
  );
}

const visuals: Record<WorkVisual, () => React.ReactElement> = {
  bakery: BakeryVisual,
  machinery: MachineryVisual,
  manufacturing: ManufacturingVisual,
  education: EducationVisual,
  agency: AgencyVisual,
  export: ExportVisual,
  healthcare: HealthcareVisual,
  "healthcare-placeholder": HealthcarePlaceholderVisual,
  iumak: IumakVisual,
};

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function WorkCard({ item }: { item: WorkItem }) {
  const Visual = visuals[item.visual];
  const isHealthcare = item.category === "healthcare";
  const showStructuredInfo = isHealthcare || item.services;
  const isPlaceholder = !!item.isPlaceholder;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: isPlaceholder ? 0.72 : 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={[
        "group relative rounded-2xl overflow-hidden bg-[#0F1724] transition-colors duration-300",
        "border",
        isPlaceholder
          ? "border-white/[0.05] hover:border-white/[0.10]"
          : "border-white/[0.08] hover:border-white/[0.18]",
      ].join(" ")}
      aria-label={isPlaceholder ? `${item.title} — slot reserved` : item.title}
    >
      {/* Visual area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Visual />
        </div>

        {/* Metric chip — top-right, only when verified */}
        {item.metric && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 glass px-2.5 py-1 rounded-full border border-[#3DBA8C]/30 bg-[#3DBA8C]/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
              <span className="text-[11px] font-semibold text-[#3DBA8C] tracking-wide whitespace-nowrap">
                {item.metric}
              </span>
            </span>
          </div>
        )}

        {/* Reserved-slot chip for placeholder cards */}
        {isPlaceholder && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 glass px-2.5 py-1 rounded-full border border-white/[0.10]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]/60" />
              <span className="text-[10.5px] font-medium text-[#94A3B8] tracking-wide whitespace-nowrap">
                Reserved slot
              </span>
            </span>
          </div>
        )}

        {/* Bottom shadow gradient for overlay legibility */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F1724] via-[#0F1724]/80 to-transparent pointer-events-none" />
      </div>

      {/* Glass overlay content */}
      <div className="relative px-6 pt-5 pb-6 flex flex-col gap-3 border-t border-white/[0.06]">
        <p className="text-[10.5px] text-[#94A3B8]/80 tracking-[0.14em] font-medium leading-snug">
          {item.tags}
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-[#E8EDF2] leading-snug tracking-tight">
          {item.title}
        </h3>
        <p className="text-sm text-[#94A3B8] leading-relaxed">{item.line}</p>

        {/* Healthcare structured mini-info — compact two-column */}
        {showStructuredInfo && (item.specialty || item.doctorTitle) && (
          <div className="mt-1 pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="text-[10px] text-[#94A3B8]/50 uppercase tracking-widest font-medium">
                Specialty
              </p>
              <p className="text-xs text-[#94A3B8] truncate">{item.specialty}</p>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="text-[10px] text-[#94A3B8]/50 uppercase tracking-widest font-medium">
                Title
              </p>
              <p className="text-xs text-[#94A3B8] truncate">{item.doctorTitle}</p>
            </div>
          </div>
        )}

        {/* Services strip — small footer tags */}
        {item.services && item.services.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.services.map((s) => (
              <span
                key={s}
                className="text-[10.5px] text-[#94A3B8]/70 bg-white/[0.03] border border-white/[0.07] rounded-full px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Media slot note — very small, only for healthcare cards */}
        {isHealthcare && item.mediaSlot && (
          <p className="text-[10.5px] text-[#94A3B8]/40 italic pt-1">
            {item.mediaSlot}
          </p>
        )}
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function SelectedWorkSection() {
  const isClient = useIsClient();
  const [active, setActive] = useState<WorkCategory>("featured");

  const filtered = useMemo(() => {
    if (active === "all") return workItems;
    if (active === "featured") return workItems.filter((w) => w.featured);
    return workItems.filter(
      (w) => w.category === active || w.filters?.includes(active)
    );
  }, [active]);

  const reveal = (delay = 0) => ({
    initial: isClient ? { opacity: 0, y: 16 } : (false as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.42, ease: "easeOut", delay },
  });

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="px-6 lg:pl-24 lg:pr-16 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium">
            Selected work
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            Proof across sectors and markets.
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base text-[#94A3B8] leading-relaxed max-w-xl">
            {workIntro}
          </motion.p>
        </div>

        {/* Filter menu */}
        <motion.div
          {...reveal(0.18)}
          role="tablist"
          aria-label="Filter selected work"
          className="flex flex-wrap gap-2"
        >
          {workFilters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(f.id)}
                className={[
                  "text-xs sm:text-sm font-medium rounded-full px-3.5 py-1.5 border transition-all duration-200",
                  isActive
                    ? "bg-[#3DBA8C]/[0.12] border-[#3DBA8C]/40 text-[#3DBA8C]"
                    : "bg-white/[0.03] border-white/[0.08] text-[#94A3B8] hover:text-[#E8EDF2] hover:border-white/[0.18]",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state — only possible if filters change behaviour later */}
        {filtered.length === 0 && (
          <p className="text-sm text-[#94A3B8]/60 text-center py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
