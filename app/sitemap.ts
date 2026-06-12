import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://netcoreai.tech"
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/blog/psychology-of-web-design`,
      lastModified: new Date("2024-11-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/custom-websites-vs-templates`,
      lastModified: new Date("2024-12-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/mobile-first-roi`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/tos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
