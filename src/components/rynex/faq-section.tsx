"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Bagaimana alur kerja di RYNEX?",
    answer:
      "Kami memulai dengan sesi discovery untuk memahami bisnis dan tujuan Anda. Setelah itu, kami menyusun proposal, wireframe, dan timeline. Proses desain dan pengembangan dilakukan secara iteratif dengan feedback rutin. Setelah selesai, kami melakukan QA menyeluruh sebelum deployment. Dukungan purna-jual tersedia untuk memastikan semuanya berjalan lancar.",
  },
  {
    question: "Berapa kali saya bisa revisi?",
    answer:
      "Setiap paket menyertakan siklus revisi tertentu. Landing page mencakup 2 putaran revisi, website perusahaan 3 putaran, dan proyek kustom disesuaikan dengan kompleksitas. Kami bekerja secara iteratif — Anda bisa memberikan feedback kapan saja selama proses, dan kami akan merespons dalam 1x24 jam. Tidak ada batasan kaku selama masih dalam scope awal.",
  },
  {
    question: "Berapa lama waktu pengerjaan?",
    answer:
      "Tergantung kompleksitas: landing page 3-7 hari, website perusahaan 1-2 minggu, dashboard 2-4 minggu, dan sistem kustom 4-8 minggu. Timeline pasti akan kami berikan di awal setelah sesi discovery. Kami juga menawarkan opsi express untuk deadline yang lebih ketat dengan biaya tambahan.",
  },
  {
    question: "Bagaimana sistem pricing?",
    answer:
      "Harga bervariasi berdasarkan kompleksitas dan fitur. Landing page mulai dari Rp 2.500.000, website perusahaan mulai Rp 5.000.000, dan dashboard mulai Rp 8.000.000. Untuk proyek kustom, kami memberikan quote setelah diskusi kebutuhan. Pembayaran dilakukan secara bertahap: 50% di awal, 50% setelah selesai. Kami menerima transfer bank dan metode pembayaran digital.",
  },
  {
    question: "Apakah ada layanan maintenance?",
    answer:
      "Ya, kami menyediakan paket maintenance bulanan yang mencakup pembaruan konten, monitoring keamanan, backup rutin, optimasi performa, dan dukungan teknis. Untuk proyek tertentu, hosting 1 tahun pertama sudah termasuk. Setelah itu, Anda bisa memilih paket maintenance sesuai kebutuhan atau beralih ke self-managed.",
  },
  {
    question: "Bagaimana sistem lisensi template?",
    answer:
      "Template yang kami jual menggunakan sistem lisensi per-domain. Satu lisensi untuk satu domain. Lisensi bisa di-upgrade jika diperlukan. Tersedia pilihan Basic (1 domain), Pro (3 domain), Agency (10 domain), dan Lifetime (unlimited). Lisensi dilindungi dengan enkripsi dan verifikasi online. Pembelian template sudah termasuk source code dan dokumentasi.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, Dana), dan pembayaran melalui payment gateway. Untuk klien luar negeri, kami juga menerima transfer internasional. Pembayaran bisa dicicil dengan skema 50:50 atau disesuaikan untuk proyek besar. Invoice resmi tersedia untuk keperluan akuntansi Anda.",
  },
  {
    question: "Apakah saya memiliki source code penuh?",
    answer:
      "Ya, untuk proyek kustom, source code sepenuhnya milik Anda setelah pelunasan. Untuk template, source code diberikan sesuai lisensi yang dibeli. Tidak ada lock-in — kode dikirimkan lengkap dengan dokumentasi sehingga Anda atau tim Anda bisa mengembangkannya lebih lanjut. Kami hanya meminta credit link di footer yang bisa dinegosiasikan.",
  },
  {
    question: "Teknologi apa yang digunakan untuk deployment?",
    answer:
      "Kami menggunakan Vercel untuk front-end dan Neon PostgreSQL untuk database. Deployment dilakukan dengan CI/CD otomatis — setiap perubahan langsung terdeploy setelah melewati testing. Jika Anda sudah memiliki infrastruktur sendiri, kami bisa menyesuaikan. Kami juga menyediakan staging environment untuk preview sebelum go-live.",
  },
  {
    question: "Apakah ada dukungan setelah peluncuran?",
    answer:
      "Tentu. Setiap proyek mencakup masa dukungan 30 hari setelah launch untuk memastikan semuanya berjalan optimal. Setelah itu, Anda bisa mengambil paket maintenance bulanan. Dukungan mencakup perbaikan bug, assistensi teknis, konsultasi pengembangan fitur, dan prioritas respons untuk masalah kritis. Tim kami siap membantu via WhatsApp, email, atau project management tool.",
  },
];

const leftFaqs = faqs.slice(0, 5);
const rightFaqs = faqs.slice(5, 10);

function FAQColumn({
  items,
  openIndex,
  setOpenIndex,
  columnIndex,
  startIndex,
}: {
  items: typeof faqs;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
  columnIndex: number;
  startIndex: number;
}) {
  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const globalIndex = startIndex + i;
        const isOpen = openIndex === globalIndex;
        return (
          <motion.div
            key={globalIndex}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.4,
              delay: (startIndex + i) * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
              className={cn(
                "group w-full rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-left transition-all duration-300",
                isOpen
                  ? "border-primary/20 bg-white/[0.04] shadow-[0_4px_24px_rgba(79,163,209,0.06)]"
                  : "hover:border-white/10 hover:bg-white/[0.03]",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex gap-3 text-sm font-medium">
                  <span className="text-primary/40 mt-0.5 font-mono text-xs">
                    {String(globalIndex + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "text-muted-foreground mt-0.5 h-4 w-4 shrink-0 transition-all duration-300",
                    isOpen && "text-primary rotate-180",
                  )}
                />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="spacious-section" id="faq">
      <div className="container mx-auto max-w-6xl px-4">
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

        <div className="hidden gap-6 md:grid md:grid-cols-2">
          <FAQColumn
            items={leftFaqs}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnIndex={0}
            startIndex={0}
          />
          <FAQColumn
            items={rightFaqs}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnIndex={1}
            startIndex={5}
          />
        </div>

        <div className="space-y-3 md:hidden">
          <FAQColumn
            items={faqs}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnIndex={0}
            startIndex={0}
          />
        </div>
      </div>
    </section>
  );
}
