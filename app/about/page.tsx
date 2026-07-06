import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "About",
  description:
    "Industrial cinematography and visual documentation team built for oil & gas operators, heavy industry projects and large-scale stakeholder communication across Southeast Asia.",
}

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
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 text-sm text-industrial-grey font-label tracking-wide uppercase">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <span className="text-white">About</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <h1 className="text-5xl md:text-6xl font-headline font-bold leading-tight mb-6 uppercase tracking-tight">
              About First Man Videos
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-industrial-grey leading-relaxed mb-8 font-light">
              We are an industrial cinematography and visual documentation team
              built for oil &amp; gas operators, heavy industry projects and
              large-scale stakeholder communication across Southeast Asia.
            </p>
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 text-primary font-body uppercase tracking-widest text-sm font-bold hover:gap-3 transition-all duration-300"
            >
              Meet the Team
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </Link>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-panel border-white/10 group">
            <div
              className="absolute inset-0 opacity-30 mix-blend-screen z-20 pointer-events-none group-hover:opacity-50 transition-opacity duration-700"
              style={redGridBg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Verified Operator
              </span>
            </div>
            <Image
              src="/images/stitch/6f8a089e05.jpg"
              alt="Industrial film crew operating a heavy-duty drone near an offshore oil rig at twilight"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Our Story & Mission Split */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          <div className="glass-panel p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-8">
              <MaterialIcon name="history" className="text-4xl text-primary" />
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">
                Our Story
              </h2>
            </div>
            <p className="text-industrial-grey leading-relaxed text-lg">
              Founded as First Man Productions, we evolved from video
              production excellence into specialized industrial cinematography
              and visual documentation designed explicitly for complex,
              high-risk operational sites. We bridge the gap between creative
              storytelling and rigorous technical documentation.
            </p>
          </div>
          <div className="glass-panel p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1 h-full bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-8">
              <MaterialIcon name="target" className="text-4xl text-primary" />
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">
                Mission
              </h2>
            </div>
            <p className="text-industrial-grey leading-relaxed text-lg">
              Deliver safe, precise and cost-effective high-definition visual
              documentation and cinematic production for industrial teams,
              ensuring flawless execution from initial site assessment to final
              stakeholder presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tight mb-4">
            Core Values
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-t border-t-white/10 relative group"
            >
              <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <MaterialIcon name={value.icon} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-industrial-grey">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities List (Asymmetric Layout) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tight mb-4">
              Operational Capabilities
            </h2>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-industrial-grey text-lg mb-8">
              Comprehensive visual deployment services engineered for demanding
              industrial environments.
            </p>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="glass-panel p-6 rounded-xl flex items-center gap-6 group hover:bg-white/5 transition-colors"
              >
                <div className="w-2 h-12 bg-white/10 group-hover:bg-primary transition-colors rounded-full" />
                <MaterialIcon
                  name={capability.icon}
                  className="text-3xl text-industrial-grey group-hover:text-white transition-colors"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold uppercase tracking-wide">
                    {capability.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="glass-panel rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase tracking-tight mb-8 relative z-10">
            Ready to Document Your
            <br />
            Next Critical Operation?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-body uppercase tracking-widest text-sm font-bold px-8 py-4 rounded-full hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(209,32,39,0.15)]"
              href="/contact"
            >
              Speak to our team
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white font-body uppercase tracking-widest text-sm font-bold px-8 py-4 rounded-full border border-white/20 hover:border-primary hover:bg-primary/10 transition-colors"
              href="/services"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
