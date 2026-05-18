"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Nexus Dashboard",
    category: "Dashboard",
    client: "TechCorp",
    challenge:
      "Needed a real-time analytics platform that could process millions of data points while maintaining sub-second response times.",
    solution:
      "Built a streaming data architecture with React, WebSocket, and optimized PostgreSQL queries. Implemented virtual scrolling and data aggregation layers.",
    outcome:
      "60% faster data loading, 40% increase in user engagement, deployed to 5,000+ users.",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "D3.js"],
  },
  {
    title: "Bloom Landing",
    category: "Landing Page",
    client: "Bloom Inc.",
    challenge:
      "Required a high-converting product launch page with immersive animations and international payment processing.",
    solution:
      "Developed with Next.js and Framer Motion for smooth animations. Integrated Stripe for global payments and implemented A/B testing infrastructure.",
    outcome:
      "32% conversion rate, 2.5x ROI in first month, featured in Product Hunt.",
    tags: ["React", "Framer Motion", "Stripe", "Vercel", "Analytics"],
  },
  {
    title: "Forge Platform",
    category: "Web Application",
    client: "Forge Team",
    challenge:
      "Needed a full project management platform with real-time collaboration, file sharing, and team workflows.",
    solution:
      "Built with a real-time sync engine using WebSockets, file storage integration, and role-based permissions.",
    outcome:
      "8,000+ active users, 4.8/5 rating, acquired by enterprise client.",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Apex Corporate",
    category: "Company Website",
    client: "Apex Industries",
    challenge:
      "Required a multi-language corporate site with dynamic content management and enterprise-grade security.",
    solution:
      "Implemented i18n with next-intl, headless CMS with Sanity, and enterprise hosting with Vercel.",
    outcome:
      "45% increase in organic traffic, 3x faster page loads, global brand presence.",
    tags: ["Next.js", "Sanity", "i18n", "Tailwind", "Vercel"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-28">
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Case Studies
            </span>
            <h1 className="mt-4 mb-4 text-5xl font-bold md:text-6xl">
              Portfolio
            </h1>
            <p className="text-muted-foreground text-lg">
              Real projects with real results. Each case study shows our
              approach from challenge to outcome.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="mb-2 flex items-start justify-between">
                  <span className="text-primary font-mono text-xs tracking-wider uppercase">
                    {project.category}
                  </span>
                  <ExternalLink className="text-muted-foreground h-4 w-4" />
                </div>
                <h2 className="mb-1 text-2xl font-bold">{project.title}</h2>
                <p className="text-muted-foreground mb-6 font-mono text-sm">
                  Client: {project.client}
                </p>

                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-primary mb-2 font-mono text-xs tracking-wider uppercase">
                      Challenge
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-primary mb-2 font-mono text-xs tracking-wider uppercase">
                      Solution
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-primary mb-2 font-mono text-xs tracking-wider uppercase">
                      Outcome
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="soft-shadow font-mono text-xs tracking-wider uppercase"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
