"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Share2, User } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { BackButton } from "@/components/blog/backButton";
import { CommentSection } from "@/components/blog/commentSection";
import { RelatedPosts } from "@/components/blog/relatedPosts";
import { ShareModal } from "@/components/shared/shareModal";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/blog";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  const [views, setViews] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    if (!post) return;

    fetch(`/api/blog/views/${slug}`, { method: "POST" });

    const source = new EventSource("/api/blog/views/stream");

    source.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (
          data.views &&
          typeof data.views === "object" &&
          data.views[slug] !== undefined
        ) {
          setViews(data.views[slug]);
        }
      } catch {}
    };

    source.onerror = () => source.close();

    return () => source.close();
  }, [slug, post]);

  if (!post) notFound();

  return (
    <div className="pt-28">
      <article className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BackButton title={post.title} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl"
          >
            <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-2xl">
              <img
                src={post.cover}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mb-1.5">
              <span className="text-primary font-mono text-[11px] tracking-wider uppercase md:text-xs">
                {post.category}
              </span>
            </div>

            <h1 className="mb-3 text-base leading-tight font-bold md:text-3xl">
              {post.title}
            </h1>

            <div className="text-muted-foreground/60 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] tracking-wider uppercase md:gap-4 md:text-xs">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3 md:h-3.5 md:w-3.5" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 md:h-3.5 md:w-3.5" />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3 md:h-3.5 md:w-3.5" />
                {views} views
              </span>
            </div>

            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="mt-8 mb-4 text-xl font-bold md:text-2xl"
                    >
                      {line.slice(3)}
                    </h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={i} className="mt-6 mb-3 text-lg font-semibold">
                      {line.slice(4)}
                    </h3>
                  );
                }
                if (line.startsWith("- **")) {
                  const boldMatch = line.match(/- \*\*(.+?)\*\*(.+)/);
                  if (boldMatch) {
                    return (
                      <p key={i} className="text-muted-foreground mb-2">
                        <strong className="text-foreground">
                          {boldMatch[1]}
                        </strong>
                        {boldMatch[2]}
                      </p>
                    );
                  }
                }
                if (line.startsWith("- ")) {
                  return (
                    <p key={i} className="text-muted-foreground mb-1 ml-4">
                      • {line.slice(2)}
                    </p>
                  );
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={i} className="text-foreground mb-2 font-semibold">
                      {line.slice(2, -2)}
                    </p>
                  );
                }
                if (line.trim() === "") return <br key={i} />;
                return (
                  <p
                    key={i}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {line}
                  </p>
                );
              })}
            </div>

            <div className="border-border/40 mt-12 border-t pt-8">
              <CommentSection
                postSlug={slug}
                action={
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShareOpen(true)}
                    className="shrink-0 font-mono text-xs tracking-wider uppercase"
                  >
                    <Share2 className="mr-1.5 h-3.5 w-3.5" />
                    Share
                  </Button>
                }
              />
            </div>
          </motion.div>

          <div className="mt-16">
            <RelatedPosts currentSlug={slug} category={post.category} />
          </div>

          <ShareModal
            open={shareOpen}
            onClose={() => setShareOpen(false)}
            url={typeof window !== "undefined" ? window.location.href : ""}
            title={post.title}
          />
        </div>
      </article>
    </div>
  );
}
