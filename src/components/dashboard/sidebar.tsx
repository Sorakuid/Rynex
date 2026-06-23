"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Key,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/shared/themeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/licenses", label: "Lisensi", icon: Key },
  { href: "/dashboard/products", label: "Produk", icon: Package },
  { href: "/dashboard/orders", label: "Pesanan", icon: ShoppingCart },
  { href: "/dashboard/analytics", label: "Analitik", icon: BarChart3 },
  { href: "/dashboard/customers", label: "Pelanggan", icon: Users },
  { href: "/dashboard/content", label: "Konten", icon: FileText },
  { href: "/dashboard/settings", label: "Pengaturan", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="border-border bg-background/80 fixed top-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg border backdrop-blur-xl md:hidden"
        aria-label="Buka sidebar"
      >
        <Menu className="text-foreground h-5 w-5" />
      </button>

      <aside className="border-border bg-background/95 fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r backdrop-blur-xl md:flex">
        <SidebarContent
          pathname={pathname}
          isActive={isActive}
          onClose={() => {}}
        />
      </aside>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMobileOpen(false);
            }}
            role="presentation"
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="border-border bg-background fixed inset-y-0 left-0 z-50 w-64 border-r shadow-xl md:hidden"
          >
            <SidebarContent
              pathname={pathname}
              isActive={isActive}
              onClose={() => setMobileOpen(false)}
            />
          </motion.aside>
        </>
      )}
    </>
  );
}

function SidebarContent({
  isActive,
  onClose,
}: {
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center justify-between border-b border-white/5 px-6">
        <Link href="/dashboard" onClick={onClose}>
          <Image
            src="/Rynex.png"
            alt="RYNEX"
            width={100}
            height={35}
            className="h-6 w-auto brightness-110"
            priority
          />
        </Link>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/5 md:hidden"
          aria-label="Tutup sidebar"
        >
          <X className="text-muted-foreground h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-white/5 p-4">
        <ThemeToggle />
        <Link href="/" onClick={onClose}>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground w-full justify-start gap-3"
          >
            <LogOut className="h-4 w-4" />
            Kembali ke Situs
          </Button>
        </Link>
      </div>
    </div>
  );
}
