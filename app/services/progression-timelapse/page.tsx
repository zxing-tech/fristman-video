import { CtaButton } from "@/components/site/cta-button"
import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMeta({
  title: "Progression & Timelapse Documentation",
  description:
    "Drone progression and timelapse video documentation for construction, fabrication and shutdowns across Malaysia and Southeast Asia's Oil & Gas sites.",
  path: "/services/progression-timelapse",
})

const structuredData = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Progression & Timelapse",
      path: "/services/progression-timelapse",
    },
  ]),
  serviceSchema({
    name: "Progression & Timelapse",
    description:
      "Scheduled drone photo and video documentation of long-term industrial builds, tracking site progress from establishment through structural completion.",
    path: "/services/progression-timelapse",
  })
)

const stakeholderCards = [
  {
    icon: "timeline",
    title: "Project Managers",
    description:
      "Visual timeline tracking to observe progress phases, site establishment, and long-term structural milestones across the project lifecycle.",
  },
  {
    icon: "campaign",
    title: "Corporate Comms",
    description:
      "High-quality video assets ready for internal reporting, public relations, and stakeholder presentations detailing infrastructure development.",
  },
  {
    icon: "visibility",
    title: "Client Updates",
    description:
      "Clear project visibility providing off-site stakeholders with accurate, methodical video records of development intervals.",
  },
]

const captureApproachPoints = [
  "Planned interval site visits",
  "Milestone-based specific capture",
  "Consistent framing across phases",
]

const deliverables = [
  {
    icon: "movie",
    title: "Adhoc Project Status",
    description:
      "Edited sequences detailing chronological progression over 30-day intervals.",
  },
  {
    icon: "video_library",
    title: "Milestone Reels To Reports",
    description:
      "Focused compilation videos highlighting significant structural achievements.",
  },
  {
    icon: "photo_library",
    title: "Drone Aerial Photographs And Maintenance The Explanation",
    description:
      "High-resolution aerial stills explaining maintenance work, for reporting and presentations.",
  },
  {
    icon: "rate_review",
    title: "Review Versions",
    description:
      "Low-bandwidth drafts provided for internal stakeholder review and approval.",
  },
]

const timelinePhases = [
  {
    phase: "Phase 01",
    title: "Site Establishment",
    description:
      "Initial visual documentation capturing bare ground, initial grading, and perimeter setup before structural work commences.",
    image: "/images/pexels/progress-phase-01-site.jpg",
    alt: "Aerial view of a single excavator on bare, graded earth, with no structures yet in place",
    reversed: false,
  },
  {
    phase: "Phase 02",
    title: "Foundation Phase",
    description:
      "Documenting concrete pours, rebar installation, and critical subterranean infrastructure milestones.",
    image: "/images/pexels/progress-phase-02-foundation.jpg",
    alt: "A poured concrete foundation slab with protruding rebar starter bars and loose formwork panels",
    reversed: true,
  },
  {
    phase: "Phase 03",
    title: "Structural Erection",
    description:
      "Capturing the vertical progression of steel frameworks, heavy lifting operations, and major structural assemblies.",
    image: "/images/pexels/progress-phase-03-structure.jpg",
    alt: "A steel structural frame under construction, with a tower crane lifting a beam into place",
    reversed: false,
  },
  {
    phase: "Phase 04",
    title: "Load-Out & Transport Prep",
    description:
      "Final-state documentation of completed modules in the yard before barge loading, sea fastening and departure to site.",
    image: "/images/pexels/progress-phase-04-loadout.jpg",
    alt: "A harbour at twilight, a floating crane barge in the foreground and gantry cranes across the water",
    reversed: true,
  },
]

export default function ProgressionTimelapsePage() {
  return (
    <main>
      <JsonLd data={structuredData} />

      <ServiceHero
        breadcrumb="Progression & Timelapse"
        chip="Long-Term Documentation"
        lede="Visual documentation for construction, fabrication, site upgrades, shutdowns, fit-outs and industrial project milestones."
        readout="INTERVAL CAPTURE // MULTI-YEAR"
        title={
          <>
            Construction Progress &amp;
            <br />
            <span className="text-white/60">Timelapse Capture</span>
          </>
        }
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Programme
            </CtaButton>
            <CtaButton
              href="/our-work"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              View Our Work
            </CtaButton>
          </>
        }
      />

      <ServiceSection eyebrow="Who It Serves" title="Value for Stakeholders">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stakeholderCards.map((card) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              key={card.title}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary">
                <MaterialIcon
                  name={card.icon}
                  className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-surface">
                {card.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-industrial-grey">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        band="panel"
        eyebrow="Method"
        title="Capture Approach"
        id="approach"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-body leading-relaxed text-industrial-grey">
              Methodical, site-aware planning for chronicling long-term project
              lifecycles. We prioritize safe, unobtrusive visual documentation
              that aligns with industrial operations.
            </p>
            <ul className="mt-8 space-y-4">
              {captureApproachPoints.map((point) => (
                <li className="flex items-start gap-3" key={point}>
                  <MaterialIcon
                    name="check_circle"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="font-body text-sm font-medium text-surface">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Viewfinder framing on the reference frame. The 2px ring that used
              to sit inside these corners has gone: the brackets are the mark,
              the ring was a frame the system does not own. */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-surface/10 bg-black">
            <div
              aria-label="A dim corridor in strong one-point perspective, lined with shutters and an overhead pipe run"
              className="h-full w-full bg-cover bg-center opacity-95"
              role="img"
              style={{
                backgroundImage:
                  "url('/images/pexels/progress-capture-approach.jpg')",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4"
            >
              <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary/50" />
              <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-primary/50" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary/50" />
              <span className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-primary/50" />
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection eyebrow="Output" title="Deliverables">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              key={item.title}
            >
              <MaterialIcon
                name={item.icon}
                className="mb-6 block text-3xl! text-surface/60 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
              />
              <h3 className="mb-2 font-headline text-base font-bold text-surface">
                {item.title}
              </h3>
              <p className="font-body text-xs leading-relaxed text-industrial-grey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        band="graphite"
        eyebrow="Worked Example"
        title="Sample Progression"
      >
        {/* The timeline keeps a narrower measure than the section column: an
            alternating two-column layout stretched to 1280px puts the two
            halves too far apart to read as one sequence. */}
        <div className="relative mx-auto max-w-[64rem]">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-surface/15 md:left-1/2 md:-translate-x-1/2"
          />
          <ol className="space-y-16 md:space-y-24">
            {timelinePhases.map((item) => (
              <li
                // items-start, not items-center: centring each half made the
                // shorter one drift down the row, so the marker on the spine
                // no longer lined up with the phase label it belongs to.
                className={cn(
                  "relative flex w-full flex-col items-start md:flex-row",
                  item.reversed && "md:flex-row-reverse"
                )}
                key={item.phase}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2"
                />
                <div
                  className={cn(
                    "mb-6 w-full pl-14 md:mb-0 md:w-1/2 md:pl-0",
                    item.reversed ? "md:pl-12" : "md:pr-12 md:text-right"
                  )}
                >
                  <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-primary uppercase">
                    {item.phase}
                  </span>
                  <h3 className="mt-3 font-headline text-xl font-bold text-surface">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-industrial-grey">
                    {item.description}
                  </p>
                </div>
                <div
                  className={cn(
                    "w-full pl-14 md:w-1/2 md:pl-0",
                    item.reversed ? "md:pr-12" : "md:pl-12"
                  )}
                >
                  <div className="aspect-video w-full overflow-hidden rounded-2xl border border-surface/10 bg-black">
                    <div
                      aria-label={item.alt}
                      className="h-full w-full bg-cover bg-center opacity-95"
                      role="img"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </ServiceSection>

      <ServiceCta
        title="Document the next milestone clearly"
        action="Request Consultation"
      />
    </main>
  )
}
