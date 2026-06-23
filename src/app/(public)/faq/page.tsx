"use client";

import {
  ChevronRight,
  FileText,
  HelpCircle,
  Mail,
  MessageSquare,
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

const faqItems = [
  {
    question: "Bagaimana cara mengklaim lisensi gratis?",
    answer:
      "Masuk ke halaman produk template, klik tombol 'Claim Free License', masukkan email Anda, dan kunci lisensi akan dikirimkan ke email Anda secara otomatis.",
  },
  {
    question: "Bagaimana cara mengaktifkan lisensi?",
    answer:
      "Setelah menerima kunci lisensi via email, masuk ke halaman 'Verify License', masukkan kunci Anda beserta domain yang akan digunakan. Sistem akan memverifikasi dan mengaktifkan lisensi secara otomatis.",
  },
  {
    question: "Bisakah saya menggunakan lisensi Pro untuk banyak klien?",
    answer:
      "Tidak. lisensi Pro hanya berlaku untuk 1 domain komersial. Untuk penggunaan multi-klien, silakan gunakan lisensi Agency yang memungkinkan aktivasi unlimited.",
  },
  {
    question: "Bagaimana jika saya lupa kunci lisensi?",
    answer:
      "Hubungi tim dukungan kami di hello@soraku.studio dengan menyebutkan email yang digunakan saat klaim lisensi. Kami akan mengirimkan kembali kunci Anda.",
  },
  {
    question: "Apakah ada garansi uang kembali?",
    answer:
      "Ya, kami memberikan garansi uang kembali selama 30 hari untuk pembelian lisensi Pro dan Agency. Jika Anda tidak puas dengan produk kami, hubungi kami untuk pengembalian dana.",
  },
  {
    question: "Bagaimana cara memesan jasa pembuatan website kustom?",
    answer:
      "Masuk ke halaman 'Custom Project', isi formulir permintaan dengan detail proyek Anda. Tim kami akan menghubungi Anda dalam 24 jam untuk diskusi lebih lanjut.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <HelpCircle className="text-primary mx-auto mb-4 h-12 w-12 md:h-16 md:w-16" />
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              FAQ - <span className="gradient-text">Tanya Jawab</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Temukan jawaban atas pertanyaan yang sering diajukan seputar
              Soraku Studio.
            </p>
          </div>

          <div className="mb-12 space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="glass border-border overflow-hidden rounded-2xl"
              >
                <CardHeader
                  className="hover:bg-accent/50 cursor-pointer transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    <ChevronRight
                      className={`text-muted-foreground h-5 w-5 transition-transform ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                {openIndex === index && (
                  <CardContent className="text-muted-foreground">
                    <p>{item.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-primary h-5 w-5" />
                  Masih Butuh Bantuan?
                </CardTitle>
                <CardDescription>
                  Tim dukungan kami siap membantu Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Hubungi Kami
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass border-border rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-primary h-5 w-5" />
                  Dokumentasi
                </CardTitle>
                <CardDescription>
                  Pelajari cara menggunakan lisensi dan fitur lainnya.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/docs">Baca Dokumentasi</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
