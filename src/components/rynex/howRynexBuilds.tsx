"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    subtitle: "Diskusi kebutuhan dan tujuan proyek",
    details: [
      "analisis kebutuhan",
      "diskusi konsep",
      "objective mapping",
      "estimasi awal",
    ],
  },
  {
    number: "02",
    title: "Requirement",
    subtitle: "Pengumpulan data dan spesifikasi teknis",
    details: ["data gathering", "technical spec", "sitemap", "feature list"],
  },
  {
    number: "03",
    title: "Wireframe",
    subtitle: "Kerangka layout dan alur pengguna",
    details: [
      "user flow",
      "layout structure",
      "navigation map",
      "content planning",
    ],
  },
  {
    number: "04",
    title: "UI/UX Design",
    subtitle: "Desain antarmuka modern dan fungsional",
    details: [
      "interface design",
      "responsive layout",
      "interaction design",
      "design system",
    ],
  },
  {
    number: "05",
    title: "Development",
    subtitle: "Pengembangan frontend & backend",
    details: [
      "frontend engineering",
      "backend integration",
      "API development",
      "database setup",
    ],
  },
  {
    number: "06",
    title: "Testing",
    subtitle: "Quality assurance dan bug fixing",
    details: [
      "unit testing",
      "integration test",
      "cross-browser",
      "performance test",
    ],
  },
  {
    number: "07",
    title: "Deployment",
    subtitle: "Peluncuran ke production server",
    details: ["server setup", "domain config", "SSL certificate", "launch"],
  },
  {
    number: "08",
    title: "Maintenance",
    subtitle: "Perawatan dan dukungan berkelanjutan",
    details: [
      "content updates",
      "security monitoring",
      "backup routine",
      "tech support",
    ],
  },
];

export function HowRynexBuilds() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const isDragging = useRef(false);

  const snapTo = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLDivElement>("[data-index]");
    const target = cards[i];
    if (target) {
      const left = target.offsetLeft - el.offsetLeft;
      el.scrollTo({ left, behavior: "smooth" });
    }
    setIndex(i);
  }, []);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isDragging.current) return;
      setIndex((prev) => {
        const next = (prev + 1) % steps.length;
        snapTo(next);
        return next;
      });
    }, 5000);
  }, [snapTo]);

  const stopAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      if (isDragging.current) return;
      const cardWidth = el.children[0]?.getBoundingClientRect().width ?? 1;
      const newIndex = Math.round(el.scrollLeft / (cardWidth + 6));
      setIndex(newIndex);
    };

    const onDragStart = () => {
      isDragging.current = true;
      stopAutoplay();
    };
    const onDragEnd = () => {
      isDragging.current = false;
      startAutoplay();
    };

    el.addEventListener("scroll", onScroll);
    el.addEventListener("touchstart", onDragStart);
    el.addEventListener("touchend", onDragEnd);
    el.addEventListener("mousedown", onDragStart);
    el.addEventListener("mouseup", onDragEnd);
    el.addEventListener("mouseleave", onDragEnd);

    startAutoplay();
    return () => {
      stopAutoplay();
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("touchstart", onDragStart);
      el.removeEventListener("touchend", onDragEnd);
      el.removeEventListener("mousedown", onDragStart);
      el.removeEventListener("mouseup", onDragEnd);
      el.removeEventListener("mouseleave", onDragEnd);
    };
  }, [startAutoplay, stopAutoplay]);

  return (
    <section className="spacious-section relative" id="how-rynex-builds">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:gap-12">
          <div className="lg:w-2/5 lg:shrink-0">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
                  Cara Kami Membangun
                </span>
                <h2 className="mt-4 mb-4 text-3xl leading-tight font-bold md:text-5xl lg:text-6xl">
                  How Rynex
                  <br />
                  <span className="gradient-text">Builds</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed lg:text-base">
                  Setiap proyek dibangun melalui proses terstruktur untuk
                  memastikan hasil yang presisi, scalable, dan siap berkembang.
                </p>

                <div className="mt-6 flex items-center gap-6">
                  <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                    <span className="bg-primary h-2 w-2 rounded-full" />8
                    Tahapan
                  </div>
                  <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                    <span className="bg-border/40 h-2 w-2 rounded-full" />
                    Siap Launch
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile carousel */}
          <div className="relative mt-10 md:hidden lg:mt-0">
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory overflow-x-auto pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  data-index={i}
                  className="flex shrink-0 snap-start items-stretch"
                >
                  <div
                    className="w-[78vw]"
                    style={{
                      opacity: i === index ? 1 : 0.6,
                      scale: i === index ? 1 : 0.95,
                      transition: "opacity 0.4s, scale 0.4s",
                    }}
                  >
                    <div className="border-border bg-card flex h-full flex-col rounded-xl border p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <span className="text-border/60 font-mono text-xs leading-none font-bold">
                          Langkah {step.number}
                        </span>
                      </div>
                      <h3 className="mb-0.5 text-base font-bold">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 text-xs">
                        {step.subtitle}
                      </p>
                      <div className="bg-border/20 mb-2 h-px" />
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-muted-foreground flex items-center gap-1.5 font-mono text-[10px]"
                          >
                            <span className="bg-primary/40 h-1 w-1 shrink-0 rounded-full" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="bg-border/40 mx-1 h-px w-4 shrink-0 self-center" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop timeline */}
          <div className="relative hidden md:block lg:flex-1">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative pb-10 last:pb-0 md:pb-12"
              >
                <div className="flex gap-4 md:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary/5 border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/10 z-10 flex h-10 w-10 items-center justify-center rounded-xl border transition-[background-color,border-color] duration-500 md:h-12 md:w-12">
                      <span className="text-primary font-mono text-sm font-bold md:text-base">
                        {step.number}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="from-primary/20 via-primary/10 mt-2 w-px flex-1 bg-gradient-to-b to-transparent" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="hover:border-primary/20 border-border bg-card hover:bg-card/80 rounded-2xl border p-5 transition-[background-color,border-color] duration-500 md:p-6">
                      <div className="relative z-10">
                        <h3 className="group-hover:text-primary text-lg font-bold transition-colors md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mt-0.5 text-sm md:text-base">
                          {step.subtitle}
                        </p>
                        <div className="bg-border/20 my-3 h-px md:my-4" />
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 md:gap-x-6 md:gap-y-2">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="text-muted-foreground flex items-center gap-2 font-mono text-[11px] md:text-xs"
                            >
                              <span className="bg-primary/30 h-1 w-1 rounded-full" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
