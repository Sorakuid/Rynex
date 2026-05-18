import {
  BarChart3,
  Code,
  Download,
  FileText,
  Globe,
  Key,
  MessageSquare,
  Settings,
  Shield,
  User,
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

export default function DownloadsPage() {
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
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
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

        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 text-3xl font-bold">Unduhan</h1>
            <p className="text-muted-foreground mb-8">
              Unduh template dan aset Anda.
            </p>

            <div className="space-y-6">
              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Template Portfolio Anime</CardTitle>
                      <CardDescription>SRK-PRO-ABCD-2026</CardDescription>
                    </div>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-500">
                      Aktif
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Unduh ZIP
                    </Button>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Dokumentasi
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border rounded-2xl opacity-60">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Template Dashboard SaaS</CardTitle>
                      <CardDescription>SRK-FREE-1234-2026</CardDescription>
                    </div>
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-500">
                      Free
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Unduh ZIP (Upgrade Pro)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
