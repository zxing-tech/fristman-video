import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { CaseStudiesPortfolio } from "@/components/site/case-studies-portfolio"
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMeta({
  title: "Case Studies: Oil & Gas Drone Video Portfolio",
  description:
    "Case studies of industrial drone cinematography and safety documentation for Oil & Gas and heavy industry clients across Malaysia and Southeast Asia.",
  path: "/case-studies",
})

const caseStudiesSchema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ])
)


export default function CaseStudiesPage() {
  return (
    <main className="flex-grow flex flex-col relative">
      <JsonLd data={caseStudiesSchema} />
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0" />
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center text-industrial-grey text-xs tracking-widest uppercase mb-12">
          <Link className="hover:text-surface transition-colors" href="/">
            Home
          </Link>
          <MaterialIcon name="chevron_right" className="text-[16px] mx-2" />
          <span className="text-surface">Case Studies</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16 max-w-4xl">
          <h1 className="font-headline font-bold text-4xl md:text-7xl leading-tight mb-6 tracking-tight uppercase">
            Project Case Studies & <span className="text-primary">Portfolio</span>
          </h1>
          <p className="font-body text-xl text-industrial-grey max-w-3xl leading-relaxed">
            Real projects. Real results. Explore how Firstman Videos supports oil & gas and heavy
            industry teams with industrial cinematography, visual documentation and stakeholder-ready
            media.
          </p>
        </section>

        <CaseStudiesPortfolio />

        {/* Access Explanation Section */}
        <section className="mb-24 py-16 px-8 border-y border-surface/10 bg-gradient-to-r from-graphite/50 via-transparent to-graphite/50 text-center relative overflow-hidden">
          <div className="absolute left-0 top-0 w-1 h-full bg-primary" />
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <MaterialIcon name="shield_lock" className="text-4xl text-industrial-grey mb-4" />
            <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-4">
              Why are some videos locked?
            </h3>
            <p className="font-body text-industrial-grey leading-relaxed mb-6">
              Due to the sensitive nature of operations, safety protocols, and proprietary processes
              within the oil & gas and heavy industry sectors, access to specific case studies is
              restricted. Approved access requires verification via a company email address and
              relevant project context.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-widest text-industrial-grey/60 border border-surface/10 rounded-full px-4 py-2 inline-block">
              Client approval required before publication
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mb-24 text-center">
          <div className="glass-panel rounded-2xl p-8 sm:p-12 md:p-16 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary shadow-[0_0_10px_#d12027]" />
            <h2 className="font-headline font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-6">
              Need a similar project documented?
            </h2>
            <p className="font-body text-industrial-grey mb-10 max-w-xl mx-auto">
              Connect with our team to discuss your operational requirements, safety protocols, and
              visual documentation objectives.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-primary text-white hover:bg-surface hover:text-primary transition-all shadow-[0_0_20px_rgba(209,32,39,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Request a Similar Project
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
