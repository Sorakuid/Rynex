"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code, Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="text-primary h-5 w-5" />,
    title: "Discovery",
    description:
      "Kami mempelajari bisnis, tujuan, dan visi Anda melalui riset mendalam dan sesi strategi.",
    number: "01",
  },
  {
    icon: <ClipboardList className="text-primary h-5 w-5" />,
    title: "Perencanaan",
    description:
      "Pembuatan peta jalan strategis dengan arsitektur informasi, wireframe, dan perencanaan teknis.",
    number: "02",
  },
  {
    icon: <Palette className="text-primary h-5 w-5" />,
    title: "Desain",
    description:
      "Desain UI/UX presisi piksel dengan interaksi yang dipikirkan dan arahan visual premium.",
    number: "03",
  },
  {
    icon: <Code className="text-primary h-5 w-5" />,
    title: "Pengembangan",
    description:
      "Kode bersih dan berperforma tinggi dengan framework modern, pengujian menyeluruh, dan tinjauan iteratif.",
    number: "04",
  },
  {
    icon: <Rocket className="text-primary h-5 w-5" />,
    title: "Peluncuran",
    description:
      "Deployment dengan monitoring, optimasi, dan dukungan berkelanjutan untuk kesuksesan jangka panjang.",
    number: "05",
  },
];

export function ProcessSection() {
  return (
    <section className="spacious-section" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Cara Kami Bekerja
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Alur Kerja Kami
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Alur kerja terbukti dari konsep hingga peluncuran.
          </p>
        </motion.div>

        <div className="relative">
          <div className="bg-border/50 absolute top-0 bottom-0 left-8 hidden w-px -translate-x-1/2 md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col items-start gap-6 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="glass-card inline-block max-w-md rounded-2xl p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-primary font-mono text-xs">
                          {step.number}
                        </span>
                        <h3 className="text-base font-semibold">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 border-primary absolute left-1/2 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 md:flex">
                  <div className="bg-primary h-2 w-2 rounded-full" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
