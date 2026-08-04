import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { JsonLd } from "@/components/seo/json-ld"
import {
  pageMeta,
  graph,
  breadcrumbSchema,
  creativeWorkSchema,
} from "@/lib/seo"

export const metadata = pageMeta({
  title: "Syndel Asia - Industrial Site Documentation",
  description:
    "Case study: industrial drone cinematography for Syndel Asia fabrication yard and marine terminal in Malaysia, for safety training and stakeholder reporting.",
  path: "/our-work/syndel-asia",
  ogImage: "/images/stitch/ea3a0c1e8b.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "Syndel Asia Documentation", path: "/our-work/syndel-asia" },
  ]),
  creativeWorkSchema({
    name: "Syndel Asia Documentation",
    description:
      "Industrial drone cinematography documenting Syndel Asia's fabrication yard and marine terminal operations for safety training and stakeholder reporting.",
    path: "/our-work/syndel-asia",
    client: "Syndel Asia",
    image: "/images/stitch/ea3a0c1e8b.jpg",
  })
)

export default function SyndelAsiaPage() {
  return (
    <main className="relative">
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <section className="relative flex h-[870px] w-full items-end overflow-hidden bg-black pb-24">
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Cinematic wide-angle view of a sprawling industrial refinery facility at dusk"
            role="img"
            className="h-full w-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('/images/stitch/ea3a0c1e8b.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-8">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="glass-panel border-white/20 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              [CONFIRM APPROVED ASSETS]
            </span>
            <span className="glass-panel border-white/20 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              [LOGO PERMISSION]
            </span>
          </div>
          <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-primary uppercase">
            CASE STUDY DETAIL — SYNDEL ASIA
          </h2>
          <h1 className="max-w-4xl text-4xl leading-none font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-7xl">
            Syndel Asia —{" "}
            <span className="text-white/60">
              Industrial Visual Documentation Reference
            </span>
          </h1>
        </div>
      </section>

      {/* Summary & Context */}
      <section className="mx-auto max-w-[1280px] px-8 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left Column: Summary */}
          <div className="space-y-12 lg:col-span-7">
            <div>
              <h3 className="mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                <span className="h-px w-8 bg-primary" /> Public Summary
              </h3>
              <p className="text-xl leading-relaxed font-light text-surface/90 md:text-2xl">
                A comprehensive visual documentation project for Syndel Asia,
                focused on capturing the operational scale and safety protocols
                of their industrial hub. This cinematic reference serves as the
                primary visual foundation for their stakeholder reporting and
                site-awareness training modules.
              </p>
            </div>
            <div className="glass-panel relative overflow-hidden rounded-2xl p-10">
              <h3 className="mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Project Context
              </h3>
              <div className="flex items-start gap-6">
                <MaterialIcon
                  name="location_on"
                  className="text-4xl text-surface/20"
                />
                <div>
                  <p className="mb-2 text-xs tracking-widest text-industrial-grey uppercase">
                    Facility & Location
                  </p>
                  <p className="text-lg font-semibold">
                    Syndel Asia Strategic Fabrication Yard & Marine Terminal
                  </p>
                  <p className="mt-2 text-industrial-grey">
                    Specialized heavy industry environment requiring rigorous
                    safety clearances and site-aware capture protocols for all
                    aerial and ground crews.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Details */}
          <div className="space-y-12 lg:col-span-5">
            <div className="space-y-8">
              <h3 className="mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Documentation Needs
              </h3>
              <ul className="space-y-4">
                <li className="group flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                  <span className="text-sm font-bold tracking-wider text-industrial-grey uppercase">
                    High-Altitude Site Awareness Overviews
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                  <span className="text-sm font-bold tracking-wider text-industrial-grey uppercase">
                    Fabrication Workflow Documentation
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                  <span className="text-sm font-bold tracking-wider text-industrial-grey uppercase">
                    Safety Protocol Compliance Visuals
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                  <span className="text-sm font-bold tracking-wider text-industrial-grey uppercase">
                    Marine Terminal Berth Operations
                  </span>
                </li>
              </ul>
            </div>
            <div className="border-t border-surface/10 pt-8">
              <h3 className="mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Visual Approach
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-industrial-grey">
                Leveraging drone-enabled cinematography and specialized
                ground-based capture methods, our team deployed a multi-angle
                strategy to document critical infrastructure without
                interrupting operational flow. The focus remained on precision
                framing and lighting to elevate technical site assets into
                professional cinematic reference material.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-graphite px-3 py-1 text-[10px] font-bold tracking-tighter">
                  4K LOG ACQUISITION
                </span>
                <span className="rounded-full bg-graphite px-3 py-1 text-[10px] font-bold tracking-tighter">
                  AERIAL SITE FLIGHTS
                </span>
                <span className="rounded-full bg-graphite px-3 py-1 text-[10px] font-bold tracking-tighter">
                  TIME-LAPSE DOCUMENTATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="bg-dark-ui py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Project Output
              </h3>
              <h2 className="text-3xl font-extrabold tracking-tight uppercase">
                Sample Deliverables
              </h2>
            </div>
            <span className="glass-panel px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-industrial-grey uppercase">
              [CLIENT-APPROVED WORDING PENDING]
            </span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group glass-panel relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:bg-graphite">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                <div
                  aria-label="Cinematic freeze-frame of a cargo ship being loaded at a marine terminal"
                  role="img"
                  className="h-full w-full bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0"
                  style={{
                    backgroundImage: "url('/images/stitch/497aa14516.jpg')",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <MaterialIcon name="play_circle" className="text-4xl" />
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold uppercase">
                Milestone Reels
              </h4>
              <p className="text-sm text-industrial-grey">
                Compressed cinematic highlights of key project phases for
                executive review.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group glass-panel relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:bg-graphite">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                <div
                  aria-label="Split-screen of an industrial fabrication yard from above and a welder at ground level"
                  role="img"
                  className="h-full w-full bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0"
                  style={{
                    backgroundImage: "url('/images/stitch/a0c6192d31.jpg')",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <MaterialIcon name="play_circle" className="text-4xl" />
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold uppercase">
                Monthly Update Films
              </h4>
              <p className="text-sm text-industrial-grey">
                Progressive documentation capture on a fixed 30-day site
                rotation schedule.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group glass-panel relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:bg-graphite">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                <div
                  aria-label="High-resolution still of an offshore platform structure with valves and sensors"
                  role="img"
                  className="h-full w-full bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0"
                  style={{
                    backgroundImage: "url('/images/stitch/a3d9969764.jpg')",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <MaterialIcon name="photo_library" className="text-4xl" />
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold uppercase">
                High-Res Still Packs
              </h4>
              <p className="text-sm text-industrial-grey">
                Ultra-high fidelity still imagery for annual reports and
                technical brochures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gated Access Section */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0 z-0">
          <div
            aria-hidden="true"
            className="h-full w-full bg-cover bg-center opacity-90 dark:opacity-30"
            style={{ backgroundImage: "url('/images/stitch/fa4a82d5bf.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center">
          <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-primary/30 bg-primary/10 px-6 py-2">
            <MaterialIcon name="lock" fill className="text-primary" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
              Confidential Asset Portal
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tighter text-white uppercase">
            RESTRICTED ACCESS ONLY
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-white/70">
            The full high-fidelity visual documentation library for Syndel Asia
            contains sensitive site-aware assets. Access is restricted to
            authorized personnel and verified project stakeholders.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RequestAccessTrigger
              defaultVideo="Syndel Asia — Industrial Visual Documentation Reference"
              className="w-full rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(209,32,39,0.3)] sm:w-auto"
            >
              REQUEST ACCESS CLEARANCE
            </RequestAccessTrigger>
            <Link
              href="/contact"
              className="glass-panel w-full rounded-full px-10 py-4 text-center text-sm font-bold tracking-widest text-white uppercase transition-all hover:border-primary sm:w-auto"
            >
              DISCUSS YOUR PRODUCTION
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-surface/5 py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <h3 className="mb-12 text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Related Capability Reference
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link
              href="/services/corporate-videos"
              className="group flex items-center justify-between rounded-2xl border border-surface/10 p-8 transition-all hover:border-primary/50"
            >
              <div>
                <h4 className="text-xl font-bold uppercase transition-colors group-hover:text-primary">
                  Corporate Videos
                </h4>
                <p className="mt-2 text-sm text-industrial-grey">
                  Specialized capture for heavy engineering.
                </p>
              </div>
              <MaterialIcon
                name="arrow_forward"
                className="text-industrial-grey transition-transform group-hover:translate-x-2"
              />
            </Link>
            <Link
              href="/services/facility-overview-films"
              className="group flex items-center justify-between rounded-2xl border border-surface/10 p-8 transition-all hover:border-primary/50"
            >
              <div>
                <h4 className="text-xl font-bold uppercase transition-colors group-hover:text-primary">
                  Facility Overviews
                </h4>
                <p className="mt-2 text-sm text-industrial-grey">
                  Site-aware visual narratives for stakeholders.
                </p>
              </div>
              <MaterialIcon
                name="arrow_forward"
                className="text-industrial-grey transition-transform group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
