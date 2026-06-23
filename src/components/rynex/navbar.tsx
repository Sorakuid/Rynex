"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceItems = [
  { href: "/templates", label: "Template" },
  { href: "/pricing", label: "Harga" },
  { href: "/landingPage", label: "Landing Page" },
  { href: "/companyWebsite", label: "Website" },
  { href: "/dashboardSystem", label: "Dashboard" },
  { href: "/customBuild", label: "Sistem Kustom" },
];

const moreItems = [
  { href: "/contact", label: "Kontak" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
          "border-border fixed top-5 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:hidden",
          scrolled
            ? "bg-background/80 top-3 w-[90%] max-w-5xl scale-[0.97] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:w-[88%]"
            : "bg-background/55 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl",
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
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <DesktopThemeToggle />
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
        </div>
      </nav>
    </>
  );
}

/* ─── Desktop Helpers ─── */

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
          : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5",
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
            : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5",
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
            className="border-border bg-background/95 absolute top-full left-0 mt-2 w-56 overflow-hidden rounded-2xl border shadow-xl backdrop-blur-2xl"
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
                        : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5",
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

/* ─── Desktop Theme Toggle ─── */

function DesktopThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="text-foreground h-4 w-4" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="text-foreground h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
