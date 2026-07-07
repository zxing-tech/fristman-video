import type { Metadata } from "next"
import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

export const metadata: Metadata = {
  title: "About / Team",
  description:
    "Meet the specialized collective of production-led drone operators and industrial cinematographers behind Firstman Videos.",
}

const gridPatternStyle = {
  backgroundSize: "40px 40px",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
}

const teamMembers = [
  {
    title: "Founder / Creative Director",
    focus: "Strategic Vision",
    image: "/images/stitch/00acb1f112.jpg",
    verified: false,
  },
  {
    title: "UAV Operations Lead",
    focus: "Aerial Coordination",
    image: "/images/stitch/27742e46ff.jpg",
    verified: true,
  },
  {
    title: "Cinematography Lead",
    focus: "Ground Execution",
    image: "/images/stitch/82079ab7f0.jpg",
    verified: false,
  },
  {
    title: "Post-Production Lead",
    focus: "Editorial & Delivery",
    image: "/images/stitch/8ed0cc72e8.jpg",
    verified: false,
  },
]

export default function AboutTeamPage() {
  return (
    <main className="pt-32 relative">
      {/* Hero Section */}
      <section className="relative min-h-[614px] flex items-center pt-16 pb-24 overflow-hidden bg-black border-b border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-90 dark:opacity-40"
            style={{ backgroundImage: "url('/images/stitch/9c1e6ec500.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 opacity-20" style={gridPatternStyle} />
          <div className="scanning-line opacity-30 pointer-events-none" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-8">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <Link className="hover:text-white transition-colors" href="/about">
              About
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <span className="text-primary">Team</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
              <MaterialIcon name="verified_user" className="text-primary text-sm" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Verified Industrial Professionals
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              Meet the Team <br />
              <span className="text-gradient">Behind the Lens</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl font-light leading-relaxed mb-10">
              We are a specialized collective of production-led drone operators and industrial
              cinematographers. Focused on site-aware planning and rigorous safety protocols to
              capture heavy industry environments safely and cinematically.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-3">Core Leadership</h2>
              <p className="text-industrial-grey">
                The specialists directing industrial cinematic productions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.title}
                className="glass-panel bg-black rounded-lg overflow-hidden group flex flex-col h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(209,32,39,0.15)]"
              >
                <div className="aspect-[4/5] relative">
                  <div
                    className="bg-cover bg-center w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  {member.verified && (
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 flex items-center space-x-1">
                      <MaterialIcon name="lock" className="text-primary text-[14px]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                        Credentials verified
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      {member.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
