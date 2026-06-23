"use client";

import { CheckCircle, Download } from "lucide-react";
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

export default function DownloadPage() {
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="mb-12 text-center">
            <Download className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              Download <span className="gradient-text">Template</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Masukkan email dan kunci lisensi untuk mengunduh template.
            </p>
          </div>

          {!submitted ? (
            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Verifikasi Lisensi</CardTitle>
                <CardDescription>
                  Masukkan detail lisensi Anda untuk mengunduh template.
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
                  onClick={() => setSubmitted(true)}
                  disabled={!email || !key}
                >
                  Verifikasi & Download
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="glass rounded-2xl border-green-500/30">
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-2xl font-bold">
                    Lisensi Terverifikasi!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Silakan unduh template Anda di bawah ini.
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Unduh Template (ZIP - 2.3 MB)
                    </Button>
                    <Link href="/verifyLicense">
                      <Button variant="outline" className="w-full">
                        Verifikasi Lisensi Lain
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-muted-foreground text-sm">
                  Butuh bantuan?{" "}
                  <Link href="/faq" className="text-primary hover:underline">
                    Lihat FAQ
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
