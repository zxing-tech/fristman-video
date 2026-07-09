import type { MetadataRoute } from "next"

import { caseStudies } from "@/lib/data/case-studies"
import { industries } from "@/lib/data/industries"
import { services } from "@/lib/data/services"
import { SITE } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Top-level + hub pages (thank-you pages are intentionally excluded — noindex).
  const core: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/industries", priority: 0.9, freq: "monthly" },
    { path: "/case-studies", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/about/team", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
  ]

  const detail = [
    ...services.map((s) => s.href),
    ...industries.map((i) => i.href),
    ...caseStudies.map((c) => c.href),
  ].map((path) => ({ path, priority: 0.8, freq: "monthly" as const }))

  return [...core, ...detail].map(({ path, priority, freq }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }))
}
