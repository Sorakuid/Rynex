"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Landing page kami memiliki konversi 3x lipat setelah didesain ulang oleh RYNEX. Tim yang sangat profesional dan responsif.",
    author: "Ahmad Fauzi",
    role: "CEO, TechInnovate",
    rating: 5,
  },
  {
    quote:
      "Dashboard yang mereka bangun untuk tim kami benar-benar transformatif. Data kini mudah dipahami dan keputusan bisa diambil lebih cepat.",
    author: "Sara Wijaya",
    role: "COO, DataFlow Inc.",
    rating: 5,
  },
  {
    quote:
      "Proses kolaborasi yang sangat mulus. Mereka benar-benar memahami visi kami dan menerjemahkannya menjadi produk digital yang luar biasa.",
    author: "Bambang Prasetyo",
    role: "Founder, KreArt Studio",
    rating: 5,
  },
  {
    quote:
      "Website perusahaan kami kini tampil jauh lebih profesional. Peningkatan traffic organik terlihat signifikan dalam 2 bulan pertama.",
    author: "Dewi Lestari",
    role: "Marketing Lead, GrowLab",
    rating: 5,
  },
  {
    quote:
      "Sistem custom yang mereka buat mengotomatiskan workflow kami. Sekarang tim bisa fokus pada hal yang benar-benar penting.",
    author: "Rudi Hartono",
    role: "CTO, BuildCore",
    rating: 4,
  },
  {
    quote:
      "Komunikasi yang transparan dan deliverable yang konsisten. Ini dia partner digital yang selama ini kami cari.",
    author: "Maya Indah",
    role: "Product Manager, FinSolutions",
    rating: 5,
  },
  {
    quote:
      "Mereka tidak sekadar membuat website, tapi benar-benar memikirkan strategi di baliknya. Hasilnya jauh di atas ekspektasi.",
    author: "Dimas Ardiansyah",
    role: "Founder, EduStart",
    rating: 5,
  },
  {
    quote:
      "Respon cepat, kode berkualitas, dan desain yang memukau. Kolaborasi yang sangat menyenangkan dari awal hingga akhir.",
    author: "Putri Ayu",
    role: "Design Lead, CreativeSpace",
    rating: 5,
  },
  {
    quote:
      "Integrasi sistem yang rumit bisa diselesaikan dengan rapi dan terdokumentasi dengan baik. Tim teknisnya sangat kompeten.",
    author: "Andi Saputra",
    role: "Engineering Manager, TechCorp",
    rating: 4,
  },
  {
    quote:
      "Portfolio template yang kami beli kualitasnya amazing. Tinggal diisi konten, langsung jadi. Value for money banget.",
    author: "Rina Fitriani",
    role: "Freelancer, Creative ID",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-primary text-primary" : "fill-none text-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="spacious-section relative overflow-hidden"
      id="testimonials"
    >
      <div className="mx-auto mb-14 max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Testimoni
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Kata Klien Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Kepuasan klien adalah prioritas utama kami.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="from-background pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l to-transparent" />

        <div className="group flex overflow-hidden">
          <div className="animate-marquee-testimonial flex gap-6 px-4 group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div key={`${item.author}-${i}`} className="w-[380px] shrink-0">
                <div className="glass-card hover:border-primary/20 h-full rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(79,163,209,0.08)]">
                  <div className="mb-4 flex items-center justify-between">
                    <Quote className="text-primary/20 h-6 w-6" />
                    <StarRating rating={item.rating} />
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-sm font-semibold">{item.author}</p>
                    <p className="text-muted-foreground font-mono text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
