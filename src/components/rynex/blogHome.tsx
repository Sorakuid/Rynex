"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { BlogCard } from "@/components/blog/card";
import { posts } from "@/data/blog";

export function BlogHomeSection() {
  const latest = posts.slice(0, 3);

  return (
    <section className="spacious-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-12"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Blog
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Wawasan &<span className="gradient-text"> Artikel</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Artikel, panduan, dan wawasan seputar pengembangan web, desain
            digital, dan strategi pertumbuhan.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {latest.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase transition-colors"
          >
            Lihat Semua Artikel
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
