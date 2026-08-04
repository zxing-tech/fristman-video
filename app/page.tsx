import ReactDOM from "react-dom"

import { MaterialIcon } from "@/components/site/material-icon"
import { SectionLabel } from "@/components/site/section-label"
import { CtaButton } from "@/components/site/cta-button"
import { HeroVideo } from "@/components/site/hero-video"
import { ServiceCard } from "@/components/site/service-card"
import { sectors } from "@/lib/data/sectors"
import { services } from "@/lib/data/services"
import { pageMeta } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMeta({
  description:
    "Industrial drone cinematography for Oil & Gas and heavy industry. Cinematic UAV, timelapse and ground-based visual documentation across Malaysia & Southeast Asia.",
  path: "/",
})

const agencyLogos = [
  { src: "/images/clients/agency-01.png", alt: "Leo Burnett" },
  { src: "/images/clients/agency-02.png", alt: "M&C Saatchi" },
  { src: "/images/clients/agency-03.png", alt: "deFINE International" },
  { src: "/images/clients/agency-04.png", alt: "Pat-Lin Communications" },
  { src: "/images/clients/agency-05.png", alt: "Emerald Communications" },
  { src: "/images/clients/agency-06.png", alt: "PR Communications" },
  { src: "/images/clients/agency-07.png", alt: "Livescape" },
  { src: "/images/clients/agency-08.png", alt: "arc" },
  { src: "/images/clients/agency-09.png", alt: "Time Out Solutions" },
  { src: "/images/clients/agency-10.png", alt: "Ben Line Agencies" },
  { src: "/images/clients/agency-11.png", alt: "Enfiniti Vision Media" },
  { src: "/images/clients/agency-12.png", alt: "Media Prima" },
]

const clienteleLogos = [
  { src: "/images/clients/clientele-01.png", alt: "BWW" },
  { src: "/images/clients/clientele-02.png", alt: "Petrofac" },
  { src: "/images/clients/clientele-03.png", alt: "ALAM" },
  { src: "/images/clients/clientele-04.png", alt: "Malaysia Airports" },
  { src: "/images/clients/clientele-05.png", alt: "GIVI" },
  { src: "/images/clients/clientele-06.png", alt: "NORR Systems" },
  {
    src: "/images/clients/clientele-07.png",
    alt: "Toastmasters International",
  },
  { src: "/images/clients/clientele-08.png", alt: "Bayer" },
  { src: "/images/clients/clientele-09.png", alt: "DKSH" },
  { src: "/images/clients/clientele-10.png", alt: "Mercedes-Benz" },
  { src: "/images/clients/clientele-11.png", alt: "Belum Rainforest Resort" },
  { src: "/images/clients/clientele-12.png", alt: "BTL" },
  { src: "/images/clients/clientele-13.png", alt: "Eco Balance" },
  { src: "/images/clients/clientele-14.png", alt: "YouTube" },
  { src: "/images/clients/clientele-15.png", alt: "Visual Retale" },
  { src: "/images/clients/clientele-16.png", alt: "Chow Tai Fook" },
]

// Hero footage — an industrial plant at blue hour (Pexels 856627, licensed for
// commercial use, no attribution required). Stock, and never captioned as
// Firstman's own work.
//
// Known and accepted: this clip is a dusk-to-night time-lapse, not a locked-off
// shot. Measured mean luminance across its 7.9s runs 0.115 → 0.012, so it is
// bright for roughly the first two seconds and close to black for the rest,
// then jumps back at the loop point. Chosen anyway for its look. Two consequences
// are load-bearing for the code around it:
//   - the scrims below are deliberately light, because darkening an already-dark
//     clip would leave nothing visible at all;
//   - no separate phone rendition. At 1920x1080 for 4.4 MB the full file is
//     already small, and the wider source keeps the heavy mobile crop sharp.
//     HeroVideo still accepts `srcSmall` if a heavier clip ever lands here.
//
// If this is ever swapped: the poster must be frame 0 of the video itself, not a
// still supplied alongside it, or the fade-in visibly jumps.
const HERO_VIDEO = "/videos/hero.mp4"
const HERO_POSTER = "/videos/hero-poster.jpg"

// Legibility over moving footage, where a still frame's contrast is not a
// guarantee. This buys contrast at the glyph edges only, so it costs nothing
// anywhere the text is not — which is the whole point of keeping the scrim light.
const HERO_TEXT_SHADOW =
  "[text-shadow:0_1px_2px_rgb(0_0_0/0.65),0_8px_32px_rgb(0_0_0/0.45)]"

// Countries the crew mobilises to. Kept in sync with the Region / Country
// options in app/contact/consultation-form.tsx.
const regionalCoverage = [
  { country: "Malaysia", status: "Sabah & Sarawak focus", highlight: true },
  { country: "Singapore", status: "Active", highlight: false },
  { country: "Indonesia", status: "Active", highlight: false },
  { country: "Brunei", status: "Active", highlight: false },
]

// The logo wall is the one complete piece of proof on the site, so the marquee
// stays a plain <img> (next/image would fight the duplicated loop track). Explicit
// intrinsic dimensions keep the row from collapsing before the logos decode.
function LogoRow({
  label,
  logos,
  direction,
}: {
  label: string
  logos: { src: string; alt: string }[]
  direction: "left" | "right"
}) {
  const logoClass =
    "h-16 md:h-24 w-auto object-contain shrink-0 opacity-90 hover:opacity-100 dark:invert dark:opacity-75 dark:hover:opacity-100 transition-opacity duration-300"

  return (
    // The category chip stacks above the row on narrow screens. Inline, it ate
    // 104px of a 375px viewport and left the marquee a ~190px window showing one
    // logo at a time — a peephole onto the page's only real proof. Below `md`
    // the logos get the full column and the chip becomes a heading for them.
    <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-8">
      <span className="w-[104px] shrink-0 rounded-full bg-primary px-5 py-2.5 text-center font-label text-[11px] font-bold tracking-wider text-white uppercase md:w-[150px] md:px-8 md:text-xs">
        {label}
      </span>
      {/* `w-full` is required, not belt-and-braces: the wrapper is `items-start`
          on mobile, so a flex child would otherwise shrink to its content width
          and the track would have nothing to scroll across. */}
      <div className="marquee w-full md:flex-1">
        <div
          className={cn(
            "marquee-track hover:[animation-play-state:paused]",
            direction === "left"
              ? "animate-marquee-left"
              : "animate-marquee-right"
          )}
        >
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={120}
              loading="lazy"
              decoding="async"
              className={logoClass}
            />
          ))}
          {/* Second pass exists only so the track can loop seamlessly at -50%.
              Hidden from assistive tech so the names are not announced twice. */}
          {logos.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${logo.src}-loop`}
              src={logo.src}
              alt=""
              aria-hidden="true"
              width={180}
              height={120}
              loading="lazy"
              decoding="async"
              className={logoClass}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  // The poster is this page's LCP element, but it arrives as a CSS background,
  // so the browser cannot discover it until stylesheets have parsed. Rendering a
  // <link rel="preload"> in the tree emits the hint twice (React hoists a copy
  // and leaves the original); this emits exactly one.
  ReactDOM.preload(HERO_POSTER, { as: "image", fetchPriority: "high" })

  return (
    <>
      {/* Hero Section */}
      <header className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-28 pb-16 lg:min-h-[min(100svh,880px)]">
        {/* Cinematic background. Photo exception: this region stays dark in both
            themes, so every scrim here is literal black and the text literal white.

            The scrims are deliberately shaped rather than flat. A full-height
            black band would guarantee contrast but would also be the thing the
            visitor sees instead of the footage. Each layer below covers only the
            area it has to. */}
        <div className="absolute inset-0 z-0">
          {/* Poster still. Paints immediately, carries the hero before the video
              is decoded, and is the whole background under reduced motion. */}
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_POSTER}')` }}
          />
          <HeroVideo src={HERO_VIDEO} />

          {/* Even grade — insurance against a blown-out highlight under white text
              if this slot is ever swapped for brighter footage. Barely registers
              on the current clip. */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Mobile: the copy runs the full width, so protection is a bottom band. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden" />

          {/* Desktop: an ellipse over the copy block alone. The right side of the
              frame — where this clip's subject actually is — and the corners above
              and below the text stay clear. Kept as light as the measured contrast
              allows: every extra percent here is picture the visitor cannot see,
              and this clip spends most of its loop dark without any help. */}
          <div className="absolute inset-0 hidden bg-[radial-gradient(115%_95%_at_16%_52%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.4)_32%,rgba(0,0,0,0.26)_56%,rgba(0,0,0,0.08)_76%,transparent_90%)] md:block" />

          {/* Vignette for the floating navbar. Run long enough to also reach the
              eyebrow below it: Signal Red at 12px cannot clear AA on any dark
              backdrop (its ceiling is 3.95:1, on pure black), so the only lever
              left is making what sits behind it as close to black as possible. */}
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/75 via-black/35 to-transparent" />

          {/* Short join into the band below */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Fades into the page colour so the hero meets the next section cleanly.
              Dark only: in light mode it would dissolve the bottom of the picture
              into white, and a footage-backed hero has to stay dark in both themes. */}
          <div className="hero-overlay hidden dark:block" />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-[1280px] px-8">
          <div className="max-w-3xl space-y-8">
            <SectionLabel withLine className={HERO_TEXT_SHADOW}>
              Industrial Visual Data
            </SectionLabel>
            <h1
              className={cn(
                "font-headline text-4xl leading-[1.1] font-black tracking-tight text-white font-stretch-semi-condensed md:text-7xl",
                HERO_TEXT_SHADOW
              )}
            >
              Industrial Drone Cinematography for{" "}
              <span className="text-primary">Oil & Gas</span> and Heavy Industry
            </h1>
            <p
              className={cn(
                "max-w-xl font-body text-lg leading-relaxed text-white/80",
                HERO_TEXT_SHADOW
              )}
            >
              Cinematic UAV and long-term timelapse documentation for the energy
              and industrial sectors. Precision capture, safety-first
              deployment, high-fidelity deliverables.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <CtaButton href="/contact" arrow className="w-full sm:w-fit">
                Get an Estimate
              </CtaButton>
              <CtaButton
                href="/our-work"
                variant="secondary"
                className="w-full sm:w-fit"
              >
                View Our Work
              </CtaButton>
            </div>
          </div>
        </div>
      </header>

      {/* Clientele Logo Wall — the only complete piece of proof on the site (28
          logos, written permission on file). It used to run at py-14 against the
          py-24 of every prose section around it, which handed the page's one
          piece of evidence its smallest band: 8% of page height against 61% for
          the three card-and-copy sections. Matching the standard section rhythm
          is the point, not a stylistic preference. */}
      <section className="relative w-full overflow-hidden border-y border-surface/10 bg-dark-ui py-24">
        <div className="mx-auto mb-12 max-w-[1280px] px-8 text-center">
          <SectionLabel className="mb-3 block">Our Clientele</SectionLabel>
          <h2 className="font-headline text-2xl font-bold md:text-3xl">
            We&apos;ve produced corporate video for these companies
          </h2>
        </div>
        {/* The rows sit in the 1280 column rather than bleeding to the viewport
            edge, so they start where every card grid on this page starts.
            DESIGN.md's 1280 Rule draws the line at content vs background, and
            logos are content. The marquee's own edge mask fades at the column
            edge instead of the window edge. */}
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-8">
          <LogoRow label="Agencies" logos={agencyLogos} direction="left" />
          <LogoRow label="Clientele" logos={clienteleLogos} direction="right" />
        </div>
      </section>

      {/* Services Overview — landing target for the removed /services hub (see next.config.ts).
          scroll-mt clears the fixed navbar when arriving via the #services anchor. */}
      <section
        id="services"
        className="relative w-full scroll-mt-28 bg-background py-24"
      >
        <div className="mx-auto max-w-[1280px] px-8">
          {/* Every section header on this page is centred, the closing CTA
              included. Owner's call, and it is applied uniformly — the section
              that used to sit flush left while its three neighbours centred was
              the one thing here that read as an accident. */}
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionLabel className="mb-4 block">
              Core Capabilities
            </SectionLabel>
            <h2 className="font-headline text-4xl font-black md:text-5xl">
              Our Core Services
            </h2>
            <div className="mt-8 h-1 w-24 bg-primary" />
          </div>
          {/* Straight from lib/data/services.ts — the same array the navbar
              dropdown maps over, so the two can no longer disagree on a label. */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                summary={service.summary}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors — landing target for the removed /industries pages (see next.config.ts).
          scroll-mt clears the fixed navbar when arriving via the #industries anchor. */}
      <section
        id="industries"
        className="w-full scroll-mt-28 border-y border-surface/10 bg-graphite py-24"
      >
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionLabel className="mb-4 block">Where We Operate</SectionLabel>
            <h2 className="font-headline text-4xl font-black md:text-5xl">
              Sectors We Serve
            </h2>
            <p className="mt-6 max-w-2xl font-body text-industrial-grey">
              We work where scale, safety and site access matter most. Every
              deployment is planned around live operations rather than dropped
              on top of them.
            </p>
            <div className="mt-8 h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <div
                key={sector.slug}
                className="glass-panel group flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary">
                  <MaterialIcon
                    name={sector.icon}
                    className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                  />
                </div>
                <h3 className="mb-3 font-headline text-xl font-bold tracking-wide text-surface uppercase">
                  {sector.title}
                </h3>
                <p className="mb-6 font-body text-sm leading-relaxed text-industrial-grey">
                  {sector.summary}
                </p>
                <ul className="mt-auto space-y-2 border-t border-surface/10 pt-6">
                  {sector.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <MaterialIcon
                        name="chevron_right"
                        className="mt-0.5 shrink-0 text-[16px] text-primary"
                      />
                      <span className="font-body text-xs text-industrial-grey">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Regional coverage — a different claim from the four sectors above
              it (geography, not discipline), so it has to read as its own group.
              It sat at mt-6: exactly the 24px gap running *between* the sector
              cards, which made it parse as a fifth, wider sector. Separation
              between groups now clears the spacing inside them by a wide margin. */}
          <div className="glass-panel mt-16 flex flex-col gap-10 rounded-2xl p-8 md:p-10 lg:flex-row lg:items-center">
            <div className="lg:w-2/5">
              <div className="mb-4 inline-flex items-center gap-2 text-primary">
                <MaterialIcon name="map" />
                <span className="font-label text-xs font-bold tracking-widest uppercase">
                  Regional Coverage
                </span>
              </div>
              <h3 className="mb-4 font-headline text-2xl leading-tight font-bold text-surface md:text-3xl">
                Southeast Asia Operations
              </h3>
              <p className="font-body text-sm text-industrial-grey">
                Rapid deployment across the region&apos;s major industrial hubs,
                with experience working through the site access and clearance
                requirements that come with them.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:w-3/5">
              {regionalCoverage.map((row) => (
                <div
                  key={row.country}
                  className="flex items-center justify-between border-b border-surface/10 pb-3"
                >
                  <span className="font-body font-bold text-surface">
                    {row.country}
                  </span>
                  <span
                    className={`font-label text-xs tracking-wider uppercase ${
                      row.highlight ? "text-primary" : "text-industrial-grey"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Firstman Videos (Bento Grid Style) */}
      <section className="relative w-full border-y border-surface/10 bg-dark-ui py-24">
        {/* Abstract background accent */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionLabel className="mb-4 block">The Advantage</SectionLabel>
            <h2 className="font-headline text-4xl font-black md:text-5xl">
              Why Firstman Videos
            </h2>
            <div className="mt-8 h-1 w-24 bg-primary" />
          </div>
          {/* Metrics Bar */}
          <div className="glass-panel mb-12 flex w-full flex-col items-center justify-around gap-10 rounded-xl px-8 py-10 md:flex-row">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-headline text-3xl font-black text-primary md:text-4xl">
                25+ Years
              </span>
              {/* Label role per DESIGN.md: 12px, 0.1em. These ran at 10px/0.2em,
                  which paired a 36px value with a caption 3.6x smaller and pushed
                  the tracking past the point where the words read as words. */}
              <span className="mt-1 font-label text-xs font-bold tracking-widest text-surface/60 uppercase">
                Corporate Video
              </span>
            </div>
            <div className="hidden h-12 w-px bg-surface/10 md:block" />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-headline text-3xl font-black text-primary md:text-4xl">
                15+ Years
              </span>
              <span className="mt-1 font-label text-xs font-bold tracking-widest text-surface/60 uppercase">
                Oil & Gas Sector
              </span>
            </div>
            <div className="hidden h-12 w-px bg-surface/10 md:block" />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-headline text-3xl font-black text-primary md:text-4xl">
                500+ Projects
              </span>
              <span className="mt-1 font-label text-xs font-bold tracking-widest text-surface/60 uppercase">
                Across Diverse Industries
              </span>
            </div>
          </div>
          {/* Row height is governed here and nowhere else. The children used to
              carry their own min-h-[250px]/min-h-[200px], which always won over
              the grid's auto-rows and left two rules fighting over one value. */}
          <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-6 md:grid-cols-3">
            {/* Large Feature */}
            <div className="glass-panel group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black p-10 md:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-700 group-hover:opacity-100 dark:opacity-45 dark:group-hover:opacity-60"
                style={{
                  backgroundImage: "url('/images/stitch/ba0390236d.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                {/* The trailing `!` is load-bearing. Google's Material Symbols
                    stylesheet is a plain <link> in <head>, so its
                    `.material-symbols-outlined` rule is *unlayered* — and
                    unlayered declarations beat anything in Tailwind's
                    `@layer utilities`, whatever the specificity or source order.
                    That rule pins the glyph to 24px. Without `!`, every icon
                    size class on this page is dead code that ships and does
                    nothing. Same trap CLAUDE.md flags for `display`, one
                    property further along. */}
                <MaterialIcon
                  name="shield"
                  className="mb-4 block text-3xl! text-primary"
                />
                <h3 className="mb-2 font-headline text-2xl font-bold text-white">
                  Safety-First Workflow & Compliance
                </h3>
                <p className="max-w-lg font-body text-white/90">
                  Every drone operation begins with a documented risk
                  assessment, coordinated with your HSE team and cleared through
                  full Permit to Work (PTW) approval. We arrive prepared for the
                  site — so capture stays safe and your operations keep running.
                </p>
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="glass-panel group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black p-8">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-700 group-hover:opacity-100 dark:opacity-45 dark:group-hover:opacity-60"
                style={{
                  backgroundImage: "url('/images/stitch/13ca39f31a.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                <MaterialIcon
                  name="factory"
                  className="mb-4 block text-3xl! text-primary"
                />
                <h3 className="mb-2 font-headline text-xl font-bold text-white">
                  Deep Industrial Site Awareness
                </h3>
                <p className="font-body text-sm text-white/90">
                  We know the logistics, the safety gates, and the operational
                  realities of heavy industry from the moment we mobilise.
                </p>
              </div>
            </div>
            {/* Small Feature 2 */}
            <div className="glass-panel group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black p-8">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-700 group-hover:opacity-100 dark:opacity-45 dark:group-hover:opacity-60"
                style={{
                  backgroundImage: "url('/images/stitch/a37924086a.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10">
                <MaterialIcon
                  name="photo_camera"
                  className="mb-4 block text-3xl! text-primary"
                />
                <h3 className="mb-2 font-headline text-xl font-bold text-white">
                  Integrated UAV + Ground Production
                </h3>
                <p className="font-body text-sm text-white/90">
                  Multi-angle coverage combining aerial perspectives with
                  detailed ground-level cinematography.
                </p>
              </div>
            </div>
            {/* Small Feature 3 */}
            <div className="glass-panel group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black p-8 md:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-700 group-hover:opacity-100 dark:opacity-45 dark:group-hover:opacity-60"
                style={{
                  backgroundImage: "url('/images/stitch/6d4182646b.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="relative z-10 flex w-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="mb-2 font-headline text-xl font-bold text-white">
                    Rapid Regional Deployment
                  </h3>
                  <p className="max-w-md font-body text-sm text-white/90">
                    A major fabrication yard or a short-notice site visit —
                    large-scale or ad-hoc, we mobilise across the region to
                    cover it.
                  </p>
                </div>
                <MaterialIcon
                  name="public"
                  className="shrink-0 text-5xl! text-primary opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — until now the page's only route to the enquiry form was the
          hero, so anyone who read to the end had to scroll back up. pt-32 is the
          system's closing-section rhythm; the bottom spacing comes from the
          footer's own mt-24, so adding pb here would double it. */}
      <section className="w-full bg-background pt-32">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-8 text-center">
          <SectionLabel className="mb-4 block">Next Step</SectionLabel>
          <h2 className="max-w-3xl font-headline text-4xl font-black md:text-5xl">
            Tell us about the site.
          </h2>
          <div className="mt-8 h-1 w-24 bg-primary" />
          <CtaButton
            href="/contact"
            arrow
            size="lg"
            className="mt-12 w-full sm:w-fit"
          >
            Get an Estimate
          </CtaButton>
        </div>
      </section>
    </>
  )
}
