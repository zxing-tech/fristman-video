/**
 * The four sectors the site used to have detail pages for under /industries.
 * Those routes were removed; the taxonomy now lives on the homepage section at
 * /#industries and in the "Designed For" list on the facility-overview-films
 * service page. There are no sector routes any more, so this array is
 * deliberately absent from `app/sitemap.ts` — do not add hrefs back to it
 * without creating the pages first.
 */
export type Sector = {
  slug: string
  title: string
  icon: string
  summary: string
  focus: string[]
}

export const sectors: Sector[] = [
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    icon: "oil_barrel",
    summary:
      "Onshore and offshore capture for supply bases, platforms and downstream refineries, planned around live operations and permit-to-work constraints.",
    focus: [
      "Refinery and downstream overviews",
      "Offshore platforms and modules",
      "Supply base and yard operations",
    ],
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    icon: "bolt",
    summary:
      "Power generation, transmission infrastructure and utility-scale projects, turned into updates a non-technical stakeholder can actually read.",
    focus: [
      "Facility and grid infrastructure overviews",
      "Executive and board-level summaries",
      "Public and community explainers",
    ],
  },
  {
    slug: "marine-offshore",
    title: "Marine & Offshore",
    icon: "anchor",
    summary:
      "Vessels, ports, shipyards and offshore assets across Southeast Asia's maritime hubs, scheduled around weather windows and vessel movements.",
    focus: [
      "Vessels and underway operations",
      "Rigs, platforms and FPSOs",
      "Port and shipyard activity",
    ],
  },
  {
    slug: "fabrication-construction",
    title: "Fabrication & Construction",
    icon: "construction",
    summary:
      "Progress and milestone documentation for fabrication yards and large-scale builds, from ground preparation through module load-out.",
    focus: [
      "Scheduled progress updates",
      "Heavy lifts and module integration",
      "Handover and load-out records",
    ],
  },
]
