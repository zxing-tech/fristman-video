export type CaseStudy = {
  slug: string
  href: string
  title: string
  client: string
  industry: string
  gated: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "petrofac-kemaman",
    href: "/case-studies/petrofac-kemaman",
    title: "Petrofac Kemaman Supply Base",
    client: "Petrofac",
    industry: "Oil & Gas",
    gated: true,
  },
  {
    slug: "mahb-airport-services",
    href: "/case-studies/mahb-airport-services",
    title: "MAHB Airport Services 2018",
    client: "MAHB",
    industry: "Aviation & Infrastructure",
    gated: false,
  },
  {
    slug: "servishero-campaign",
    href: "/case-studies/servishero-campaign",
    title: "ServisHero Campaign",
    client: "ServisHero",
    industry: "Commercial",
    gated: false,
  },
  {
    slug: "syndel-asia",
    href: "/case-studies/syndel-asia",
    title: "Syndel Asia Industrial Documentation",
    client: "Syndel Asia",
    industry: "Industrial",
    gated: false,
  },
  {
    slug: "ecobalance",
    href: "/case-studies/ecobalance",
    title: "EcoBalance Corporate Story",
    client: "EcoBalance",
    industry: "Environmental Services",
    gated: false,
  },
  {
    slug: "ben-line-agencies",
    href: "/case-studies/ben-line-agencies",
    title: "Ben Line Agencies Logistics Industrial Media",
    client: "Ben Line Agencies",
    industry: "Logistics & Marine",
    gated: false,
  },
]
