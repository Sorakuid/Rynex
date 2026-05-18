"use client";

import {
  BarChart3,
  Download,
  Globe,
  Key,
  Mail,
  MessageSquare,
  Save,
  Settings,
  Shield,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc",
    phone: "+62 123 456 789",
  });

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
                className="hover:bg-accent flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Dukungan
              </Link>
              <Link
                href="/portal/profile"
                className="bg-primary/10 text-primary flex items-center gap-2 rounded-lg p-2"
              >
                <User className="h-4 w-4" />
                Pengaturan Profil
              </Link>
            </nav>
          </div>
        </aside>

        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 text-3xl font-bold">Pengaturan Profil</h1>
            <p className="text-muted-foreground mb-8">
              Kelola informasi akun Anda.
            </p>

            <div className="space-y-6">
              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>Informasi Dasar</CardTitle>
                  <CardDescription>Update profil Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({ ...profile, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({ ...profile, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Perusahaan</Label>
                      <Input
                        id="company"
                        value={profile.company}
                        onChange={(e) =>
                          setProfile({ ...profile, company: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telepon</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) =>
                          setProfile({ ...profile, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>Keamanan</CardTitle>
                  <CardDescription>Ubah sandi akses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Sandi Saat Ini</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Sandi Baru</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Konfirmasi Sandi</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button size="lg">
                  <Save className="mr-2 h-4 w-4" />
                  Simpan Perubahan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
