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
    {
      name: "Safety and Induction Videos",
      path: "/services/safety-induction-videos",
    },
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
  {
    icon: "precision_manufacturing",
    label: "Equipment and machinery guidelines",
  },
  { icon: "recycling", label: "Environmental and housekeeping practices" },
  { icon: "lock", label: "Security procedures" },
  { icon: "groups", label: "Visitor and contractor requirements" },
  {
    icon: "subtitles",
    label:
      "On-screen graphics, animations and multilingual subtitles (optional)",
  },
]

export default function SafetyInductionVideosPage() {
  return (
    <div>
      <JsonLd data={schema} />
      {/* Hero — "Main Panel" from the supplied copy */}
      <header className="relative flex min-h-[921px] items-center overflow-hidden bg-black pt-24 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            aria-label="Monochrome industrial oil and gas facility at dusk with red interface overlays"
            className="h-full w-full bg-cover bg-center opacity-90 dark:opacity-40"
            role="img"
            style={{ backgroundImage: "url('/images/stitch/e8622506e9.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <MaterialIcon
              name="health_and_safety"
              fill
              className="text-sm text-primary"
            />
            <span className="text-xs font-bold tracking-widest text-white/70 uppercase">
              Safety &amp; Induction Media
            </span>
          </div>
          <div className="max-w-4xl">
            <h1 className="mb-4 text-4xl leading-[1.1] font-black tracking-tight text-white uppercase font-stretch-semi-condensed md:text-7xl">
              Safety &amp; Induction Videos
            </h1>
            <p className="text-gradient mb-8 text-xl font-bold tracking-tight md:text-3xl">
              Safety Starts Before the First Step
            </p>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed font-light text-white/70 md:text-xl">
              A well-produced safety and induction video does more than fulfil
              compliance requirements—it sets the standard for your workplace
              culture. Firstman Productions creates engaging, professional
              safety and induction videos that clearly communicate site rules,
              hazards, emergency procedures and operational expectations.
              Designed to be informative, consistent and easy to understand, our
              videos help ensure every employee, contractor and visitor starts
              work with confidence and awareness.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="group flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300 hover:bg-background hover:shadow-[0_0_15px_rgba(209,32,39,0.5)]"
                href="/contact"
              >
                Discuss Project Scope
                <MaterialIcon
                  name="arrow_forward"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300 hover:border-primary hover:bg-primary/10"
                href="/our-work"
              >
                View Sample Deliverables
              </Link>
            </div>
          </div>
          {/* Credentials Note — literal black, not `dark-ui`: this sits on the photo hero,
              which stays dark in both themes, so a flipping token washes it out in light mode. */}
          <div className="mt-8 flex max-w-xl items-start gap-3 border-l-2 border-primary bg-black/40 p-4 backdrop-blur-sm">
            <MaterialIcon name="verified_user" className="text-primary" />
            <div>
              <p className="mb-1 text-sm font-bold tracking-wider text-white uppercase">
                Safety-Conscious Planning
              </p>
              <p className="text-xs text-white/70">
                Operations executed with strict adherence to site protocols.
                Full HSSE credentials and operational documentation available
                upon request prior to deployment.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Applications — Who It's Designed For */}
      <section className="relative bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-2 border-l-2 border-primary pl-4 text-sm font-bold tracking-widest text-primary uppercase">
              Applications
            </h2>
            <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-surface uppercase md:text-4xl">
              Who It&apos;s Designed For
            </h3>
            <p className="leading-relaxed text-industrial-grey">
              Our safety and induction videos are tailored for organisations
              where clear communication and safe work practices are critical.
              Whether onboarding new employees or preparing contractors before
              they enter site, our videos deliver consistent messaging that
              reduces training time and improves understanding.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {designedFor.map((item) => (
              <div
                className="glass-panel group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-primary/50"
                key={item.label}
              >
                <MaterialIcon
                  name={item.icon}
                  className="shrink-0 text-2xl text-surface/50 transition-colors group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                />
                <span className="text-sm leading-snug font-bold tracking-tight text-surface">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Gets Captured */}
      <section className="relative border-y border-surface/5 bg-dark-ui py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-2 border-l-2 border-primary pl-4 text-sm font-bold tracking-widest text-primary uppercase">
              Scope
            </h2>
            <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-surface uppercase md:text-4xl">
              What Gets Captured
            </h3>
            <p className="leading-relaxed text-industrial-grey">
              Every organisation operates differently, so each video is
              customised to reflect your procedures, facilities and safety
              requirements. We work closely with your HSE team to ensure all
              critical information is presented clearly and professionally.
            </p>
          </div>
          <p className="mb-6 text-xs font-bold tracking-widest text-industrial-grey uppercase">
            Typical content includes
          </p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {typicalContent.map((item) => (
              <li className="group flex items-start gap-3" key={item.label}>
                <MaterialIcon
                  name={item.icon}
                  className="mt-0.5 shrink-0 text-lg text-primary transition-all group-hover:[font-variation-settings:'FILL'_1]"
                />
                <span className="text-sm leading-relaxed text-surface/90">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
