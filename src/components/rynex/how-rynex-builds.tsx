"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Discovery",
    subtitle: "Memahami kebutuhan secara presisi",
    desc: "Kami memulai dengan memahami kebutuhan bisnis, target pengguna, tujuan digital, dan ruang lingkup proyek secara menyeluruh.",
    details: [
      "konsultasi awal",
      "requirement gathering",
      "objective mapping",
      "scope definition",
    ],
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
    title: "System Blueprint",
    subtitle: "Menyusun struktur sebelum membangun",
    desc: "Setiap proyek dirancang melalui perencanaan terstruktur, mulai dari sitemap, wireframe, user flow, hingga arsitektur teknis.",
    details: [
      "sitemap",
      "wireframe",
      "user flow",
      "database planning",
      "architecture mapping",
    ],
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3h.01" />
        <path d="M12 9h.01" />
        <path d="M12 15h.01" />
        <path d="M12 21h.01" />
      </svg>
    ),
    title: "Interface Craft",
    subtitle: "Merancang pengalaman visual yang presisi",
    desc: "Kami merancang antarmuka modern dengan fokus pada hierarki visual, interaksi intuitif, dan pengalaman pengguna yang optimal.",
    details: [
      "interface design",
      "responsive behavior",
      "motion planning",
      "interaction refinement",
    ],
  },
  {
    number: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Precision Build",
    subtitle: "Implementasi dengan standar production-ready",
    desc: "Desain diterjemahkan menjadi sistem modular, cepat, responsif, dan scalable menggunakan teknologi modern.",
    details: [
      "frontend engineering",
      "backend integration",
      "optimization",
      "quality assurance",
    ],
  },
  {
    number: "05",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Launch & Evolution",
    subtitle: "Deploy, aktivasi, dan dukungan berkelanjutan",
    desc: "Website diluncurkan dengan kesiapan penuh, termasuk deployment, licensing setup, dokumentasi, dan dukungan pasca-rilis.",
    details: ["deployment", "activation", "documentation", "support"],
  },
];

const stepCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function HowRynexBuilds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="spacious-section relative"
      id="how-rynex-builds"
      ref={containerRef}
    >
      <div className="from-primary/[0.02] absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
      <div className="bg-primary/[0.015] absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full blur-[180px]" />
      <div className="bg-primary/[0.01] absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
                Cara Kami Membangun
              </span>
              <h2 className="mt-4 mb-6 text-4xl leading-[1.05] font-bold md:text-5xl lg:text-6xl">
                How Rynex
                <br />
                <span className="gradient-text">Builds</span>
              </h2>
              <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
                Setiap proyek dibangun melalui proses terstruktur untuk
                memastikan hasil yang presisi, scalable, dan siap berkembang.
              </p>

              <div className="mt-8 hidden items-center gap-3 lg:flex">
                <div className="bg-border/30 h-1 w-28 overflow-hidden rounded-full">
                  <motion.div
                    className="bg-primary h-full w-full rounded-full"
                    style={{ width: progressHeight }}
                  />
                </div>
                <span className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                  Progress
                </span>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:col-span-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stepCardVariants}
                className="group relative pb-14 last:pb-0"
              >
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/5 border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/10 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500">
                      <span className="text-primary">{step.icon}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="from-primary/20 via-primary/10 mt-2 w-px flex-1 bg-gradient-to-b to-transparent" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="text-muted-foreground/20 group-hover:text-primary/20 font-mono text-4xl leading-none font-black tracking-tighter transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <div className="hover:border-primary/20 relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(79,163,209,0.06)] sm:p-7">
                      <div className="from-primary/[0.015] pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <h3 className="group-hover:text-primary text-xl font-bold transition-colors sm:text-2xl">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                          {step.subtitle}
                        </p>
                        <p className="text-muted-foreground/60 mt-4 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                        <div className="bg-border/20 mt-5 h-px" />
                        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="text-muted-foreground/60 flex items-center gap-2 font-mono text-xs"
                            >
                              <span className="bg-primary/30 h-1 w-1 rounded-full" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
