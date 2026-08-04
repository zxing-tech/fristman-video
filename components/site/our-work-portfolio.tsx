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
    href: "/our-work/mahb-airport-services",
    client: "MAHB",
    title: "Airport Services Campaign",
    summary:
      "A high-impact promotional campaign documenting critical ground operations and passenger services across key terminals.",
    image: "/images/stitch/6e63b9435e.jpg",
    tags: ["Facility Overview", "Public"],
  },
  {
    href: "/our-work/ecobalance",
    client: "EcoBalance",
    title: "Corporate Short Story",
    summary:
      "Corporate documentary highlighting environmental compliance and sustainability initiatives within industrial frameworks.",
    image: "/images/stitch/3d2b58528c.jpg",
    tags: ["Public"],
  },
  {
    href: "/our-work/servishero-campaign",
    client: "ServisHero",
    title: "Google Adwords Campaign",
    summary:
      "Targeted digital video assets created for specific performance marketing channels focusing on service delivery.",
    image: "/images/stitch/ab775bb3c7.jpg",
    tags: ["Public"],
  },
  {
    href: "/our-work/syndel-asia",
    client: "Syndel Asia",
    title: "Industrial Documentation",
    summary:
      "Detailed visual capture of specialized manufacturing processes for quality assurance and stakeholder reporting.",
    image: "/images/stitch/e6ffaa4058.jpg",
    tags: ["Facility Overview", "Photography", "Public"],
  },
  {
    href: "/our-work/ben-line-agencies",
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

function PortfolioCard({
  href,
  client,
  title,
  summary,
  image,
}: Omit<PortfolioCardData, "tags">) {
  return (
    <Link
      href={href}
      className={`glass-panel group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl ${cardHoverLift}`}
    >
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur">
          Public
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
          {client}
        </div>
        <h3 className="mb-4 font-headline text-xl font-bold tracking-tight uppercase transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-6 flex-grow font-body text-sm text-industrial-grey">
          {summary}
        </p>
        <div className="mt-auto flex items-center gap-2 text-xs font-bold tracking-widest text-surface uppercase">
          View Project{" "}
          <MaterialIcon
            name="arrow_forward"
            className="text-[16px] text-primary transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  )
}

export function CaseStudiesPortfolio() {
  const [selected, setSelected] = useState(ALL)
  const matches = (tags: string[]) =>
    selected === ALL || tags.includes(selected)

  const visiblePublic = publicCards.filter((c) => matches(c.tags))
  const showFeatured = matches(FEATURED_TAGS)
  const showInlineGated = matches(INLINE_GATED_TAGS)
  const nothingVisible =
    !showFeatured && !showInlineGated && visiblePublic.length === 0

  return (
    <>
      {/* Filter Bar */}
      <div className="sticky top-24 z-40 -mx-4 mb-12 no-scrollbar flex gap-3 overflow-x-auto border-y border-surface/5 bg-background/90 px-4 py-4 whitespace-nowrap shadow-lg backdrop-blur-md">
        {categories.map((cat) => {
          const active = selected === cat
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-bold tracking-widest uppercase transition-colors ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-surface/10 bg-graphite text-surface hover:border-primary/50 hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          )
        })}
        <RequestAccessTrigger className="flex items-center gap-2 rounded-full border border-primary bg-transparent px-5 py-2 text-sm font-bold tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-white">
          <MaterialIcon name="lock" className="text-[16px]" /> Request Access
        </RequestAccessTrigger>
      </div>

      {/* Featured Gated Case Study */}
      {showFeatured && (
        <section className="mb-24">
          <div className="glass-panel group relative flex flex-col overflow-hidden rounded-2xl border-primary/30 shadow-[0_0_30px_rgba(209,32,39,0.15)] lg:flex-row">
            <div className="absolute top-0 left-0 h-[2px] w-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative min-h-[400px] lg:w-3/5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/stitch/571d2d6c4f.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center border-r border-white/5 bg-black/70 p-8 text-center backdrop-blur-sm">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary bg-graphite shadow-[0_0_20px_rgba(209,32,39,0.4)]">
                  <MaterialIcon
                    name="lock"
                    fill
                    className="text-4xl text-primary"
                  />
                </div>
                <h3 className="mb-2 font-headline text-2xl font-bold tracking-wider text-white uppercase">
                  Restricted Access
                </h3>
                <p className="max-w-md font-body text-sm text-white/70">
                  This project contains sensitive industrial protocols and is
                  gated for approved industry stakeholders only.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-10 lg:w-2/5">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-surface/10 bg-graphite px-3 py-1 text-xs font-bold tracking-wider text-surface uppercase">
                  Petrofac
                </span>
                <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase">
                  <MaterialIcon name="lock" className="text-[14px]" /> Gated
                  Video
                </span>
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight uppercase">
                Safety Induction Video — Kemaman Supply Base
              </h2>
              <div className="mb-6 flex gap-4 text-xs font-bold tracking-widest text-industrial-grey uppercase">
                <span>Safety Induction</span> • <span>Oil &amp; Gas</span>
              </div>
              <p className="mb-10 font-body leading-relaxed text-industrial-grey">
                Comprehensive safety induction documentation for Petrofac&apos;s
                operations at the Kemaman Supply Base. Filmed under strict
                safety protocols focusing on heavy lifting procedures, PPE
                compliance, and emergency response protocols in high-risk zones.
              </p>
              <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                <RequestAccessTrigger
                  defaultVideo="Safety Induction Video — Kemaman Supply Base"
                  className="group/btn flex items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all hover:border-primary hover:bg-background hover:text-primary"
                >
                  <MaterialIcon name="key" className="text-[18px]" /> Request
                  Access
                </RequestAccessTrigger>
                <Link
                  href="/our-work/petrofac-kemaman"
                  className="flex items-center justify-center gap-2 rounded-full border border-surface/20 bg-transparent px-6 py-3 text-sm font-bold tracking-widest text-surface uppercase transition-colors hover:border-primary hover:bg-primary/10"
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
          <p className="py-16 text-center text-industrial-grey">
            No case studies in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePublic.map((card) => (
              <PortfolioCard key={card.href} {...card} />
            ))}

            {/* Gated Card */}
            {showInlineGated && (
              <div
                className={`glass-panel group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border-primary/20 ${cardHoverLift}`}
              >
                <div className="relative h-56 overflow-hidden bg-graphite">
                  <div className="absolute inset-0 bg-black" />
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: "url('/images/stitch/c5510b9322.jpg')",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
                    <MaterialIcon
                      name="lock"
                      className="text-4xl text-white opacity-80"
                    />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="flex items-center gap-1 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase backdrop-blur">
                      <MaterialIcon name="lock" className="text-[12px]" /> Gated
                    </span>
                  </div>
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-2 text-xs font-bold tracking-widest text-industrial-grey uppercase">
                    Confidential Client
                  </div>
                  <h3 className="mb-4 font-headline text-xl font-bold tracking-tight uppercase transition-colors group-hover:text-primary">
                    Future O&amp;G Drone Documentation
                  </h3>
                  <p className="mb-6 flex-grow font-body text-sm text-industrial-grey">
                    Advanced aerial surveying and visual asset mapping for a
                    major offshore installation utilizing aerial and heavy-lift
                    drones.
                  </p>
                  <RequestAccessTrigger
                    defaultVideo="Future O&G Drone Documentation"
                    className="mt-auto flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase"
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
