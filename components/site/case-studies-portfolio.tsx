"use client"

import { useState } from "react"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"

type PortfolioCardData = {
  href: string
  client: string
  title: string
  summary: string
  image: string
  tags: string[]
}

const cardHoverLift =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(209,32,39,0.2)] hover:border-primary/50"

const publicCards: PortfolioCardData[] = [
  {
    href: "/case-studies/mahb-airport-services",
    client: "MAHB",
    title: "Airport Services Campaign",
    summary:
      "A high-impact promotional campaign documenting critical ground operations and passenger services across key terminals.",
    image: "/images/stitch/6e63b9435e.jpg",
    tags: ["Facility Overview", "Public"],
  },
  {
    href: "/case-studies/ecobalance",
    client: "EcoBalance",
    title: "Corporate Short Story",
    summary:
      "Corporate documentary highlighting environmental compliance and sustainability initiatives within industrial frameworks.",
    image: "/images/stitch/3d2b58528c.jpg",
    tags: ["Public"],
  },
  {
    href: "/case-studies/servishero-campaign",
    client: "ServisHero",
    title: "Google Adwords Campaign",
    summary:
      "Targeted digital video assets created for specific performance marketing channels focusing on service delivery.",
    image: "/images/stitch/ab775bb3c7.jpg",
    tags: ["Public"],
  },
  {
    href: "/case-studies/syndel-asia",
    client: "Syndel Asia",
    title: "Industrial Documentation",
    summary:
      "Detailed visual capture of specialized manufacturing processes for quality assurance and stakeholder reporting.",
    image: "/images/stitch/e6ffaa4058.jpg",
    tags: ["Facility Overview", "Photography", "Public"],
  },
  {
    href: "/case-studies/ben-line-agencies",
    client: "Ben Line Agencies",
    title: "Logistics / Industrial Media",
    summary:
      "Comprehensive coverage of maritime logistics operations, focusing on safety protocols and heavy lift coordination.",
    image: "/images/stitch/be28ea9edd.jpg",
    tags: ["Facility Overview", "Photography", "Public"],
  },
]

const FEATURED_TAGS = ["Oil & Gas", "Safety Induction"]
const INLINE_GATED_TAGS = ["Oil & Gas"]

const ALL = "All"
// Only surface categories that actually have at least one matching case study,
// so no filter chip ever resolves to an empty grid.
const categories = [
  ALL,
  "Oil & Gas",
  "Facility Overview",
  "Safety Induction",
  "Photography",
  "Public",
]

function PortfolioCard({ href, client, title, summary, image }: Omit<PortfolioCardData, "tags">) {
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
        <div className="flex items-center text-xs font-bold uppercase tracking-widest text-surface gap-2 mt-auto">
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

export function CaseStudiesPortfolio() {
  const [selected, setSelected] = useState(ALL)
  const matches = (tags: string[]) => selected === ALL || tags.includes(selected)

  const visiblePublic = publicCards.filter((c) => matches(c.tags))
  const showFeatured = matches(FEATURED_TAGS)
  const showInlineGated = matches(INLINE_GATED_TAGS)
  const nothingVisible = !showFeatured && !showInlineGated && visiblePublic.length === 0

  return (
    <>
      {/* Filter Bar */}
      <div className="sticky top-24 z-40 bg-background/90 backdrop-blur-md py-4 mb-12 -mx-4 px-4 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-3 border-y border-surface/5 shadow-lg">
        {categories.map((cat) => {
          const active = selected === cat
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest border transition-colors ${
                active
                  ? "bg-primary text-white border-primary"
                  : "bg-graphite text-surface border-surface/10 hover:border-primary/50 hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          )
        })}
        <RequestAccessTrigger className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest bg-transparent text-primary border border-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
          <MaterialIcon name="lock" className="text-[16px]" /> Request Access
        </RequestAccessTrigger>
      </div>

      {/* Featured Gated Case Study */}
      {showFeatured && (
        <section className="mb-24">
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col lg:flex-row relative group border-primary/30 shadow-[0_0_30px_rgba(209,32,39,0.15)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="lg:w-3/5 relative min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/stitch/571d2d6c4f.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center border-r border-white/5">
                <div className="w-20 h-20 rounded-full bg-graphite border border-primary flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(209,32,39,0.4)]">
                  <MaterialIcon name="lock" fill className="text-4xl text-primary" />
                </div>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-wider mb-2 text-white">
                  Restricted Access
                </h3>
                <p className="font-body text-white/70 text-sm max-w-md">
                  This project contains sensitive industrial protocols and is gated for approved
                  industry stakeholders only.
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 p-10 flex flex-col justify-center">
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-graphite text-surface rounded-full border border-surface/10">
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
                <span>Safety Induction</span> • <span>Oil &amp; Gas</span>
              </div>
              <p className="font-body text-industrial-grey leading-relaxed mb-10">
                Comprehensive safety induction documentation for Petrofac&apos;s operations at the
                Kemaman Supply Base. Filmed under strict safety protocols focusing on heavy lifting
                procedures, PPE compliance, and emergency response protocols in high-risk zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <RequestAccessTrigger
                  defaultVideo="Safety Induction Video — Kemaman Supply Base"
                  className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-primary text-white hover:bg-background hover:text-primary hover:border-primary border border-transparent transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <MaterialIcon name="key" className="text-[18px]" /> Request Access
                </RequestAccessTrigger>
                <Link
                  href="/case-studies/petrofac-kemaman"
                  className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-transparent text-surface border border-surface/20 hover:border-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                >
                  Read Public Summary
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Grid */}
      <section className="mb-24">
        {nothingVisible ? (
          <p className="text-center text-industrial-grey py-16">
            No case studies in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePublic.map((card) => (
              <PortfolioCard key={card.href} {...card} />
            ))}

            {/* Gated Card */}
            {showInlineGated && (
              <div
                className={`glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer h-full border-primary/20 relative ${cardHoverLift}`}
              >
                <div className="h-56 relative overflow-hidden bg-graphite">
                  <div className="absolute inset-0 bg-black" />
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
                    Future O&amp;G Drone Documentation
                  </h3>
                  <p className="font-body text-industrial-grey text-sm mb-6 flex-grow">
                    Advanced aerial surveying and visual asset mapping for a major offshore
                    installation utilizing aerial and heavy-lift drones.
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
            )}
          </div>
        )}
      </section>
    </>
  )
}
