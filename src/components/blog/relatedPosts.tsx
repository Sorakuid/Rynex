"use client";

import { motion } from "framer-motion";

import { posts } from "@/data/blog";

import { BlogCard } from "./card";

interface RelatedPostsProps {
  currentSlug: string;
  category?: string;
}

export function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  const related = posts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => !category || p.category === category)
    .slice(0, 6);

  if (related.length === 0) return null;

  return (
    <section className="border-border/40 border-t pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-xl font-bold">
          {category ? `Artikel ${category} Lainnya` : "Artikel Terkait"}
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {related.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
