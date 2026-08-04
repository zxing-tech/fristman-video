import Image from "next/image"
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
  title: "Ben Line Agencies: Industrial Drone Case Study",
  description:
    "Drone cinematography case study for Ben Line Agencies' port and logistics hubs in Southeast Asia, capturing industrial scale under strict maritime safety rules.",
  path: "/our-work/ben-line-agencies",
  ogImage: "/images/stitch/a73f0ee0ad.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "Ben Line Agencies", path: "/our-work/ben-line-agencies" },
  ]),
  creativeWorkSchema({
    name: "Ben Line Agencies",
    description:
      "Drone-enabled cinematography and visual documentation of Ben Line Agencies' logistics hubs and port operations in Southeast Asia.",
    path: "/our-work/ben-line-agencies",
    client: "Ben Line Agencies",
    image: "/images/stitch/a73f0ee0ad.jpg",
  })
)

export default function BenLineAgenciesPage() {
  return (
    <main className="relative">
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <section className="relative flex h-[819px] w-full items-end overflow-hidden bg-black pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div
            className="h-full w-full scale-105 transform bg-cover bg-center"
            style={{ backgroundImage: "url('/images/stitch/a73f0ee0ad.jpg')" }}
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="bg-primary px-3 py-1 text-[10px] font-black tracking-[0.2em] text-white uppercase">
              Logistics Reference
            </span>
            <div className="h-px w-24 bg-primary/50" />
          </div>
          <h1 className="max-w-4xl text-4xl leading-tight font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-7xl">
            Ben Line Agencies —{" "}
            <span className="text-primary">Logistics Visual Reference</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-white/70">
            A comprehensive visual documentation project focusing on
            drone-enabled cinematography for complex logistics hubs and port
            operations. Capturing scale and operational flow without site
            interference.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-12">
        {/* Left Column: Narrative */}
        <div className="space-y-20 lg:col-span-8">
          {/* Logistics Context */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MaterialIcon
                name="precision_manufacturing"
                className="text-primary"
              />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                Logistics / Industrial Context
              </h2>
            </div>
            <div className="glass-panel rounded-xl border-l-4 border-l-primary p-8">
              <p className="leading-relaxed text-surface/80">
                The operational environment for this reference project included
                high-traffic maritime gateways and container terminals. Visual
                capture required strict adherence to safety exclusion zones and
                maritime security protocols. We focused on capturing the
                rhythmic efficiency of shore-to-ship operations, highlighting
                the infrastructure that supports global supply chains.
              </p>
            </div>
          </div>

          {/* Visual Approach */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MaterialIcon name="videocam" className="text-primary" />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                Visual Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="leading-relaxed text-surface/80">
                  Our cinematography strategy prioritized non-intrusive capture
                  techniques. Using high-altitude drone maneuvers and long-lens
                  ground coverage, we maintained industrial safety buffers while
                  delivering cinematic intimacy.
                </p>
                <p className="leading-relaxed text-surface/80">
                  The color grade follows a technical, high-contrast
                  palette—deep blacks and metallic silvers—punctuated by the
                  natural industrial reds and safety oranges inherent to the
                  site environment.
                </p>
              </div>
              <div className="glass-panel relative min-h-64 overflow-hidden rounded-xl">
                <Image
                  src="/images/stitch/11461413dd.jpg"
                  alt="Industrial drone camera gimbal with red status light at a blurred shipping terminal"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <MaterialIcon name="grid_view" className="text-primary" />
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                Deliverables
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="glass-panel group flex cursor-default flex-col items-center rounded-xl p-6 text-center transition-all hover:bg-primary/5">
                <MaterialIcon
                  name="domain"
                  className="mb-4 text-3xl text-primary transition-transform group-hover:scale-110"
                />
                <span className="text-[10px] font-bold tracking-wider text-surface uppercase">
                  Facility Overview
                </span>
              </div>
              <div className="glass-panel group flex cursor-default flex-col items-center rounded-xl p-6 text-center transition-all hover:bg-primary/5">
                <MaterialIcon
                  name="auto_stories"
                  className="mb-4 text-3xl text-primary transition-transform group-hover:scale-110"
                />
                <span className="text-[10px] font-bold tracking-wider text-surface uppercase">
                  Site Storytelling
                </span>
              </div>
              <div className="glass-panel group flex cursor-default flex-col items-center rounded-xl p-6 text-center transition-all hover:bg-primary/5">
                <MaterialIcon
                  name="photo_camera"
                  className="mb-4 text-3xl text-primary transition-transform group-hover:scale-110"
                />
                <span className="text-[10px] font-bold tracking-wider text-surface uppercase">
                  High-Res Stills
                </span>
              </div>
              <div className="glass-panel group flex cursor-default flex-col items-center rounded-xl p-6 text-center transition-all hover:bg-primary/5">
                <MaterialIcon
                  name="assignment_ind"
                  className="mb-4 text-3xl text-primary transition-transform group-hover:scale-110"
                />
                <span className="text-[10px] font-bold tracking-wider text-surface uppercase">
                  Stakeholder Briefings
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-12 lg:col-span-4">
          {/* Gated Content Notice */}
          <div className="glass-panel group relative overflow-hidden rounded-2xl p-8">
            <div className="absolute top-0 right-0 p-4 opacity-20 transition-opacity group-hover:opacity-100">
              <MaterialIcon name="lock" className="text-4xl text-primary" />
            </div>
            <h3 className="mb-4 text-xl font-bold tracking-tighter uppercase">
              Confidentiality Note
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-industrial-grey">
              Full project reels and specific site data are gated to ensure
              compliance with site-safety and proprietary logistics protocols.
              Access is restricted to authorized stakeholders.
            </p>
            <RequestAccessTrigger
              defaultVideo="Ben Line Agencies — Logistics Visual Reference"
              className="w-full rounded-full border border-primary py-3 text-[10px] font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-white"
            >
              Request Secure Access
            </RequestAccessTrigger>
          </div>

          {/* Related Services */}
          <div className="space-y-6">
            <h3 className="border-b border-surface/10 pb-2 text-xs font-bold tracking-widest text-industrial-grey uppercase">
              Related Services
            </h3>
            <div className="space-y-4">
              <Link
                className="glass-panel group flex items-center justify-between rounded-xl p-4 transition-colors hover:border-primary/50"
                href="/services/corporate-videos"
              >
                <span className="text-sm font-bold tracking-tight uppercase">
                  Corporate Videos
                </span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
              <Link
                className="glass-panel group flex items-center justify-between rounded-xl p-4 transition-colors hover:border-primary/50"
                href="/services/facility-overview-films"
              >
                <span className="text-sm font-bold tracking-tight uppercase">
                  Facility Overviews
                </span>
                <MaterialIcon
                  name="arrow_forward"
                  className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* Site Badge */}
          <div className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <MaterialIcon name="security" className="text-primary" />
            <div>
              <h4 className="mb-1 text-[10px] font-black text-primary uppercase">
                Safety Compliant
              </h4>
              <p className="text-[11px] tracking-wide text-surface/60 uppercase">
                Documentation captured under strict industrial safety management
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-y border-surface/5 bg-dark-ui py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tighter uppercase">
            Ready to showcase your industrial assets?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-industrial-grey">
            Discuss a similar visual production for your logistics hub, offshore
            facility, or industrial site. We prioritize safety and cinematic
            precision.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <RequestAccessTrigger
              defaultVideo="Ben Line Agencies — Logistics Visual Reference"
              className="flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase transition-all hover:shadow-[0_0_20px_rgba(209,32,39,0.4)] active:scale-95"
            >
              Request Access / Discuss Production
              <MaterialIcon name="send" />
            </RequestAccessTrigger>
            <Link
              className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-surface uppercase transition-colors hover:text-primary"
              href="/our-work"
            >
              View Portfolio
              <MaterialIcon name="chevron_right" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
