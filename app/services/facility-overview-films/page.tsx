import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { SectionLabel } from "@/components/site/section-label"
import { sectors } from "@/lib/data/sectors"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Facility Overview Films for Industrial Sites",
  description:
    "Facility overview films use drone aerial footage to show scale, layout and access at Oil & Gas and industrial sites across Malaysia and Southeast Asia.",
  path: "/services/facility-overview-films",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Facility Overview Films",
      path: "/services/facility-overview-films",
    },
  ]),
  serviceSchema({
    name: "Facility Overview Films",
    description:
      "Drone-enabled aerial and ground cinematography that shows the scale, layout and access points of industrial facilities for stakeholders.",
    path: "/services/facility-overview-films",
  })
)

// The four sectors come from lib/data/sectors.ts — the same list that drives the
// homepage #industries section, so the taxonomy stays in one place.

const focusAreas = [
  {
    icon: "flight_takeoff",
    title: "Aerial Establishing",
    description:
      "Drone-enabled capture providing macro-level context of site scale and surrounding topography.",
  },
  {
    icon: "directions_walk",
    title: "Ground Walk-Throughs",
    description:
      "Stable, cinematic movement through operational areas to demonstrate internal logistics.",
  },
  {
    icon: "hub",
    title: "Process Context",
    description:
      "Visualizing the flow of materials or operations across complex industrial environments.",
  },
  {
    icon: "verified_user",
    title: "Site-Aware Capture",
    description:
      "Safety-conscious production planning emphasizing secure access and non-disruptive execution.",
  },
]

const useCases = [
  {
    image: "/images/stitch/9ef2719993.jpg",
    title: "Fabrication Yard Overview",
    body: "Comprehensive documentation of yard capabilities and layout.",
  },
  {
    image: "/images/stitch/df312360c8.jpg",
    title: "Offshore Module Lifecycle",
    body: "From construction phase to final load-out and installation.",
  },
  {
    image: "/images/stitch/2c0f0ecbd8.jpg",
    title: "Refinery Overview",
    body: "Detailed mapping of operational zones and critical infrastructure.",
  },
]

export default function FacilityOverviewFilmsPage() {
  return (
    <div className="pt-32 pb-24">
      <JsonLd data={schema} />
      {/* Hero Section */}
      <section className="relative mx-auto mb-24 max-w-7xl px-6 lg:px-8">
        <div className="group relative h-[614px] min-h-[500px] w-full overflow-hidden rounded-[24px] bg-black">
          {/* Background Image */}
          <div
            aria-label="Aerial view of an industrial oil refinery illuminated at dusk"
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/adeec90ad4.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
          {/* HUD Elements */}
          <div className="absolute top-8 left-8 hidden h-px w-16 bg-white/30 md:block" />
          <div className="absolute top-8 left-8 hidden h-16 w-px bg-white/30 md:block" />
          <div className="absolute right-8 bottom-8 hidden h-px w-16 bg-primary md:block" />
          <div className="absolute right-8 bottom-8 hidden h-16 w-px bg-primary md:block" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="mb-4 flex items-center gap-3">
              <MaterialIcon name="videocam" fill className="text-primary" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Capability
              </span>
            </div>
            <h1 className="mb-4 max-w-4xl text-4xl leading-tight font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-6xl">
              Facility Overview Films <br />
              <span className="text-white/60">for Industrial Sites</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed font-light text-white/70 md:text-xl">
              Drone-enabled aerial and ground cinematography that helps
              industrial teams explain scale, layout, access points and project
              context to stakeholders.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <RequestAccessTrigger
                defaultVideo="Facility Overview Films Portfolio"
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(209,32,39,0.4)] transition-all hover:bg-[#a0181e]"
              >
                <MaterialIcon name="lock" fill />
                Request Access to Portfolio
              </RequestAccessTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Application */}
      <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="mb-2 border-l-2 border-primary pl-4 text-sm font-bold tracking-widest text-primary uppercase">
              Application
            </h2>
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-surface uppercase">
              Designed For
            </h3>
            <ul className="space-y-4">
              {sectors.map((sector) => (
                <li
                  key={sector.slug}
                  className="glass-panel group flex cursor-default items-start gap-4 rounded-xl border border-surface/5 p-4 transition-colors hover:border-surface/20"
                >
                  <MaterialIcon
                    name={sector.icon}
                    className="mt-0.5 text-surface/50 transition-colors group-hover:text-primary"
                  />
                  <div>
                    <span className="block font-bold tracking-tight">
                      {sector.title}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-industrial-grey">
                      {sector.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="glass-panel flex h-full flex-col justify-center rounded-[24px] p-8 md:p-12">
              <h2 className="mb-2 border-l-2 border-primary pl-4 text-sm font-bold tracking-widest text-primary uppercase">
                Focus Areas
              </h2>
              <h3 className="mb-8 text-2xl font-bold tracking-tight text-surface uppercase">
                What Gets Captured
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {focusAreas.map((area) => (
                  <div className="group" key={area.title}>
                    <div className="mb-3 flex items-center gap-3 text-surface transition-colors group-hover:text-primary">
                      <MaterialIcon name={area.icon} />
                      <h4 className="text-sm font-bold tracking-wider uppercase">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-industrial-grey">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="relative mb-24 border-y border-surface/5 bg-graphite py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <SectionLabel className="mb-2 block">
              Deployment Scenarios
            </SectionLabel>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-surface md:text-5xl">
              Facility Overviews
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${useCase.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-4 flex h-10 w-10 translate-y-4 transform items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <MaterialIcon name="add" className="text-sm text-white" />
                  </div>
                  <h3 className="mb-2 font-headline text-xl font-bold text-white">
                    {useCase.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 transition-colors group-hover:text-white/90">
                    {useCase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
        <h2 className="mb-6 text-3xl font-black tracking-tighter text-surface uppercase">
          Need a clearer view of your facility?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-industrial-grey">
          Discuss your specific project requirements and site constraints with
          our production team.
        </p>
        <Link
          className="group inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-sm font-bold tracking-widest text-surface uppercase transition-all hover:bg-primary"
          href="/contact"
        >
          Discuss Your Production
          <MaterialIcon
            name="arrow_forward"
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </section>
    </div>
  )
}
