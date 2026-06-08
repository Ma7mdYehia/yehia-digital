"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { COLORS, axisTick, tooltipStyle } from "./common";

export default function NewVsReturning({
  data,
}: {
  data: { month: string; new: number; returning: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
        <CartesianGrid stroke={COLORS.grid} vertical={false} />
        <XAxis dataKey="month" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ fill: "rgba(61,186,140,0.06)" }}
          formatter={(v: number, name: string) => [
            v.toLocaleString(),
            name === "new" ? "New" : "Returning",
          ]}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => (value === "new" ? "New" : "Returning")}
          wrapperStyle={{ fontSize: 12 }}
        />
        <Bar dataKey="new" stackId="c" fill={COLORS.sage} radius={[0, 0, 0, 0]} barSize={28} />
        <Bar dataKey="returning" stackId="c" fill={COLORS.amber} radius={[5, 5, 0, 0]} barSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
}
