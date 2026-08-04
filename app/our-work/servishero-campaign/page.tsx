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
  title: "ServisHero Drone Campaign Case Study",
  description:
    "ServisHero case study: industrial drone cinematography for a Southeast Asia service campaign, featuring site-aware aerial capture and HSE-compliant filming.",
  path: "/our-work/servishero-campaign",
  ogImage: "/images/stitch/a6afb92c9f.jpg",
  ogType: "article",
})

const jsonLd = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/our-work" },
    { name: "ServisHero Campaign", path: "/our-work/servishero-campaign" },
  ]),
  creativeWorkSchema({
    name: "ServisHero Campaign",
    description:
      "A drone-enabled visual campaign documenting ServisHero's regional service operations across Southeast Asia with site-aware, HSE-compliant aerial capture.",
    path: "/our-work/servishero-campaign",
    client: "ServisHero",
    image: "/images/stitch/a6afb92c9f.jpg",
  })
)

const iconFillHover = "group-hover:[font-variation-settings:'FILL'_1]"

export default function ServisHeroCampaignPage() {
  return (
    <main className="flex-grow">
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <header className="relative flex h-[870px] w-full items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          <div
            className="h-full w-full bg-cover bg-center"
            role="img"
            aria-label="High-angle drone shot of a massive industrial fabrication yard at twilight"
            style={{ backgroundImage: "url('/images/stitch/a6afb92c9f.jpg')" }}
          />
        </div>
        <div className="relative z-20 max-w-4xl px-4 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="h-[1px] w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">
              Case Study Detail
            </span>
            <span className="h-[1px] w-12 bg-primary" />
          </div>
          <h1 className="mb-6 text-4xl leading-none font-black tracking-tight text-white uppercase italic font-stretch-semi-condensed md:text-6xl">
            ServisHero — <span className="text-primary">Campaign</span> Visual
            Reference
          </h1>
          <div className="glass-panel inline-flex items-center gap-4 rounded-full border-white/5 px-6 py-4">
            <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/60 uppercase">
              <MaterialIcon
                name="location_on"
                className="text-sm text-primary"
              />{" "}
              Southeast Asia Operations
            </span>
            <div className="h-4 w-px bg-white/20" />
            <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/60 uppercase">
              <MaterialIcon name="schedule" className="text-sm text-primary" />{" "}
              Q3 Delivery
            </span>
          </div>
        </div>
        {/* Scrolldown */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] font-bold tracking-widest uppercase">
            Discover Content
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </header>

      <div className="relative z-10 -mt-20">
        {/* Public Summary & Context */}
        <section className="mx-auto mb-24 max-w-[1200px] px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="glass-panel group relative h-full overflow-hidden rounded-xl p-8">
                <h2 className="mb-4 text-sm font-black tracking-widest text-primary uppercase">
                  Public Summary
                </h2>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  A high-impact visual campaign developed to showcase regional
                  service integration through drone-enabled capture and
                  cinematic site-aware planning. This reference material
                  highlights the intersection of industrial logistics and
                  human-centric service delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-surface/10 bg-surface/5 px-3 py-1 text-[10px] font-bold text-surface/50 uppercase">
                    Industrial
                  </span>
                  <span className="rounded-full border border-surface/10 bg-surface/5 px-3 py-1 text-[10px] font-bold text-surface/50 uppercase">
                    Aerial
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="rounded-xl border border-surface/5 bg-dark-ui p-12">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold tracking-tighter uppercase">
                  <MaterialIcon name="analytics" className="text-primary" />{" "}
                  Campaign Context
                </h2>
                <div className="space-y-6 leading-relaxed text-industrial-grey">
                  <p>
                    The ServisHero initiative required a visual strategy that
                    balanced high-scale industrial documentation with
                    accessible, brand-aligned storytelling. Our team deployed
                    specialized capture systems to document multi-site
                    operations without disrupting ongoing logistical flows.
                  </p>
                  <p>
                    By utilizing site-aware planning, we identified key visual
                    anchors that represent the brand&apos;s commitment to
                    efficiency and regional presence. All captures were
                    conducted under strict adherence to safety protocols,
                    ensuring the visual assets remained suitable for both
                    stakeholder presentations and public-facing marketing.
                  </p>
                  <div className="flex items-center gap-4 pt-4 text-xs font-bold tracking-widest text-surface uppercase">
                    <MaterialIcon
                      name="verified_user"
                      className="text-primary"
                    />
                    HSE Compliant Operations • Credentials available upon
                    request
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Storytelling Approach (Bento Layout) */}
        <section className="mx-auto mb-32 max-w-[1200px] px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black tracking-tighter uppercase">
              Visual Storytelling Approach
            </h2>
            <p className="mx-auto max-w-2xl text-industrial-grey">
              Leveraging drone-enabled cinematic strategy for precise industrial
              visual documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative h-80 overflow-hidden rounded-xl bg-black md:col-span-2">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                role="img"
                aria-label="Cinema camera mounted on a heavy-lift industrial drone in a dark hangar"
                style={{
                  backgroundImage: "url('/images/stitch/4daaed1dfc.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-8">
                <h3 className="mb-2 font-bold tracking-widest text-white uppercase">
                  Aerial Precision
                </h3>
                <p className="max-w-md text-xs text-white/60">
                  Utilizing stable, high-bitrate capture platforms for sweeping
                  cinematic sequences in complex industrial environments.
                </p>
              </div>
            </div>
            <div className="glass-panel flex flex-col justify-center rounded-xl border-primary/20 p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <MaterialIcon
                  name="movie_filter"
                  fill
                  className="text-primary"
                />
              </div>
              <h3 className="mb-4 font-bold tracking-widest text-surface uppercase">
                Site-Aware Capture
              </h3>
              <p className="text-sm leading-relaxed text-industrial-grey">
                Every frame is planned to minimize impact on site operations
                while maximizing the cinematic scale of the facility.
              </p>
            </div>
            <div className="glass-panel flex flex-col justify-center rounded-xl border-surface/5 p-8">
              <h3 className="mb-4 font-bold tracking-widest text-surface uppercase">
                Color Grading
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-industrial-grey">
                Industrial-grade post-production featuring consistent skin-tone
                retention and structural contrast enhancement.
              </p>
              <div className="flex gap-1">
                <div className="h-1 flex-1 bg-primary" />
                <div className="h-1 flex-1 bg-graphite-light" />
                <div className="h-1 flex-1 bg-surface/20" />
                <div className="h-1 flex-1 bg-background" />
              </div>
            </div>
            <div className="group relative h-80 overflow-hidden rounded-xl bg-black md:col-span-2">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                role="img"
                aria-label="Industrial control room with large screens showing data visualizations"
                style={{
                  backgroundImage: "url('/images/stitch/af0b168415.jpg')",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-8">
                <h3 className="mb-2 font-bold tracking-widest text-white uppercase">
                  Technical Storyboarding
                </h3>
                <p className="max-w-md text-xs text-white/60">
                  Pre-visualization of complex shots to ensure stakeholder
                  alignment before deployment on active sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="border-y border-surface/5 bg-dark-ui py-24">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tighter uppercase">
                  Campaign Deliverables
                </h2>
                <p className="mt-2 text-industrial-grey">
                  Standard high-fidelity outputs for the ServisHero campaign.
                </p>
              </div>
              <div className="hidden text-[10px] font-bold tracking-[0.3em] text-primary uppercase md:block">
                Phase 04: Completion
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="group">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-surface/10 transition-colors group-hover:border-primary/50">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    role="img"
                    aria-label="Cinematic industrial film thumbnail of a stylized refinery at night"
                    style={{
                      backgroundImage: "url('/images/stitch/cb7eee941e.jpg')",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <MaterialIcon
                      name="play_circle"
                      className={`text-5xl text-white ${iconFillHover}`}
                    />
                  </div>
                </div>
                <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-surface uppercase">
                  <MaterialIcon
                    name="movie"
                    className={`text-sm text-primary ${iconFillHover}`}
                  />{" "}
                  Hero Cinematic Film
                </h4>
                <p className="mt-1 text-[11px] leading-tight text-industrial-grey italic">
                  4K Master — 120s Extended Cut
                </p>
              </div>
              {/* Card 2 */}
              <div className="group">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-surface/10 transition-colors group-hover:border-primary/50">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    role="img"
                    aria-label="Collage of 9:16 vertical social media video thumbnails of industrial logistics"
                    style={{
                      backgroundImage: "url('/images/stitch/80cbaef611.jpg')",
                    }}
                  />
                </div>
                <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-surface uppercase">
                  <MaterialIcon
                    name="phone_iphone"
                    className={`text-sm text-primary ${iconFillHover}`}
                  />{" "}
                  Social Cutdowns
                </h4>
                <p className="mt-1 text-[11px] leading-tight text-industrial-grey italic">
                  Multi-platform 9:16 optimized loops
                </p>
              </div>
              {/* Card 3 */}
              <div className="group">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-surface/10 transition-colors group-hover:border-primary/50">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    role="img"
                    aria-label="High-resolution aerial photograph of a shipyard with cranes and containers"
                    style={{
                      backgroundImage: "url('/images/stitch/fcd8f7a826.jpg')",
                    }}
                  />
                </div>
                <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-surface uppercase">
                  <MaterialIcon
                    name="photo_camera"
                    className={`text-sm text-primary ${iconFillHover}`}
                  />{" "}
                  High-Res Stills
                </h4>
                <p className="mt-1 text-[11px] leading-tight text-industrial-grey italic">
                  Professional grade facility documentation
                </p>
              </div>
              {/* Card 4 */}
              <div className="group">
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-surface/10 transition-colors group-hover:border-primary/50">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    role="img"
                    aria-label="Secure digital video file graphic with confidential watermark and lock icon"
                    style={{
                      backgroundImage: "url('/images/stitch/d9c90928ee.jpg')",
                    }}
                  />
                  <RequestAccessTrigger
                    defaultVideo="ServisHero Campaign — Stakeholder Cut"
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/80"
                  >
                    <MaterialIcon
                      name="lock"
                      className={`mb-2 text-4xl text-primary ${iconFillHover}`}
                    />
                    <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                      Gated Content
                    </span>
                  </RequestAccessTrigger>
                </div>
                <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-surface uppercase">
                  <MaterialIcon
                    name="groups"
                    className={`text-sm text-primary ${iconFillHover}`}
                  />{" "}
                  Stakeholder Cut
                </h4>
                <p className="mt-1 text-[11px] leading-tight text-industrial-grey italic">
                  Internal-only strategic brief
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality & HSE */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-8 py-32 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="mb-6 flex items-center gap-2 text-xs font-black tracking-widest text-primary uppercase">
              <MaterialIcon name="security" className="text-sm" /> Site-Safety
              protocols
            </div>
            <h2 className="mb-6 text-2xl leading-tight font-black tracking-tighter uppercase md:text-3xl">
              Confidentiality & HSE Compliance
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-industrial-grey">
              <p>
                All industrial visual documentation for the ServisHero campaign
                followed rigorous safety standards. Our crews are trained for
                high-risk site environments, ensuring zero interference with
                active operations.
              </p>
              <div className="glass-panel flex items-start gap-4 rounded-lg border-surface/5 p-4">
                <MaterialIcon name="gpp_maybe" className="text-primary" />
                <p className="text-[11px]">
                  Sensitive material including internal logistics data and
                  specific facility layouts are subject to gated access.
                  Credentials for full-resolution review are available upon
                  vetted request.
                </p>
              </div>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-xl font-bold text-surface">100%</div>
                <div className="text-[10px] font-bold tracking-widest text-surface/40 uppercase">
                  HSE Compliance
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-surface">0</div>
                <div className="text-[10px] font-bold tracking-widest text-surface/40 uppercase">
                  Incident Record
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 to-transparent opacity-25 blur transition duration-1000 group-hover:opacity-50" />
              <div className="glass-panel relative aspect-square overflow-hidden rounded-2xl border-surface/10">
                <div
                  className="h-full w-full bg-cover bg-center contrast-125 grayscale"
                  role="img"
                  aria-label="Macro shot of high-visibility reflective stripe on dark industrial safety fabric"
                  style={{
                    backgroundImage: "url('/images/stitch/50e1514a20.jpg')",
                  }}
                />
                <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white uppercase">
                  Verification Active
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mx-auto max-w-[1200px] px-8 pb-32">
          <h2 className="mb-12 text-center text-xs font-bold tracking-[0.4em] text-surface/40 uppercase">
            Continue Exploring Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link
              className="group glass-panel relative overflow-hidden rounded-2xl border-surface/5 p-10 transition-all duration-500 hover:border-primary/40"
              href="/services/corporate-videos"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-100">
                <MaterialIcon
                  name="arrow_outward"
                  className="text-6xl text-primary"
                />
              </div>
              <span className="mb-4 block text-[10px] font-black tracking-widest text-primary uppercase">
                Capability 01
              </span>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-surface uppercase">
                Corporate Videos
              </h3>
              <p className="max-w-xs text-sm text-industrial-grey">
                High-end cinematic storytelling for heavy industry and energy
                sectors.
              </p>
            </Link>
            <Link
              className="group glass-panel relative overflow-hidden rounded-2xl border-surface/5 p-10 transition-all duration-500 hover:border-primary/40"
              href="/services/facility-overview-films"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-100">
                <MaterialIcon
                  name="arrow_outward"
                  className="text-6xl text-primary"
                />
              </div>
              <span className="mb-4 block text-[10px] font-black tracking-widest text-primary uppercase">
                Capability 02
              </span>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-surface uppercase">
                Facility Overviews
              </h3>
              <p className="max-w-xs text-sm text-industrial-grey">
                Technical documentation and visual walkthroughs of large-scale
                sites.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-background py-32">
          <div className="relative z-10 mx-auto max-w-[800px] px-8 text-center">
            <h2 className="mb-8 text-4xl font-black tracking-tighter uppercase italic md:text-5xl">
              Ready to Capture <br />
              <span className="text-primary">Your Infrastructure?</span>
            </h2>
            <p className="mb-12 text-lg text-industrial-grey">
              Discuss a similar visual strategy for your next industrial
              campaign or site assessment.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <RequestAccessTrigger
                defaultVideo="ServisHero Campaign"
                className="rounded-full bg-primary px-10 py-5 text-xs font-black tracking-[0.2em] text-white uppercase shadow-[0_0_30px_rgba(209,32,39,0.4)] transition-all duration-300 hover:bg-surface hover:text-background hover:shadow-white/20 active:scale-95"
              >
                Request Access / Discuss Campaign
              </RequestAccessTrigger>
              <Link
                className="group flex items-center gap-2 text-xs font-bold tracking-widest text-surface/60 uppercase hover:text-surface"
                href="/our-work"
              >
                View Portfolio{" "}
                <MaterialIcon
                  name="trending_flat"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
            <div className="mt-12 text-[10px] font-bold tracking-[0.3em] text-surface/30 uppercase">
              Priority site assessment slots available this month
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
