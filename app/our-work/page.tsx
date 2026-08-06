import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { CaseStudiesPortfolio } from "@/components/site/our-work-portfolio"
import { SectionLabel } from "@/components/site/section-label"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceSection } from "@/components/site/service-section"
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMeta({
  title: "Case Studies: Oil & Gas Drone Video Portfolio",
  description:
    "Case studies of industrial drone cinematography and safety documentation for Oil & Gas and heavy industry clients across Malaysia and Southeast Asia.",
  path: "/our-work",
})

const caseStudiesSchema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
  ])
)

/**
 * The hub is the one page under `/our-work` that does NOT take the footage
 * hero the six detail pages share, and that is deliberate. Its job is to put
 * the work on screen; a 38rem video band before the first card would push the
 * grid past the fold on every laptop, which is the complaint this section
 * exists to answer (PRODUCT.md `## Brand Commitments`, the owner's own words on
 * 2026-08-04). A compact header gets the filter bar and the first row of cards
 * into the first viewport instead.
 */
export default function CaseStudiesPage() {
  return (
    <main className="relative flex flex-grow flex-col">
      <JsonLd data={caseStudiesSchema} />

      <header className="relative w-full overflow-hidden bg-background pt-28 pb-12 md:pt-32 md:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary/10 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
              <li className="flex items-center gap-x-2">
                {/* Same 24px hit area as the detail-page crumbs — see
                    service-hero.tsx for the measurement behind it. */}
                <Link
                  className="-my-1 py-1 transition-colors hover:text-surface"
                  href="/"
                >
                  Home
                </Link>
                <MaterialIcon name="chevron_right" className="text-base!" />
              </li>
              <li aria-current="page" className="text-primary">
                Case Studies
              </li>
            </ol>
          </nav>

          <SectionLabel className="mb-4 block">Portfolio</SectionLabel>
          {/* Display role: the only h1 on the page, and the only place the
              system leaves `font-stretch: 100%`. Sentence case, like every
              other h1 on the site — see The Scarce Capitals Rule. */}
          {/* Same 36/48/60/72 ramp as the homepage and the ServiceHero h1 — the
              `sm` step closes a jump from 36px straight to 60px at 768px. */}
          <h1 className="max-w-4xl font-headline text-4xl leading-[1.1] font-black tracking-tight text-balance text-surface font-stretch-semi-condensed sm:text-5xl md:text-6xl lg:text-7xl">
            Project case studies &{" "}
            <span className="text-primary">portfolio</span>
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-industrial-grey">
            Real projects. Real results. Explore how Firstman Videos supports
            oil &amp; gas and heavy industry teams with industrial
            cinematography, visual documentation and stakeholder-ready media.
          </p>
        </div>
      </header>

      <CaseStudiesPortfolio />

      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Access"
        title="Why are some videos locked?"
        lede="Due to the sensitive nature of operations, safety protocols, and proprietary processes within the oil & gas and heavy industry sectors, access to specific case studies is restricted. Approved access requires verification via a company email address and relevant project context."
      >
        <p className="flex items-center gap-3 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
          <MaterialIcon
            name="shield_lock"
            className="text-base! text-primary"
          />
          Client approval required before publication
        </p>
      </ServiceSection>

      <ServiceCta
        title="Need a similar project documented?"
        lede="Connect with our team to discuss your operational requirements, safety protocols, and visual documentation objectives."
        action="Request a Similar Project"
      />
    </main>
  )
}
