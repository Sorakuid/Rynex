import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "/home/riu/Projects/Monorepo/Rynex",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
