import { CtaButton } from "@/components/site/cta-button"
import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceCta } from "@/components/site/service-cta"
import { ServiceFilms } from "@/components/site/service-films"
import { ServiceHero } from "@/components/site/service-hero"
import { ServiceSection } from "@/components/site/service-section"
import { SERVICE_HERO_MEDIA } from "@/lib/hero-media"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMeta({
  title: "Long-Term Timelapse",
  description:
    "Long-term timelapse programmes for construction, fabrication and shutdown projects across Malaysia and Southeast Asia, from fixed cameras left on site for months.",
  path: "/services/long-term-timelapse",
})

const structuredData = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Long-Term Timelapse", path: "/services/long-term-timelapse" },
  ]),
  serviceSchema({
    name: "Long-Term Timelapse",
    description:
      "Fixed-interval and scheduled documentation of long-term industrial builds, tracking site progress from establishment through structural completion.",
    path: "/services/long-term-timelapse",
  })
)

const stakeholderCards = [
  {
    icon: "timeline",
    title: "Project Managers",
    description:
      "Video timeline tracking to observe progress phases, site establishment, and long-term structural milestones across the project lifecycle.",
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
    title: "Interval Cutdowns",
    description:
      "Edited sequences covering a fixed reporting period, usually 30 days, in chronological order.",
  },
  {
    icon: "video_library",
    title: "Milestone Films",
    description:
      "Short compilations built around one structural event: a lift, a pour, a load-out.",
  },
  {
    icon: "photo_library",
    title: "Aerial Stills",
    description:
      "High-resolution frames from the same vantage each visit, for reports and presentations.",
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
      "Initial video documentation capturing bare ground, initial grading, and perimeter setup before structural work commences.",
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

export default function LongTermTimelapsePage() {
  return (
    <main>
      <JsonLd data={structuredData} />

      <ServiceHero
        breadcrumb="Long-Term Timelapse"
        chip="Long-Term Documentation"
        chipIcon="timelapse"
        media={SERVICE_HERO_MEDIA["long-term-timelapse"]}
        lede="Cameras left on site for months, cut down to the few minutes that show the build actually happening. For construction, fabrication, site upgrades, shutdowns, fit-outs and every milestone in between."
        title={
          <>
            Long-Term Timelapse
            <br />
            <span className="text-white/60">
              for builds that outlast a site visit
            </span>
          </>
        }
        actions={
          <>
            <CtaButton href="/contact" arrow className="w-full sm:w-fit">
              Discuss Your Programme
            </CtaButton>
            <CtaButton
              href="#films"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              Watch a finished timelapse
            </CtaButton>
          </>
        }
      />

      <ServiceSection eyebrow="Who It Serves" title="Value for Stakeholders">
        {/* Three across waits for `lg`. At 768px a third of this column is
            218px, and after 32px of card padding each side that leaves 154px
            of text — about 22 characters a line, where "Corporate Comms" breaks
            in two and the body runs to nine lines. Two across in the tablet
            band gives 276px and the last card sits alone, which is the honest
            trade: a ragged row reads as a list of three, a 154px card reads as
            a mistake. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stakeholderCards.map((card) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              key={card.title}
            >
              {/* Marker beside the title below `md`, above it from `md` — the
                  same inline rule the homepage cards follow, and 44px inline
                  for the same reason: next to a 28px line box, 48px stops
                  reading as a marker. */}
              <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary md:mb-6 md:h-12 md:w-12">
                  <MaterialIcon
                    name={card.icon}
                    className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="font-headline text-xl font-bold text-surface md:mb-3">
                  {card.title}
                </h3>
              </div>
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
              lifecycles. We prioritize safe, unobtrusive video documentation
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
        {/* Two at `md`, not `sm`. Every card grid on the site now leaves one
            column at the same breakpoint, which is what lets the inline-marker
            rule below be one rule instead of a per-grid judgement: the marker
            sits beside the title exactly while the card is the full width of
            the column. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div
              className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              key={item.title}
            >
              {/* Glyph markers go inline on phone too, so the two card
                  patterns on this page behave the same way at the same width.
                  `shrink-0` matters here in a way it does not when stacked:
                  a bare glyph in a flex row will otherwise compress against a
                  long title like "Drone Aerial Photographs And Maintenance". */}
              <div className="mb-3 flex items-center gap-4 md:mb-0 md:block">
                <MaterialIcon
                  name={item.icon}
                  className="block shrink-0 text-3xl! text-surface/60 transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1] md:mb-6"
                />
                <h3 className="font-headline text-base font-bold text-surface md:mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="font-body text-xs leading-relaxed text-industrial-grey">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection
        band="graphite"
        eyebrow="Programme Shape"
        title="Phases a programme covers"
      >
        {/* The timeline keeps a narrower measure than the section column: an
            alternating two-column layout stretched to 1280px puts the two
            halves too far apart to read as one sequence. */}
        {/* The alternating two-column form waits for `lg`, not `md`.
            Halving a 704px tablet column and taking 48px of inner gutter off
            each side leaves 304px a side, so the phase description ran seven
            lines against a 304x171 frame and the eye had to cross the spine on
            every step to keep the pair together. Below `lg` the same content is
            already a proper timeline — one spine down the left, marker, label,
            frame — which is the form that actually suits a narrow column. */}
        <div className="relative mx-auto max-w-[64rem]">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-surface/15 lg:left-1/2 lg:-translate-x-1/2"
          />
          <ol className="space-y-16 lg:space-y-24">
            {timelinePhases.map((item) => (
              <li
                // items-start, not items-center: centring each half made the
                // shorter one drift down the row, so the marker on the spine
                // no longer lined up with the phase label it belongs to.
                className={cn(
                  "relative flex w-full flex-col items-start lg:flex-row",
                  item.reversed && "lg:flex-row-reverse"
                )}
                key={item.phase}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background lg:left-1/2"
                />
                <div
                  className={cn(
                    "mb-6 w-full pl-14 lg:mb-0 lg:w-1/2 lg:pl-0",
                    item.reversed ? "lg:pl-12" : "lg:pr-12 lg:text-right"
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
                    "w-full pl-14 lg:w-1/2 lg:pl-0",
                    item.reversed ? "lg:pr-12" : "lg:pl-12"
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

      <ServiceSection
        band="panel"
        eyebrow="Evidence"
        id="films"
        lede="Finished timelapse programmes, start to end. Both run months of fixed-interval capture down to a few minutes."
        title="Timelapse films"
      >
        <ServiceFilms category="Long-Term Timelapse" />
      </ServiceSection>

      <ServiceCta
        title="Document the next milestone clearly"
        action="Request Consultation"
      />
    </main>
  )
}
