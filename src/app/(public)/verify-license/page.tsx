"use client";

import { CheckCircle, Key, Send } from "lucide-react";
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

export default function VerifyLicensePage() {
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setSubmitted(true);
    // Simulate verification
    setTimeout(() => {
      setVerified(true);
    }, 1000);
  };

  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-2xl px-4">
          {!submitted ? (
            <>
              <div className="mb-12 text-center">
                <Key className="text-primary mx-auto mb-4 h-16 w-16" />
                <h1 className="mb-4 text-5xl font-bold">
                  Verifikasi <span className="gradient-text">Lisensi</span>
                </h1>
                <p className="text-muted-foreground text-xl">
                  Masukkan email dan kunci lisensi untuk verifikasi.
                </p>
              </div>

              <Card className="glass border-border rounded-2xl">
                <CardHeader>
                  <CardTitle>Verifikasi Lisensi</CardTitle>
                  <CardDescription>
                    Masukkan detail lisensi yang Anda terima via email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="key">Kunci Lisensi</Label>
                    <Input
                      id="key"
                      value={key}
                      onChange={(e) => setKey(e.target.value.toUpperCase())}
                      placeholder="SRK-PRO-ABCD-2026"
                      className="font-mono"
                    />
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleVerify}
                    disabled={!email || !key}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Verifikasi Lisensi
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : !verified ? (
            <div className="text-center">
              <div className="bg-primary/10 animate-float mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Key className="text-primary h-8 w-8" />
              </div>
              <h2 className="mb-4 text-3xl font-bold">Memverifikasi...</h2>
              <p className="text-muted-foreground">Mohon tunggu sebentar...</p>
            </div>
          ) : (
            <>
              <div className="mb-12 text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                <h1 className="mb-4 text-5xl font-bold">
                  Lisensi <span className="gradient-text">Terverifikasi!</span>
                </h1>
                <p className="text-muted-foreground text-xl">
                  Lisensi Anda berhasil diverifikasi. Sekarang Anda dapat
                  mengunduh template.
                </p>
              </div>

              <Card className="glass rounded-2xl border-green-500/30">
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold">Detail Lisensi</h3>
                  <div className="mb-6 space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tipe</span>
                      <span className="font-medium">Pro</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">{email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-green-500">Aktif</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domain</span>
                      <span className="font-medium">example.com</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="flex-1">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Unduh Template
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Lihat Portal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
