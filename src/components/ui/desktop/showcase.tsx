"use client";

import {
  BarChart3,
  Code2,
  CreditCard,
  Globe,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const showcaseItems = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Preview",
    desc: "Real-time analytics and KPI tracking with interactive data visualization.",
  },
  {
    icon: CreditCard,
    title: "CRM Platform",
    desc: "Customer management made simple and scalable.",
  },
  {
    icon: Globe,
    title: "Website Preview",
    desc: "High-performance landing pages and corporate sites.",
  },
  {
    icon: BarChart3,
    title: "Analytics View",
    desc: "Data-driven insights for informed decisions.",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    desc: "Next.js, TypeScript, PostgreSQL, Drizzle ORM.",
  },
  {
    icon: Settings,
    title: "Custom Systems",
    desc: "Tailored solutions built for your specific needs.",
  },
];

export function DesktopHeroShowcase() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {showcaseItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="group border-border/60 hover:border-border rounded-xl border bg-transparent p-3 transition-colors"
          >
            <div className="bg-muted flex h-7 w-7 items-center justify-center rounded-lg">
              <Icon className="text-primary h-3.5 w-3.5" />
            </div>
            <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
            <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
