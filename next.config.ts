import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // L2/L4: los PDFs son inmutables entre deploys → cache larga en CDN y navegador
  async headers() {
    return [
      {
        source: "/docs/:file.pdf",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.fbcdn.net" },
      { protocol: "https", hostname: "*.facebook.com" },
      { protocol: "https", hostname: "media.resumen.cl" },
      { protocol: "https", hostname: "assets.diarioconcepcion.cl" },
      { protocol: "https", hostname: "dep.gob.cl" },
      { protocol: "https", hostname: "cdnsae.mineduc.cl" },
      { protocol: "https", hostname: "nahen.cl" },
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
