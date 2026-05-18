"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan sebuah proyek?",
    answer:
      "Tergantung kompleksitas proyek. Landing page biasanya 3-7 hari, website perusahaan 1-2 minggu, dan sistem kustom 3-8 minggu. Kami selalu memberikan estimasi waktu yang jelas di awal.",
  },
  {
    question: "Apakah saya perlu menyiapkan konten?",
    answer:
      "Kami membantu menyusun konten jika diperlukan. Namun, untuk hasil terbaik, kami merekomendasikan klien menyiapkan teks, gambar merek, dan panduan gaya yang sudah ada.",
  },
  {
    question: "Apakah situs saya akan responsif di mobile?",
    answer:
      "Tentu. Semua proyek kami dibangun dengan pendekatan mobile-first dan diuji di berbagai perangkat dan ukuran layar untuk memastikan pengalaman optimal.",
  },
  {
    question: "Apakah saya mendapatkan hosting setelah selesai?",
    answer:
      "Kami menyertakan hosting 1 tahun untuk paket tertentu. Untuk paket lain, kami membantu setup hosting di platform pilihan Anda seperti Vercel, Netlify, atau penyedia lainnya.",
  },
  {
    question: "Bisakah saya meminta revisi?",
    answer:
      "Ya, setiap paket mencakup siklus revisi tertentu. Kami bekerja secara iteratif dengan feedback Anda untuk memastikan hasil akhir sesuai dengan visi Anda.",
  },
  {
    question: "Apakah ada dukungan setelah peluncuran?",
    answer:
      "Ya, kami menyediakan dukungan pemeliharaan berkelanjutan. Mulai dari pembaruan konten, perbaikan bug, hingga optimasi performa sesuai kebutuhan Anda.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="spacious-section" id="faq">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="glass w-full rounded-2xl p-5 text-left transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-300",
                      openIndex === i && "rotate-180",
                    )}
                  />
                </div>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
