import type { MetadataRoute } from "next"

import { SITE } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Conversion confirmation pages have no search value.
      disallow: ["/thank-you/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
