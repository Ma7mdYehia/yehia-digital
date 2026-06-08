"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { COLORS, axisTick, tooltipStyle } from "./common";

export default function OrdersTrend({ data }: { data: { month: string; orders: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
        <CartesianGrid stroke={COLORS.grid} vertical={false} />
        <XAxis dataKey="month" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ fill: "rgba(61,186,140,0.06)" }}
          formatter={(v: number) => [v.toLocaleString(), "Orders"]}
        />
        <Bar dataKey="orders" fill={COLORS.sage} radius={[5, 5, 0, 0]} barSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
}
