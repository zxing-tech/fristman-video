import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Industries We Serve",
  description:
    "Industrial drone cinematography for Oil & Gas, energy, marine and fabrication sectors across Malaysia and Southeast Asia, built for safety and scale.",
  path: "/industries",
})

const oilGasApplications = [
  {
    icon: "precision_manufacturing",
    title: "Refinery Overviews",
    summary: "Comprehensive visual mapping of operational downstream assets.",
  },
  {
    icon: "waves",
    title: "Offshore Modules",
    summary: "Cinematic capture of rigs, platforms, and subsea operations.",
  },
  {
    icon: "architecture",
    title: "Fabrication Yards",
    summary: "Tracking structural build progress for key stakeholders.",
  },
  {
    icon: "health_and_safety",
    title: "Safety Induction Media",
    summary: "Site-specific, compliant safety training videography.",
  },
  {
    icon: "timeline",
    title: "Project Milestones",
    summary: "Chronological visual documentation of critical path activities.",
  },
  {
    icon: "group",
    title: "Stakeholder Updates",
    summary: "Executive-ready briefings communicating scale and progress.",
  },
]

const sectorCards = [
  {
    href: "/industries/energy-utilities",
    icon: "electric_bolt",
    title: "Energy & Utilities",
    summary:
      "Documenting power generation infrastructure, grid expansions, and renewable energy installations with technical clarity.",
  },
  {
    href: "/industries/marine-offshore",
    icon: "directions_boat",
    title: "Marine & Offshore",
    summary:
      "Cinematic capture of vessel operations, subsea engineering, and offshore support activities in challenging environments.",
  },
  {
    href: "/industries/oil-gas",
    icon: "factory",
    title: "Petrochemical Plants",
    summary:
      "Showcasing scale, safety protocols, and complex processes within integrated chemical manufacturing facilities.",
  },
  {
    href: "/industries/fabrication-construction",
    icon: "construction",
    title: "Fabrication & Construction",
    summary:
      "Tracking progress of mega-structures, module fabrication, and heavy lift operations for project stakeholders.",
  },
]

const regionalCoverage = [
  { country: "Malaysia", status: "Sabah & Sarawak Focus", highlight: true },
  { country: "Singapore", status: "Active", highlight: false },
  { country: "Indonesia", status: "Active", highlight: false },
  { country: "Brunei", status: "Active", highlight: false },
]

const buyerOutcomes = [
  {
    icon: "account_tree",
    title: "For Project Managers",
    summary:
      "Clear, chronological visual evidence of milestones achieved. Mitigate dispute risks and provide indisputable progress updates to joint venture partners and regulatory bodies.",
  },
  {
    icon: "campaign",
    title: "For Corporate Communications",
    summary:
      "High-fidelity, cinematic assets that elevate your brand's technical capability. Ready for investor relations, tender submissions, and premium corporate positioning.",
  },
  {
    icon: "school",
    title: "For HR & Training",
    summary:
      "Site-specific, highly accurate visual media for safety inductions and operational training, ensuring compliance and enhancing knowledge retention in hazardous environments.",
  },
]

const hoverIconClass =
  "transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"

export default function IndustriesPage() {
  return (
    <main className="flex-grow flex flex-col relative">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ])
        )}
      />
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-24 pb-16 overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full opacity-90 mix-blend-normal dark:opacity-40 dark:mix-blend-luminosity"
          style={{ backgroundImage: "url('/images/stitch/d6202ff285.jpg')" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
          {/* Breadcrumb */}
          <div className="glass-panel rounded-full px-4 py-1.5 mb-8 inline-flex items-center space-x-2 text-xs font-label uppercase tracking-widest text-white/70">
            <Link className="hover:text-primary transition-colors" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-[14px]" />
            <span className="text-white font-bold">Industries</span>
          </div>
          <h1 className="font-headline font-bold text-4xl md:text-7xl leading-[1.1] tracking-tight max-w-4xl mb-6 text-white drop-shadow-lg">
            Industry Expertise for High-Stakes Environments.
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 border-l-4 border-primary pl-6">
            We focus where scale, safety and clarity matter most — oil & gas, energy,
            utilities, marine/offshore and large fabrication environments across Southeast
            Asia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-label uppercase tracking-widest text-sm font-bold hover:bg-surface hover:text-background transition-all duration-300 group"
              href="#oil-gas"
            >
              Explore Oil & Gas
              <MaterialIcon
                name="arrow_forward"
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Primary Industry Feature: Oil & Gas */}
      <section className="py-24 relative border-t border-surface/5 bg-dark-ui" id="oil-gas">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <MaterialIcon name="oil_barrel" className="text-primary text-3xl" />
                <h2 className="font-headline font-bold text-3xl md:text-5xl tracking-tight text-surface uppercase">
                  Oil & Gas
                </h2>
              </div>
              <p className="font-body text-industrial-grey text-lg mb-8 leading-relaxed">
                Uncompromising documentation for highly regulated environments. From offshore
                platforms to downstream refineries, we capture operations with strict
                adherence to safety protocols and technical accuracy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Application Items */}
                {oilGasApplications.map((item) => (
                  <div
                    key={item.title}
                    className="glass-panel p-4 rounded-xl flex items-start space-x-3 group transition-all duration-300"
                  >
                    <MaterialIcon
                      name={item.icon}
                      className={`text-industrial-grey mt-0.5 ${hoverIconClass}`}
                    />
                    <div>
                      <h4 className="font-label font-bold text-sm text-surface uppercase tracking-wider mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-industrial-grey">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Feature Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden glass-panel p-2">
              <div
                className="w-full h-full rounded-xl bg-cover bg-center filter grayscale contrast-125"
                style={{ backgroundImage: "url('/images/stitch/f5bfa8fb47.jpg')" }}
              />
              {/* UI Overlay Element */}
              <div className="absolute top-8 right-8 glass-panel px-4 py-2 rounded-full flex items-center space-x-2 border-primary/30">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                  O&G Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-surface uppercase border-l-4 border-primary pl-4">
              Specialized Sectors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectorCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="glass-panel rounded-2xl p-8 transition-all duration-300 group flex flex-col h-full relative overflow-hidden hover:border-primary/50 hover:bg-graphite/60"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
                <div className="mb-6 h-12 w-12 rounded-full border border-surface/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <MaterialIcon name={card.icon} className={`text-2xl text-surface ${hoverIconClass}`} />
                </div>
                <h3 className="font-headline font-bold text-xl uppercase tracking-wide text-surface mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-industrial-grey text-sm leading-relaxed mt-auto">
                  {card.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage & Buyer Outcomes */}
      <section className="py-24 bg-graphite border-t border-b border-surface/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Regional Coverage Panel */}
            <div className="lg:col-span-5 glass-panel rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 100% 0%, #d12027 0%, transparent 50%)",
                }}
              />
              <div>
                <div className="inline-flex items-center space-x-2 mb-6 text-primary">
                  <MaterialIcon name="map" />
                  <h3 className="font-label font-bold text-sm uppercase tracking-widest">
                    Regional Coverage
                  </h3>
                </div>
                <h4 className="font-headline font-bold text-3xl text-surface mb-6 leading-tight">
                  Southeast Asia Operations
                </h4>
                <p className="font-body text-industrial-grey text-sm mb-8">
                  Rapid deployment capabilities across major industrial hubs in the region,
                  with specialized experience navigating complex site access requirements.
                </p>
              </div>
              <div className="space-y-4">
                {regionalCoverage.map((row) => (
                  <div
                    key={row.country}
                    className="flex items-center justify-between border-b border-surface/10 pb-2"
                  >
                    <span className="font-body font-bold text-surface">{row.country}</span>
                    <span
                      className={`font-label text-xs uppercase tracking-wider ${
                        row.highlight ? "text-primary" : "text-industrial-grey"
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Buyer-Specific Outcomes */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-wide text-surface mb-4">
                Value by Function
              </h3>
              {buyerOutcomes.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel rounded-xl p-6 group transition-all duration-300 border-l-2 border-transparent hover:border-primary flex items-start space-x-4"
                >
                  <MaterialIcon
                    name={item.icon}
                    className={`text-industrial-grey mt-1 ${hoverIconClass}`}
                  />
                  <div>
                    <h4 className="font-label font-bold text-sm text-surface uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-industrial-grey">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(ellipse at center, #1a1a1a, #000000, #000000)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-surface/10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/50 text-primary mb-6">
                <MaterialIcon name="lock" className="text-sm" />
                <span className="font-label text-xs uppercase tracking-widest font-bold">
                  Public Preview
                </span>
              </div>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-surface mb-4 leading-tight">
                Petrofac Kemaman Supply Base
              </h2>
              <p className="font-body text-industrial-grey text-lg mb-8 leading-relaxed">
                Cinematic documentation of critical offshore supply operations. Access to the
                full unredacted video requires corporate verification to protect client IP
                and operational security.
              </p>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-surface font-label uppercase tracking-widest text-xs font-bold border border-surface/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                href="/case-studies"
              >
                View Case Studies
                <MaterialIcon
                  name="arrow_forward"
                  className="ml-2 group-hover:translate-x-1 transition-transform text-sm"
                />
              </Link>
            </div>
            {/* Thumbnail */}
            <RequestAccessTrigger
              defaultVideo="Petrofac Kemaman Supply Base"
              className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden relative group cursor-pointer border border-surface/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{ backgroundImage: "url('/images/stitch/709e231aa4.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MaterialIcon name="play_arrow" className="text-white text-3xl ml-1" />
                </div>
              </div>
            </RequestAccessTrigger>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-dark-ui relative flex justify-center items-center">
        <div className="text-center z-10 px-6">
          <h2 className="font-headline font-bold text-4xl md:text-5xl text-surface mb-8 max-w-2xl mx-auto uppercase tracking-tight">
            Ready to document your next critical operation?
          </h2>
          <Link
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-white font-label uppercase tracking-widest text-sm font-bold hover:bg-surface hover:text-background transition-all duration-300 group shadow-[0_0_30px_rgba(209,32,39,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            href="/contact"
          >
            Speak to Our Industrial Cinematography Team
            <MaterialIcon
              name="arrow_forward"
              className="ml-3 group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
