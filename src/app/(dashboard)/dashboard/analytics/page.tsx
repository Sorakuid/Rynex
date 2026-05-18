import { BarChart3, DollarSign, Key, TrendingUp, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { licenses, orders } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const allLicenses = await db.select().from(licenses);
  const allOrders = await db.select().from(orders);

  const totalLicenses = allLicenses.length;
  const activeLicenses = allLicenses.filter(
    (l) => l.status === "active",
  ).length;
  const inactiveLicenses = allLicenses.filter(
    (l) => l.status === "inactive",
  ).length;
  const revokedLicenses = allLicenses.filter(
    (l) => l.status === "revoked",
  ).length;
  const suspendedLicenses = allLicenses.filter(
    (l) => l.status === "suspended",
  ).length;
  const expiredLicenses = allLicenses.filter(
    (l) => l.status === "expired",
  ).length;

  const totalRevenue = allOrders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.amount, 0);

  const byPlan = allLicenses.reduce(
    (acc, l) => {
      acc[l.plan] = (acc[l.plan] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const formatPrice = (amount: number) => {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  };

  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="gradient-text mb-2 text-3xl font-bold">Analitik</h1>
          <p className="text-muted-foreground">
            Statistik dan performa lisensi
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Lisensi
              </CardTitle>
              <Key className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalLicenses}</div>
              <p className="text-muted-foreground mt-1 text-xs">
                {activeLicenses} aktif, {inactiveLicenses} nonaktif
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="gradient-text text-2xl font-bold">
                {formatPrice(totalRevenue)}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Distribusi Status
              </CardTitle>
              <BarChart3 className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400">Aktif</span>
                  <span className="font-mono">{activeLicenses}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400">Suspended</span>
                  <span className="font-mono">{suspendedLicenses}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-red-400">Revoked</span>
                  <span className="font-mono">{revokedLicenses}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-rose-400">Expired</span>
                  <span className="font-mono">{expiredLicenses}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Distribusi Paket
              </CardTitle>
              <TrendingUp className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5">
                {Object.entries(byPlan)
                  .sort(([, a], [, b]) => b - a)
                  .map(([plan, count]) => (
                    <div
                      key={plan}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="font-mono tracking-wider uppercase">
                        {plan}
                      </span>
                      <span className="font-mono">{count}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle>Ringkasan Lisensi</CardTitle>
              <CardDescription>Total: {totalLicenses} lisensi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <StatusRow
                  label="Aktif"
                  count={activeLicenses}
                  total={totalLicenses}
                  color="bg-emerald-500"
                />
                <StatusRow
                  label="Nonaktif"
                  count={inactiveLicenses}
                  total={totalLicenses}
                  color="bg-zinc-500"
                />
                <StatusRow
                  label="Suspended"
                  count={suspendedLicenses}
                  total={totalLicenses}
                  color="bg-amber-500"
                />
                <StatusRow
                  label="Revoked"
                  count={revokedLicenses}
                  total={totalLicenses}
                  color="bg-red-500"
                />
                <StatusRow
                  label="Expired"
                  count={expiredLicenses}
                  total={totalLicenses}
                  color="bg-rose-500"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>
                Total: {formatPrice(totalRevenue)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-border/50 flex items-center justify-between border-b py-3">
                  <span className="text-sm">Total Pesanan</span>
                  <span className="font-mono font-bold">
                    {allOrders.length}
                  </span>
                </div>
                <div className="border-border/50 flex items-center justify-between border-b py-3">
                  <span className="text-sm">Pesanan Lunas</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {allOrders.filter((o) => o.paymentStatus === "paid").length}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm">Revenue Rata-rata</span>
                  <span className="gradient-text font-mono font-bold">
                    {allOrders.filter((o) => o.paymentStatus === "paid")
                      .length > 0
                      ? formatPrice(
                          Math.round(
                            totalRevenue /
                              allOrders.filter(
                                (o) => o.paymentStatus === "paid",
                              ).length,
                          ),
                        )
                      : "Rp 0"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

function StatusRow({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="font-mono">
          {count} ({percentage}%)
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
