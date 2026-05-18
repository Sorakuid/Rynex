"use client";

import { Bell, Mail, Settings, Shield } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Soraku Studio",
    siteDescription:
      "Marketplace template premium dengan sistem lisensi terintegrasi.",
    contactEmail: "hello@soraku.studio",
    supportEmail: "support@soraku.studio",
    notificationEnabled: true,
  });

  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Pengaturan</h1>
          <p className="text-muted-foreground">
            Konfigurasi sistem dan preferensi
          </p>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-primary h-5 w-5" />
                Umum
              </CardTitle>
              <CardDescription>Pengaturan dasar aplikasi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Nama Situs</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) =>
                    setSettings({ ...settings, siteName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Deskripsi</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      siteDescription: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="text-primary h-5 w-5" />
                Email
              </CardTitle>
              <CardDescription>Konfigurasi email sistem</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email Kontak</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) =>
                    setSettings({ ...settings, contactEmail: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportEmail">Email Dukungan</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  value={settings.supportEmail}
                  onChange={(e) =>
                    setSettings({ ...settings, supportEmail: e.target.value })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="text-primary h-5 w-5" />
                Notifikasi
              </CardTitle>
              <CardDescription>Pengaturan notifikasi sistem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Aktifkan Notifikasi</p>
                  <p className="text-muted-foreground text-sm">
                    Kirim notifikasi untuk aktivitas penting
                  </p>
                </div>
                <Button
                  variant={settings.notificationEnabled ? "default" : "outline"}
                  onClick={() =>
                    setSettings({
                      ...settings,
                      notificationEnabled: !settings.notificationEnabled,
                    })
                  }
                >
                  {settings.notificationEnabled ? "Aktif" : "Nonaktif"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button size="lg">
              <Shield className="mr-2 h-4 w-4" />
              Simpan Pengaturan
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
