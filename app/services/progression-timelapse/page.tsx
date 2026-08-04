import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

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
    image: "/images/stitch/837e716c98.jpg",
    alt: "Empty graded dirt lot at dawn prepared for industrial construction",
    reversed: false,
  },
  {
    phase: "Phase 02",
    title: "Foundation Phase",
    description:
      "Documenting concrete pours, rebar installation, and critical subterranean infrastructure milestones.",
    image: "/images/stitch/78b2c9bd8f.jpg",
    alt: "Steel rebar network in a deep trench before a concrete pour",
    reversed: true,
  },
  {
    phase: "Phase 03",
    title: "Structural Erection",
    description:
      "Capturing the vertical progression of steel frameworks, heavy lifting operations, and major structural assemblies.",
    image: "/images/stitch/f83d048d08.jpg",
    alt: "Steel I-beams rising against a black sky beside a crane hook",
    reversed: false,
  },
  {
    phase: "Phase 04",
    title: "Load-Out & Transport Prep",
    description:
      "Final-state documentation of completed modules in the yard before barge loading, sea fastening and departure to site.",
    image: "/images/stitch/2c4e1b2f45.jpg",
    alt: "Waterfront fabrication yard at dusk with completed modules staged beside a heavy-lift vessel",
    reversed: true,
  },
]

// const checklistItems = [
//   {
//     icon: "gpp_good",
//     title: "Site Access Requirements",
//     description: "Clearance protocols and restricted zone definitions.",
//   },
//   {
//     icon: "schedule",
//     title: "Safety Induction Schedules",
//     description: "Coordination for necessary site-specific safety briefings.",
//   },
//   {
//     icon: "map",
//     title: "Site-Aware Flight Planning",
//     description: "Mapping documentation routes to avoid operational interference.",
//   },
//   {
//     icon: "badge",
//     title: "Credentials Available",
//     description: "Documentation of personnel training and equipment specifics upon request.",
//   },
// ]

export default function ProgressionTimelapsePage() {
  return (
    <div>
      <JsonLd data={structuredData} />
      {/* Hero Section */}
      <header className="relative flex min-h-[819px] items-center justify-center overflow-hidden bg-black pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-[#000000]" />
          <div
            aria-label="Industrial construction site at night illuminated by floodlights"
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/9b76d8b2fc.jpg')" }}
          />
        </div>
        <div className="relative z-20 container mx-auto max-w-7xl px-6 text-center lg:px-12">
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full border border-white/10 bg-graphite/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
              Service Detail
            </span>
          </div>
          <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-6xl lg:text-7xl">
            Construction Progress & <br />
            <span className="text-primary">Timelapse</span> Capture
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed font-medium text-white/70 md:text-xl">
            Visual documentation for construction, fabrication, site upgrades,
            shutdowns, fit-outs and industrial project milestones.
          </p>
          <a
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-primary hover:bg-white/10"
            href="#approach"
          >
            <MaterialIcon name="arrow_downward" />
          </a>
        </div>
      </header>

      {/* Section 1: Value for Stakeholders */}
      <section className="relative bg-background py-24">
        <div className="container mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-surface uppercase md:text-4xl">
              Value for Stakeholders
            </h2>
            <div className="mx-auto h-1 w-16 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stakeholderCards.map((card) => (
              <div
                className="glass-panel group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
                key={card.title}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-surface/10 bg-graphite transition-colors group-hover:border-primary/50">
                  <MaterialIcon
                    name={card.icon}
                    className="text-3xl text-surface transition-all duration-300 group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-wider text-surface uppercase">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Capture Approach */}
      <section
        className="relative overflow-hidden bg-dark-ui py-24"
        id="approach"
      >
        <div className="container mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-wide text-surface uppercase md:text-4xl">
                Capture Approach
              </h2>
              <p className="mb-6 text-base leading-relaxed text-industrial-grey">
                Methodical, site-aware planning for chronicling long-term
                project lifecycles. We prioritize safe, unobtrusive visual
                documentation that aligns with industrial operations.
              </p>
              <ul className="mb-8 space-y-4">
                {captureApproachPoints.map((point) => (
                  <li className="flex items-start" key={point}>
                    <MaterialIcon
                      name="check_circle"
                      className="mt-0.5 mr-3 text-primary"
                    />
                    <span className="text-sm font-medium text-surface">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-surface/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 z-10 bg-black/20" />
              <div className="pointer-events-none absolute inset-0 z-20 m-2 rounded-2xl border-2 border-primary/20" />
              {/* Reticle corners */}
              <div className="absolute top-4 left-4 z-20 h-4 w-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-4 right-4 z-20 h-4 w-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-4 left-4 z-20 h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute right-4 bottom-4 z-20 h-4 w-4 border-r-2 border-b-2 border-primary" />
              <div
                aria-label="Symmetrical view down an industrial pipeline under construction"
                className="h-full w-full bg-cover bg-center"
                role="img"
                style={{
                  backgroundImage: "url('/images/stitch/16bb4dd413.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Deliverables */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-surface uppercase md:text-4xl">
              Deliverables
            </h2>
            <div className="mx-auto h-1 w-16 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <div
                className="glass-panel group rounded-xl border border-surface/10 p-6 transition-colors hover:border-primary/50"
                key={item.title}
              >
                <MaterialIcon
                  name={item.icon}
                  className="mb-4 block text-2xl text-industrial-grey transition-colors group-hover:text-primary"
                />
                <h4 className="mb-2 text-sm font-bold tracking-wider text-surface uppercase">
                  {item.title}
                </h4>
                <p className="text-xs text-industrial-grey">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sample Timeline Module */}
      <section className="bg-dark-ui py-24">
        <div className="container mx-auto max-w-[1000px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-surface uppercase md:text-4xl">
              Sample Progression
            </h2>
            <div className="mx-auto h-1 w-16 bg-primary" />
          </div>
          <div className="relative py-8">
            {/* Center Line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-graphite-light md:left-1/2 md:-translate-x-1/2" />
            {timelinePhases.map((item, index) => (
              <div
                className={`relative flex flex-col ${
                  item.reversed ? "md:flex-row-reverse" : "md:flex-row"
                } w-full items-center ${index < timelinePhases.length - 1 ? "mb-24" : ""}`}
                key={item.phase}
              >
                <div className="absolute top-0 left-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />
                <div
                  className={`mb-6 w-full pl-12 md:mb-0 md:w-1/2 ${
                    item.reversed
                      ? "md:pl-12"
                      : "md:pr-12 md:pl-0 md:text-right"
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold tracking-wider text-surface uppercase">
                    {item.phase}
                  </h3>
                  <h4 className="mb-3 text-lg font-bold text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-industrial-grey">
                    {item.description}
                  </p>
                </div>
                <div
                  className={`w-full pl-12 md:w-1/2 ${
                    item.reversed ? "flex md:justify-end md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="aspect-video w-full max-w-sm overflow-hidden rounded-lg border border-surface/10 shadow-lg">
                    <div
                      aria-label={item.alt}
                      className="h-full w-full bg-cover bg-center"
                      role="img"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Project Checklist
      <section className="py-24 bg-background border-t border-surface/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-[800px]">
          <div className="glass-panel rounded-2xl p-8 md:p-12 border-l-4 border-l-primary">
            <div className="flex items-center mb-8">
              <MaterialIcon name="checklist" className="text-3xl text-primary mr-4" />
              <h2 className="text-2xl font-bold uppercase tracking-wide text-surface">
                Pre-Deployment Checklist
              </h2>
            </div>
            <p className="text-industrial-grey mb-8 text-sm">
              Prior to initiating visual documentation, we require alignment on site protocols to
              ensure safe and compliant operation.
            </p>
            <ul className="space-y-4">
              {checklistItems.map((item) => (
                <li
                  className="flex items-start bg-graphite-light/30 p-4 rounded-lg border border-surface/5"
                  key={item.title}
                >
                  <MaterialIcon name={item.icon} className="text-surface mr-4 mt-0.5 opacity-50" />
                  <div>
                    <h4 className="text-surface text-sm font-bold uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-industrial-grey text-xs">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-dark-ui py-32 text-center">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#d12027 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 container mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-surface uppercase md:text-5xl">
            Document the next milestone clearly
          </h2>
          <Link
            className="group mx-auto inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_30px_rgba(209,32,39,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#9a161b] hover:shadow-[0_0_40px_rgba(209,32,39,0.5)] active:scale-95"
            href="/contact"
          >
            Request Consultation
            <MaterialIcon
              name="arrow_forward"
              className="ml-3 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
