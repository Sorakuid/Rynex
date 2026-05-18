import { AlertTriangle, CheckCircle, FileText, Scale } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TosPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <FileText className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-5xl font-bold">
              Syarat & <span className="gradient-text">Ketentuan</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Terakhir diperbarui: 29 April 2026
            </p>
          </div>

          <div className="space-y-8">
            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Penerimaan Syarat</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Dengan mengakses dan menggunakan layanan Soraku Studio
                  (&ldquo;Layanan&rdquo;), Anda setuju untuk terikat oleh Syarat
                  dan Ketentuan ini (&ldquo;TOS&rdquo;). Mohon baca dengan
                  teliti.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Akun Pengguna</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Untuk menggunakan Layanan kami, Anda mungkin perlu membuat
                  akun. Anda bertanggung jawab penuh atas keamanan akun Anda dan
                  aktivitas yang terjadi di bawah akun tersebut.
                </p>
                <p>
                  Anda setuju untuk segera memberitahu kami jika ada penggunaan
                  tidak sah atau pelanggaran keamanan lainnya pada akun Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Lisensi Produk</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <h3 className="text-foreground font-semibold">Jenis Lisensi</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                    <div>
                      <strong>Free License:</strong> 1 proyek, branding footer
                      wajib, dukungan komunitas.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                    <div>
                      <strong>Pro License:</strong> 1 domain komersial, hapus
                      branding, pembaruan penuh.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                    <div>
                      <strong>Agency License:</strong> Multi-klien, aktivasi
                      unlimited, white-label siap.
                    </div>
                  </li>
                </ul>
                <p className="mt-4">
                  Pelanggaran ketentuan lisensi dapat mengakibatkan pencabutan
                  akses tanpa pengembalian dana.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Pembatasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Soraku Studio tidak akan bertanggung jawab atas kerugian tidak
                  langsung, insidental, khusus, atau konsekuensial yang timbul
                  dari penggunaan Layanan kami.
                </p>
                <p>
                  Kami menyediakan Layanan &ldquo;sebagaimana adanya&rdquo;
                  tanpa jaminan apa pun, baik tersurat maupun tersirat.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl border-yellow-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Penghentian Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Kami berhak menghentikan atau menangguhkan akun Anda jika
                  terjadi pelanggaran terhadap Syarat dan Ketentuan ini,
                  termasuk penyalahgunaan lisensi.
                </p>
              </CardContent>
            </Card>

            <div className="pt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Hubungi Kami untuk Klarifikasi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
