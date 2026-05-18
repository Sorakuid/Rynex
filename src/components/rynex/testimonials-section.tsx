"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "RYNEX memberikan hasil yang luar biasa. Landing page kami memiliki konversi 3x lipat setelah mereka mendesain ulang. Tim yang sangat profesional.",
    author: "Ahmad Fauzi",
    role: "CEO, TechInnovate",
  },
  {
    quote:
      "Dashboard yang mereka bangun untuk tim kami benar-benar transformatif. Data kini mudah dipahami dan keputusan bisa diambil lebih cepat.",
    author: "Sara Wijaya",
    role: "COO, DataFlow Inc.",
  },
  {
    quote:
      "Proses kolaborasi yang sangat mulus. Mereka benar-benar memahami visi kami dan menerjemahkannya menjadi produk digital yang luar biasa.",
    author: "Bambang Prasetyo",
    role: "Founder, KreArt Studio",
  },
];

export function TestimonialsSection() {
  return (
    <section className="spacious-section bg-card/30" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Testimoni
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Kata Klien Kami
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Kepuasan klien adalah prioritas utama kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <Quote className="text-primary/30 mb-4 h-8 w-8" />
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-sm font-semibold">{item.author}</p>
                <p className="text-muted-foreground font-mono text-xs">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
