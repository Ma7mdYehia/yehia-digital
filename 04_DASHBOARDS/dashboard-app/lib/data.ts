import fs from "fs";
import path from "path";

/**
 * Data loading layer.
 * Reads the static, fictional mock-data files copied from the master
 * folder (../data) into ./data. All parsing happens server-side at build
 * time, so no backend or database is required.
 */

const DATA_DIR = path.join(process.cwd(), "data");

// ---- Types ----
export interface MonthlyPerformance {
  month: string;
  revenue: number;
  orders: number;
  aov: number;
  new_customers: number;
  returning_customers: number;
  repeat_rate: number;
  sessions: number;
  conversion_rate: number;
  marketing_spend: number;
  paid_revenue: number;
  blended_roas: number;
  cac: number;
  organic_reach: number;
  email_revenue: number;
}

export interface ChannelPerformance {
  month: string;
  channel: string;
  spend: number;
  revenue: number;
  orders: number;
  roas: number | null;
  cac: number | null;
  reach: number;
}

export interface CustomerSegment {
  month: string;
  segment: string;
  customers: number;
  revenue: number;
  avg_orders: number;
}

// ---- Minimal CSV parser (no embedded commas in this dataset) ----
function parseCsv(file: string): Record<string, string>[] {
  const raw = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
  const lines = raw.split("\n").map((l) => l.replace(/\r$/, "")).filter((l) => l.length > 0);
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const cells = line.split(",");
    const row: Record<string, string> = {};
    headers.forEach((h, i) => (row[h] = cells[i] ?? ""));
    return row;
  });
}

const num = (v: string): number => (v === "" ? 0 : Number(v));
const numOrNull = (v: string): number | null => (v === "" ? null : Number(v));

// ---- Loaders ----
export function getMonthlyPerformance(): MonthlyPerformance[] {
  return parseCsv("monthly_performance.csv").map((r) => ({
    month: r.month,
    revenue: num(r.revenue),
    orders: num(r.orders),
    aov: num(r.aov),
    new_customers: num(r.new_customers),
    returning_customers: num(r.returning_customers),
    repeat_rate: num(r.repeat_rate),
    sessions: num(r.sessions),
    conversion_rate: num(r.conversion_rate),
    marketing_spend: num(r.marketing_spend),
    paid_revenue: num(r.paid_revenue),
    blended_roas: num(r.blended_roas),
    cac: num(r.cac),
    organic_reach: num(r.organic_reach),
    email_revenue: num(r.email_revenue),
  }));
}

export function getChannelPerformance(): ChannelPerformance[] {
  return parseCsv("channel_performance.csv").map((r) => ({
    month: r.month,
    channel: r.channel,
    spend: num(r.spend),
    revenue: num(r.revenue),
    orders: num(r.orders),
    roas: numOrNull(r.roas),
    cac: numOrNull(r.cac),
    reach: num(r.reach),
  }));
}

export function getCustomerSegments(): CustomerSegment[] {
  return parseCsv("customer_segments.csv").map((r) => ({
    month: r.month,
    segment: r.segment,
    customers: num(r.customers),
    revenue: num(r.revenue),
    avg_orders: num(r.avg_orders),
  }));
}
