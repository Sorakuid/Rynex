"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function UsageChart({
  data,
  title = "Tren Aktivasi",
}: {
  data: { month: string; activations: number; revocations: number }[];
  title?: string;
}) {
  return (
    <Card className="glass border-border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Aktivasi lisensi per bulan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />
              <XAxis
                dataKey="month"
                stroke="rgba(255,255,255,0.3)"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.3)"
                fontSize={12}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(28,30,34,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  backdropFilter: "blur(20px)",
                }}
              />
              <Bar dataKey="activations" fill="#4FA3D1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="revocations" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
