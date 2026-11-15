import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media.resumen.cl" },
      { protocol: "https", hostname: "assets.diarioconcepcion.cl" },
      { protocol: "https", hostname: "dep.gob.cl" },
      { protocol: "https", hostname: "cdnsae.mineduc.cl" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
