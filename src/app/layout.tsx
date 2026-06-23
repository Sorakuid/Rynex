import "@/styles/globals.css";

import type { Metadata } from "next";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/shared/themeProvider";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RYNEX | Premium Digital Engineering by Soraku Studio",
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
    "Rynex",
    "Rynex Studio",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Plus+Jakarta+Sans:wght@200..800&display=swap"
        />
      </head>
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "color-mix(in srgb, var(--card) 95%, transparent)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(20px)",
              },
            }}
          />
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="9c8db49a-ed9d-4248-bdd8-acdb8dedf7fe"
          ></script>
        </ThemeProvider>
      </body>
    </html>
  );
}
