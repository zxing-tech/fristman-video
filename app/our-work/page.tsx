import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { CaseStudiesPortfolio } from "@/components/site/our-work-portfolio"
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

export default function CaseStudiesPage() {
  return (
    <main className="relative flex flex-grow flex-col">
      <JsonLd data={caseStudiesSchema} />
      {/* Background elements */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-[600px] w-full bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-28 pb-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center text-xs tracking-widest text-industrial-grey uppercase">
          <Link className="transition-colors hover:text-surface" href="/">
            Home
          </Link>
          <MaterialIcon name="chevron_right" className="mx-2 text-[16px]" />
          <span className="text-surface">Case Studies</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16 max-w-4xl">
          <h1 className="mb-6 font-headline text-4xl leading-tight font-black tracking-tight uppercase font-stretch-semi-condensed md:text-7xl">
            Project Case Studies &{" "}
            <span className="text-primary">Portfolio</span>
          </h1>
          <p className="max-w-3xl font-body text-xl leading-relaxed text-industrial-grey">
            Real projects. Real results. Explore how Firstman Videos supports
            oil & gas and heavy industry teams with industrial cinematography,
            visual documentation and stakeholder-ready media.
          </p>
        </section>

        <CaseStudiesPortfolio />

        {/* Access Explanation Section */}
        <section className="relative mb-24 overflow-hidden border-y border-surface/10 bg-gradient-to-r from-graphite/50 via-transparent to-graphite/50 px-8 py-16 text-center">
          <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <MaterialIcon
              name="shield_lock"
              className="mb-4 text-4xl text-industrial-grey"
            />
            <h3 className="mb-4 font-headline text-2xl font-bold tracking-tight uppercase">
              Why are some videos locked?
            </h3>
            <p className="mb-6 font-body leading-relaxed text-industrial-grey">
              Due to the sensitive nature of operations, safety protocols, and
              proprietary processes within the oil & gas and heavy industry
              sectors, access to specific case studies is restricted. Approved
              access requires verification via a company email address and
              relevant project context.
            </p>
            <div className="inline-block rounded-full border border-surface/10 px-4 py-2 text-[10px] font-bold tracking-widest text-industrial-grey/60 uppercase">
              Client approval required before publication
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mb-24 text-center">
          <div className="glass-panel relative overflow-hidden rounded-2xl border-primary/20 p-8 sm:p-12 md:p-16">
            <div className="absolute top-0 left-1/2 h-[1px] w-32 -translate-x-1/2 bg-primary shadow-[0_0_10px_#d12027]" />
            <h2 className="mb-6 font-headline text-2xl font-bold tracking-tight uppercase sm:text-3xl md:text-4xl">
              Need a similar project documented?
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body text-industrial-grey">
              Connect with our team to discuss your operational requirements,
              safety protocols, and visual documentation objectives.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(209,32,39,0.3)] transition-all hover:bg-surface hover:text-primary hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Request a Similar Project
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
