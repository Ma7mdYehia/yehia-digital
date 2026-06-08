import {
  MonthlyPerformance,
  ChannelPerformance,
  getMonthlyPerformance,
  getChannelPerformance,
} from "./data";
import { pctChange } from "./format";

/** Short month label, e.g. "2025-06" -> "Jun" */
export function monthLabel(m: string): string {
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const idx = Number(m.split("-")[1]) - 1;
  return names[idx] ?? m;
}

export interface Kpi {
  key: string;
  label: string;
  value: string;
  /** delta vs previous month, in % (already computed) */
  delta: number | null;
  /** for metrics where a decrease is the good outcome (e.g. CAC) */
  invertDelta?: boolean;
  /** raw 6-month series for the sparkline */
  series: number[];
}

export interface ExecutiveOverviewData {
  periodLabel: string;       // e.g. "Jun 2025"
  comparisonLabel: string;   // e.g. "vs May 2025"
  kpis: Kpi[];
  revenueTrend: { month: string; revenue: number }[];
  ordersTrend: { month: string; orders: number }[];
  revenueByChannel: { channel: string; revenue: number }[];
  newVsReturning: { month: string; new: number; returning: number }[];
  spendVsRevenue: { month: string; spend: number; revenue: number }[];
}

import { formatAED, formatPct, formatX, formatCompact, formatNumber } from "./format";

function fullMonth(m: string): string {
  const names = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const idx = Number(m.split("-")[1]) - 1;
  const year = m.split("-")[0];
  return `${names[idx] ?? m} ${year}`;
}

export function getExecutiveOverview(): ExecutiveOverviewData {
  const monthly: MonthlyPerformance[] = getMonthlyPerformance();
  const channels: ChannelPerformance[] = getChannelPerformance();

  const current = monthly[monthly.length - 1];
  const prev = monthly[monthly.length - 2];

  const series = (sel: (m: MonthlyPerformance) => number) => monthly.map(sel);

  const kpis: Kpi[] = [
    {
      key: "revenue",
      label: "Total Revenue",
      value: formatAED(current.revenue),
      delta: pctChange(current.revenue, prev.revenue),
      series: series((m) => m.revenue),
    },
    {
      key: "orders",
      label: "Total Orders",
      value: formatNumber(current.orders),
      delta: pctChange(current.orders, prev.orders),
      series: series((m) => m.orders),
    },
    {
      key: "aov",
      label: "Average Order Value",
      value: formatAED(current.aov),
      delta: pctChange(current.aov, prev.aov),
      series: series((m) => m.aov),
    },
    {
      key: "new_customers",
      label: "New Customers",
      value: formatNumber(current.new_customers),
      delta: pctChange(current.new_customers, prev.new_customers),
      series: series((m) => m.new_customers),
    },
    {
      key: "repeat_rate",
      label: "Repeat Customer Rate",
      value: formatPct(current.repeat_rate),
      delta: pctChange(current.repeat_rate, prev.repeat_rate),
      series: series((m) => m.repeat_rate),
    },
    {
      key: "conversion_rate",
      label: "Conversion Rate",
      value: formatPct(current.conversion_rate, 2),
      delta: pctChange(current.conversion_rate, prev.conversion_rate),
      series: series((m) => m.conversion_rate),
    },
    {
      key: "blended_roas",
      label: "Blended ROAS",
      value: formatX(current.blended_roas),
      delta: pctChange(current.blended_roas, prev.blended_roas),
      series: series((m) => m.blended_roas),
    },
    {
      key: "cac",
      label: "CAC",
      value: formatAED(current.cac, true),
      delta: pctChange(current.cac, prev.cac),
      invertDelta: true, // lower CAC is better
      series: series((m) => m.cac),
    },
    {
      key: "organic_reach",
      label: "Organic Reach",
      value: formatCompact(current.organic_reach),
      delta: pctChange(current.organic_reach, prev.organic_reach),
      series: series((m) => m.organic_reach),
    },
    {
      key: "mom_growth",
      label: "MoM Revenue Growth",
      value: (() => {
        const g = pctChange(current.revenue, prev.revenue);
        return g === null ? "—" : `${g >= 0 ? "+" : ""}${g.toFixed(1)}%`;
      })(),
      delta: (() => {
        const gNow = pctChange(current.revenue, prev.revenue);
        const prev2 = monthly[monthly.length - 3];
        const gPrev = pctChange(prev.revenue, prev2.revenue);
        if (gNow === null || gPrev === null) return null;
        return gNow - gPrev; // change in growth rate (percentage points)
      })(),
      series: monthly.map((m, i) =>
        i === 0 ? 0 : (pctChange(m.revenue, monthly[i - 1].revenue) ?? 0)
      ),
    },
  ];

  // Revenue by channel for the latest month
  const latestMonth = current.month;
  const revenueByChannel = channels
    .filter((c) => c.month === latestMonth)
    .map((c) => ({ channel: c.channel, revenue: c.revenue }))
    .sort((a, b) => b.revenue - a.revenue);

  return {
    periodLabel: fullMonth(current.month),
    comparisonLabel: `vs ${fullMonth(prev.month)}`,
    kpis,
    revenueTrend: monthly.map((m) => ({ month: monthLabel(m.month), revenue: m.revenue })),
    ordersTrend: monthly.map((m) => ({ month: monthLabel(m.month), orders: m.orders })),
    revenueByChannel,
    newVsReturning: monthly.map((m) => ({
      month: monthLabel(m.month),
      new: m.new_customers,
      returning: m.returning_customers,
    })),
    spendVsRevenue: monthly.map((m) => ({
      month: monthLabel(m.month),
      spend: m.marketing_spend,
      revenue: m.revenue,
    })),
  };
}
