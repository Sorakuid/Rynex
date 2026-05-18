import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  Download,
  Globe,
  Key,
  MessageSquare,
  Settings,
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

export default function ActivationsPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="flex">
        {/* Sidebar */}
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
                <Key className="h-4 w-4" />
                Lisensi Saya
              </Link>
              <Link
                href="/portal/activations"
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
              >
                <Globe className="h-4 w-4" />
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
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
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

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 text-3xl font-bold">Riwayat Aktivasi</h1>
            <p className="text-muted-foreground mb-8">
              Daftar aktivasi lisensi pada domain.
            </p>

            {/* Activations List */}
            <div className="space-y-4">
              {[
                {
                  license: "SRK-PRO-ABCD-2026",
                  domain: "example.com",
                  date: "28 Apr 2026",
                  status: "success",
                },
                {
                  license: "SRK-PRO-ABCD-2026",
                  domain: "www.example.com",
                  date: "28 Apr 2026",
                  status: "success",
                },
                {
                  license: "SRK-FREE-1234-2026",
                  domain: "test.com",
                  date: "25 Apr 2026",
                  status: "success",
                },
                {
                  license: "SRK-PRO-ABCD-2026",
                  domain: "staging.example.com",
                  date: "27 Apr 2026",
                  status: "failed",
                },
              ].map((activation, i) => (
                <Card key={i} className="glass border-border rounded-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {activation.status === "success" ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-red-500" />
                        )}
                        <div>
                          <p className="font-medium">{activation.license}</p>
                          <p className="text-muted-foreground text-sm">
                            {activation.domain}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            activation.status === "success"
                              ? "default"
                              : "destructive"
                          }
                        >
                          {activation.status === "success"
                            ? "Berhasil"
                            : "Gagal"}
                        </Badge>
                        <p className="text-muted-foreground mt-1 text-xs">
                          {activation.date}
                        </p>
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
