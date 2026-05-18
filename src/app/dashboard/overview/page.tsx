import {
  AlertTriangle,
  ArrowRight,
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

export default function DashboardPage() {
  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="gradient-text mb-2 text-3xl font-bold">Dasbor</h1>
          <p className="text-muted-foreground">
            Selamat datang di Soraku License System
          </p>
        </div>

        {/* Stats Grid */}
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
                Rp 12.450.000
              </div>
              <p className="mt-1 text-xs text-green-500">
                +23.5% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Klien Baru
              </CardTitle>
              <Users className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="mt-1 text-xs text-green-500">+12 bulan ini</p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Lisensi Aktif
              </CardTitle>
              <Key className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-muted-foreground mt-1 text-xs">
                12 menunggu aktivasi
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Gagal Verifikasi
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-muted-foreground mt-1 text-xs">
                Perlu perhatian
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="/dashboard/licenses">
            <Card className="glass border-border hover:border-primary/50 hover-glow cursor-pointer transition-all">
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
            <Card className="glass border-border hover:border-primary/50 hover-glow cursor-pointer transition-all">
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
            <Card className="glass border-border hover:border-primary/50 hover-glow cursor-pointer transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-primary h-5 w-5" />
                  Pesanan Kustom
                </CardTitle>
                <CardDescription>Kelola proyek website</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Recent Activity */}
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Aktivitas Terkini</CardTitle>
            <CardDescription>Lisensi dan pesanan terbaru</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Lisensi Pro dibuat",
                  detail: "SRK-PRO-ABCD-2026 untuk user@example.com",
                  time: "5 menit lalu",
                },
                {
                  action: "Pesanan kustom masuk",
                  detail: "Paket Enterprise dari Budi Santoso",
                  time: "1 jam lalu",
                },
                {
                  action: "Lisensi diaktifkan",
                  detail: "SRK-FREE-1234-2026 pada domain example.com",
                  time: "2 jam lalu",
                },
                {
                  action: "Template baru",
                  detail: "Portfolio Anime v2.0 ditambahkan",
                  time: "3 jam lalu",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="border-border flex items-center justify-between border-b py-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-muted-foreground text-sm">
                      {activity.detail}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
