"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { CHANNEL_COLORS, COLORS, axisTick, tooltipStyle } from "./common";

export default function RevenueByChannel({
  data,
}: {
  data: { channel: string; revenue: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 16, left: 8, bottom: 0 }}
      >
        <CartesianGrid stroke={COLORS.grid} horizontal={false} />
        <XAxis
          type="number"
          tick={axisTick}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
        />
        <YAxis
          type="category"
          dataKey="channel"
          tick={axisTick}
          axisLine={false}
          tickLine={false}
          width={96}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          cursor={{ fill: "rgba(61,186,140,0.06)" }}
          formatter={(v: number) => [`AED ${v.toLocaleString()}`, "Revenue"]}
        />
        <Bar dataKey="revenue" radius={[0, 5, 5, 0]} barSize={16}>
          {data.map((d) => (
            <Cell key={d.channel} fill={CHANNEL_COLORS[d.channel] ?? COLORS.sage} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
