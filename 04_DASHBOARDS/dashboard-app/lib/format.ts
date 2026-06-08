/** Value formatting utilities. */

export function formatAED(v: number, withDecimals = false): string {
  return (
    "AED " +
    v.toLocaleString("en-US", {
      minimumFractionDigits: withDecimals ? 2 : 0,
      maximumFractionDigits: withDecimals ? 2 : 0,
    })
  );
}

export function formatNumber(v: number): string {
  return v.toLocaleString("en-US");
}

export function formatPct(v: number, decimals = 1): string {
  return `${v.toFixed(decimals)}%`;
}

export function formatX(v: number): string {
  return `${v.toFixed(2)}x`;
}

/** Compact format for large reach numbers: 1,560,000 -> 1.56M */
export function formatCompact(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return v.toLocaleString("en-US");
}

/** Percentage change between two values. */
export function pctChange(current: number, previous: number): number | null {
  if (previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

export function formatDelta(v: number | null): string {
  if (v === null) return "—";
  const sign = v > 0 ? "+" : "";
  return `${sign}${v.toFixed(1)}%`;
}
