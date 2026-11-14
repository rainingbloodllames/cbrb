import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/nosotros", "/admision", "/comunidad", "/transparencia", "/contacto"];
  return routes.map((r) => ({
    url: `${site.domain}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
