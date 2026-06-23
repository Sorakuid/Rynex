"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

import { projects } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="spacious-section bg-card/30" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Karya Unggulan
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Proyek Terbaru
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Setiap proyek mewakili komitmen kami terhadap kualitas dan presisi.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group hover:border-primary/20 flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-[background-color,border-color] duration-300 hover:bg-white/[0.04]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="bg-primary/90 text-primary-foreground absolute top-3 left-3 max-w-[calc(100%-24px)] truncate rounded-full px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                    <Eye className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <h3 className="group-hover:text-primary mb-2 text-sm leading-snug font-semibold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 flex-1 text-xs leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
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
