import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, graph, pageMeta, serviceSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Safety and Induction Videos",
  description:
    "Safety and induction video production in Malaysia covering site rules, PPE, hazards and emergency procedures for employees, contractors and visitors.",
  path: "/services/safety-induction-videos",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Safety and Induction Videos", path: "/services/safety-induction-videos" },
  ]),
  serviceSchema({
    name: "Safety and Induction Videos",
    description:
      "Customised safety and induction video production communicating site rules, hazards, emergency procedures and operational expectations to employees, contractors and visitors.",
    path: "/services/safety-induction-videos",
  })
)

const designedFor = [
  { icon: "construction", label: "Construction and Infrastructure Projects" },
  { icon: "factory", label: "Manufacturing & Industrial Facilities" },
  { icon: "oil_barrel", label: "Oil & Gas Operations" },
  { icon: "warehouse", label: "Warehouses & Logistics Centres" },
  { icon: "dns", label: "Data Centres" },
  { icon: "corporate_fare", label: "Corporate Offices" },
  { icon: "bolt", label: "Utilities & Power Plants" },
  { icon: "anchor", label: "Marine & Offshore Facilities" },
  { icon: "terrain", label: "Mining Operations" },
  { icon: "school", label: "Schools, Universities & Institutions" },
  { icon: "local_hospital", label: "Healthcare Facilities" },
  { icon: "apartment", label: "Hospitality & Commercial Buildings" },
]

const typicalContent = [
  { icon: "campaign", label: "Company introduction and safety culture" },
  { icon: "badge", label: "Site access procedures" },
  { icon: "engineering", label: "PPE requirements" },
  { icon: "warning", label: "Workplace hazards and risk awareness" },
  { icon: "emergency", label: "Emergency response procedures" },
  { icon: "directions_run", label: "Assembly points and evacuation routes" },
  { icon: "verified_user", label: "Safe work practices" },
  { icon: "block", label: "Restricted and high-risk areas" },
  { icon: "precision_manufacturing", label: "Equipment and machinery guidelines" },
  { icon: "recycling", label: "Environmental and housekeeping practices" },
  { icon: "lock", label: "Security procedures" },
  { icon: "groups", label: "Visitor and contractor requirements" },
  {
    icon: "subtitles",
    label: "On-screen graphics, animations and multilingual subtitles (optional)",
  },
]

export default function SafetyInductionVideosPage() {
  return (
    <div>
      <JsonLd data={schema} />
      {/* Hero — "Main Panel" from the supplied copy */}
      <header className="relative min-h-[921px] flex items-center pt-24 pb-16 overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Monochrome industrial oil and gas facility at dusk with red interface overlays"
            className="w-full h-full bg-cover bg-center opacity-90 dark:opacity-40"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/e8622506e9.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <MaterialIcon name="health_and_safety" fill className="text-primary text-sm" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              Safety &amp; Induction Media
            </span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tight leading-[1.1] mb-4 text-white">
              Safety &amp; Induction Videos
            </h1>
            <p className="text-gradient text-xl md:text-3xl font-bold tracking-tight mb-8">
              Safety Starts Before the First Step
            </p>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl font-light leading-relaxed mb-10">
              A well-produced safety and induction video does more than fulfil compliance
              requirements—it sets the standard for your workplace culture. Firstman
              Productions creates engaging, professional safety and induction videos that
              clearly communicate site rules, hazards, emergency procedures and operational
              expectations. Designed to be informative, consistent and easy to understand,
              our videos help ensure every employee, contractor and visitor starts work with
              confidence and awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="bg-primary text-white hover:bg-background hover:shadow-[0_0_15px_rgba(209,32,39,0.5)] transition-all duration-300 rounded-full px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 group"
                href="/contact"
              >
                Discuss Project Scope
                <MaterialIcon
                  name="arrow_forward"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                className="bg-transparent border border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                href="/case-studies"
              >
                View Sample Deliverables
              </Link>
            </div>
          </div>
          {/* Credentials Note — literal black, not `dark-ui`: this sits on the photo hero,
              which stays dark in both themes, so a flipping token washes it out in light mode. */}
          <div className="mt-8 flex items-start gap-3 p-4 border-l-2 border-primary bg-black/40 backdrop-blur-sm max-w-xl">
            <MaterialIcon name="verified_user" className="text-primary" />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-1 text-white">
                Safety-Conscious Planning
              </p>
              <p className="text-xs text-white/70">
                Operations executed with strict adherence to site protocols. Full HSSE
                credentials and operational documentation available upon request prior to
                deployment.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Applications — Who It's Designed For */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 border-l-2 border-primary pl-4">
              Applications
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6 text-surface">
              Who It&apos;s Designed For
            </h3>
            <p className="text-industrial-grey leading-relaxed">
              Our safety and induction videos are tailored for organisations where clear
              communication and safe work practices are critical. Whether onboarding new
              employees or preparing contractors before they enter site, our videos deliver
              consistent messaging that reduces training time and improves understanding.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {designedFor.map((item) => (
              <div
                className="glass-panel rounded-xl p-5 flex items-center gap-4 group transition-colors hover:border-primary/50"
                key={item.label}
              >
                <MaterialIcon
                  name={item.icon}
                  className="text-2xl text-surface/50 shrink-0 transition-colors group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
                <span className="text-sm font-bold tracking-tight text-surface leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Gets Captured */}
      <section className="py-24 bg-dark-ui border-y border-surface/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 border-l-2 border-primary pl-4">
              Scope
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6 text-surface">
              What Gets Captured
            </h3>
            <p className="text-industrial-grey leading-relaxed">
              Every organisation operates differently, so each video is customised to reflect
              your procedures, facilities and safety requirements. We work closely with your
              HSE team to ensure all critical information is presented clearly and
              professionally.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-industrial-grey mb-6">
            Typical content includes
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {typicalContent.map((item) => (
              <li className="flex items-start gap-3 group" key={item.label}>
                <MaterialIcon
                  name={item.icon}
                  className="text-primary text-lg shrink-0 mt-0.5 transition-all group-hover:[font-variation-settings:'FILL'_1]"
                />
                <span className="text-sm text-surface/90 leading-relaxed">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
