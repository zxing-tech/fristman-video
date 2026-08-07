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
  /**
   * The company number issued under the Companies Act 2016. `registrationOld`
   * is the pre-2019 SSM number it replaced — still printed alongside because
   * that is the one on older contracts and tender paperwork, and a buyer
   * checking the company against a document in hand has to find a match.
   * Owner-supplied 2026-08-06. Render the pair through `REGISTRATION` rather
   * than composing it per page.
   */
  registration: "200203019239",
  registrationOld: "001335693-M",
  url: "https://www.firstmanvideos.com",
  ogImage: "/images/og/og-default.jpg",
  locale: "en_US",
  description:
    "Industrial cinematography for Oil & Gas and heavy industry — cinematic UAV and ground-based video documentation across Southeast Asia.",
  /**
   * The number Organization/ContactPoint JSON-LD publishes. It was the office
   * landline (+603 7968 6737) until 2026-08-06, when the owner retired that
   * line — a number removed from the page must not survive in the structured
   * data, where a search engine would keep serving it in a knowledge panel long
   * after the page stopped showing it. `telephoneDisplay` is the same number
   * spaced for reading; `telephone` stays E.164 for `tel:` and for schema.
   */
  telephone: "+60173563598",
  telephoneDisplay: "+6017 356 3598",
  email: "info@firstmanvideos.com",
  facebook: "https://www.facebook.com/firstmanvideos",
  /**
   * Registered office, owner-supplied 2026-08-06 (replaces the Kelana Jaya
   * address). Split finer than a `PostalAddress` needs because two consumers
   * want different slices of it: the contact panel prints it as the owner
   * writes it, three lines with the unit on its own, and the HUD readouts on
   * /contact and /about name the neighbourhood, not the postal city. Malaysian
   * order puts the postcode before the city — "47830 Petaling Jaya", not
   * "Petaling Jaya, 47830".
   */
  address: {
    unit: "S-025, 2nd Floor, Seasons Square",
    street: "Jalan PJU 10/3C",
    district: "Damansara Damai",
    locality: "Petaling Jaya",
    region: "Selangor",
    postalCode: "47830",
    country: "MY",
  },
  areaServed: ["Malaysia", "Singapore", "Indonesia", "Brunei"],
} as const

/** "200203019239 (001335693-M)" — both company numbers, in the order SSM prints them. */
export const REGISTRATION = `${SITE.registration} (${SITE.registrationOld})`

/** "DAMANSARA DAMAI // SELANGOR, MY" — the HUD readout on /contact and /about. */
export const OFFICE_READOUT = `${SITE.address.district} // ${SITE.address.region}, MY`

export const ORG_ID = `${SITE.url}/#organization`
export const WEBSITE_ID = `${SITE.url}/#website`

/** Resolve a site-relative path to an absolute URL (JSON-LD requires absolute URLs). */
export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE.url}${path}`

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
  const ogTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — Industrial Cinematography`
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
    // The company numbers moved out of `legalName` and into `identifier` when
    // the second one arrived on 2026-08-06: `Firstman Productions
    // (200203019239 (001335693-M))` nests brackets inside a field a machine
    // reads as a name. `identifier` is where schema.org puts a registration,
    // and it can carry both numbers without either pretending to be the name.
    legalName: SITE.legalName,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "SSM company number",
        value: SITE.registration,
      },
      {
        "@type": "PropertyValue",
        name: "SSM company number (pre-2019)",
        value: SITE.registrationOld,
      },
    ],
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
      // One `streetAddress` line, joined from the parts the visible panel
      // breaks apart — schema.org has no unit/district fields, and dropping
      // either would leave a machine-readable address that cannot be posted to.
      streetAddress: `${SITE.address.unit}, ${SITE.address.street}, ${SITE.address.district}`,
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

/**
 * One published film, for the `/our-work` grid.
 *
 * This is the first schema on the site that asserts a client relationship since
 * `creativeWorkSchema` stopped being called on 2026-08-06 — and the reason it
 * is allowed to is that the assertion is already public and already the owner's
 * own: every film is on the company's YouTube channel, so `embedUrl` points a
 * search engine at the evidence rather than at a claim. Do not add an entry
 * whose video is not published there.
 *
 * `uploadDate` is required by Google for a video result and must be the film's
 * real publication date — never today's date, never a guess. The dates in
 * lib/data/our-work.ts were read off the watch pages.
 *
 * `about` names the client the way the card does. It is the machine-readable
 * half of the same statement the visible card makes, so the two have to say the
 * same thing: change one and change the other.
 */
export function videoObjectSchema({
  name,
  description,
  thumbnail,
  uploadDate,
  youtubeId,
  client,
}: {
  name: string
  description: string
  thumbnail: string
  uploadDate: string
  youtubeId: string
  client?: string
}) {
  return {
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: abs(thumbnail),
    uploadDate,
    embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
    inLanguage: "en",
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(client ? { about: { "@type": "Organization", name: client } } : {}),
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
