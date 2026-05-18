import {
  BarChart3,
  Download,
  Globe,
  Key,
  Mail,
  MessageSquare,
  Phone,
  Send,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SupportPage() {
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
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <Settings className="h-4 w-4" />
                Upgrade Paket
              </Link>
              <Link
                href="/portal/support"
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
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
            <h1 className="mb-2 text-3xl font-bold">Dukungan</h1>
            <p className="text-muted-foreground mb-8">
              Hubungi tim dukungan kami.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="glass border-border rounded-2xl text-center">
                <CardContent className="pt-6">
                  <Mail className="text-primary mx-auto mb-2 h-8 w-8" />
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">
                    support@soraku.studio
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-border rounded-2xl text-center">
                <CardContent className="pt-6">
                  <MessageSquare className="text-primary mx-auto mb-2 h-8 w-8" />
                  <p className="font-medium">Live Chat</p>
                  <p className="text-muted-foreground text-sm">
                    Senin-Jumat 9-5
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-border rounded-2xl text-center">
                <CardContent className="pt-6">
                  <Phone className="text-primary mx-auto mb-2 h-8 w-8" />
                  <p className="font-medium">Telepon</p>
                  <p className="text-muted-foreground text-sm">
                    +62 123 456 789
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah untuk menghubungi kami.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Masalah teknis / Bantuan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Jelaskan masalah Anda..."
                  />
                </div>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
