"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceItems = [
  { href: "/templates", label: "Template" },
  { href: "/landing-page", label: "Landing Page" },
  { href: "/company-website", label: "Company Website" },
  { href: "/dashboard-system", label: "Dashboard System" },
  { href: "/custom-build", label: "Custom Build" },
  { href: "/pricing", label: "Harga" },
];

const moreItems = [
  { href: "#featured", label: "Produk Unggulan" },
  { href: "/checkout", label: "Checkout Preview" },
  { href: "#process", label: "Alur Kerja" },
  { href: "/faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "/blog", label: "Blog / Insights" },
  { href: "#process", label: "Proses Klien" },
  { href: "#tech", label: "Technology Stack" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-5 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "top-3 w-[90%] max-w-5xl scale-[0.97] bg-[#1C1E22]/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:w-[88%]"
            : "bg-[#1C1E22]/55 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "px-4 py-1.5" : "px-5 py-2",
          )}
        >
          <Link href="/" className="group shrink-0">
            <Image
              src="/Rynex.png"
              alt="RYNEX"
              width={500}
              height={173}
              className={cn(
                "w-auto object-contain brightness-110 transition-all duration-500",
                scrolled ? "h-7" : "h-8 md:h-9",
              )}
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="/" label="Beranda" pathname={pathname} />
            <NavLink href="/portfolio" label="Portofolio" pathname={pathname} />
            <DropdownNav
              label="Layanan"
              items={serviceItems}
              isOpen={openDropdown === "service"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "service" ? null : "service")
              }
              pathname={pathname}
            />
            <DropdownNav
              label="Lainnya"
              items={moreItems}
              isOpen={openDropdown === "more"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "more" ? null : "more")
              }
              pathname={pathname}
            />
            <NavLink href="/contact" label="Kontak" pathname={pathname} />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Link href="/contact">
              <Button
                size="sm"
                className="soft-shadow h-8 font-mono text-xs tracking-wider uppercase"
              >
                Mulai Proyek
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1E22]/90 shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              <MobileItem
                href="/"
                label="Beranda"
                onClick={() => setMobileOpen(false)}
              />
              <MobileItem
                href="/portfolio"
                label="Portofolio"
                onClick={() => setMobileOpen(false)}
              />

              <div className="pt-2 pb-1">
                <p className="text-primary mb-1 px-3 font-mono text-xs tracking-wider uppercase">
                  Layanan
                </p>
                {serviceItems.map((item) => (
                  <MobileItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              <div className="pt-2 pb-1">
                <p className="text-primary mb-1 px-3 font-mono text-xs tracking-wider uppercase">
                  Lainnya
                </p>
                {moreItems.map((item) => (
                  <MobileItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              <MobileItem
                href="/contact"
                label="Kontak"
                onClick={() => setMobileOpen(false)}
              />

              <div className="pt-3">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="soft-shadow w-full font-mono text-xs tracking-wider uppercase">
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

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-3 py-2 font-mono text-xs font-medium tracking-wider uppercase transition-colors duration-300",
        isActive
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground hover:bg-white/5",
      )}
    >
      {label}
    </Link>
  );
}

function DropdownNav({
  label,
  items,
  isOpen,
  onToggle,
  pathname,
}: {
  label: string;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 rounded-full px-3 py-2 font-mono text-xs font-medium tracking-wider uppercase transition-colors duration-300",
          isOpen
            ? "text-foreground bg-white/5"
            : "text-muted-foreground hover:text-foreground hover:bg-white/5",
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1E22]/95 shadow-xl backdrop-blur-2xl"
          >
            <div className="py-2">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className={cn(
                      "block px-4 py-2.5 font-mono text-xs tracking-wider uppercase transition-colors duration-200",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-muted-foreground hover:text-foreground block rounded-xl px-3 py-2.5 font-mono text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-white/5"
    >
      {label}
    </Link>
  );
}
