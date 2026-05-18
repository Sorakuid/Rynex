"use client";

import { AlertTriangle, BookOpen, Code, Terminal } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const docsSections = [
  {
    title: "Memulai",
    items: [
      {
        title: "Cara Mengklaim Lisensi Free",
        content:
          "Masuk ke halaman produk template, klik tombol 'Claim Free License'. Masukkan email Anda dan kunci lisensi akan dikirimkan ke email dalam 1-2 menit.",
      },
      {
        title: "Mengaktifkan Lisensi",
        content:
          "Kunjungi halaman 'Verify License', masukkan kunci lisensi dan domain yang akan digunakan. Sistem akan memverifikasi dan mengaktifkan lisensi secara otomatis.",
      },
      {
        title: "Mengunduh Template",
        content:
          "Setelah lisensi terverifikasi, Anda dapat mengunduh file template dalam format ZIP. Ekstrak dan ikuti panduan instalasi yang disertakan.",
      },
    ],
  },
  {
    title: "Lisensi",
    items: [
      {
        title: "Jenis Lisensi",
        content:
          "Free: 1 proyek, branding footer wajib. Pro: 1 domain komersial, hapus branding. Agency: Multi-klien, aktivasi unlimited. Lifetime: Selamanya, update seumur hidup.",
      },
      {
        title: "Batasan Domain",
        content:
          "Lisensi Free & Pro hanya untuk 1 domain. Lisensi Agency memungkinkan unlimited domain. Lifetime tidak terbatas.",
      },
      {
        title: "Pembaruan Lisensi",
        content:
          "Lisensi Free tidak dapat di-upgrade. Pro dapat di-upgrade ke Agency. Hubungi kami untuk konversi lisensi.",
      },
    ],
  },
  {
    title: "API",
    items: [
      {
        title: "Generate License",
        content:
          "POST /api/license/generate - Menghasilkan kunci lisensi baru. Parameter: type (free/pro/agency), email, productId (opsional).",
      },
      {
        title: "Verify License",
        content:
          "POST /api/license/verify - Memverifikasi kunci lisensi. Parameter: key, domain (opsional). Mengembalikan status valid/invalid.",
      },
      {
        title: "Activate License",
        content:
          "POST /api/license/activate - Mengaktifkan lisensi pada domain. Parameter: key, domain, ipAddress (opsional).",
      },
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      {
        title: "Lisensi Tidak Valid",
        content:
          "Pastikan kunci lisensi diketik dengan benar (case-sensitive). Periksa apakah domain sesuai dengan yang didaftarkan. Hubungi dukungan jika masalah berlanjut.",
      },
      {
        title: "Gagal Mengunduh",
        content:
          "Pastikan lisensi sudah aktif dan terverifikasi. Cek koneksi internet. Coba gunakan browser berbeda atau mode incognito.",
      },
      {
        title: "Domain Mismatch",
        content:
          "Lisensi hanya berlaku untuk domain yang terdaftar. Untuk mengubah domain, hubungi tim dukungan dengan menyertakan email dan kunci lisensi.",
      },
    ],
  },
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("memulai");

  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <BookOpen className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              Dokumentasi <span className="gradient-text">Soraku</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Pelajari cara menggunakan lisensi, API, dan fitur Soraku Studio.
            </p>
          </div>

          {/* Section Buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {docsSections.map((section) => (
              <Button
                key={section.title}
                variant={
                  activeTab === section.title.toLowerCase()
                    ? "default"
                    : "outline"
                }
                onClick={() => setActiveTab(section.title.toLowerCase())}
              >
                {section.title}
              </Button>
            ))}
          </div>

          {/* Active Section Content */}
          {docsSections
            .filter((section) => section.title.toLowerCase() === activeTab)
            .map((section) => (
              <div key={section.title} className="space-y-6">
                {section.items.map((item, index) => (
                  <Card key={index} className="glass border-border rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Terminal className="text-primary h-5 w-5" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
