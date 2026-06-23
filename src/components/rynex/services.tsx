"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Code,
  Layout,
  Monitor,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    icon: <Layout className="text-primary h-6 w-6" />,
    title: "Landing Page",
    description:
      "Landing page konversi tinggi yang dirancang untuk menangkap prospek dan mendorong pertumbuhan dengan desain premium.",
    size: "large",
    href: "/landingPage",
  },
  {
    icon: <Building2 className="text-primary h-6 w-6" />,
    title: "Website Perusahaan",
    description:
      "Website korporat multi-halaman profesional yang membangun otoritas merek dan menampilkan cerita bisnis Anda.",
    size: "medium",
    href: "/companyWebsite",
  },
  {
    icon: <Monitor className="text-primary h-6 w-6" />,
    title: "Dashboard",
    description:
      "Antarmuka dashboard kaya data dengan analitik real-time, navigasi intuitif, dan arsitektur skalabel.",
    size: "medium",
    href: "/dashboardSystem",
  },
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Antarmuka Produk",
    description:
      "UI produk berpusat pada pengguna dengan interaksi mulus, mikro-animasi, dan eksekusi presisi piksel.",
    size: "small",
    href: "/customBuild",
  },
  {
    icon: <Workflow className="text-primary h-6 w-6" />,
    title: "Sistem Kustom",
    description:
      "Aplikasi web kustom end-to-end dibangun dengan framework modern, dioptimalkan untuk performa dan skala.",
    size: "small",
    href: "/customBuild",
  },
];

const sizeClasses: Record<string, string> = {
  large: "md:col-span-2 md:row-span-1",
  medium: "md:col-span-1 md:row-span-1",
  small: "md:col-span-1 md:row-span-1",
};

const sizePadding: Record<string, string> = {
  large: "p-6 md:p-12",
  medium: "p-6 md:p-10",
  small: "p-6 md:p-8",
};

export function ServicesSection() {
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
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (isDragging.current) return;
      setIndex((prev) => {
        const next = (prev + 1) % services.length;
        snapTo(next);
        return next;
      });
    }, 7000);
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
      const newIndex = Math.round(el.scrollLeft / (cardWidth + 16));
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
    <section className="spacious-section" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Yang Kami Bangun
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Layanan Digital
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Dari landing page hingga platform kompleks, kami menghadirkan
            pengalaman web kelas produksi.
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="relative md:hidden">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, i) => (
              <div
                key={service.title}
                data-index={i}
                className="flex shrink-0 snap-start items-center"
              >
                <div className="w-[72vw]">
                  <div className="group border-border bg-card flex flex-col rounded-xl border p-4 transition-[background-color,border-color] duration-300">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="bg-primary/5 flex h-8 w-8 items-center justify-center rounded-lg">
                        {service.icon}
                      </div>
                      <span className="text-border/70 font-mono text-base leading-none font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="group-hover:text-primary mb-1 text-sm font-semibold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2 text-xs leading-relaxed">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <span className="text-primary/50 group-hover:text-primary inline-flex items-center gap-1 font-mono text-[10px] tracking-wider uppercase transition-colors">
                        Selengkapnya
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </div>
                {i < services.length - 1 && (
                  <div className="bg-border/50 mx-1 h-px w-5 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mx-auto hidden max-w-lg grid-cols-1 gap-4 md:grid md:max-w-none md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {services.map((service, i) => {
            const isLarge = service.size === "large";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group hover:border-primary/20 border-border bg-card hover:bg-card/80 relative overflow-hidden rounded-2xl border transition-[background-color,border-color] duration-500 ${sizeClasses[service.size]}`}
              >
                <div
                  className={`relative z-10 flex h-full flex-col ${sizePadding[service.size]}`}
                >
                  <div
                    className={`bg-primary/5 group-hover:bg-primary/10 mb-4 flex items-center justify-center rounded-xl transition-colors ${
                      isLarge ? "h-14 w-14" : "h-11 w-11"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`group-hover:text-primary mb-2 font-bold tracking-tight transition-colors ${
                      isLarge ? "text-xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-muted-foreground mb-4 flex-1 leading-relaxed ${
                      isLarge ? "text-sm md:text-base" : "text-sm"
                    }`}
                  >
                    {service.description}
                  </p>

                  <Link href={service.href}>
                    <span className="text-primary/50 group-hover:text-primary inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase transition-colors">
                      Selengkapnya
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
