"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Target, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="text-primary h-5 w-5" />,
    title: "Keahlian Premium",
    description:
      "Setiap piksel berarti. Kami menghadirkan kode kelas produksi dan antarmuka presisi piksel.",
  },
  {
    icon: <Shield className="text-primary h-5 w-5" />,
    title: "Arsitektur Skalabel",
    description:
      "Dibangun untuk tumbuh bersama bisnis Anda dengan tumpukan teknologi modern dan mudah dipelihara.",
  },
  {
    icon: <Zap className="text-primary h-5 w-5" />,
    title: "Performa Utama",
    description:
      "Dioptimalkan untuk kecepatan dengan waktu muat sub-detik dan interaksi mulus.",
  },
  {
    icon: <Users className="text-primary h-5 w-5" />,
    title: "Dukungan Dedikasi",
    description:
      "Pemeliharaan dan dukungan berkelanjutan untuk menjaga produk digital Anda berjalan lancar.",
  },
  {
    icon: <Target className="text-primary h-5 w-5" />,
    title: "Berorientasi Hasil",
    description:
      "Fokus pada memberikan hasil bisnis yang terukur, bukan sekadar antarmuka yang cantik.",
  },
];

export function WhySection() {
  return (
    <section className="spacious-section bg-card/30" id="why">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Kenapa Rynex
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Dibangun Berbeda
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Kami menggabungkan keunggulan teknis dengan desain yang dipikirkan
            untuk menciptakan produk yang menonjol.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group rounded-2xl p-6"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
