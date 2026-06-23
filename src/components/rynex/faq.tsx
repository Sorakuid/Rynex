"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Bagaimana alur kerja di RYNEX?",
    answer:
      "Mulai dengan sesi discovery untuk memahami kebutuhan, lalu wireframe, desain, pengembangan iteratif, QA, dan deployment. Dukungan purna-jual tersedia.",
  },
  {
    question: "Berapa kali saya bisa revisi?",
    answer:
      "Landing page 2 putaran, website perusahaan 3 putaran. Revisi tambahan bisa disepakati di awal.",
  },
  {
    question: "Berapa lama waktu pengerjaan?",
    answer:
      "Landing page 3-7 hari, website 1-2 minggu, dashboard 2-4 minggu. Timeline pasti diberikan setelah diskusi.",
  },
  {
    question: "Bagaimana sistem pricing?",
    answer:
      "Landing page mulai Rp 2.500.000, website mulai Rp 5.000.000, dashboard mulai Rp 8.000.000. Pembayaran 50% awal, 50% setelah selesai.",
  },
  {
    question: "Apakah ada layanan maintenance?",
    answer:
      "Ya, paket maintenance bulanan tersedia — mencakup update konten, monitoring keamanan, backup, dan dukungan teknis.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onClick}
        className={cn(
          "group bg-card w-full rounded-2xl border p-3 text-left transition-[background-color,border-color] duration-300 md:p-5",
          isOpen ? "border-primary/20" : "border-border hover:border-border/80",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-medium md:text-base">
            {faq.question}
          </span>
          <ChevronDown
            className={cn(
              "text-muted-foreground mt-0.5 h-3.5 w-3.5 shrink-0 transition-[transform,color] duration-300 md:h-4 md:w-4",
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
              <p className="text-muted-foreground border-border/50 mt-3 border-t pt-3 text-xs leading-relaxed md:mt-4 md:pt-4 md:text-sm">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="spacious-section" id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center md:mb-14"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="mt-4 mb-4 text-xl font-bold md:text-4xl">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-lg">
            Jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2 md:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
