"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="pt-28">
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="text-muted-foreground hover:text-primary mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-2">
              <span className="text-primary font-mono text-xs tracking-wider uppercase">
                {project.category}
              </span>
            </div>
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground mb-8 font-mono text-sm">
              Client: {project.client}
            </p>

            <div className="mb-10 space-y-8">
              <div>
                <h2 className="text-primary mb-3 font-mono text-xs tracking-wider uppercase">
                  Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-primary mb-3 font-mono text-xs tracking-wider uppercase">
                  Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <h2 className="text-primary mb-3 font-mono text-xs tracking-wider uppercase">
                  Outcome
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            <div className="mb-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="soft-shadow w-full font-mono text-xs tracking-wider uppercase sm:w-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full font-mono text-xs tracking-wider uppercase sm:w-auto"
                >
                  Mulai Proyek Serupa
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
