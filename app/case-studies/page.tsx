import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects. Real results. Explore how Firstman Videos supports oil & gas and heavy industry teams with industrial cinematography, visual documentation and stakeholder-ready media.",
}

const filterChips = [
  "Oil & Gas",
  "Facility Overview",
  "Safety Induction",
  "Timelapse",
  "FPV",
  "Photography",
  "Public",
]

const cardHoverLift =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(209,32,39,0.2)] hover:border-primary/50"

const portfolioCards = [
  {
    href: "/case-studies/mahb-airport-services",
    client: "MAHB",
    title: "Airport Services Campaign",
    summary:
      "A high-impact promotional campaign documenting critical ground operations and passenger services across key terminals.",
    image: "/images/stitch/6e63b9435e.jpg",
  },
  {
    href: "/case-studies/ecobalance",
    client: "EcoBalance",
    title: "Corporate Short Story",
    summary:
      "Corporate documentary highlighting environmental compliance and sustainability initiatives within industrial frameworks.",
    image: "/images/stitch/3d2b58528c.jpg",
  },
  {
    href: "/case-studies/servishero-campaign",
    client: "ServisHero",
    title: "Google Adwords Campaign",
    summary:
      "Targeted digital video assets created for specific performance marketing channels focusing on service delivery.",
    image: "/images/stitch/ab775bb3c7.jpg",
  },
]

const portfolioCardsAfterGated = [
  {
    href: "/case-studies/syndel-asia",
    client: "Syndel Asia",
    title: "Industrial Documentation",
    summary:
      "Detailed visual capture of specialized manufacturing processes for quality assurance and stakeholder reporting.",
    image: "/images/stitch/e6ffaa4058.jpg",
  },
  {
    href: "/case-studies/ben-line-agencies",
    client: "Ben Line Agencies",
    title: "Logistics / Industrial Media",
    summary:
      "Comprehensive coverage of maritime logistics operations, focusing on safety protocols and heavy lift coordination.",
    image: "/images/stitch/be28ea9edd.jpg",
  },
]

function PortfolioCard({
  href,
  client,
  title,
  summary,
  image,
}: {
  href: string
  client: string
  title: string
  summary: string
  image: string
}) {
  return (
    <Link
      href={href}
      className={`glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer h-full ${cardHoverLift}`}
    >
      <div className="h-56 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur text-white rounded-full border border-white/20">
          Public
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{client}</div>
        <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body text-industrial-grey text-sm mb-6 flex-grow">{summary}</p>
        <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white gap-2 mt-auto">
          View Project{" "}
          <MaterialIcon
            name="arrow_forward"
            className="text-[16px] transition-transform group-hover:translate-x-1 text-primary"
          />
        </div>
      </div>
    </Link>
  )
}

export default function CaseStudiesPage() {
  return (
    <main className="flex-grow flex flex-col relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0" />
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center text-industrial-grey text-xs tracking-widest uppercase mb-12">
          <Link className="hover:text-white transition-colors" href="/">
            Home
          </Link>
          <MaterialIcon name="chevron_right" className="text-[16px] mx-2" />
          <span className="text-white">Case Studies</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16 max-w-4xl">
          <h1 className="font-headline font-bold text-5xl md:text-7xl leading-tight mb-6 tracking-tight uppercase">
            Project Case Studies & <span className="text-primary">Portfolio</span>
          </h1>
          <p className="font-body text-xl text-industrial-grey max-w-3xl leading-relaxed">
            Real projects. Real results. Explore how Firstman Videos supports oil & gas and heavy
            industry teams with industrial cinematography, visual documentation and stakeholder-ready
            media.
          </p>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-24 z-40 bg-black/90 backdrop-blur-md py-4 mb-12 -mx-4 px-4 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-3 border-y border-white/5 shadow-lg">
          <button
            type="button"
            className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest bg-primary text-white border border-primary transition-colors"
          >
            All
          </button>
          {filterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest bg-graphite text-white border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              {chip}
            </button>
          ))}
          <RequestAccessTrigger className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest bg-transparent text-primary border border-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
            <MaterialIcon name="lock" className="text-[16px]" /> Request Access
          </RequestAccessTrigger>
        </div>

        {/* Featured Gated Case Study */}
        <section className="mb-24">
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col lg:flex-row relative group border-primary/30 shadow-[0_0_30px_rgba(209,32,39,0.15)]">
            {/* Red scanner line effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="lg:w-3/5 relative min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/stitch/571d2d6c4f.jpg')" }}
              />
              {/* Gated Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center border-r border-white/5">
                <div className="w-20 h-20 rounded-full bg-graphite border border-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(209,32,39,0.4)]">
                  <MaterialIcon name="lock" fill className="text-4xl text-primary" />
                </div>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-wider mb-2">
                  Restricted Access
                </h3>
                <p className="font-body text-industrial-grey text-sm max-w-md">
                  This project contains sensitive industrial protocols and is gated for approved
                  industry stakeholders only.
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 p-10 flex flex-col justify-center">
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-graphite text-white rounded-full border border-white/10">
                  Petrofac
                </span>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full border border-primary/30 flex items-center gap-1">
                  <MaterialIcon name="lock" className="text-[14px]" /> Gated Video
                </span>
              </div>
              <h2 className="font-headline font-bold text-3xl uppercase tracking-tight mb-4">
                Safety Induction Video — Kemaman Supply Base
              </h2>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-industrial-grey mb-6">
                <span>Safety Induction</span> • <span>Oil & Gas</span>
              </div>
              <p className="font-body text-industrial-grey leading-relaxed mb-10">
                Comprehensive safety induction documentation for Petrofac&apos;s operations at the Kemaman
                Supply Base. Filmed under strict safety protocols focusing on heavy lifting
                procedures, PPE compliance, and emergency response protocols in high-risk zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <RequestAccessTrigger
                  defaultVideo="Safety Induction Video — Kemaman Supply Base"
                  className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-primary text-white hover:bg-black hover:text-primary hover:border-primary border border-transparent transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <MaterialIcon name="key" className="text-[18px]" /> Request Access
                </RequestAccessTrigger>
                <Link
                  href="/case-studies/petrofac-kemaman"
                  className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-transparent text-white border border-white/20 hover:border-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                >
                  Read Public Summary
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCards.map((card) => (
              <PortfolioCard key={card.href} {...card} />
            ))}

            {/* Gated Card */}
            <div
              className={`glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer h-full border-primary/20 relative ${cardHoverLift}`}
            >
              <div className="h-56 relative overflow-hidden bg-graphite">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                  style={{ backgroundImage: "url('/images/stitch/c5510b9322.jpg')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
                  <MaterialIcon name="lock" className="text-4xl text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary rounded-full border border-primary/50 flex items-center gap-1 backdrop-blur">
                    <MaterialIcon name="lock" className="text-[12px]" /> Gated
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold uppercase tracking-widest text-industrial-grey mb-2">
                  Confidential Client
                </div>
                <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                  Future O&G Drone Documentation
                </h3>
                <p className="font-body text-industrial-grey text-sm mb-6 flex-grow">
                  Advanced aerial surveying and visual asset mapping for a major offshore installation
                  utilizing FPV and heavy-lift drones.
                </p>
                <RequestAccessTrigger
                  defaultVideo="Future O&G Drone Documentation"
                  className="flex items-center text-xs font-bold uppercase tracking-widest text-primary gap-2 mt-auto"
                >
                  Request Access{" "}
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-[16px] transition-transform group-hover:translate-x-1"
                  />
                </RequestAccessTrigger>
              </div>
            </div>

            {portfolioCardsAfterGated.map((card) => (
              <PortfolioCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        {/* Access Explanation Section */}
        <section className="mb-24 py-16 px-8 border-y border-white/10 bg-gradient-to-r from-graphite/50 via-transparent to-graphite/50 text-center relative overflow-hidden">
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
            <div className="text-[10px] font-bold uppercase tracking-widest text-industrial-grey/60 border border-white/10 rounded-full px-4 py-2 inline-block">
              Client approval required before publication
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mb-24 text-center">
          <div className="glass-panel rounded-2xl p-16 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary shadow-[0_0_10px_#d12027]" />
            <h2 className="font-headline font-bold text-4xl uppercase tracking-tight mb-6">
              Need a similar project documented?
            </h2>
            <p className="font-body text-industrial-grey mb-10 max-w-xl mx-auto">
              Connect with our team to discuss your operational requirements, safety protocols, and
              visual documentation objectives.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-primary text-white hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(209,32,39,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Request a Similar Project
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
