"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="text-primary h-6 w-6" />,
    title: "Penemuan",
    description:
      "Kami mempelajari bisnis, tujuan, dan visi Anda. Riset mendalam untuk memahami apa yang membuat proyek Anda unik.",
    number: "01",
  },
  {
    icon: <ClipboardList className="text-primary h-6 w-6" />,
    title: "Perencanaan",
    description:
      "Pembuatan peta jalan strategis. Arsitektur informasi, wireframe, dan perencanaan teknis untuk eksekusi yang lancar.",
    number: "02",
  },
  {
    icon: <Palette className="text-primary h-6 w-6" />,
    title: "Desain",
    description:
      "Desain visual yang mengkomunikasikan merek Anda. Desain UI/UX iteratif dengan putaran umpan balik rutin.",
    number: "03",
  },
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Pengembangan",
    description:
      "Kode yang bersih dan mudah dirawat menggunakan framework modern. Integrasi berkelanjutan dan jaminan kualitas.",
    number: "04",
  },
  {
    icon: <Rocket className="text-primary h-6 w-6" />,
    title: "Peluncuran",
    description:
      "Deployment, optimasi, dan dukungan berkelanjutan. Proyek Anda diluncurkan dengan percaya diri.",
    number: "05",
  },
];

export function ProcessSection() {
  return (
    <section className="spacious-section section-divider bg-card/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Proses Kami
          </span>
          <h2 className="text-foreground mt-3 mb-4 text-3xl font-bold md:text-5xl">
            Cara Kami <span className="gradient-text">Bekerja</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Metodologi terbukti yang menjamin kualitas, transparansi, dan
            pengiriman tepat waktu.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-border/50 absolute top-0 bottom-0 left-8 hidden w-px md:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-6 md:gap-10"
              >
                <div className="glass border-primary/20 z-10 hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl md:flex">
                  <span className="text-primary text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                <div className="glass-card flex-1 rounded-2xl p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg md:hidden">
                      {step.icon}
                    </div>
                    <h3 className="text-foreground text-xl font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
