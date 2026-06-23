"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  FolderKanban,
  House,
  LayoutGrid,
  MoreHorizontal,
  Palette,
} from "lucide-react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";

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

export function MobileBottomNavbar() {
  const [openMobilePopup, setOpenMobilePopup] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      <div className="border-border bg-background/95 fixed right-0 bottom-0 left-0 z-50 border-t backdrop-blur-2xl md:hidden">
        <div className="flex items-center justify-around px-2 pt-1 pb-2">
          <BottomNavItem
            href="/portfolio"
            icon={<FolderKanban className="h-5 w-5" />}
            label="Portfolio"
            isActive={pathname === "/portfolio"}
          />

          <MobilePopupButton
            icon={<LayoutGrid className="h-5 w-5" />}
            label="Layanan"
            isActive={openMobilePopup === "service"}
            onToggle={() =>
              setOpenMobilePopup(
                openMobilePopup === "service" ? null : "service",
              )
            }
          />

          <BottomNavCenter href="/" isActive={pathname === "/"} />

          <MobilePopupButton
            icon={<MoreHorizontal className="h-5 w-5" />}
            label="Lainnya"
            isActive={openMobilePopup === "more"}
            onToggle={() =>
              setOpenMobilePopup(openMobilePopup === "more" ? null : "more")
            }
          />

          <BottomNavItem
            href="/templates"
            icon={<Palette className="h-5 w-5" />}
            label="Template"
            isActive={pathname === "/templates"}
          />
        </div>
      </div>

      <AnimatePresence>
        {openMobilePopup === "service" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="border-border bg-background/95 fixed bottom-20 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 overflow-hidden rounded-2xl border shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="py-2">
              <MobileThemeToggle onClose={() => setOpenMobilePopup(null)} />
              {serviceItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMobilePopup(null)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 font-mono text-xs tracking-wider uppercase transition-colors duration-200",
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

      <AnimatePresence>
        {openMobilePopup === "more" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="border-border bg-background/95 fixed bottom-20 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 overflow-hidden rounded-2xl border shadow-xl backdrop-blur-2xl md:hidden"
          >
            <div className="py-2">
              {moreItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMobilePopup(null)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 font-mono text-xs tracking-wider uppercase transition-colors duration-200",
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
    </>
  );
}

function BottomNavItem({
  href,
  icon,
  label,
  isActive,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link href={href} className="flex flex-col items-center gap-0.5">
      <div
        className={cn(
          "flex items-center justify-center rounded-xl p-1.5 transition-colors",
          isActive ? "text-primary" : "text-muted-foreground",
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "font-mono text-[9px] tracking-wider uppercase transition-colors",
          isActive ? "text-primary" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  );
}

function BottomNavCenter({
  href,
  isActive,
}: {
  href: string;
  isActive: boolean;
}) {
  return (
    <Link href={href} className="relative -mt-3 flex flex-col items-center">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "bg-primary/10 text-primary",
        )}
      >
        <House className="h-5 w-5" />
      </div>
      <span
        className={cn(
          "font-mono text-[9px] tracking-wider uppercase transition-colors",
          isActive ? "text-primary" : "text-muted-foreground",
        )}
      >
        Beranda
      </span>
    </Link>
  );
}

function MobilePopupButton({
  icon,
  label,
  isActive,
  onToggle,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <button onClick={onToggle} className="flex flex-col items-center gap-0.5">
      <div
        className={cn(
          "flex items-center justify-center rounded-xl p-1.5 transition-colors",
          isActive ? "text-primary" : "text-muted-foreground",
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "font-mono text-[9px] tracking-wider uppercase transition-colors",
          isActive ? "text-primary" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </button>
  );
}

function MobileThemeToggle({ onClose }: { onClose: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
        onClose();
      }}
      className="text-muted-foreground hover:text-foreground flex w-full items-center gap-3 px-4 py-3 font-mono text-xs tracking-wider uppercase transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}
