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
    // This hero is not full-bleed like the rest of the site's — it sits below
    // `main`'s own top padding, so that padding is what clears the floating
    // navbar and cannot go much lower than 112px.
    <main className="relative pt-28 md:pt-32">
      <JsonLd data={schema} />
      {/* Hero Section */}
      <section className="relative flex min-h-[30rem] items-center overflow-hidden border-b border-white/5 bg-black pt-10 pb-16 md:min-h-[38rem] md:pt-16 md:pb-24">
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
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-8">
          {/* Breadcrumb.
              This page is the one that never got the site's breadcrumb
              treatment, and three things came with that.

              The links measured 42x16 and 50x16 — under the 24x24 floor in WCAG
              2.5.8 Target Size (Minimum), which every other breadcrumb on the
              site clears with `-my-1 py-1`. That is a touch-target failure on
              the exact device this pass targets.

              The chevrons carried an arbitrary 10px, which is dead code:
              Google's Material Symbols stylesheet is an unlayered `<link>` and
              pins its own font size, so only the important modifier lands. They
              rendered at 24px against the 16px every other breadcrumb uses.

              And it wraps rather than sitting on one line, because a
              three-level trail does not fit 342px. */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label text-xs font-bold tracking-widest text-white/70 uppercase">
              <li className="flex items-center gap-x-2">
                <Link
                  className="-my-1 py-1 transition-colors hover:text-white"
                  href="/"
                >
                  Home
                </Link>
                <MaterialIcon name="chevron_right" className="text-base!" />
              </li>
              <li className="flex items-center gap-x-2">
                <Link
                  className="-my-1 py-1 transition-colors hover:text-white"
                  href="/about"
                >
                  About
                </Link>
                <MaterialIcon name="chevron_right" className="text-base!" />
              </li>
              <li aria-current="page" className="text-primary">
                Team
              </li>
            </ol>
          </nav>
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
            {/* The site's Display ramp is 36/48/60/72. This h1 stopped at 60px,
                so on a 1440px desktop it was a size smaller than every other h1
                while sharing their layout — and it had no step between 36 and
                60 either. */}
            <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-white font-stretch-semi-condensed sm:text-5xl md:text-6xl lg:text-7xl">
              Meet the Team <br />
              <span className="text-gradient">Behind the Lens</span>
            </h1>
            {/* `font-light` is 300. The documented weight ramp runs
                400 / 500 / 700 / 900, and 300 appears nowhere else on the site —
                it also thins this copy at the one place it sits over open
                photograph. */}
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
              We are a specialized collective of production-led drone operators
              and industrial cinematographers. Focused on site-aware planning
              and rigorous safety protocols to capture heavy industry
              environments safely and cinematically.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          {/* Was a `flex items-end justify-between md:flex-row` row wrapping a
              single child — a two-column header layout with nothing in the
              second column. It distributed and bottom-aligned one element,
              which is the same as doing nothing, so the wrapper is gone.

              The heading also ran at 30px, below the 36px floor DESIGN.md gives
              the Headline role, and never stepped. Every other section heading
              on the site is 36px opening to 48px. */}
          <div className="mb-12 md:mb-16">
            <h2 className="mb-3 font-headline text-4xl font-black tracking-tight text-surface md:text-5xl">
              Core Leadership
            </h2>
            <p className="font-body text-industrial-grey">
              The specialists directing industrial cinematic productions.
            </p>
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
                  {/* Both sizes here were off the ramp, and the icon's was also
                      dead code: an arbitrary 14px on a Material Symbol loses to
                      the unlayered icon stylesheet without the important
                      modifier, so the glyph rendered at 24px inside a badge
                      whose label was set at 10px. Now the Label role's 12px
                      beside a 16px glyph, the pairing every other chip uses.

                      The badge wraps to the card's width on a phone rather than
                      running off it: at 12px the label alone is ~168px, and the
                      card is 342px there. */}
                  {member.verified && (
                    <div className="absolute top-4 right-4 left-4 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-black/80 px-3 py-1 backdrop-blur-sm">
                      <MaterialIcon
                        name="lock"
                        className="text-base! text-primary"
                      />
                      <span className="font-label text-xs font-bold tracking-widest text-white/80 uppercase">
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
