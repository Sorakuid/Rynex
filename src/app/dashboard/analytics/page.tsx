import {
  ArrowRight,
  BarChart3,
  DollarSign,
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

export default function AnalyticsPage() {
  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="gradient-text mb-2 text-3xl font-bold">Analitik</h1>
          <p className="text-muted-foreground">
            Statistik dan performa Soraku Studio
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Revenue
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
                Konversi Rate
              </CardTitle>
              <TrendingUp className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <p className="mt-1 text-xs text-green-500">
                +2.3% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Top Template
              </CardTitle>
              <BarChart3 className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Portfolio Anime</div>
              <p className="text-muted-foreground mt-1 text-xs">
                150 penjualan
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Geografi
              </CardTitle>
              <Users className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Indonesia</div>
              <p className="text-muted-foreground mt-1 text-xs">
                65% dari total klien
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle>Pertumbuhan Bulanan</CardTitle>
              <CardDescription>
                Grafik revenue 12 bulan terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground flex h-64 items-center justify-center">
                [Grafik Pertumbuhan - Placeholder]
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader>
              <CardTitle>Template Terpopuler</CardTitle>
              <CardDescription>
                Top 5 template berdasarkan penjualan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Portfolio Anime", sales: 150 },
                  { name: "Dashboard SaaS", sales: 120 },
                  { name: "Landing Page Modern", sales: 95 },
                  { name: "E-commerce Starter", sales: 80 },
                  { name: "Blog Tech", sales: 60 },
                ].map((template, index) => (
                  <div
                    key={template.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{template.name}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {template.sales} penjualan
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Link href="/dashboard">
          <Button variant="outline">
            <ArrowRight className="mr-2 h-4 w-4" />
            Kembali ke Dashboard
          </Button>
        </Link>
      </div>
    </main>
  );
}
