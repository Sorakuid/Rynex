import {
  BarChart3,
  CheckCircle,
  CreditCard,
  Download,
  Globe,
  Key,
  MessageSquare,
  Settings,
  Shield,
  User,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BillingPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="flex">
        <aside className="border-border bg-card/30 sticky top-0 hidden h-screen w-64 border-r md:block">
          <div className="p-6">
            <h2 className="gradient-text mb-6 text-lg font-bold">
              Portal Klien
            </h2>
            <nav className="space-y-2">
              <Link
                href="/portal"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Shield className="h-4 w-4" />
                Lisensi Saya
              </Link>
              <Link
                href="/portal/activations"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Key className="h-4 w-4" />
                Riwayat Aktivasi
              </Link>
              <Link
                href="/portal/domains"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Globe className="h-4 w-4" />
                Domain Binding
              </Link>
              <Link
                href="/portal/downloads"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Download className="h-4 w-4" />
                Unduhan
              </Link>
              <Link
                href="/portal/billing"
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
              >
                <BarChart3 className="h-4 w-4" />
                Riwayat Tagihan
              </Link>
              <Link
                href="/portal/upgrade"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Settings className="h-4 w-4" />
                Upgrade Paket
              </Link>
              <Link
                href="/portal/support"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Dukungan
              </Link>
              <Link
                href="/portal/profile"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <User className="h-4 w-4" />
                Pengaturan Profil
              </Link>
            </nav>
          </div>
        </aside>

        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 text-3xl font-bold">Riwayat Tagihan</h1>
            <p className="text-muted-foreground mb-8">
              Daftar transaksi dan pembayaran.
            </p>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  desc: "Upgrade ke Pro License",
                  amount: "Rp 450.000",
                  date: "28 Apr 2026",
                  status: "paid",
                },
                {
                  id: 2,
                  desc: "Renewal Pro License",
                  amount: "Rp 450.000",
                  date: "28 Apr 2025",
                  status: "paid",
                },
                {
                  id: 3,
                  desc: "Free License",
                  amount: "Rp 0",
                  date: "25 Apr 2026",
                  status: "free",
                },
              ].map((bill) => (
                <Card key={bill.id} className="glass border-border rounded-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{bill.desc}</p>
                        <p className="text-muted-foreground text-sm">
                          {bill.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{bill.amount}</p>
                        <Badge
                          variant={
                            bill.status === "paid" ? "default" : "secondary"
                          }
                        >
                          {bill.status === "paid" ? "Lunas" : "Gratis"}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
