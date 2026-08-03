import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { JsonLd } from "@/components/seo/json-ld"
import { pageMeta, graph, breadcrumbSchema, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Industrial Photography Malaysia",
  description:
    "Industrial photography in Malaysia documenting critical structural phases, heavy lifts, and compliance checks for Oil & Gas and heavy industry sites.",
  path: "/services/industrial-photography",
})

const pageSchema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industrial Photography", path: "/services/industrial-photography" },
  ]),
  serviceSchema({
    name: "Industrial Photography",
    description:
      "Ground-based industrial photography documenting structural phases, heavy lift operations, and compliance checkpoints on Oil & Gas and heavy industry sites.",
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
                Documenting critical structural phases, heavy lifts, and
                compliance checks with high-fidelity, ground-based photography.
                Precise visual assets captured in demanding environments.
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
                Photographic Coverage Parameters
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
                  Structural Phase Records
                </h3>
                <p className="text-white/70 text-sm max-w-sm">
                  Visual records of critical build and installation phases,
                  captured alongside the compliance checkpoints that sign each
                  one off, for internal archives and external reporting.
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
                  Heavy Lift Coverage
                </h4>
                <p className="text-industrial-grey text-xs">
                  Lift and load-out sequences shot from agreed standoff
                  positions, without unsupported technical measurement claims.
                </p>
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
