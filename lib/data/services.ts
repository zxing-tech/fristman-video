/**
 * The six live services. Single source of truth for `app/sitemap.ts`, the
 * navbar Services dropdown, and the "Our Core Services" grid on the homepage —
 * the three used to drift apart, so titles and icons are only correct here.
 * `title` must match the service page's own `pageMeta` title.
 */
export type Service = {
  slug: string
  href: string
  title: string
  icon: string
  summary: string
}

export const services: Service[] = [
  {
    slug: "corporate-videos",
    href: "/services/corporate-videos",
    title: "Corporate Videos",
    icon: "movie",
    summary:
      "High-end cinematic production for corporate communications, marketing, and investor relations within heavy industry.",
  },
  {
    slug: "facility-overview-films",
    href: "/services/facility-overview-films",
    title: "Facility Overview Films",
    icon: "domain",
    summary:
      "Aerial and ground coverage of industrial complexes, refineries, and fabrication yards.",
  },
  {
    slug: "ai-generated-video",
    href: "/services/ai-generated-video",
    title: "AI-Generated Video",
    icon: "auto_awesome",
    summary:
      "AI-generated recreations of scenes too hazardous or impossible to film live — from offshore incident simulations to emergency evacuation sequences — rendered with cinematic realism.",
  },
  {
    slug: "industrial-photography",
    href: "/services/industrial-photography",
    title: "Industrial Photography",
    icon: "photo_camera",
    summary:
      "Documenting critical structural phases, heavy lifts, and compliance checks.",
  },
  {
    slug: "progression-timelapse",
    href: "/services/progression-timelapse",
    title: "Construction Progress & Timelapse Capture",
    icon: "timelapse",
    summary:
      "Automated interval camera setups tracking multi-year site changes.",
  },
  {
    slug: "safety-induction-videos",
    href: "/services/safety-induction-videos",
    title: "Safety and Induction Videos",
    icon: "health_and_safety",
    summary: "Onsite protocol tutorials covering PPE rules and hazard zones.",
  },
]
