import "@/styles/globals.css";

import type { Metadata } from "next";
import { Toaster } from "sonner";

import { Footer } from "@/components/rynex/footer";
import { Navbar } from "@/components/rynex/navbar";
import { SmoothScroll } from "@/components/rynex/smooth-scroll";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { fonts } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RYNEX — Premium Digital Engineering by Soraku Studio",
    template: `%s | RYNEX`,
  },
  description:
    "RYNEX membangun website premium, landing page, dashboard, dan solusi digital skalabel. Dikelola oleh Soraku Studio.",
  keywords: [
    "web development",
    "landing page",
    "ui/ux design",
    "digital product",
    "rynex",
    "soraku studio",
    "pembuatan website",
    "jasa website premium",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-[#1C1E22] font-sans antialiased", fonts)}
      >
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "rgba(28,30,34,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
