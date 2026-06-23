"use client";

import { CheckCircle, Code, Palette } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

export default function CustomProjectPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center gap-4">
              <Code className="text-primary h-12 w-12" />
              <Palette className="text-accent h-12 w-12" />
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              Proyek <span className="gradient-text">Kustom</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam.
            </p>
          </div>

          {!submitted ? (
            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Formulir Proyek Kustom</CardTitle>
                <CardDescription>
                  Ceritakan tentang proyek impian Anda dan kami akan
                  mewujudkannya.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="package">Paket Proyek</Label>
                  <Input
                    id="package"
                    placeholder="Basic (Rp 4.5jt) / Pro (Rp 12jt) / Enterprise (Rp 37.5jt)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Deskripsi Proyek</Label>
                  <Textarea
                    id="description"
                    placeholder="Ceritakan tentang proyek Anda, fitur yang dibutuhkan, preferensi desain, dll."
                    rows={6}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Anggaran (Opsional)</Label>
                    <Input id="budget" placeholder="Rp 10.000.000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Tenggat Waktu (Opsional)</Label>
                    <Input id="deadline" type="date" />
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Kirim Permintaan
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass mx-auto max-w-2xl rounded-2xl border-green-500/30">
              <CardContent className="pt-6 text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 text-2xl font-bold">
                  Permintaan Terkirim!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Terima kasih! Kami akan meninjau proyek Anda dan menghubungi
                  Anda dalam 24 jam.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Kirim Lain
                  </Button>
                  <Link href="/">
                    <Button>Kembali ke Beranda</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
