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
    {
      name: "Industrial Photography",
      path: "/services/industrial-photography",
    },
  ]),
  serviceSchema({
    name: "Industrial Photography",
    description:
      "Ground-based industrial photography documenting structural phases, heavy lift operations, and compliance checkpoints on Oil & Gas and heavy industry sites.",
    path: "/services/industrial-photography",
  })
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
        className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full overflow-hidden"
      >
        <div className="absolute top-1/4 left-[-10%] h-96 w-96 rounded-full bg-primary opacity-10 mix-blend-screen blur-[150px]" />
        <div className="absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-surface opacity-5 mix-blend-screen blur-[150px]" />
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative mx-auto mb-24 max-w-7xl px-6 md:px-8">
          <div className="scanner-line pointer-events-none absolute top-0 left-0 z-10 h-[2px] w-full opacity-30" />
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Typography Column */}
            <div className="space-y-8 lg:col-span-5">
              <div className="glass-panel inline-flex items-center gap-2 rounded-full border border-surface/20 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-xs font-bold tracking-widest text-surface/80 uppercase">
                  Capability Specification
                </span>
              </div>
              <h1 className="text-4xl leading-[1.1] font-black tracking-tight uppercase font-stretch-semi-condensed md:text-6xl">
                Industrial <br />
                <span className="bg-gradient-to-r from-surface via-surface to-surface/50 bg-clip-text text-transparent">
                  Photography
                </span>
                <br />
                <span className="text-2xl font-bold tracking-widest text-primary">
                  For Sites, Teams &amp; Comms
                </span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-industrial-grey">
                Documenting critical structural phases, heavy lifts, and
                compliance checks with high-fidelity, ground-based photography.
                Precise visual assets captured in demanding environments.
              </p>
              <div className="flex items-center gap-4 border-t border-surface/10 pt-4">
                <MaterialIcon name="verified_user" className="text-primary" />
                <span className="text-xs tracking-wider text-surface/60 uppercase">
                  Site permissions &amp; PPE protocols strictly adhered to
                </span>
              </div>
            </div>
            {/* Cinematic Image Column */}
            <div className="group relative lg:col-span-7">
              <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-50" />
              <div className="relative h-[600px] w-full overflow-hidden rounded-lg border border-surface/10">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-ui via-transparent to-transparent" />
                <Image
                  src="/images/stitch/878c630036.jpg"
                  alt="Offshore oil rig at twilight lit by dramatic industrial lighting"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  loading="eager"
                  className="scale-105 object-cover transition-transform duration-1000 group-hover:scale-100"
                />
                {/* HUD Elements */}
                <div className="absolute top-6 left-6 z-20 flex gap-2">
                  <div className="h-1 w-8 bg-primary" />
                  <div className="h-1 w-2 bg-primary" />
                </div>
                <div className="absolute right-6 bottom-6 z-20 text-right font-mono text-[10px] tracking-widest text-white/40 uppercase">
                  REC // <br /> ISO-800 // F/2.8
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Use Cases & Shot Categories */}
        <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight uppercase">
                Photographic Coverage Parameters
              </h2>
              <p className="text-industrial-grey">
                Categorized photographic applications for industrial entities.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="h-2 w-2 rounded-full bg-surface/20" />
              <div className="h-2 w-2 rounded-full bg-surface/20" />
            </div>
          </div>
          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Primary Card: Site Documentation */}
            <div className="glass-panel group relative flex flex-col justify-end overflow-hidden rounded-lg p-8 lg:col-span-2 lg:row-span-2">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/40" />
                <Image
                  src="/images/stitch/4786c92713.jpg"
                  alt="Wide shot of a refinery facility at dusk under industrial floodlights"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <div className="relative z-20">
                <MaterialIcon
                  name="domain"
                  className={`mb-4 text-4xl text-white/50 ${iconHover}`}
                />
                <h3 className="mb-2 text-xl font-bold tracking-wider text-white uppercase md:text-2xl">
                  Structural Phase Records
                </h3>
                <p className="max-w-sm text-sm text-white/70">
                  Visual records of critical build and installation phases,
                  captured alongside the compliance checkpoints that sign each
                  one off, for internal archives and external reporting.
                </p>
              </div>
            </div>
            {/* Exec Presentations */}
            <div className="glass-panel group flex flex-col justify-between rounded-lg p-6 transition-colors hover:border-primary/50">
              <div className="flex items-start justify-between">
                <MaterialIcon
                  name="co_present"
                  className={`text-3xl text-surface/50 ${iconHover}`}
                />
                <span className="text-[10px] tracking-widest text-surface/30 uppercase">
                  USE_CASE
                </span>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                  Executive Presentations
                </h4>
                <p className="text-xs text-industrial-grey">
                  High-impact visuals tailored for boardrooms and investor
                  relations.
                </p>
              </div>
            </div>
            {/* Corporate Comms */}
            <div className="glass-panel group flex flex-col justify-between rounded-lg p-6 transition-colors hover:border-primary/50">
              <div className="flex items-start justify-between">
                <MaterialIcon
                  name="campaign"
                  className={`text-3xl text-surface/50 ${iconHover}`}
                />
                <span className="text-[10px] tracking-widest text-surface/30 uppercase">
                  USE_CASE
                </span>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                  Corporate Comms
                </h4>
                <p className="text-xs text-industrial-grey">
                  Engaging human-centric imagery for newsletters, PR, and
                  internal portals.
                </p>
              </div>
            </div>
            {/* Team Portraits */}
            <div className="glass-panel group relative flex items-center gap-6 overflow-hidden rounded-lg p-6 md:col-span-2">
              <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
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
                  className={`mb-4 text-3xl text-surface/50 ${iconHover}`}
                />
                <h3 className="mb-2 text-xl font-bold tracking-wider uppercase">
                  Team Portraits
                </h3>
                <p className="text-sm text-surface/70">
                  Professional environmental portraits captured safely within
                  active operational zones. Highlighting the human element of
                  heavy industry.
                </p>
              </div>
            </div>
            {/* Equipment Visuals */}
            <div className="glass-panel group flex flex-col justify-between rounded-lg p-6 transition-colors hover:border-primary/50">
              <div className="flex items-start justify-between">
                <MaterialIcon
                  name="precision_manufacturing"
                  className={`text-3xl text-surface/50 ${iconHover}`}
                />
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  CATEGORY
                </span>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-bold tracking-wider uppercase">
                  Heavy Lift Coverage
                </h4>
                <p className="text-xs text-industrial-grey">
                  Lift and load-out sequences shot from agreed standoff
                  positions, without unsupported technical measurement claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h2 className="mb-6 text-3xl font-black tracking-tighter uppercase md:text-5xl">
            Elevate Your Visual Standards
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-industrial-grey">
            Secure high-quality, claim-safe photographic documentation for your
            next industrial project or corporate report.
          </p>
          <Link
            href="/contact"
            className="group mx-auto flex w-fit scale-100 items-center justify-center gap-3 rounded-full border-2 border-primary bg-primary px-10 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(209,32,39,0.4)] transition-all hover:border-surface hover:bg-surface hover:text-background hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:scale-95"
          >
            Build a Stronger Visual Library
            <MaterialIcon
              name="chevron_right"
              className="transition-transform group-hover:translate-x-2"
            />
          </Link>
          <p className="mt-6 text-[10px] tracking-widest text-industrial-grey uppercase">
            Consultations available for upcoming deployments
          </p>
        </section>
      </main>
    </>
  )
}
