"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Nexus Dashboard",
    category: "Dashboard",
    description:
      "Platform analitik real-time dengan visualisasi data interaktif dan alat kolaborasi tim.",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
  },
  {
    title: "Bloom Landing",
    category: "Landing Page",
    description:
      "Halaman peluncuran produk konversi tinggi dengan animasi imersif dan alur checkout mulus.",
    tags: ["React", "Framer Motion", "Stripe", "Vercel"],
  },
  {
    title: "Forge Platform",
    category: "Web App",
    description:
      "Sistem manajemen proyek full-stack dengan pembaruan real-time, berbagi file, dan alur kerja tim.",
    tags: ["Next.js", "WebSocket", "Prisma", "Tailwind"],
  },
  {
    title: "Apex Corporate",
    category: "Situs Perusahaan",
    description:
      "Website korporat kelas enterprise dengan dukungan multi-bahasa dan manajemen konten dinamis.",
    tags: ["Next.js", "MDX", "i18n", "Sanity"],
  },
];

export function PortfolioSection() {
  return (
    <section className="spacious-section bg-card/30" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Karya Unggulan
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Proyek Terbaru
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Setiap proyek mewakili komitmen kami terhadap kualitas dan presisi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group cursor-pointer rounded-2xl p-8"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  {project.category}
                </span>
                <ExternalLink className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary rounded-full px-3 py-1 font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/portfolio">
            <span className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase transition-colors">
              Lihat Portofolio Lengkap
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
