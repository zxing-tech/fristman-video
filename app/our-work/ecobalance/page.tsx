import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { JsonLd } from "@/components/seo/json-ld"
import {
  pageMeta,
  graph,
  breadcrumbSchema,
  creativeWorkSchema,
} from "@/lib/seo"

export const metadata = pageMeta({
  title: "EcoBalance Industrial Video Case Study",
  description:
    "Case study: industrial drone cinematography for EcoBalance in Malaysia, capturing facility scale for corporate storytelling without disrupting site operations.",
  path: "/our-work/ecobalance",
  ogImage: "/images/stitch/14777df4fc.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "EcoBalance Corporate Story", path: "/our-work/ecobalance" },
  ]),
  creativeWorkSchema({
    name: "EcoBalance Corporate Story",
    description:
      "Drone-enabled corporate storytelling for EcoBalance, capturing industrial facility scale in Malaysia without disrupting operations.",
    path: "/our-work/ecobalance",
    client: "EcoBalance",
    image: "/images/stitch/14777df4fc.jpg",
  })
)

export default function EcoBalanceCaseStudyPage() {
  return (
    <main className="pt-32 pb-20">
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <section className="relative mx-auto mb-16 max-w-[1280px] px-8">
        <div className="glass-panel group relative aspect-[21/9] w-full overflow-hidden rounded-3xl border-white/10 bg-black">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/stitch/14777df4fc.jpg')" }}
          />
          <div className="absolute bottom-12 left-12 z-20 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                Case Study
              </span>
              <span className="h-[1px] w-12 bg-white/30" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                Ref: 2024-EB-CS
              </span>
            </div>
            <h1 className="mb-6 text-4xl leading-[0.9] font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-6xl">
              EcoBalance —{" "}
              <span className="text-primary">Corporate Storytelling</span>{" "}
              Reference
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <MaterialIcon
                  name="visibility"
                  className="text-sm text-primary"
                />
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  Public Access Approved
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <MaterialIcon
                  name="precision_manufacturing"
                  className="text-sm text-primary"
                />
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  Corporate Videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Briefing Grid */}
      <section className="mx-auto mb-24 grid max-w-[1280px] grid-cols-1 gap-8 px-8 md:grid-cols-12">
        {/* Summary */}
        <div className="flex flex-col gap-8 md:col-span-8">
          <div className="glass-panel relative overflow-hidden rounded-3xl p-8">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MaterialIcon name="info" className="text-8xl" />
            </div>
            <h2 className="mb-6 text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Public Summary
            </h2>
            <p className="text-xl leading-relaxed font-light text-industrial-grey">
              This project serves as a definitive reference for drone-enabled
              cinematography within high-stakes corporate communication
              environments. Our approach prioritized site-aware planning and
              precision visual documentation to capture the scale of
              EcoBalance&apos;s industrial operations without disrupting
              established safety protocols or operational workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="glass-panel rounded-3xl border-l-2 border-l-primary p-8">
              <h3 className="mb-4 text-xs font-bold tracking-[0.3em] text-surface/50 uppercase">
                Project Context
              </h3>
              <p className="text-sm leading-relaxed text-industrial-grey">
                The industrial setting (EcoBalance) required a meticulous
                approach to visual storytelling. By leveraging stabilized ground
                units and aerial platforms, we maintained a comprehensive
                perspective of the facility&apos;s complex infrastructure. The
                focus remained on the technical sophistication of the site,
                translating industrial scale into cinematic narrative assets
                suitable for global stakeholders.
              </p>
            </div>
            <div className="glass-panel rounded-3xl border-l-2 border-l-primary p-8">
              <h3 className="mb-4 text-xs font-bold tracking-[0.3em] text-surface/50 uppercase">
                Communication Objective
              </h3>
              <p className="text-sm leading-relaxed text-industrial-grey">
                The primary objective centered on brand storytelling through
                high-fidelity documentation. Stakeholders required a visual
                bridge between complex on-site activities and corporate
                transparency. Our task was to provide site-aware documentation
                that highlights the synergy between engineering precision and
                corporate commitment to operational excellence.
              </p>
            </div>
          </div>
        </div>
        {/* Chips & Specs */}
        <div className="flex flex-col gap-8 md:col-span-4">
          {/* An "Internal Tracking" panel used to sit here, showing visitors our
              own production to-dos ([CONFIRM CLIENT APPROVAL], [REPLACE
              PLACEHOLDER TEXT], [APPROVED IMAGERY ONLY]). Removed — those belong
              in PENDING-CLIENT-ASSETS.md, not on a public case study. */}
          <div className="glass-panel rounded-3xl p-8">
            <h3 className="mb-6 text-xs font-bold tracking-[0.3em] text-surface/50 uppercase">
              Visual Approach
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MaterialIcon
                  name="airplanemode_active"
                  className="text-primary"
                />
                <div>
                  <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                    Cinematic UAV
                  </h4>
                  <p className="text-xs text-industrial-grey">
                    High-altitude perspective for facility layout.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <MaterialIcon name="videocam" className="text-primary" />
                <div>
                  <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                    Ground-Based Capture
                  </h4>
                  <p className="text-xs text-industrial-grey">
                    Tactile, macro-level engineering detail.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <MaterialIcon name="data_usage" className="text-primary" />
                <div>
                  <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                    Scale Documentation
                  </h4>
                  <p className="text-xs text-industrial-grey">
                    Visualizing industrial complexity for investors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Asset Showcase */}
      <section className="mb-24 border-y border-surface/5 bg-dark-ui py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-xs font-bold tracking-[0.3em] text-primary uppercase">
                Project Outputs
              </h2>
              <p className="text-3xl font-bold tracking-tighter uppercase">
                Likely Deliverables
              </p>
            </div>
            <div className="hidden text-right md:block">
              <p className="text-[10px] font-bold tracking-[0.2em] text-industrial-grey uppercase">
                Document Class: Asset Matrix
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Deliverable 1 */}
            <div className="group glass-panel relative aspect-video overflow-hidden rounded-2xl bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                style={{
                  backgroundImage: "url('/images/stitch/5677735a6c.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <div className="mb-2 flex items-center gap-2">
                  <MaterialIcon
                    name="movie_filter"
                    className="text-sm text-primary"
                  />
                  <span className="text-xs font-bold tracking-widest text-white uppercase">
                    Monthly Update Films
                  </span>
                </div>
                <p className="text-[10px] leading-relaxed tracking-widest text-white/50 uppercase">
                  Periodic visual reporting for project management teams.
                </p>
              </div>
            </div>
            {/* Deliverable 2 */}
            <div className="group glass-panel relative aspect-video overflow-hidden rounded-2xl bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                style={{
                  backgroundImage: "url('/images/stitch/9cfe507b06.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <div className="mb-2 flex items-center gap-2">
                  <MaterialIcon name="bolt" className="text-sm text-primary" />
                  <span className="text-xs font-bold tracking-widest text-white uppercase">
                    Milestone Reels
                  </span>
                </div>
                <p className="text-[10px] leading-relaxed tracking-widest text-white/50 uppercase">
                  High-impact summaries for corporate events and annual reports.
                </p>
              </div>
            </div>
            {/* Deliverable 3 */}
            <div className="group glass-panel relative aspect-video overflow-hidden rounded-2xl bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                style={{
                  backgroundImage: "url('/images/stitch/980656c7aa.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <div className="mb-2 flex items-center gap-2">
                  <MaterialIcon
                    name="photo_library"
                    className="text-sm text-primary"
                  />
                  <span className="text-xs font-bold tracking-widest text-white uppercase">
                    High-Res Still Packs
                  </span>
                </div>
                <p className="text-[10px] leading-relaxed tracking-widest text-white/50 uppercase">
                  Print-ready documentation for stakeholder physical collateral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality & Related */}
      <section className="mx-auto mb-24 grid max-w-[1280px] grid-cols-1 gap-12 px-8 lg:grid-cols-12">
        {/* Security Note */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="glass-panel relative overflow-hidden rounded-3xl border border-primary/30 p-8">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
              <div className="mb-6 flex items-center gap-3">
                <MaterialIcon name="lock" fill className="text-primary" />
                <h3 className="text-sm font-black tracking-widest uppercase">
                  Confidentiality Note
                </h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-industrial-grey">
                FIRSTMAN VIDEOS ensures the secure handling of all sensitive
                industrial data. Our workflows are designed to accommodate
                site-specific NDA requirements, ensuring that proprietary
                processes remain strictly confidential while delivering
                world-class visual assets.
              </p>
              <div className="rounded-xl border border-surface/5 bg-background/40 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-widest text-surface/40 uppercase">
                    Protocol Status
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-primary uppercase">
                    Active
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface/10">
                  <div className="h-full w-full origin-left scale-x-75 animate-pulse bg-primary [animation-duration:3s]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Services */}
        <div className="lg:col-span-8">
          <h2 className="mb-8 text-xs font-bold tracking-[0.3em] text-primary uppercase">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <Link
              className="group glass-panel block rounded-[2rem] p-1 transition-all duration-500 hover:border-primary/50"
              href="/services/corporate-videos"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/images/stitch/6182d29b77.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/10" />
              </div>
              <div className="px-6 pb-8">
                <h3 className="mb-2 text-xl font-bold tracking-tighter uppercase transition-colors group-hover:text-primary">
                  Corporate Videos
                </h3>
                <p className="mb-6 text-xs leading-relaxed text-industrial-grey">
                  Professional-grade visual capture for heavy industry
                  environments, fabrication yards, and energy infrastructure.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-surface/40 uppercase">
                  <span>Learn More</span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
            {/* Card 2 */}
            <Link
              className="group glass-panel block rounded-[2rem] p-1 transition-all duration-500 hover:border-primary/50"
              href="/services/facility-overview-films"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/images/stitch/493ecfb868.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/10" />
              </div>
              <div className="px-6 pb-8">
                <h3 className="mb-2 text-xl font-bold tracking-tighter uppercase transition-colors group-hover:text-primary">
                  Facility Overviews
                </h3>
                <p className="mb-6 text-xs leading-relaxed text-industrial-grey">
                  Comprehensive visual mapping and cinematic overviews of
                  large-scale assets and operational territories.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-surface/40 uppercase">
                  <span>Learn More</span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto mb-32 max-w-[1280px] px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-surface/5 bg-dark-ui px-8 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,#d12027,transparent_70%)] opacity-20" />
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tighter uppercase md:text-6xl">
            Elevate Your <span className="text-primary">Operational Story</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg font-light text-industrial-grey">
            We are currently accepting new industrial documentation projects for
            the upcoming quarter. Priority site assessment slots are allocated
            on a first-come basis.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <Link
              href="/contact"
              className="transform rounded-full bg-primary px-10 py-5 text-sm font-bold tracking-[0.2em] text-white uppercase shadow-[0_0_20px_rgba(209,32,39,0.2)] transition-all hover:-translate-y-1 hover:bg-primary/90"
            >
              REQUEST CONSULTATION
            </Link>
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-primary/20">
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-surface/40 uppercase">
                Limited Onboarding Capacity
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
