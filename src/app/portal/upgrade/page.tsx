import {
  BarChart3,
  Check,
  Download,
  Globe,
  Key,
  MessageSquare,
  Settings,
  Shield,
  Star,
  User,
  Zap,
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

export default function UpgradePage() {
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
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <BarChart3 className="h-4 w-4" />
                Riwayat Tagihan
              </Link>
              <Link
                href="/portal/upgrade"
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
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
          <div className="max-w-6xl">
            <h1 className="mb-2 text-3xl font-bold">Upgrade Paket</h1>
            <p className="text-muted-foreground mb-8">
              Tingkatkan lisensi Anda untuk fitur lebih lengkap.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Free */}
              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>Saat Ini: Free</CardTitle>
                  <CardDescription>Gratis selamanya</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Rp 0</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />1 Domain
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Branding Footer
                    </li>
                  </ul>
                  <Button disabled className="mt-6 w-full">
                    Paket Aktif
                  </Button>
                </CardContent>
              </Card>

              {/* Pro */}
              <Card className="glass border-primary relative rounded-2xl">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Star className="mr-1 h-3 w-3" />
                  Rekomendasi
                </Badge>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Untuk profesional</CardDescription>
                  <div className="gradient-text mt-4 text-4xl font-bold">
                    Rp 450.000
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />1 Domain
                      Komersial
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Hapus Branding
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Support Prioritas
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">
                    <Zap className="mr-2 h-4 w-4" />
                    Upgrade ke Pro
                  </Button>
                </CardContent>
              </Card>

              {/* Agency */}
              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>Agency</CardTitle>
                  <CardDescription>Untuk agensi</CardDescription>
                  <div className="gradient-text mt-4 text-4xl font-bold">
                    Rp 2.500.000
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Unlimited Domain
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Multi-Klien
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      White Label
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-6 w-full">
                    Upgrade ke Agency
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
