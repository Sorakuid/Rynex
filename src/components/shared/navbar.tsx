"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/products", label: "Template" },
  { href: "/contact", label: "Kontak" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "top-2 w-[86%] max-w-5xl scale-[0.97] bg-[#1C1E22]/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "top-6 w-[92%] max-w-7xl scale-100 bg-[#1C1E22]/55 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "px-4 py-1" : "px-6 py-2",
          )}
        >
          {/* Logo */}
          <Link href="/" className="group shrink-0">
            <Image
              src="/SorakuStudio.png"
              alt="Soraku Studio"
              width={500}
              height={173}
              className="h-7 w-auto object-contain brightness-110 md:h-9"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground group relative text-sm font-medium transition-colors duration-300"
              >
                {item.label}
                <span className="bg-primary absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="/custom-project">
              <Button size="sm" className="soft-shadow group">
                Mulai Proyek
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1.5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1E22]/90 shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground block rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/custom-project"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="soft-shadow w-full">
                    Mulai Proyek
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
