"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="spacious-section scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card relative overflow-hidden rounded-3xl p-12 text-center md:p-20"
        >
          <div className="via-primary/50 absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            >
              <Sparkles className="text-primary h-8 w-8" />
            </motion.div>
            <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
              Siap Membangun{" "}
              <span className="gradient-text">Masa Depan Digital</span>?
            </h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed">
              Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa. Baik
              website, dashboard, atau produk digital lengkap kami wujudkan visi
              Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/custom-project">
                <Button size="lg" className="soft-shadow px-8 py-6 text-base">
                  Mulai Proyek
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
