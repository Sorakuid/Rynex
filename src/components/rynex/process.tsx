"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Riset mendalam tentang bisnis, audiens, dan kompetitor untuk membangun fondasi strategi yang kuat.",
    details: [
      "Analisis bisnis & kompetitor",
      "Riset audiens target",
      "Penentuan scope proyek",
    ],
  },
  {
    number: "02",
    title: "Architecture",
    desc: "Perancangan struktur informasi, wireframe, dan arsitektur teknis sebagai cetak biru proyek.",
    details: [
      "Information architecture",
      "Wireframe & user flow",
      "Tech stack selection",
    ],
  },
  {
    number: "03",
    title: "Build",
    desc: "Eksekusi desain presisi piksel dan pengembangan kode berkualitas tinggi secara iteratif.",
    details: [
      "UI/UX pixel-perfect design",
      "Front-end development",
      "Back-end integration",
    ],
  },
  {
    number: "04",
    title: "Launch",
    desc: "Deployment terukur dengan QA menyeluruh, optimasi performa, dan monitoring pasca-luncur.",
    details: [
      "Quality assurance",
      "Performance optimization",
      "Deployment & monitoring",
    ],
  },
  {
    number: "05",
    title: "Optimize",
    desc: "Pemeliharaan berkelanjutan dengan pembaruan, analitik, dan peningkatan berbasis data.",
    details: [
      "Performance analytics",
      "Iterative improvements",
      "Ongoing support",
    ],
  },
];

function ProcessStep({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative pb-16 pl-12 last:pb-0"
    >
      <div className="bg-primary/10 border-primary/30 absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm">
        <span className="text-primary font-mono text-xs font-bold">
          {step.number}
        </span>
      </div>

      {!isLast && (
        <div className="from-primary/30 via-primary/10 absolute top-9 left-4 h-[calc(100%-1rem)] w-px bg-gradient-to-b to-transparent" />
      )}

      <div className="hover:border-primary/20 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(79,163,209,0.06)]">
        <h3 className="group-hover:text-primary mb-1 text-xl font-bold transition-colors">
          {step.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {step.desc}
        </p>
        <ul className="space-y-1.5">
          {step.details.map((detail) => (
            <li
              key={detail}
              className="text-muted-foreground/60 flex items-center gap-2 font-mono text-xs"
            >
              <span className="bg-primary/20 h-1 w-1 rounded-full" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  return (
    <section className="spacious-section relative" id="process">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
                Cara Kami Bekerja
              </span>
              <h2 className="mt-4 mb-6 text-2xl leading-[1.05] font-bold md:text-4xl md:text-5xl lg:text-6xl">
                Alur Kerja
                <br />
                <span className="gradient-text">Kami</span>
              </h2>
              <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
                Alur kerja terbukti dari konsep hingga peluncuran. Setiap tahap
                dirancang untuk memberikan hasil maksimal.
              </p>

              <div className="text-muted-foreground mt-8 flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                <span className="bg-primary h-2 w-2 rounded-full" />
                {steps.length} Tahapan Terstruktur
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
