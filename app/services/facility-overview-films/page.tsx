import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { RequestAccessTrigger } from "@/components/site/request-access-modal"
import { SectionLabel } from "@/components/site/section-label"
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
    { name: "Facility Overview Films", path: "/services/facility-overview-films" },
  ]),
  serviceSchema({
    name: "Facility Overview Films",
    description:
      "Drone-enabled aerial and ground cinematography that shows the scale, layout and access points of industrial facilities for stakeholders.",
    path: "/services/facility-overview-films",
  }),
)

const designedFor = [
  { icon: "factory", label: "Oil & Gas" },
  { icon: "electric_bolt", label: "Energy Sector" },
  { icon: "directions_boat", label: "Marine / Offshore" },
  { icon: "construction", label: "Fabrication Yards" },
]

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
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[614px] min-h-[500px] rounded-[24px] overflow-hidden group bg-black">
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
          <div className="absolute top-8 left-8 w-16 h-px bg-white/30 hidden md:block" />
          <div className="absolute top-8 left-8 w-px h-16 bg-white/30 hidden md:block" />
          <div className="absolute bottom-8 right-8 w-16 h-px bg-primary hidden md:block" />
          <div className="absolute bottom-8 right-8 w-px h-16 bg-primary hidden md:block" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="flex items-center gap-3 mb-4">
              <MaterialIcon name="videocam" fill className="text-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                Capability
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4 max-w-4xl leading-tight">
              Facility Overview Films <br />
              <span className="text-white/60">for Industrial Sites</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed font-light">
              Drone-enabled aerial and ground cinematography that helps industrial teams
              explain scale, layout, access points and project context to stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <RequestAccessTrigger
                defaultVideo="Facility Overview Films Portfolio"
                className="flex items-center gap-2 bg-primary hover:bg-[#a0181e] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(209,32,39,0.4)]"
              >
                <MaterialIcon name="lock" fill />
                Request Access to Portfolio
              </RequestAccessTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Application */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 border-l-2 border-primary pl-4">
              Application
            </h2>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-surface mb-6">
              Designed For
            </h3>
            <ul className="space-y-4">
              {designedFor.map((item) => (
                <li
                  key={item.label}
                  className="glass-panel rounded-xl p-4 flex items-center gap-4 border border-surface/5 group cursor-default transition-colors hover:border-surface/20"
                >
                  <MaterialIcon
                    name={item.icon}
                    className="text-surface/50 transition-colors group-hover:text-primary"
                  />
                  <span className="font-bold tracking-tight">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-[24px] p-8 md:p-12 h-full flex flex-col justify-center">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 border-l-2 border-primary pl-4">
                Focus Areas
              </h2>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-surface mb-8">
                What Gets Captured
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {focusAreas.map((area) => (
                  <div className="group" key={area.title}>
                    <div className="flex items-center gap-3 mb-3 text-surface group-hover:text-primary transition-colors">
                      <MaterialIcon name={area.icon} />
                      <h4 className="font-bold uppercase tracking-wider text-sm">{area.title}</h4>
                    </div>
                    <p className="text-industrial-grey text-sm leading-relaxed">
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
      <section className="py-24 mb-24 bg-graphite relative border-y border-surface/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel className="mb-2 block">Deployment Scenarios</SectionLabel>
            <h2 className="font-headline font-bold text-3xl md:text-5xl tracking-tight text-surface">
              Facility Overviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  style={{ backgroundImage: `url('${useCase.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <MaterialIcon name="add" className="text-white text-sm" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {useCase.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-16">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-surface mb-6">
          Need a clearer view of your facility?
        </h2>
        <p className="text-industrial-grey mb-8 max-w-xl mx-auto">
          Discuss your specific project requirements and site constraints with our production
          team.
        </p>
        <Link
          className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-surface hover:bg-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all group"
          href="/contact"
        >
          Discuss Your Production
          <MaterialIcon
            name="arrow_forward"
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </section>
    </div>
  )
}
