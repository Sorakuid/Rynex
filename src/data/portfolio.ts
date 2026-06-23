export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  demo?: string;
  cover: string;
}

export const projects: PortfolioProject[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    category: "Dashboard",
    description:
      "Platform analitik real-time dengan visualisasi data interaktif.",
    client: "TechCorp",
    challenge:
      "Needed a real-time analytics platform that could process millions of data points while maintaining sub-second response times.",
    solution:
      "Built a streaming data architecture with React, WebSocket, and optimized PostgreSQL queries. Implemented virtual scrolling and data aggregation layers.",
    outcome:
      "60% faster data loading, 40% increase in user engagement, deployed to 5,000+ users.",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "D3.js"],
    demo: "https://nexus-dashboard.example.com",
    cover: "https://picsum.photos/seed/portfolio1/800/450",
  },
  {
    slug: "bloom-landing",
    title: "Bloom Landing",
    category: "Landing Page",
    description:
      "Halaman peluncuran produk konversi tinggi dengan animasi imersif.",
    client: "Bloom Inc.",
    challenge:
      "Required a high-converting product launch page with immersive animations and international payment processing.",
    solution:
      "Developed with Next.js and Framer Motion for smooth animations. Integrated Stripe for global payments and implemented A/B testing infrastructure.",
    outcome:
      "32% conversion rate, 2.5x ROI in first month, featured in Product Hunt.",
    tags: ["React", "Framer Motion", "Stripe", "Vercel", "Analytics"],
    demo: "https://bloom-landing.example.com",
    cover: "https://picsum.photos/seed/portfolio2/800/450",
  },
  {
    slug: "forge-platform",
    title: "Forge Platform",
    category: "Web App",
    description:
      "Sistem manajemen proyek full-stack dengan pembaruan real-time.",
    client: "Forge Team",
    challenge:
      "Needed a full project management platform with real-time collaboration, file sharing, and team workflows.",
    solution:
      "Built with a real-time sync engine using WebSockets, file storage integration, and role-based permissions.",
    outcome:
      "8,000+ active users, 4.8/5 rating, acquired by enterprise client.",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Redis", "AWS"],
    demo: "https://forge-platform.example.com",
    cover: "https://picsum.photos/seed/portfolio3/800/450",
  },
];
