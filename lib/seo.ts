import type { Metadata } from "next"

/**
 * Central SEO configuration + metadata/JSON-LD builders.
 *
 * WHY a helper: Next.js merges metadata shallowly — a page that sets `openGraph`
 * (even one field) OVERWRITES the parent `openGraph` entirely. `pageMeta()` builds
 * the full, consistent Open Graph / Twitter / canonical block per page so we never
 * repeat or accidentally drop shared fields (siteName, images, locale).
 */

export const SITE = {
  name: "Firstman Videos",
  legalName: "Firstman Productions",
  registration: "001335693-M",
  url: "https://www.firstmanvideos.com",
  ogImage: "/images/og/og-default.jpg",
  locale: "en_US",
  description:
    "Industrial cinematography for Oil & Gas and heavy industry — cinematic UAV and ground-based visual documentation across Southeast Asia.",
  telephone: "+60379686737",
  email: "info@firstmanvideos.com",
  facebook: "https://www.facebook.com/firstmanvideos",
  address: {
    street: "No. 39-G, Block D, No. 1, Jalan SS7/26",
    locality: "Kelana Jaya",
    region: "Selangor",
    postalCode: "47301",
    country: "MY",
  },
  areaServed: ["Malaysia", "Singapore", "Indonesia", "Brunei"],
} as const

export const ORG_ID = `${SITE.url}/#organization`
export const WEBSITE_ID = `${SITE.url}/#website`

/** Resolve a site-relative path to an absolute URL (JSON-LD requires absolute URLs). */
export const abs = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`)

type MetaArgs = {
  /** Page title WITHOUT the brand suffix (the layout template appends " | Firstman Videos"). Omit for the homepage. */
  title?: string
  description: string
  /** Site-relative canonical path, e.g. "/services/corporate-videos". */
  path: string
  /** Override the default share image (site-relative or absolute). */
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  /** Keep the page out of the index (e.g. thank-you confirmation pages). */
  noindex?: boolean
}

export function pageMeta({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  noindex = false,
}: MetaArgs): Metadata {
  const ogTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — Industrial Cinematography`
  const image = ogImage ?? SITE.ogImage
  const images = [{ url: image, width: 1200, height: 630, alt: ogTitle }]
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: ogType,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  }
}

/* ------------------------------------------------------------------ */
/* JSON-LD structured-data builders                                    */
/* ------------------------------------------------------------------ */

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes }
}

/** Site-wide business identity (enables logo/knowledge-panel signals). */
export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: `${SITE.legalName} (${SITE.registration})`,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: abs("/images/brand/logo.png"),
      width: 160,
      height: 60,
    },
    image: abs(SITE.ogImage),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Country", name })),
    sameAs: [SITE.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.telephone,
      email: SITE.email,
      contactType: "sales",
      areaServed: "Asia",
      availableLanguage: ["en"],
    },
  }
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  }
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: SITE.areaServed.map((n) => ({ "@type": "Country", name: n })),
  }
}

export function creativeWorkSchema({
  name,
  description,
  path,
  client,
  image,
}: {
  name: string
  description: string
  path: string
  client?: string
  image?: string
}) {
  return {
    "@type": "CreativeWork",
    name,
    description,
    url: abs(path),
    ...(image ? { image: abs(image) } : {}),
    inLanguage: "en",
    creator: { "@id": ORG_ID },
    ...(client ? { about: { "@type": "Organization", name: client } } : {}),
  }
}
