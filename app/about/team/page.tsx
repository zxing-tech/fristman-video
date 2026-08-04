import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata = pageMeta({
  title: "Our Team - Industrial Drone Operators",
  description:
    "Meet the Firstman Videos team of verified drone operators and industrial cinematographers serving Oil & Gas and heavy industry clients across Malaysia.",
  path: "/about/team",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/about/team" },
  ])
)

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
    <main className="relative pt-32">
      <JsonLd data={schema} />
      {/* Hero Section */}
      <section className="relative flex min-h-[614px] items-center overflow-hidden border-b border-white/5 bg-black pt-16 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-90 dark:opacity-40"
            style={{ backgroundImage: "url('/images/stitch/9c1e6ec500.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div
            className="absolute inset-0 opacity-20"
            style={gridPatternStyle}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center space-x-2 text-xs font-bold tracking-widest text-white/70 uppercase">
            <Link className="transition-colors hover:text-white" href="/">
              Home
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <Link className="transition-colors hover:text-white" href="/about">
              About
            </Link>
            <MaterialIcon name="chevron_right" className="text-[10px]" />
            <span className="text-primary">Team</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <MaterialIcon
                name="verified_user"
                className="text-sm text-primary"
              />
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                Verified Industrial Professionals
              </span>
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-white font-stretch-semi-condensed md:text-6xl">
              Meet the Team <br />
              <span className="text-gradient">Behind the Lens</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed font-light text-white/70">
              We are a specialized collective of production-led drone operators
              and industrial cinematographers. Focused on site-aware planning
              and rigorous safety protocols to capture heavy industry
              environments safely and cinematically.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="mb-16 flex flex-col items-end justify-between md:flex-row">
            <div>
              <h2 className="mb-3 text-3xl font-bold">Core Leadership</h2>
              <p className="text-industrial-grey">
                The specialists directing industrial cinematic productions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.title}
                className="glass-panel group flex h-full flex-col overflow-hidden rounded-lg bg-black transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(209,32,39,0.15)]"
              >
                <div className="relative aspect-[4/5]">
                  <div
                    className="h-full w-full bg-cover bg-center grayscale transition-all duration-500 group-hover:grayscale-0"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  {member.verified && (
                    <div className="absolute top-4 right-4 flex items-center space-x-1 rounded-full border border-white/10 bg-black/80 px-3 py-1 backdrop-blur-sm">
                      <MaterialIcon
                        name="lock"
                        className="text-[14px] text-primary"
                      />
                      <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
                        Credentials verified
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {member.title}
                    </h3>
                    <p className="text-xs font-bold tracking-wider text-primary uppercase">
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
