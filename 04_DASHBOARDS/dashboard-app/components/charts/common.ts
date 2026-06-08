"use client";

export const COLORS = {
  sage: "#3DBA8C",
  amber: "#E0A458",
  navy: "#0F1724",
  slate: "#94A3B8",
  grid: "#E2E8F0",
};

// Consistent channel colour mapping used across all pages.
export const CHANNEL_COLORS: Record<string, string> = {
  Meta: "#3DBA8C",
  Google: "#5B8DEF",
  TikTok: "#E0A458",
  Email: "#9B7EDE",
  "Organic Social": "#48C9B0",
  Direct: "#64748B",
  "Retail Support": "#C2854A",
};

export const axisTick = { fontSize: 11, fill: "#64748B" };

export const tooltipStyle = {
  borderRadius: 10,
  border: "1px solid #E2E8F0",
  fontSize: 12,
  boxShadow: "0 4px 16px rgba(15,23,36,0.10)",
};
