import { CtaButton, ctaClasses } from "@/components/site/cta-button"
import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { PhotoCard } from "@/components/site/photo-card"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
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

// Licensed stock from Pexels (see public/images/pexels/CREDITS.md), not
// Firstman footage. `alt` describes only what is visible in the frame — these
// illustrate the kind of site each scenario covers, and must never read as a
// caption on a project the company delivered.
const useCases = [
  {
    image: "/images/pexels/facility-fabrication-yard.jpg",
    alt: "Large steel pipes stacked in an outdoor yard beside an overhead gantry crane",
    title: "Fabrication Yard Overview",
    body: "Comprehensive documentation of yard capabilities and layout.",
  },
  {
    image: "/images/pexels/facility-offshore-module.jpg",
    alt: "A jack-up drilling platform standing on its legs in a harbour, deck-mounted cranes raised",
    title: "Offshore Module Lifecycle",
    body: "From construction phase to final load-out and installation.",
  },
  {
    image: "/images/pexels/facility-refinery.jpg",
    alt: "Aerial view of an oil refinery complex with storage spheres, distillation columns and pipework",
    title: "Refinery Overview",
    body: "Detailed mapping of operational zones and critical infrastructure.",
  },
]

export default function FacilityOverviewFilmsPage() {
  return (
    <main>
      <JsonLd data={schema} />

      <ServiceHero
        breadcrumb="Facility Overview Films"
        chip="Capability"
        chipIcon="videocam"
        lede="Drone-enabled aerial and ground cinematography that helps industrial teams explain scale, layout, access points and project context to stakeholders."
        readout="AERIAL + GROUND // FACILITY"
        title={
          <>
            Facility Overview Films
            <br />
            <span className="text-white/60">for Industrial Sites</span>
          </>
        }
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Production
            </CtaButton>
            {/* Opens a dialog rather than navigating, so it cannot be the
                shared component — but it wears the shared component's pill. */}
            <RequestAccessTrigger
              defaultVideo="Facility Overview Films Portfolio"
              className={ctaClasses({
                variant: "secondary",
                className: "w-full sm:w-fit",
              })}
            >
              <MaterialIcon name="lock" fill className="text-lg!" />
              Request Access to Portfolio
            </RequestAccessTrigger>
          </>
        }
      />

      <ServiceSection eyebrow="Focus Areas" title="What Gets Captured">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              key={area.title}
            >
              <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary md:mb-6 md:h-12 md:w-12">
                  <MaterialIcon
                    name={area.icon}
                    className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="font-headline text-xl font-bold text-surface md:mb-3">
                  {area.title}
                </h3>
              </div>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection band="panel" eyebrow="Application" title="Designed For">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              key={sector.slug}
            >
              <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                <MaterialIcon
                  name={sector.icon}
                  className="block shrink-0 text-3xl! text-surface/60 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1] md:mb-6"
                />
                <h3 className="font-headline text-xl font-bold text-surface md:mb-3">
                  {sector.title}
                </h3>
              </div>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {sector.summary}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        band="graphite"
        eyebrow="Deployment Scenarios"
        title="Facility Overviews"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <PhotoCard
              alt={useCase.alt}
              body={useCase.body}
              className="aspect-[4/3]"
              image={useCase.image}
              key={useCase.title}
              title={useCase.title}
            />
          ))}
        </div>
      </ServiceSection>

      <ServiceCta title="Need a clearer view of your facility?" />
    </main>
  )
}
