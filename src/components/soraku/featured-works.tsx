"use client";

import { motion } from "framer-motion";

import { StudioShowcase } from "./StudioShowcase";

export function FeaturedWorks() {
  return (
    <section className="spacious-section section-divider scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Portofolio
          </span>
          <h2 className="text-foreground mt-3 mb-4 text-3xl font-bold md:text-5xl">
            Proyek <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Pilihan proyek yang menunjukkan keahlian dan kapabilitas kami.
          </p>
        </motion.div>

        <StudioShowcase />
      </div>
    </section>
  );
}
