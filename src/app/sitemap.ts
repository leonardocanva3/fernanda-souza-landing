import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-21");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...seoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.slug === "fisioterapia-pelvica-salvador" ? 0.95 : 0.82,
    })),
  ];
}
