import {
  AlertTriangle,
  BarChart3,
  DollarSign,
  Key,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
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

export default async function DashboardPage() {
  const allLicenses = await db.select().from(licenses);
  const allOrders = await db.select().from(orders);

  const activeLicenses = allLicenses.filter(
    (l) => l.status === "active",
  ).length;
  const totalRevenue = allOrders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.amount, 0);
  const pendingActivations = allLicenses.filter(
    (l) => l.status === "inactive",
  ).length;
  const failedVerifications = allLicenses.filter(
    (l) => l.status === "suspended" || l.status === "revoked",
  ).length;

  const recentActivity = [
    ...allLicenses.slice(0, 2).map((l) => ({
      action: `Lisensi ${l.plan} dibuat`,
      detail: `${l.licenseKey} untuk ${l.customerEmail}`,
      time: l.createdAt,
    })),
    ...allOrders.slice(0, 2).map((o) => ({
      action: `Pesanan ${o.paymentStatus}`,
      detail: `Rp ${o.amount.toLocaleString("id-ID")} dari ${o.customerEmail}`,
      time: o.purchasedAt,
    })),
  ]
    .sort((a, b) => {
      if (!a.time || !b.time) return 0;
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    })
    .slice(0, 4);

  const formatPrice = (amount: number) =>
    `Rp ${amount.toLocaleString("id-ID")}`;

  const formatTimeAgo = (date: Date | null) => {
    if (!date) return "-";
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins} menit lalu`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} jam lalu`;
    return `${Math.floor(hours / 24)} hari lalu`;
  };

  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="gradient-text mb-2 text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview lisensi dan pendapatan
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Pendapatan
              </CardTitle>
              <DollarSign className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="gradient-text text-2xl font-bold">
                {formatPrice(totalRevenue)}
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                dari {allOrders.length} pesanan
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Lisensi
              </CardTitle>
              <Key className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{allLicenses.length}</div>
              <p className="text-muted-foreground mt-1 text-xs">
                {activeLicenses} aktif
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Menunggu Aktivasi
              </CardTitle>
              <Users className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingActivations}</div>
              <p className="text-muted-foreground mt-1 text-xs">
                lisensi inactive
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Bermasalah
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-500">
                {failedVerifications}
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                suspended / revoked
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="/dashboard/licenses">
            <Card className="glass border-border hover:border-primary/50 group cursor-pointer transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="text-primary h-5 w-5" />
                  Generate Lisensi
                </CardTitle>
                <CardDescription>Buat kunci lisensi baru</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/dashboard/products">
            <Card className="glass border-border hover:border-primary/50 group cursor-pointer transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="text-primary h-5 w-5" />
                  Kelola Produk
                </CardTitle>
                <CardDescription>Tambah atau edit template</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/dashboard/orders">
            <Card className="glass border-border hover:border-primary/50 group cursor-pointer transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-primary h-5 w-5" />
                  Pesanan
                </CardTitle>
                <CardDescription>Lihat riwayat transaksi</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Aktivitas Terkini</CardTitle>
            <CardDescription>Lisensi dan pesanan terbaru</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="border-border/50 flex items-center justify-between border-b py-3 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-muted-foreground text-sm">
                      {activity.detail}
                    </p>
                  </div>
                  <span className="text-muted-foreground ml-4 shrink-0 text-xs">
                    {formatTimeAgo(activity.time)}
                  </span>
                </div>
              ))}
              {recentActivity.length === 0 && (
                <p className="text-muted-foreground py-4 text-center text-sm">
                  Belum ada aktivitas
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
