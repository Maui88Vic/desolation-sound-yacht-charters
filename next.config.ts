import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for catching React issues early
  reactStrictMode: true,

  // Image optimization config
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Trailing slash consistency
  trailingSlash: false,
};

export default nextConfig;
