"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BlogCard } from "@/components/blog/card";
import { posts } from "@/data/blog";

export default function BlogPage() {
  const [liveViews, setLiveViews] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/blog/views")
      .then((res) => res.json())
      .then((data) => setLiveViews(data.views ?? {}))
      .catch(() => {});

    const source = new EventSource("/api/blog/views/stream");

    source.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.views && typeof data.views === "object") {
          setLiveViews(data.views);
        }
      } catch {}
    };

    source.onerror = () => source.close();
    return () => source.close();
  }, []);

  return (
    <div className="pt-28">
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Blog
            </span>
            <h1 className="mt-4 mb-3 text-xl font-bold md:text-4xl">
              Wawasan &
              <br />
              <span className="gradient-text">Artikel</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xs md:text-base">
              Artikel, panduan, dan wawasan seputar pengembangan web, desain
              digital, dan strategi pertumbuhan.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
            {posts.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={post}
                index={i}
                realtimeViews={liveViews[post.slug]}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm">
              Artikel baru setiap minggu. Pantau terus untuk wawasan terbaru.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
