import type { MetadataRoute } from "next"

import { services } from "@/lib/data/services"
import { SITE } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Top-level + hub pages (thank-you pages are intentionally excluded — noindex).
  // Neither /services nor /industries exists: both redirect to homepage sections
  // (/#services and /#industries), so neither belongs here.
  const core: {
    path: string
    priority: number
    freq: MetadataRoute.Sitemap[number]["changeFrequency"]
  }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/our-work", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/about/team", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
  ]

  // Services only. The six `/our-work/:slug` case-study pages were removed on
  // 2026-08-06 — the hub plays each film in a lightbox instead of linking out
  // to a page — and every one of those URLs now 308s back to `/our-work`, which
  // is already in `core` above. `lib/data/our-work.ts` went with them; this was
  // its only reader.
  const detail = services
    .map((s) => s.href)
    .map((path) => ({ path, priority: 0.8, freq: "monthly" as const }))

  return [...core, ...detail].map(({ path, priority, freq }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }))
}
