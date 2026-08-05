import { CaseSpecs } from "@/components/site/case-specs"
import { CtaButton, ctaClasses } from "@/components/site/cta-button"
import { MaterialIcon } from "@/components/site/material-icon"
import { Readout } from "@/components/site/readout"
import { RelatedServices } from "@/components/site/related-services"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
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

const specs = [
  { label: "Client", value: "MAHB Services" },
  { label: "Year", value: "2018" },
  { label: "Environment", value: "High-Security Terminal" },
  { label: "Capture Tech", value: "UAV / Site-Aware Systems" },
  { label: "Access", value: "Gated Archive", accent: true },
]

const execution = [
  {
    icon: "precision_manufacturing",
    title: "Technical Execution",
    body: "The visual approach utilized drone-enabled documentation to bridge the gap between ground-level logistics and bird's-eye site awareness. Every flight path was pre-calculated to ensure 100% compliance with airfield exclusion zones while maximizing the visual clarity of the industrial assets being documented.",
  },
  {
    icon: "security",
    title: "Safety Compliance",
    body: "Our team implemented a visual storytelling reference framework that prioritized safety above aesthetics. By coordinating with MAHB flight operations, we successfully captured high-stakes movements in real-time, providing a verified documentation stream for internal safety review boards.",
  },
]

const outputs = [
  {
    icon: "movie",
    title: "Milestone Reels",
    body: "Condensed cinematic summaries of project phases for corporate reporting and high-level stakeholder presentations.",
  },
  {
    icon: "photo_camera",
    title: "Asset Photography",
    body: "High-resolution stills of specific service vehicles and terminal hardware for maintenance archives.",
  },
  {
    icon: "inventory",
    title: "Visual Archive",
    body: "A structured library of raw and processed footage organized by terminal sector and time of day.",
  },
  {
    icon: "timeline",
    title: "Progress Logs",
    body: "Incremental visual updates showing site development or operational changes over the 2018 period.",
  },
]

const featureBullets = [
  "Logistical flow mapping",
  "Asset interaction studies",
  "Congestion point identification",
]

export default function MahbAirportServicesPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <ServiceHero
        breadcrumb="MAHB Airport Services"
        trail={[{ name: "Case Studies", href: "/our-work" }]}
        chip="MAHB 2018"
        title={
          <>
            MAHB Airport Services&nbsp;—{" "}
            <span className="text-primary">Visual storytelling reference.</span>
          </>
        }
        lede="This visual engagement for MAHB Airport Services focused on creating a comprehensive visual storytelling reference for their 2018 operational cycle. Our approach prioritized high-fidelity site-aware capture to document the scale and complexity of airport ground services without disrupting active logistics flows."
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Production
            </CtaButton>
            <CtaButton
              href="/our-work"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              All Case Studies
            </CtaButton>
          </>
        }
        note={
          <p className="max-w-xl border-t border-white/15 pt-6 font-body text-sm leading-relaxed text-white/70">
            Note: All capture activities were conducted under strict adherence
            to civil aviation safety regulations and local security protocols.
          </p>
        }
      />

      <CaseSpecs items={specs} />

      <ServiceSection
        align="split"
        eyebrow="Overview"
        title="Industrial cinematography for aviation logistics."
        lede="By leveraging drone-enabled documentation, we captured perspectives that offer stakeholder clarity on asset positioning and operational movement within high-security environments. This reference serves as a foundational archive for corporate communications and internal facility reviews."
      >
        {/* The `aspect-[21/9]` banner that used to run across this whole column
            is gone. It was a 512x279 screen capture of the Stitch mock with
            `CASE STUDY DETAIL — MAHB AIRPORT SERVICES 2018` burned across the
            top of the picture, so it was neither a photograph of the work nor
            usable at 1216px. Its caption survives as the statement below. */}
        <div className="flex flex-col gap-6 border-t border-surface/10 pt-8 md:flex-row md:items-baseline md:justify-between md:gap-16">
          <div>
            <h3 className="font-headline text-2xl leading-tight font-black tracking-tight text-surface">
              Site-Aware Capture
            </h3>
            <p className="mt-3 max-w-[62ch] font-body leading-relaxed text-industrial-grey">
              Strategic drone positioning to document complex ground service
              maneuvers without interference.
            </p>
          </div>
          <Readout as="p" className="shrink-0 text-industrial-grey">
            Operational Reference 04
          </Readout>
        </div>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Execution"
        title="Technical execution and safety compliance"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {execution.map((item) => (
            <div
              className="glass-panel rounded-3xl p-8 md:p-10"
              key={item.title}
            >
              <h3 className="flex items-center gap-3 font-headline text-xl font-bold text-surface">
                <MaterialIcon name={item.icon} className="text-primary" />
                {item.title}
              </h3>
              <p className="mt-4 font-body leading-relaxed text-industrial-grey">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        eyebrow="Project Outputs"
        title="Standard visual deliverables"
      >
        {/* The feature card spans two rows from `sm`, where there is a second
            column for it to sit beside. The grid drops to one column below
            that, and `aspect-square` is gone: at the old `md:grid-cols-3`
            breakpoint each square was 218px, which could not hold a 20px
            heading, three lines of body copy and a 64px icon plate. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass-panel group flex min-h-[16rem] flex-col justify-between rounded-3xl p-8 transition-colors duration-300 hover:border-primary/50 sm:row-span-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 bg-primary/5 transition-colors group-hover:border-primary">
              <MaterialIcon
                name="video_camera_back"
                fill
                className="text-3xl! text-primary"
              />
            </div>
            <div className="mt-8 space-y-6">
              <h3 className="font-headline text-2xl leading-tight font-black tracking-tight text-surface">
                Site Awareness Clips
              </h3>
              <p className="font-body leading-relaxed text-industrial-grey">
                Drone-enabled documentation focusing on the spatial relationship
                between mobile ground assets and fixed terminal infrastructure.
              </p>
              <ul className="space-y-4">
                {featureBullets.map((bullet) => (
                  <li
                    className="flex items-center gap-3 font-body text-sm leading-relaxed text-industrial-grey"
                    key={bullet}
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {outputs.map((item) => (
            <div
              className="glass-panel group flex min-h-[16rem] flex-col justify-between rounded-3xl p-8 transition-colors duration-300 hover:border-primary/50"
              key={item.title}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface/10 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name={item.icon}
                  className="text-3xl! text-surface transition-colors group-hover:text-primary"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-headline text-xl font-bold text-surface">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        align="split"
        band="panel"
        eyebrow="Restricted Industrial Data"
        title="Confidentiality & secure access"
        lede="The full visual dataset for MAHB Airport Services contains sensitive operational site details. Specific asset visualizations, security protocols, and unrestricted terminal overviews are private and strictly protected. Access to the full Gated Video Archive is granted only to verified personnel with appropriate credentials."
      >
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <span className="flex items-center gap-2 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
            <MaterialIcon
              name="verified_user"
              className="text-base! text-primary"
            />
            256-bit encryption
          </span>
          <span className="flex items-center gap-2 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
            <MaterialIcon name="vpn_key" className="text-base! text-primary" />
            Gated Access Required
          </span>
        </div>
      </ServiceSection>

      <RelatedServices
        band="page"
        eyebrow="Ecosystem"
        title="Related capabilities"
        action={{ href: "/#services", label: "View All Services" }}
        items={[
          {
            href: "/services/corporate-videos",
            title: "Corporate Videos",
            body: "Cinematic documentation for heavy industry.",
          },
          {
            href: "/services/facility-overview-films",
            title: "Facility Overviews",
            body: "Site-aware visual mapping for vast infrastructures.",
          },
        ]}
      />

      <ServiceCta
        title="View private industrial archives."
        lede="Interested in seeing our full range of airport service documentation? Request credentials to access the 2018 MAHB master archive and explore high-fidelity operational references."
        actions={
          <>
            <RequestAccessTrigger
              defaultVideo="MAHB Airport Services 2018"
              className={ctaClasses({ className: "w-full sm:w-fit" })}
            >
              <MaterialIcon name="key" className="text-lg!" />
              Request Access
            </RequestAccessTrigger>
            <CtaButton
              href="/contact"
              variant="outline"
              className="w-full sm:w-fit"
            >
              Talk to an Expert
            </CtaButton>
          </>
        }
      />
    </main>
  )
}
