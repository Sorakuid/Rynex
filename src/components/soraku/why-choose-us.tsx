"use client";

import { motion } from "framer-motion";
import { Cpu, Expand, Globe, Sparkles, Users } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="text-primary h-6 w-6" />,
    title: "Studio Kreatif Independen",
    description:
      "Kami beroperasi dengan kelincahan studio butik yang didukung oleh visi ekosistem Soraku.",
  },
  {
    icon: <Globe className="text-primary h-6 w-6" />,
    title: "Visi Ekosistem",
    description:
      "Setiap proyek terhubung dengan visi lebih besar tentang inovasi teknologi kreatif berbasis komunitas.",
  },
  {
    icon: <Cpu className="text-primary h-6 w-6" />,
    title: "Teknologi Modern",
    description:
      "Kami menggunakan alat dan framework terkini untuk membangun solusi digital yang siap masa depan.",
  },
  {
    icon: <Expand className="text-primary h-6 w-6" />,
    title: "Solusi Skalabel",
    description:
      "Dirancang untuk tumbuh bersama bisnis Anda. Dari startup hingga enterprise, kami membangun untuk skala.",
  },
  {
    icon: <Users className="text-primary h-6 w-6" />,
    title: "Inovasi Berbasis Komunitas",
    description:
      "Berakar dari Komunitas Soraku, kami menghadirkan kreativitas kolektif ke setiap proyek.",
  },
];

export function WhyChooseUs() {
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
            Mengapa Soraku Studio
          </span>
          <h2 className="text-foreground mt-3 mb-4 text-3xl font-bold md:text-5xl">
            Dibangun Berbeda.{" "}
            <span className="gradient-text">Dibangun Lebih Baik.</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Yang membedakan kami di lanskap teknologi kreatif.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group rounded-2xl p-7"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-foreground group-hover:text-primary mb-2 text-lg font-semibold transition-colors duration-300">
                {reason.title}
              </h3>
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
