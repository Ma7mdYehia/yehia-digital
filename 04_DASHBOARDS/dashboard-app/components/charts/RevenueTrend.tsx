"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
} from "recharts";
import { COLORS, axisTick, tooltipStyle } from "./common";

export default function RevenueTrend({ data }: { data: { month: string; revenue: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.sage} stopOpacity={0.18} />
            <stop offset="100%" stopColor={COLORS.sage} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={COLORS.grid} vertical={false} />
        <XAxis dataKey="month" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis
          tick={axisTick}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v: number) => [`AED ${v.toLocaleString()}`, "Revenue"]}
        />
        <Area type="monotone" dataKey="revenue" stroke="none" fill="url(#revFill)" />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke={COLORS.sage}
          strokeWidth={2.25}
          dot={{ r: 3, fill: COLORS.sage }}
          activeDot={{ r: 5 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
