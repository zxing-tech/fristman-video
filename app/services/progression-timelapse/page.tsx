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
    { name: "Services", path: "/services" },
    { name: "Progression & Timelapse", path: "/services/progression-timelapse" },
  ]),
  serviceSchema({
    name: "Progression & Timelapse",
    description:
      "Scheduled drone photo and video documentation of long-term industrial builds, tracking site progress from establishment through structural completion.",
    path: "/services/progression-timelapse",
  }),
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
      "High-quality cinematic assets ready for internal reporting, public relations, and stakeholder presentations detailing infrastructure development.",
  },
  {
    icon: "visibility",
    title: "Client Updates",
    description:
      "Clear project visibility providing off-site stakeholders with accurate, methodical visual records of development intervals.",
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
    title: "Monthly Update Films",
    description: "Edited sequences detailing chronological progression over 30-day intervals.",
  },
  {
    icon: "video_library",
    title: "Milestone Reels",
    description: "Focused compilation videos highlighting significant structural achievements.",
  },
  {
    icon: "photo_library",
    title: "Still Image Packs",
    description: "High-resolution photographic documentation for reporting and presentations.",
  },
  {
    icon: "rate_review",
    title: "Review Versions",
    description: "Low-bandwidth drafts provided for internal stakeholder review and approval.",
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
]

const checklistItems = [
  {
    icon: "gpp_good",
    title: "Site Access Requirements",
    description: "Clearance protocols and restricted zone definitions.",
  },
  {
    icon: "schedule",
    title: "Safety Induction Schedules",
    description: "Coordination for necessary site-specific safety briefings.",
  },
  {
    icon: "map",
    title: "Site-Aware Flight Planning",
    description: "Mapping documentation routes to avoid operational interference.",
  },
  {
    icon: "badge",
    title: "Credentials Available",
    description: "Documentation of personnel training and equipment specifics upon request.",
  },
]

export default function ProgressionTimelapsePage() {
  return (
    <div>
      <JsonLd data={structuredData} />
      {/* Hero Section */}
      <header className="relative bg-black min-h-[819px] flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#000000] z-10" />
          <div
            aria-label="Industrial construction site at night illuminated by floodlights"
            className="w-full h-full bg-cover bg-center bg-no-repeat absolute inset-0"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/9b76d8b2fc.jpg')" }}
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <div className="inline-flex items-center space-x-2 bg-graphite/60 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-bold">
              Service Detail
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 text-white leading-tight">
            Progression & <br />
            <span className="text-primary">Timelapse</span> Documentation
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
            Visual documentation for construction, fabrication, site upgrades, shutdowns,
            fit-outs and industrial project milestones.
          </p>
          <a
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-primary transition-all duration-300"
            href="#approach"
          >
            <MaterialIcon name="arrow_downward" />
          </a>
        </div>
      </header>

      {/* Section 1: Value for Stakeholders */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-surface mb-4">
              Value for Stakeholders
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stakeholderCards.map((card) => (
              <div
                className="glass-panel p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
                key={card.title}
              >
                <div className="w-14 h-14 rounded-full bg-graphite flex items-center justify-center mb-6 border border-surface/10 group-hover:border-primary/50 transition-colors">
                  <MaterialIcon
                    name={card.icon}
                    className="text-3xl text-surface transition-all duration-300 group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-surface mb-3">
                  {card.title}
                </h3>
                <p className="text-industrial-grey text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Capture Approach */}
      <section className="py-24 bg-dark-ui relative overflow-hidden" id="approach">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-surface mb-6">
                Capture Approach
              </h2>
              <p className="text-industrial-grey text-base leading-relaxed mb-6">
                Methodical, site-aware planning for chronicling long-term project lifecycles. We
                prioritize safe, unobtrusive visual documentation that aligns with industrial
                operations.
              </p>
              <ul className="space-y-4 mb-8">
                {captureApproachPoints.map((point) => (
                  <li className="flex items-start" key={point}>
                    <MaterialIcon name="check_circle" className="text-primary mr-3 mt-0.5" />
                    <span className="text-surface text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-surface/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <div className="absolute inset-0 border-2 border-primary/20 z-20 pointer-events-none rounded-2xl m-2" />
              {/* Reticle corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary z-20" />
              <div
                aria-label="Symmetrical view down an industrial pipeline under construction"
                className="w-full h-full bg-cover bg-center"
                role="img"
                style={{ backgroundImage: "url('/images/stitch/16bb4dd413.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Deliverables */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-surface mb-4">
              Deliverables
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item) => (
              <div
                className="glass-panel p-6 rounded-xl border border-surface/10 hover:border-primary/50 transition-colors group"
                key={item.title}
              >
                <MaterialIcon
                  name={item.icon}
                  className="text-2xl text-industrial-grey group-hover:text-primary transition-colors mb-4 block"
                />
                <h4 className="text-surface font-bold uppercase text-sm tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-industrial-grey text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sample Timeline Module */}
      <section className="py-24 bg-dark-ui">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1000px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-surface mb-4">
              Sample Progression
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          <div className="relative py-8">
            {/* Center Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-graphite-light md:-translate-x-1/2" />
            {timelinePhases.map((item, index) => (
              <div
                className={`relative flex flex-col ${
                  item.reversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center w-full ${index < timelinePhases.length - 1 ? "mb-24" : ""}`}
                key={item.phase}
              >
                <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10" />
                <div
                  className={`w-full md:w-1/2 pl-12 mb-6 md:mb-0 ${
                    item.reversed ? "md:pl-12" : "md:pl-0 md:pr-12 md:text-right"
                  }`}
                >
                  <h3 className="text-xl font-bold uppercase tracking-wider text-surface mb-2">
                    {item.phase}
                  </h3>
                  <h4 className="text-primary font-bold text-lg mb-3">{item.title}</h4>
                  <p className="text-industrial-grey text-sm">{item.description}</p>
                </div>
                <div
                  className={`w-full md:w-1/2 pl-12 ${
                    item.reversed ? "md:pr-12 flex md:justify-end" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-lg overflow-hidden border border-surface/10 shadow-lg aspect-video w-full max-w-sm">
                    <div
                      aria-label={item.alt}
                      className="w-full h-full bg-cover bg-center"
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

      {/* Section 5: Project Checklist */}
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
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-dark-ui relative overflow-hidden text-center">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#d12027 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-surface mb-10">
            Document the next milestone clearly
          </h2>
          <Link
            className="bg-primary hover:bg-[#9a161b] text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(209,32,39,0.3)] hover:shadow-[0_0_40px_rgba(209,32,39,0.5)] inline-flex items-center justify-center mx-auto group"
            href="/contact"
          >
            Request Consultation
            <MaterialIcon
              name="arrow_forward"
              className="ml-3 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
