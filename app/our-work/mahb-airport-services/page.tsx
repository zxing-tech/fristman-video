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
  title: "MAHB Airport Services Case Study",
  description:
    "Industrial drone cinematography case study: MAHB Airport Services in Malaysia, documenting ground logistics with site-aware aerial capture for Southeast Asia.",
  path: "/our-work/mahb-airport-services",
  ogImage: "/images/stitch/e5f0e42271.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "MAHB Airport Services", path: "/our-work/mahb-airport-services" },
  ]),
  creativeWorkSchema({
    name: "MAHB Airport Services",
    description:
      "Industrial drone cinematography and site-aware aerial documentation of MAHB Airport Services' ground logistics operations in Malaysia.",
    path: "/our-work/mahb-airport-services",
    client: "MAHB",
    image: "/images/stitch/e5f0e42271.jpg",
  })
)

export default function MahbAirportServicesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <header className="relative flex min-h-[716px] flex-col justify-end px-8 pt-40 pb-24">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 mix-blend-normal dark:opacity-30 dark:mix-blend-overlay"
            style={{ backgroundImage: "url('/images/stitch/e5f0e42271.jpg')" }}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <nav className="mb-6 flex items-center gap-2 text-xs tracking-[0.2em] text-white/70 uppercase">
            <Link className="transition-colors hover:text-white" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <Link
              className="transition-colors hover:text-white"
              href="/our-work"
            >
              Case Studies
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <span className="text-white">MAHB 2018</span>
          </nav>
          <h1 className="max-w-4xl text-4xl leading-none font-black tracking-tight text-white font-stretch-semi-condensed md:text-7xl">
            MAHB Airport Services —{" "}
            <span className="text-primary">Visual Storytelling Reference.</span>
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-32 px-8 py-24">
        {/* Public Summary & Context */}
        <section className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm font-bold tracking-widest text-primary uppercase">
                Overview
              </span>
            </div>
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              Industrial Cinematography for Aviation Logistics.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-industrial-grey">
              This visual engagement for MAHB Airport Services focused on
              creating a comprehensive visual storytelling reference for their
              2018 operational cycle. Our approach prioritized high-fidelity
              site-aware capture to document the scale and complexity of airport
              ground services without disrupting active logistics flows.
            </p>
            <p className="text-lg leading-relaxed text-industrial-grey">
              By leveraging drone-enabled documentation, we captured
              perspectives that offer stakeholder clarity on asset positioning
              and operational movement within high-security environments. This
              reference serves as a foundational archive for corporate
              communications and internal facility reviews.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="glass-panel flex h-full flex-col justify-between rounded-2xl p-8">
              <div>
                <h3 className="mb-6 text-xs font-bold tracking-widest text-surface/50 uppercase">
                  Project Metadata
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-surface/5 pb-4">
                    <span className="text-industrial-grey">Client</span>
                    <span className="font-bold text-surface">
                      MAHB Services
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-surface/5 pb-4">
                    <span className="text-industrial-grey">Year</span>
                    <span className="font-bold text-surface">2018</span>
                  </div>
                  <div className="flex justify-between border-b border-surface/5 pb-4">
                    <span className="text-industrial-grey">Environment</span>
                    <span className="font-bold text-surface">
                      High-Security Terminal
                    </span>
                  </div>
                  <div className="flex justify-between pb-4">
                    <span className="text-industrial-grey">Capture Tech</span>
                    <span className="font-bold text-surface">
                      UAV / Site-Aware Systems
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-surface/5 pt-8">
                <p className="text-[10px] leading-relaxed tracking-widest text-industrial-grey uppercase">
                  Note: All capture activities were conducted under strict
                  adherence to civil aviation safety regulations and local
                  security protocols.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Approach Section */}
        <section className="space-y-12">
          <div className="group relative aspect-[21/9] overflow-hidden rounded-3xl bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/stitch/cb0f98cfaa.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute right-8 bottom-8 left-8 flex items-end justify-between">
              <div className="max-w-xl">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Site-Aware Capture
                </h3>
                <p className="text-sm text-white/70">
                  Strategic drone positioning to document complex ground service
                  maneuvers without interference.
                </p>
              </div>
              <div className="glass-panel rounded-full px-4 py-2 text-[10px] font-bold tracking-tighter text-white/60 uppercase">
                Operational Reference 04
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="glass-panel rounded-3xl p-10">
              <h4 className="mb-4 flex items-center gap-3 text-xl font-bold">
                <MaterialIcon
                  name="precision_manufacturing"
                  className="text-primary"
                />
                Technical Execution
              </h4>
              <p className="leading-relaxed text-industrial-grey">
                The visual approach utilized drone-enabled documentation to
                bridge the gap between ground-level logistics and
                bird&apos;s-eye site awareness. Every flight path was
                pre-calculated to ensure 100% compliance with airfield exclusion
                zones while maximizing the visual clarity of the industrial
                assets being documented.
              </p>
            </div>
            <div className="glass-panel rounded-3xl border-primary/20 p-10">
              <h4 className="mb-4 flex items-center gap-3 text-xl font-bold">
                <MaterialIcon name="security" className="text-primary" />
                Safety Compliance
              </h4>
              <p className="leading-relaxed text-industrial-grey">
                Our team implemented a visual storytelling reference framework
                that prioritized safety above aesthetics. By coordinating with
                MAHB flight operations, we successfully captured high-stakes
                movements in real-time, providing a verified documentation
                stream for internal safety review boards.
              </p>
            </div>
          </div>
        </section>

        {/* Likely Deliverables Bento Grid */}
        <section>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold tracking-[0.4em] text-primary uppercase">
              Project Outputs
            </h2>
            <h3 className="text-4xl font-bold">Standard Visual Deliverables</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group glass-panel flex aspect-square flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name="movie"
                  className="text-3xl transition-transform group-hover:scale-110 group-hover:text-primary"
                />
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">Milestone Reels</h4>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  Condensed cinematic summaries of project phases for corporate
                  reporting and high-level stakeholder presentations.
                </p>
              </div>
            </div>
            {/* Card 2 (Large) */}
            <div className="group glass-panel flex flex-col justify-between rounded-3xl border-primary/10 p-8 transition-all duration-500 hover:bg-surface/[0.05] md:col-span-1 md:row-span-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 bg-primary/5 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name="video_camera_back"
                  fill
                  className="text-3xl text-primary transition-transform group-hover:scale-110"
                />
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold">Site Awareness Clips</h4>
                <p className="leading-relaxed text-industrial-grey">
                  Drone-enabled documentation focusing on the spatial
                  relationship between mobile ground assets and fixed terminal
                  infrastructure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-industrial-grey">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Logistical flow mapping
                  </li>
                  <li className="flex items-center gap-3 text-sm text-industrial-grey">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Asset interaction studies
                  </li>
                  <li className="flex items-center gap-3 text-sm text-industrial-grey">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Congestion point identification
                  </li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group glass-panel flex aspect-square flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name="photo_camera"
                  className="text-3xl transition-transform group-hover:scale-110 group-hover:text-primary"
                />
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">Asset Photography</h4>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  High-resolution stills of specific service vehicles and
                  terminal hardware for maintenance archives.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group glass-panel flex aspect-square flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name="inventory"
                  className="text-3xl transition-transform group-hover:scale-110 group-hover:text-primary"
                />
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">Visual Archive</h4>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  A structured library of raw and processed footage organized by
                  terminal sector and time of day.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group glass-panel flex aspect-square flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:bg-surface/[0.05]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name="timeline"
                  className="text-3xl transition-transform group-hover:scale-110 group-hover:text-primary"
                />
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold">Progress Logs</h4>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  Incremental visual updates showing site development or
                  operational changes over the 2018 period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality Note */}
        <section className="mx-auto max-w-4xl">
          <div className="group relative overflow-hidden rounded-3xl border border-surface/10 bg-dark-ui p-6 text-center sm:p-10 md:p-12">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <MaterialIcon name="lock" className="text-9xl" />
            </div>
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] font-bold tracking-widest text-primary uppercase">
                <MaterialIcon name="encrypted" fill className="text-sm" />
                Restricted Industrial Data
              </div>
              <h3 className="mb-6 text-2xl font-bold md:text-3xl">
                Confidentiality & Secure Access
              </h3>
              <p className="mb-8 leading-relaxed text-industrial-grey">
                The full visual dataset for MAHB Airport Services contains
                sensitive operational site details. Specific asset
                visualizations, security protocols, and unrestricted terminal
                overviews are private and strictly protected. Access to the full
                Gated Video Archive is granted only to verified personnel with
                appropriate credentials.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-xs tracking-widest text-surface/40 uppercase">
                  <MaterialIcon name="verified_user" className="text-sm" />{" "}
                  256-bit encryption
                </div>
                <div className="flex items-center gap-2 text-xs tracking-widest text-surface/40 uppercase">
                  <MaterialIcon name="vpn_key" className="text-sm" /> Gated
                  Access Required
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-sm font-bold tracking-[0.4em] text-primary uppercase">
                Ecosystem
              </h2>
              <h3 className="text-4xl font-bold">Related Capabilities</h3>
            </div>
            <Link
              className="border-b border-primary pb-1 text-sm font-bold tracking-widest text-surface uppercase transition-colors hover:text-primary"
              href="/#services"
            >
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link
              className="group glass-panel relative block aspect-[16/7] overflow-hidden rounded-3xl bg-black"
              href="/services/corporate-videos"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/images/stitch/74c6710141.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-primary">
                  Corporate Videos
                </h4>
                <p className="mt-2 translate-y-4 transform text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Cinematic documentation for heavy industry.
                </p>
              </div>
            </Link>
            <Link
              className="group glass-panel relative block aspect-[16/7] overflow-hidden rounded-3xl bg-black"
              href="/services/facility-overview-films"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/images/stitch/7a8734914f.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-primary">
                  Facility Overviews
                </h4>
                <p className="mt-2 translate-y-4 transform text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Site-aware visual mapping for vast infrastructures.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Request Access CTA */}
        <section className="py-20">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] border-primary/30 p-8 text-center shadow-[0_0_20px_rgba(209,32,39,0.15)] sm:p-12 md:rounded-[3rem] md:p-16">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-8 text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl">
                View Private Industrial Archives.
              </h2>
              <p className="mb-10 text-lg text-industrial-grey">
                Interested in seeing our full range of airport service
                documentation? Request credentials to access the 2018 MAHB
                master archive and explore high-fidelity operational references.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <RequestAccessTrigger
                  defaultVideo="MAHB Airport Services 2018"
                  className="flex transform items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 font-bold tracking-[0.2em] text-white uppercase transition-all hover:scale-105 hover:bg-red-700"
                >
                  <MaterialIcon name="key" />
                  Request Access
                </RequestAccessTrigger>
                <Link
                  href="/contact"
                  className="rounded-full border border-surface/10 bg-surface/5 px-10 py-5 font-bold tracking-[0.2em] text-surface uppercase transition-all hover:bg-surface/10"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
