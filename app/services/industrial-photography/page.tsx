import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { JsonLd } from "@/components/seo/json-ld"
import { pageMeta, graph, breadcrumbSchema, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Industrial Photography Malaysia",
  description:
    "Industrial photography for Oil & Gas and heavy industry sites across Malaysia and Southeast Asia, with PPE-compliant crews and unified asset delivery.",
  path: "/services/industrial-photography",
})

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industrial Photography", path: "/services/industrial-photography" },
  ]),
  serviceSchema({
    name: "Industrial Photography",
    description:
      "High-fidelity, ground-based industrial photography for Oil & Gas and heavy industry sites in Malaysia and Southeast Asia.",
    path: "/services/industrial-photography",
  }),
)

const iconHover =
  "transition-colors group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"

export default function IndustrialPhotographyPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      {/* Ambient UI Accents */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-primary rounded-full mix-blend-screen blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-surface rounded-full mix-blend-screen blur-[150px] opacity-5" />
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24 relative">
          <div className="scanner-line absolute top-0 left-0 w-full h-[2px] opacity-30 pointer-events-none z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Typography Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 border border-surface/20 rounded-full px-4 py-1.5 glass-panel">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-surface/80 font-bold">
                  Capability Specification
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1]">
                Industrial <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-surface via-surface to-surface/50">
                  Photography
                </span>
                <br />
                <span className="text-2xl tracking-widest text-primary font-bold">
                  For Sites, Teams &amp; Comms
                </span>
              </h1>
              <p className="text-industrial-grey text-lg leading-relaxed max-w-md">
                Supporting industrial documentation and corporate storytelling
                with high-fidelity, ground-based photography. Precise visual
                assets captured in demanding environments.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-surface/10">
                <MaterialIcon name="verified_user" className="text-primary" />
                <span className="text-xs uppercase tracking-wider text-surface/60">
                  Site permissions &amp; PPE protocols strictly adhered to
                </span>
              </div>
            </div>
            {/* Cinematic Image Column */}
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden border border-surface/10">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-ui via-transparent to-transparent z-10" />
                <Image
                  src="/images/stitch/878c630036.jpg"
                  alt="Offshore oil rig at twilight lit by dramatic industrial lighting"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  loading="eager"
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                {/* HUD Elements */}
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <div className="w-8 h-1 bg-primary" />
                  <div className="w-2 h-1 bg-primary" />
                </div>
                <div className="absolute bottom-6 right-6 z-20 font-mono text-[10px] text-white/40 uppercase tracking-widest text-right">
                  REC // <br /> ISO-800 // F/2.8
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Use Cases & Shot Categories */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Visual Documentation Parameters
              </h2>
              <p className="text-industrial-grey">
                Categorized photographic applications for industrial entities.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-2 h-2 bg-surface/20 rounded-full" />
              <div className="w-2 h-2 bg-surface/20 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
            {/* Primary Card: Site Documentation */}
            <div className="lg:col-span-2 lg:row-span-2 glass-panel rounded-lg p-8 relative overflow-hidden group flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />
                <Image
                  src="/images/stitch/4786c92713.jpg"
                  alt="Wide shot of a refinery facility at dusk under industrial floodlights"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="relative z-20">
                <MaterialIcon
                  name="domain"
                  className={`text-4xl mb-4 text-white/50 ${iconHover}`}
                />
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-2 text-white">
                  Site Documentation
                </h3>
                <p className="text-white/70 text-sm max-w-sm">
                  Comprehensive visual mapping of facility layouts, operational
                  scale, and structural integrity for internal archives and
                  external reporting.
                </p>
              </div>
            </div>
            {/* Exec Presentations */}
            <div className="glass-panel rounded-lg p-6 group hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <MaterialIcon
                  name="co_present"
                  className={`text-3xl text-surface/50 ${iconHover}`}
                />
                <span className="text-[10px] text-surface/30 uppercase tracking-widest">
                  USE_CASE
                </span>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-1">
                  Executive Presentations
                </h4>
                <p className="text-industrial-grey text-xs">
                  High-impact visuals tailored for boardrooms and investor
                  relations.
                </p>
              </div>
            </div>
            {/* Corporate Comms */}
            <div className="glass-panel rounded-lg p-6 group hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <MaterialIcon
                  name="campaign"
                  className={`text-3xl text-surface/50 ${iconHover}`}
                />
                <span className="text-[10px] text-surface/30 uppercase tracking-widest">
                  USE_CASE
                </span>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-1">
                  Corporate Comms
                </h4>
                <p className="text-industrial-grey text-xs">
                  Engaging human-centric imagery for newsletters, PR, and
                  internal portals.
                </p>
              </div>
            </div>
            {/* Team Portraits */}
            <div className="md:col-span-2 glass-panel rounded-lg p-6 relative overflow-hidden group flex items-center gap-6">
              <div className="w-1/3 h-full absolute right-0 top-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
                <Image
                  src="/images/stitch/43617996bf.jpg"
                  alt="Two engineers in full PPE standing in a dark fabrication yard"
                  fill
                  sizes="(min-width: 768px) 25vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-20 w-2/3">
                <MaterialIcon
                  name="group"
                  className={`text-3xl mb-4 text-surface/50 ${iconHover}`}
                />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                  Team Portraits
                </h3>
                <p className="text-surface/70 text-sm">
                  Professional environmental portraits captured safely within
                  active operational zones. Highlighting the human element of
                  heavy industry.
                </p>
              </div>
            </div>
            {/* Equipment Visuals */}
            <div className="glass-panel rounded-lg p-6 group hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <MaterialIcon
                  name="precision_manufacturing"
                  className={`text-3xl text-surface/50 ${iconHover}`}
                />
                <span className="text-[10px] text-primary uppercase tracking-widest font-bold">
                  CATEGORY
                </span>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-1">
                  Equipment Context
                </h4>
                <p className="text-industrial-grey text-xs">
                  Detailed asset visuals demonstrating capability without
                  unsupported technical measurement claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Integration & Delivery Formats (Asymmetric Layout) */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-surface/5 rounded-[2rem] transform -rotate-3 z-0" />
              <div className="bg-background/60 backdrop-blur-lg border border-surface/5 rounded-lg p-8 relative z-10 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-6">
                  <MaterialIcon name="movie_filter" className="text-primary" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">
                    The Supporting Role
                  </h3>
                </div>
                <p className="text-industrial-grey leading-relaxed mb-6">
                  Photography acts as a crucial force multiplier when deployed
                  alongside our primary cinematic film productions. By
                  capturing high-resolution stills concurrently with video
                  acquisition, we ensure a unified visual aesthetic across all
                  your communication channels.
                </p>
                <p className="text-industrial-grey leading-relaxed">
                  This integrated approach minimizes operational disruption
                  on-site and delivers a cohesive package of both dynamic
                  motion and static assets from a single deployment.
                </p>
              </div>
              {/* Floating Delivery Chips — in-flow row on mobile, floating on desktop */}
              <div className="mt-6 flex flex-row flex-wrap justify-center gap-3 z-20 lg:mt-0 lg:absolute lg:-right-8 lg:-bottom-8 lg:flex-col lg:justify-start">
                <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transform hover:-translate-y-1 transition-transform cursor-default">
                  <MaterialIcon name="image" className="text-sm text-surface/50" />
                  <span className="text-xs uppercase tracking-wider font-bold">
                    High-Res Stills
                  </span>
                </div>
                <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transform lg:translate-x-4 hover:-translate-y-1 transition-transform cursor-default">
                  <MaterialIcon
                    name="grid_view"
                    className="text-sm text-surface/50"
                  />
                  <span className="text-xs uppercase tracking-wider font-bold">
                    Stakeholder Galleries
                  </span>
                </div>
                <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transform lg:translate-x-8 hover:-translate-y-1 transition-transform cursor-default">
                  <MaterialIcon
                    name="folder_zip"
                    className="text-sm text-surface/50"
                  />
                  <span className="text-xs uppercase tracking-wider font-bold">
                    Reporting Packs
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">
                Unified <br />
                Asset Delivery
              </h2>
              <p className="text-xl text-surface/60 font-light">
                Engineered for immediate integration into corporate workflows.
              </p>
              <div className="w-16 h-1 bg-primary" />
            </div>
          </div>
        </section>

        {/* Confidentiality & Safety Protocol Panel */}
        <section className="max-w-5xl mx-auto px-6 md:px-8 mb-24">
          <div className="bg-dark-ui border border-surface/10 rounded-lg overflow-hidden shadow-2xl relative">
            {/* Red top border accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8 border-b border-surface/5 pb-6">
                <MaterialIcon
                  name="admin_panel_settings"
                  className="text-3xl text-primary"
                />
                <h2 className="text-2xl font-bold uppercase tracking-widest text-surface">
                  Operational Protocols
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MaterialIcon
                      name="gpp_maybe"
                      className="text-surface/30 text-sm mt-1"
                    />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-surface/90 mb-1">
                        Safety First
                      </h4>
                      <p className="text-xs text-industrial-grey leading-relaxed">
                        Full compliance with site-specific PPE requirements,
                        safety briefings, and access protocols is mandatory for
                        all our operators.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon
                      name="visibility_off"
                      className="text-surface/30 text-sm mt-1"
                    />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-surface/90 mb-1">
                        Confidentiality
                      </h4>
                      <p className="text-xs text-industrial-grey leading-relaxed">
                        We navigate gated access environments with discretion.
                        Non-Disclosure Agreements strictly observed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MaterialIcon
                      name="fact_check"
                      className="text-primary text-sm mt-1"
                    />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-1">
                        Critical Note
                      </h4>
                      <p className="text-xs text-surface/80 leading-relaxed font-semibold">
                        Clients must independently confirm image approvals
                        regarding proprietary technology or unreleased assets
                        prior to public publication.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon
                      name="block"
                      className="text-surface/30 text-sm mt-1"
                    />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-surface/90 mb-1">
                        Scope Limitations
                      </h4>
                      <p className="text-xs text-industrial-grey leading-relaxed">
                        Services focus purely on high-fidelity visual
                        documentation. No unsupported technical measurements or
                        certified engineering inspections are provided or
                        claimed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center py-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Elevate Your Visual Standards
          </h2>
          <p className="text-industrial-grey mb-10 max-w-2xl mx-auto text-lg">
            Secure high-quality, claim-safe photographic documentation for your
            next industrial project or corporate report.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-surface hover:text-background border-2 border-primary hover:border-surface transition-all scale-100 active:scale-95 flex w-fit items-center justify-center gap-3 mx-auto group shadow-[0_0_20px_rgba(209,32,39,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            Build a Stronger Visual Library
            <MaterialIcon
              name="chevron_right"
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
          <p className="text-[10px] text-industrial-grey uppercase tracking-widest mt-6">
            Consultations available for upcoming deployments
          </p>
        </section>
      </main>
    </>
  )
}
