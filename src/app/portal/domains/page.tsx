import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Download,
  Globe,
  Key,
  MessageSquare,
  Plus,
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
import { Input } from "@/components/ui/input";

export default function DomainsPage() {
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
                <Key className="h-4 w-4" />
                Lisensi Saya
              </Link>
              <Link
                href="/portal/activations"
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Globe className="h-4 w-4" />
                Riwayat Aktivasi
              </Link>
              <Link
                href="/portal/domains"
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
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

        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 text-3xl font-bold">Domain Binding</h1>
            <p className="text-muted-foreground mb-8">
              Kelola domain yang terdaftar pada lisensi.
            </p>

            <div className="space-y-6">
              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>SRK-PRO-ABCD-2026</CardTitle>
                  <CardDescription>Pro License</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-accent/30 flex items-center justify-between rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium">example.com</span>
                      </div>
                      <Badge>Primary</Badge>
                    </div>
                    <div className="bg-accent/30 flex items-center justify-between rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium">www.example.com</span>
                      </div>
                      <Button variant="destructive" size="sm">
                        Hapus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>Tambah Domain</CardTitle>
                  <CardDescription>
                    Masukkan domain baru untuk lisensi ini.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input placeholder="domain.com" className="flex-1" />
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Tambah
                    </Button>
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Lisensi Pro mendukung 1 domain tambahan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
