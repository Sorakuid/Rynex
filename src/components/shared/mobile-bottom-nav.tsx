"use client";

import { Briefcase, Home, Layout, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/services", label: "Layanan", icon: Briefcase },
  { href: "/products", label: "Template", icon: Layout },
  { href: "/contact", label: "Kontak", icon: Phone },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="pb-safe fixed right-0 bottom-0 left-0 z-50 md:hidden">
      <div className="glass border-border/50 border-t">
        <div className="flex items-center justify-around py-2">
          {items.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 transition-all duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{label}</span>
                {isActive && (
                  <span className="bg-primary h-1 w-1 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
