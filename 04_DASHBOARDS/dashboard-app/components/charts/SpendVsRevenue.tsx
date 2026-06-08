"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { COLORS, axisTick, tooltipStyle } from "./common";

export default function SpendVsRevenue({
  data,
}: {
  data: { month: string; spend: number; revenue: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
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
          cursor={{ fill: "rgba(61,186,140,0.06)" }}
          formatter={(v: number, name: string) => [
            `AED ${v.toLocaleString()}`,
            name === "spend" ? "Marketing Spend" : "Revenue",
          ]}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => (value === "spend" ? "Marketing Spend" : "Revenue")}
          wrapperStyle={{ fontSize: 12 }}
        />
        <Bar dataKey="spend" fill={COLORS.amber} radius={[5, 5, 0, 0]} barSize={24} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke={COLORS.sage}
          strokeWidth={2.25}
          dot={{ r: 3, fill: COLORS.sage }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
