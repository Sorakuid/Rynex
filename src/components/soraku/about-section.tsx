"use client";

import { motion } from "framer-motion";
import { AboutUsPage } from "undraw-react";

export function AboutSection() {
  return (
    <section className="spacious-section section-divider scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="from-primary/20 absolute inset-0 rounded-3xl bg-gradient-to-tl to-transparent blur-3xl" />
              <div className="animate-float relative">
                <AboutUsPage color="#4FA3D1" size={380} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Tentang
            </span>
            <h2 className="text-foreground mt-3 mb-6 text-3xl font-bold md:text-5xl">
              Lebih dari Studio
              <br />
              <span className="gradient-text">Inisiatif Kreatif</span>
            </h2>

            <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
              <p>
                Soraku Studio adalah inisiatif bisnis independen di bawah
                ekosistem Soraku Community, dikelola secara otonom untuk
                menghadirkan solusi teknologi kreatif kelas dunia. Kami
                beroperasi dengan kebebasan studio butik sambil terhubung dengan
                visi komunitas yang lebih besar.
              </p>
              <p>
                Misi kami adalah menjembatani kesenjangan antara visi kreatif
                dan eksekusi teknis. Setiap proyek adalah kesempatan untuk
                mendorong batasan, menjelajahi kemungkinan baru, dan memberikan
                hasil yang berdampak abadi.
              </p>
              <p>
                Dibangun oleh kreator, untuk kreator. Di Soraku Studio, kami
                tidak sekadar membangun produk; kami membangun pengalaman yang
                beresonansi.
              </p>
            </div>

            <div className="border-border/50 mt-10 grid grid-cols-3 gap-8 border-t pt-8">
              {[
                { value: "2024", label: "Berdiri" },
                { value: "50+", label: "Proyek" },
                { value: "100%", label: "Dedikasi" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-foreground block text-2xl font-bold">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
