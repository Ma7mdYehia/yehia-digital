"use client";

export default function FilterBar({
  periodLabel,
  comparisonLabel,
}: {
  periodLabel: string;
  comparisonLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/70 px-6 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <h1 className="text-base font-semibold text-ink">Executive Overview</h1>
        <span className="text-xs text-muted">
          {periodLabel} <span className="text-slate-400">{comparisonLabel}</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        {/* Placeholders — wired up in a later milestone */}
        <select
          disabled
          defaultValue="6m"
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-muted disabled:opacity-70"
          aria-label="Date range (coming soon)"
        >
          <option value="6m">Last 6 months</option>
          <option value="3m">Last 3 months</option>
        </select>
        <select
          disabled
          defaultValue="all"
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-muted disabled:opacity-70"
          aria-label="Channel filter (coming soon)"
        >
          <option value="all">All channels</option>
        </select>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-3 py-1 text-xs font-medium text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          Sample data
        </span>
      </div>
    </div>
  );
}
