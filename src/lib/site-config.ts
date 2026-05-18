import { env } from "@/env";

export const siteConfig = {
  title: "RYNEX | Premium Digital Engineering",
  description:
    "RYNEX menghadirkan website premium, landing page, dashboard, dan produk digital skalabel yang mendorong pertumbuhan bisnis Anda.",
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
  url: env.APP_URL || "https://rynex-two.vercel.app",
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || "",
};
