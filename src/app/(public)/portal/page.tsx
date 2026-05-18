import {
  BarChart3,
  Download,
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

export default function PortalPage() {
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
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
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
            <h1 className="mb-2 text-3xl font-bold">Lisensi Saya</h1>
            <p className="text-muted-foreground mb-8">
              Kelola lisensi dan aktivasi domain Anda.
            </p>

            {/* License Cards */}
            <div className="mb-8 space-y-6">
              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>SRK-PRO-ABCD-2026</CardTitle>
                      <CardDescription>
                        Pro License - example.com
                      </CardDescription>
                    </div>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-500">
                      Aktif
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                    <div>
                      <p className="text-muted-foreground">Tipe</p>
                      <p className="font-medium">Pro</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Domain</p>
                      <p className="font-medium">example.com</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tenggat</p>
                      <p className="font-medium">29 Apr 2027</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium text-green-500">Aktif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>SRK-FREE-1234-2026</CardTitle>
                      <CardDescription>Free License - test.com</CardDescription>
                    </div>
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-500">
                      Gratis
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                    <div>
                      <p className="text-muted-foreground">Tipe</p>
                      <p className="font-medium">Free</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Domain</p>
                      <p className="font-medium">test.com</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tenggat</p>
                      <p className="font-medium">Tidak terbatas</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium text-green-500">Aktif</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button>
              <Key className="mr-2 h-4 w-4" />
              Tambah Lisensi Baru
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
