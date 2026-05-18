import {
  DollarSign,
  FileText,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Shield,
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

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <Shield className="text-primary mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-5xl font-bold">
              Kebijakan <span className="gradient-text">Privasi</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Terakhir diperbarui: 29 April 2026
            </p>
          </div>

          <div className="space-y-8">
            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Pengantar</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Selamat datang di Soraku Studio (&ldquo;kami&rdquo;,
                  &ldquo;kita&rdquo;, atau &ldquo;milik kita&rdquo;). Kami
                  berkomitmen untuk melindungi privasi dan keamanan data pribadi
                  Anda.
                </p>
                <p>
                  Kebijakan Privasi ini (&ldquo;Kebijakan&rdquo;) menjelaskan
                  bagaimana kami mengumpulkan, menggunakan, dan melindungi
                  informasi Anda saat menggunakan platform kami.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Informasi yang Kami Kumpulkan</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <h3 className="text-foreground font-semibold">
                  Informasi Personal
                </h3>
                <p>
                  Kami mengumpulkan informasi personal seperti nama, alamat
                  email, dan nomor telepon saat Anda mendaftar atau menghubungi
                  kami.
                </p>
                <h3 className="text-foreground font-semibold">Data Lisensi</h3>
                <p>
                  Kami menyimpan kunci lisensi, domain yang teraktivasi, dan
                  riwayat aktivasi untuk memastikan keaslian produk yang Anda
                  gunakan.
                </p>
                <h3 className="text-foreground font-semibold">Data Teknis</h3>
                <p>
                  Kami dapat mengumpulkan alamat IP, jenis browser, dan
                  informasi teknis lainnya untuk keperluan keamanan dan
                  analitik.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Bagaimana Kami Menggunakan Informasi</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                    <span>
                      Menyediakan dan memelihara layanan platform kami
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                    <span>
                      Mengirimkan email terkait lisensi dan pembaruan produk
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                    <span>
                      Merespons permintaan dukungan dan pertanyaan Anda
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                    <span>
                      Meningkatkan keamanan dan mencegah penyalahgunaan
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle>Kontak Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini,
                  silakan hubungi kami:
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="text-primary h-4 w-4" />
                    <span>hello@soraku.studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-primary h-4 w-4" />
                    <span>+62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary h-4 w-4" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
