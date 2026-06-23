"use client";

import { motion } from "framer-motion";
import { Calendar, Eye } from "lucide-react";
import Link from "next/link";

import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  realtimeViews?: number;
}

export function BlogCard({ post, index, realtimeViews }: BlogCardProps) {
  const views = realtimeViews ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group border-border/40 bg-card hover:border-primary/20 hover:bg-card/80 flex h-full flex-col overflow-hidden rounded-2xl border transition-[background-color,border-color] duration-300"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="bg-primary/90 text-primary-foreground absolute top-3 left-3 max-w-[calc(100%-24px)] truncate rounded-full px-3 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase">
            {post.category}
          </span>
          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur-sm">
            <Eye className="h-3 w-3" />
            {views}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-3 md:p-5">
          <h2 className="group-hover:text-primary mb-1.5 text-xs leading-snug font-semibold transition-colors md:text-sm">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-3 line-clamp-2 flex-1 text-[11px] leading-relaxed md:text-xs">
            {post.excerpt}
          </p>

          <div className="text-muted-foreground/60 border-border/40 flex items-center gap-3 border-t pt-3 font-mono text-[10px] tracking-wider uppercase md:pt-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-2.5 w-2.5 md:h-3 md:w-3" />
              {post.date}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
