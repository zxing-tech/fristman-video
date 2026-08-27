/**
 * The six live services. Single source of truth for `app/sitemap.ts`, the
 * navbar Services dropdown, and the "Our Core Services" grid on the homepage —
 * the three used to drift apart, so titles and icons are only correct here.
 * `title` must match the service page's own `pageMeta` title.
 *
 * The list was re-cut on 2026-08-27 from the owner's marked-up navbar
 * (`02_Amendments.png`). Two service lines that had no work behind them —
 * Facility Overview Films and Industrial Photography — came off, and the two
 * things the company is actually hired for in Oil & Gas went on in their
 * place: **topside loadout** (fabrication yard to barge) and **offshore
 * installation** (the same structure going in at sea). The order below is the
 * owner's own, and it now reads as a project timeline: brand work, then the
 * yard, then offshore, then the two lines that stand outside that sequence.
 *
 * Five of the six match a category in `lib/data/our-work.ts`, which is what
 * lets each detail page show its own real films. AI-Generated Videos is the
 * exception on purpose — the owner has no samples to show yet
 * (`03_Amendments.png`).
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
      "Brand films, investor relations and campaign work for operators, contractors and the agencies that serve them.",
  },
  {
    slug: "og-topside-loadout",
    href: "/services/og-topside-loadout",
    title: "O&G Topside Loadout",
    icon: "precision_manufacturing",
    summary:
      "Fabrication yard to barge — SPMT walks, skidding, sea-fastening and sail-away, covered as one continuous operation.",
  },
  {
    slug: "og-offshore-installation",
    href: "/services/og-offshore-installation",
    title: "O&G Offshore Installation",
    icon: "anchor",
    summary:
      "Jacket launch, upending, piling and topside mating, filmed offshore from the vessel and from the air.",
  },
  {
    slug: "ai-generated-video",
    href: "/services/ai-generated-video",
    title: "AI-Generated Videos",
    icon: "auto_awesome",
    summary:
      "Recreations of scenes too hazardous or impossible to film live, from incident reconstruction to evacuation sequences.",
  },
  {
    slug: "long-term-timelapse",
    href: "/services/long-term-timelapse",
    title: "Long-Term Timelapse",
    icon: "timelapse",
    summary:
      "Fixed-interval cameras left on site for months, cut down to the few minutes that show the build actually happening.",
  },
  {
    slug: "safety-induction-videos",
    href: "/services/safety-induction-videos",
    title: "Safety and Induction Videos",
    icon: "health_and_safety",
    summary:
      "Site-specific induction films covering PPE, hazard zones and emergency procedure, shot at the facility crews will work in.",
  },
]
