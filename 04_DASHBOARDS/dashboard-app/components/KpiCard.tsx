import { Kpi } from "@/lib/metrics";

/** Inline SVG sparkline — server-safe, no client JS needed. */
function Sparkline({ data, color }: { data: number[]; color: string }) {
  if (!data || data.length < 2) return null;
  const w = 96;
  const h = 28;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeltaChip({ delta, invert }: { delta: number | null; invert?: boolean }) {
  if (delta === null) {
    return <span className="text-xs text-muted">—</span>;
  }
  // For inverted metrics (e.g. CAC), a decrease is positive.
  const isGood = invert ? delta < 0 : delta > 0;
  const isFlat = Math.abs(delta) < 0.05;
  const arrow = delta > 0 ? "▲" : delta < 0 ? "▼" : "■";
  const sign = delta > 0 ? "+" : "";
  const tone = isFlat
    ? "text-muted bg-slate-100"
    : isGood
    ? "text-sage bg-sage/10"
    : "text-[#C2543C] bg-[#C2543C]/10";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${tone}`}>
      <span className="text-[9px]">{arrow}</span>
      {sign}
      {delta.toFixed(1)}%
    </span>
  );
}

export default function KpiCard({ kpi }: { kpi: Kpi }) {
  const sparkColor = kpi.invertDelta ? "#E0A458" : "#3DBA8C";
  return (
    <div className="flex flex-col justify-between rounded-xl2 bg-card p-4 shadow-card">
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">{kpi.label}</span>
        <DeltaChip delta={kpi.delta} invert={kpi.invertDelta} />
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        <span className="text-2xl font-semibold text-ink">{kpi.value}</span>
        <div className="opacity-80">
          <Sparkline data={kpi.series} color={sparkColor} />
        </div>
      </div>
    </div>
  );
}
