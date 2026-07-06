export type Industry = {
  slug: string
  href: string
  title: string
  icon: string
  summary: string
}

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    href: "/industries/oil-gas",
    title: "Oil & Gas",
    icon: "oil_barrel",
    summary:
      "Drone-enabled industrial cinematography for onshore and offshore oil & gas operations, from supply bases to platforms.",
  },
  {
    slug: "energy-utilities",
    href: "/industries/energy-utilities",
    title: "Energy & Utilities",
    icon: "bolt",
    summary:
      "Visual documentation for power generation, transmission infrastructure, and utility-scale energy projects.",
  },
  {
    slug: "marine-offshore",
    href: "/industries/marine-offshore",
    title: "Marine & Offshore",
    icon: "anchor",
    summary:
      "Cinematic coverage of vessels, ports, shipyards, and offshore assets across Southeast Asia's maritime hubs.",
  },
  {
    slug: "fabrication-construction",
    href: "/industries/fabrication-construction",
    title: "Fabrication & Construction",
    icon: "construction",
    summary:
      "Progress monitoring and milestone documentation for fabrication yards and large-scale construction projects.",
  },
]
