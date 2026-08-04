import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { JsonLd } from "@/components/seo/json-ld"
import { pageMeta, graph, breadcrumbSchema } from "@/lib/seo"

export const metadata = pageMeta({
  title: "About Us — Industrial Video Production",
  description:
    "Firstman Videos is an industrial cinematography team based in Malaysia serving Oil & Gas operators across Southeast Asia with safety-certified drone crews.",
  path: "/about",
})

const redGridBg = {
  backgroundImage:
    "linear-gradient(rgba(209, 32, 39, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(209, 32, 39, 0.1) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
}

const coreValues = [
  {
    icon: "verified_user",
    title: "Professionalism",
    description:
      "Rigorous adherence to site safety protocols and corporate compliance on every deployment.",
  },
  {
    icon: "lightbulb",
    title: "Creativity",
    description:
      "Elevating technical documentation into compelling, cinematic visual narratives.",
  },
  {
    icon: "high_quality",
    title: "Quality",
    description:
      "Uncompromising standards in imaging resolution, framing, and final delivery formats.",
  },
  {
    icon: "sync_alt",
    title: "Flexibility",
    description:
      "Agile response capabilities to adapt to volatile site conditions and dynamic project scopes.",
  },
]

// What happens before the cameras come out. Buyers in Oil & Gas, marine and
// fabrication ask about these four things first.
const deployment = [
  {
    icon: "badge",
    title: "Access & Clearances",
    description:
      "Coordination for permit-to-work systems, facility inductions and site-specific access protocols ahead of mobilisation.",
  },
  {
    icon: "health_and_safety",
    title: "Safety & Site Coordination",
    description:
      "We align with your HSE managers on operational parameters, required PPE, restricted zones and permitting for both ground and drone-enabled capture.",
  },
  {
    icon: "cloudy",
    title: "Weather Windows",
    description:
      "Offshore and marine work is scheduled against forecasts, so aerial capture lands in conditions that actually produce usable footage.",
  },
  {
    icon: "engineering",
    title: "Non-Disruptive Capture",
    description:
      "Filming is planned to run alongside active infrastructure. Your operations set the schedule, not our shot list.",
  },
]

const dataHandling = [
  { icon: "verified_user", label: "NDA executed before deployment" },
  { icon: "encrypted", label: "Encrypted transfer & storage" },
  { icon: "lock_person", label: "Password-gated client portals" },
  { icon: "hard_drive", label: "Offline cold storage on request" },
]

const capabilities = [
  { icon: "flight", title: "Certified UAV Pilots" },
  { icon: "videocam", title: "Ground Camera Crews" },
  { icon: "health_and_safety", title: "Site Safety Planning" },
  { icon: "description", title: "Method Statements & Flight Logs" },
  { icon: "smart_display", title: "YouTube-Ready Content" },
  { icon: "lock", title: "Gated Case Study Handling" },
  { icon: "public", title: "Multi-Country Deployment" },
]

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ])
        )}
      />
      {/* Breadcrumb */}
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div className="flex items-center gap-2 font-label text-sm tracking-wide text-industrial-grey uppercase">
          <Link className="transition-colors hover:text-primary" href="/">
            Home
          </Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <span className="text-surface">About</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto mb-32 max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="z-10">
            <h1 className="mb-6 font-headline text-4xl leading-tight font-black tracking-tight uppercase font-stretch-semi-condensed md:text-6xl">
              About Firstman Videos
            </h1>
            <div className="mb-8 h-1 w-24 bg-primary" />
            <p className="mb-8 text-xl leading-relaxed font-light text-industrial-grey">
              We are an industrial cinematography and visual documentation team
              built for oil &amp; gas operators, heavy industry projects and
              large-scale stakeholder communication across Southeast Asia.
            </p>
            <p className="mb-8 text-sm text-industrial-grey">
              Firstman Videos is the industrial video production brand of{" "}
              <span className="font-semibold text-surface">
                Firstman Productions
              </span>{" "}
              (001335693-M).
            </p>
            {/* <Link
              href="/about/team"
              className="inline-flex items-center gap-2 text-primary font-body uppercase tracking-widest text-sm font-bold hover:gap-3 transition-all duration-300"
            >
              Meet the Team
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </Link> */}
          </div>
          <div className="glass-panel group relative h-[500px] w-full overflow-hidden rounded-2xl border-surface/10 bg-black">
            <div
              className="pointer-events-none absolute inset-0 z-20 opacity-30 mix-blend-screen transition-opacity duration-700 group-hover:opacity-50"
              style={redGridBg}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full border border-primary/30 bg-black/80 px-3 py-1 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Verified Operator
              </span>
            </div>
            <Image
              src="/images/stitch/6f8a089e05.jpg"
              alt="Industrial film crew operating a heavy-duty drone near an offshore oil rig at twilight"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-80 grayscale transition-all duration-700 group-hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Our Story & Mission Split */}
      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-surface/5 bg-surface/5 md:grid-cols-2">
          <div className="glass-panel group relative overflow-hidden p-12 lg:p-16">
            <div className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="mb-8 flex items-center gap-4">
              <MaterialIcon name="history" className="text-4xl text-primary" />
              <h2 className="font-headline text-3xl font-bold tracking-tight uppercase">
                Our Story
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-industrial-grey">
              Founded as First Man Productions, we evolved from video production
              excellence into specialized industrial cinematography and visual
              documentation designed explicitly for complex, high-risk
              operational sites. We bridge the gap between creative storytelling
              and rigorous technical documentation.
            </p>
          </div>
          <div className="glass-panel group relative overflow-hidden p-12 lg:p-16">
            <div className="absolute top-0 right-0 h-full w-1 origin-bottom scale-y-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="mb-8 flex items-center gap-4">
              <MaterialIcon name="target" className="text-4xl text-primary" />
              <h2 className="font-headline text-3xl font-bold tracking-tight uppercase">
                Mission
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-industrial-grey">
              Deliver safe, precise and cost-effective high-definition visual
              documentation and cinematic production for industrial teams,
              ensuring flawless execution from initial site assessment to final
              stakeholder presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight uppercase">
            Core Values
          </h2>
          <div className="mx-auto h-1 w-16 bg-primary" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="glass-panel group relative rounded-2xl border-t border-t-surface/10 p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-surface/10 bg-background/50 transition-colors group-hover:border-primary">
                <MaterialIcon name={value.icon} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-wide uppercase">
                {value.title}
              </h3>
              <p className="text-sm text-industrial-grey">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities List (Asymmetric Layout) */}
      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="sticky top-32 lg:col-span-4">
            <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight uppercase">
              Operational Capabilities
            </h2>
            <div className="mb-6 h-1 w-16 bg-primary" />
            <p className="mb-8 text-lg text-industrial-grey">
              Comprehensive visual deployment services engineered for demanding
              industrial environments.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-8">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="glass-panel group flex items-center gap-6 rounded-xl p-6 transition-colors hover:bg-surface/5"
              >
                <div className="h-12 w-2 rounded-full bg-surface/10 transition-colors group-hover:bg-primary" />
                <MaterialIcon
                  name={capability.icon}
                  className="text-3xl text-industrial-grey transition-colors group-hover:text-surface"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold tracking-wide uppercase">
                    {capability.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment & Site Coordination */}
      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight uppercase">
            Deployment &amp; Site Coordination
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 bg-primary" />
          <p className="mx-auto max-w-2xl text-industrial-grey">
            Most of the work on a live industrial site happens before the first
            flight. This is what we settle with your team first.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {deployment.map((item) => (
            <div
              key={item.title}
              className="glass-panel group flex items-start gap-6 rounded-2xl border-l-2 border-l-transparent p-8 transition-colors hover:border-l-primary"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface/10 bg-background/50 transition-colors group-hover:border-primary">
                <MaterialIcon name={item.icon} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-industrial-grey">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confidentiality & Data Handling */}
      <section className="mx-auto mb-32 max-w-7xl px-6">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 translate-x-20 -skew-x-12 bg-primary/5" />
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-background/50">
                <MaterialIcon
                  name="lock"
                  fill
                  className="text-4xl text-primary"
                />
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight uppercase">
                Confidentiality &amp; Data Handling
              </h2>
              <div className="h-1 w-16 bg-primary" />
            </div>
            <div className="lg:col-span-8">
              <p className="mb-8 text-lg leading-relaxed text-industrial-grey">
                Site layouts, operational procedures and fabrication techniques
                are proprietary, and we treat footage of them that way. Raw
                material is moved and stored through controlled channels, and
                anything sensitive is delivered gated rather than posted
                publicly. Access to those deliverables is logged.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {dataHandling.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-surface/5 bg-surface/5 p-4"
                  >
                    <MaterialIcon
                      name={item.icon}
                      className="shrink-0 text-primary"
                    />
                    <span className="text-sm font-bold tracking-wider uppercase">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mb-12 max-w-7xl px-6">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-12 text-center md:p-20">
          <div className="pointer-events-none absolute inset-0 bg-primary/5" />
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h2 className="relative z-10 mb-8 font-headline text-3xl font-bold tracking-tight uppercase md:text-5xl">
            Ready to Document Your
            <br />
            Next Critical Operation?
          </h2>
          <div className="relative z-10 flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-body text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_15px_rgba(209,32,39,0.15)] transition-colors hover:bg-red-700"
              href="/contact"
            >
              Speak to our team
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-3 rounded-full border border-surface/20 bg-transparent px-8 py-4 font-body text-sm font-bold tracking-widest text-surface uppercase transition-colors hover:border-primary hover:bg-primary/10"
              href="/#services"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
