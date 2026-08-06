import ReactDOM from "react-dom"

import { MaterialIcon } from "@/components/site/material-icon"
import { SectionLabel } from "@/components/site/section-label"
import { CtaButton } from "@/components/site/cta-button"
import { HeroVideo } from "@/components/site/hero-video"
import { PhotoCard } from "@/components/site/photo-card"
import { ServiceCard } from "@/components/site/service-card"
import { sectors } from "@/lib/data/sectors"
import { services } from "@/lib/data/services"
// Shared with every /services/* hero, so the two can never drift onto
// different footage.
import { HERO_POSTER, HERO_TEXT_SHADOW, HERO_VIDEO } from "@/lib/hero-media"
import { pageMeta } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMeta({
  description:
    "Industrial drone cinematography for Oil & Gas and heavy industry. Cinematic UAV, timelapse and ground-based video documentation across Malaysia & Southeast Asia.",
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
  { src: "/images/clients/clientele-15.png", alt: "Video Retale" },
  { src: "/images/clients/clientele-16.png", alt: "Chow Tai Fook" },
  // Added 2026-08-05 from the owner's `public/new-logo-client/` drop. These five
  // are the heavy-industry end of the roster — the names PRODUCT.md's primary
  // buyer (a project manager in Oil & Gas) would actually recognise.
  //
  // They arrived as full-colour brand artwork at 600-2000px, so each was
  // converted to the wall's convention rather than dropped in raw: greyscaled by
  // luminance, trimmed to its own bounding box, tone-mapped so the ink lands on
  // the set's mid-grey (the existing logos measure 129-158; these land 130-138),
  // then centred on a transparent canvas. Without the tone step Sapura's navy
  // would have come in at 48 against Transwater's 131 and the row would have
  // read as a set of mismatched weights.
  //
  // Canvas is 360x240 — twice the legacy 180x120, same aspect, so `object-contain`
  // behaves identically. The originals had the resolution to spare and the row
  // renders at `h-24` (96px), which the legacy files only cover at 1.25x. The
  // older 28 are unchanged and stay slightly softer; re-mastering them needs
  // source artwork this repo does not have.
  { src: "/images/clients/clientele-17.png", alt: "MMHE" },
  { src: "/images/clients/clientele-18.png", alt: "Sapura" },
  { src: "/images/clients/clientele-19.png", alt: "Transwater" },
  // Heerema shipped as a portrait lock-up: a solid orange square holding the
  // roundel, with the wordmark on transparency beneath it. Greyscaled, that
  // square becomes a filled grey block — and `dark:invert` turns it into a
  // glowing light block in a row of transparent wordmarks. The wordmark alone
  // is cropped out instead (the orange ends at y=598 in the source; the crop
  // starts at 605 to clear its edge).
  { src: "/images/clients/clientele-20.png", alt: "Heerema" },
  // JPS is a mark with no wordmark, and its five waves are separated by hue
  // rather than by value — greyscaled they collapse into one near-uniform
  // ribbon. It was the only logo on this wall that could not say its own name;
  // the caption under every mark now says it for all of them. A lock-up version
  // with the lettering would still read better. See the note in ATTRIBUTIONS.md.
  { src: "/images/clients/clientele-21.png", alt: "JPS" },
]

// The three track-record figures. Owner-confirmed 2026-08-04 and cleared to
// publish — see PRODUCT.md `## Evidence on Hand`.
const metrics = [
  { value: "25+ Years", label: "Corporate Video" },
  { value: "15+ Years", label: "Oil & Gas Sector" },
  { value: "500+ Projects", label: "Across Diverse Industries" },
]

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
//
// Every mark is captioned with its client's name. Greyscaling is what forces it:
// JPS is a wordmark-less roundel whose five waves separate by hue and collapse
// into one grey ribbon, arc and BTL are initials, and Sapura, MMHE and Heerema
// are names a visitor outside Oil & Gas cannot read off a monochrome lock-up. A
// roster only counts as evidence if the reader can name who is on it, and the
// primary buyer in PRODUCT.md is scanning for names they recognise, not shapes.
function LogoRow({
  label,
  logos,
  direction,
}: {
  label: string
  logos: { src: string; alt: string }[]
  direction: "left" | "right"
}) {
  // The cell is what the track now scrolls, not the bare image: a fixed-width
  // column holding the mark above its name. Fixed width because the logos all
  // share one canvas ratio and so render at one width (96px at h-16, 144px at
  // h-24) — the name is the only thing with a variable measure, and a column
  // that resizes per client would make the row read as debris. 128/160px holds
  // the longest single word on the roster ("COMMUNICATIONS", ~112px at 12px)
  // without hyphenating it.
  //
  // `self-start` overrides the track's `align-items: center`. Without it a
  // two-line caption re-centres its whole cell and drops that logo a few pixels
  // below its neighbours; top-aligned, the marks stay on one line whatever the
  // captions below them do.
  const cellClass =
    "group flex w-32 shrink-0 flex-col items-center gap-3 self-start md:w-40 md:gap-4"

  const logoClass =
    "h-16 md:h-24 w-auto object-contain opacity-90 group-hover:opacity-100 dark:invert dark:opacity-75 dark:group-hover:opacity-100 transition-opacity duration-300"

  // Label role at its documented 12px. Tracking drops to 0.05em rather than the
  // role's 0.1em for the same reason button text does: these hold up to three
  // words, and 0.1em pushes "Toastmasters International" onto a third line.
  const nameClass =
    "text-center font-label text-xs leading-tight font-bold tracking-wider text-balance text-industrial-grey uppercase transition-colors duration-300 group-hover:text-surface"

  return (
    // The category chip stacks above the row on narrow screens. Inline, it ate
    // 104px of a 375px viewport and left the marquee a ~190px window showing one
    // logo at a time — a peephole onto the page's only real proof. Below `md`
    // the logos get the full column and the chip becomes a heading for them.
    //
    // Centred rather than left-aligned there, because the row it heads has no
    // left edge to align to: the marquee runs full-bleed under a mask that fades
    // both ends, so a flush-left chip pointed at a logo half-dissolved by the
    // mask. Centred, it reads as the row's title — matching the section heading
    // above it, which is centred too. `items-center` covers the desktop row as
    // well, where the cross axis is vertical.
    <div className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
      {/* Stays the Label role's 12px at every size. It ran at 11px to fit a
          104px pill; the pill is the thing that should give, not the type — a
          role defined as "12px, 700, 0.1em" has nowhere below it to go. */}
      <span className="w-[124px] shrink-0 rounded-full bg-primary px-5 py-2.5 text-center font-label text-xs font-bold tracking-wider text-white uppercase md:w-[150px] md:px-8">
        {label}
      </span>
      {/* The explicit width is required, not belt-and-braces: the wrapper aligns
          its children on the cross axis rather than stretching them, so a flex
          child left to itself would shrink to its content width and the track
          would have nothing to scroll across.

          Below `md` the row is the one thing on this page that breaks the 1280
          column, and it earns it: giving the gutter back buys 48px of window on
          a 390px screen, which is half a logo. Nothing is lost at the edge
          either — `.marquee`'s own mask already fades the track to transparent
          at 8%, so the row still ends softly rather than being cut by the
          viewport. The negative margin has to be paired with an explicit width:
          `w-full` resolves against the padded content box and would pin the row
          back to 342px whatever the margins do. */}
      <div className="marquee -mx-6 w-[calc(100%+3rem)] md:mx-0 md:w-full md:flex-1">
        <div
          className={cn(
            "marquee-track hover:[animation-play-state:paused]",
            direction === "left"
              ? "animate-marquee-left"
              : "animate-marquee-right"
          )}
        >
          {logos.map((logo) => (
            <figure key={logo.src} className={cellClass}>
              {/* The caption is the accessible name now, so the mark itself is
                  decorative — alt text here would announce every client twice. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt=""
                width={180}
                height={120}
                loading="lazy"
                decoding="async"
                className={logoClass}
              />
              <figcaption className={nameClass}>{logo.alt}</figcaption>
            </figure>
          ))}
          {/* Second pass exists only so the track can loop seamlessly at -50%.
              Hidden from assistive tech so the roster is not read out twice. */}
          {logos.map((logo) => (
            <figure
              key={`${logo.src}-loop`}
              aria-hidden="true"
              className={cellClass}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt=""
                width={180}
                height={120}
                loading="lazy"
                decoding="async"
                className={logoClass}
              />
              <figcaption className={nameClass}>{logo.alt}</figcaption>
            </figure>
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
              on the current clip.

              Tried at 8% on 2026-08-05 to give the picture back some light, and
              put back: this flat layer is what holds the eyebrow's backdrop
              down. Signal Red at 12px tops out at 3.95:1 on pure black, so it
              never clears AA here and the only lever is keeping what sits
              behind it dark. Measured on the clip's brightest frame, the
              eyebrow reads 2.55:1 at 15% and drops to 2.42:1 at 8% — already
              short, and 8% made it shorter. The light was won back in the
              `.hero-overlay` ramp instead, which is transparent across the top
              70% of the hero and so cannot touch any of this copy. */}
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
        <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 md:px-8">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <SectionLabel withLine className={HERO_TEXT_SHADOW}>
              Industrial Video Data
            </SectionLabel>
            {/* Four steps, not two. `text-4xl md:text-7xl` jumped 36px straight
                to 72px at the md boundary, so a 768px tablet was handed the
                1440px display size: measured 317px of headline over four lines,
                a third of a 1024px-tall viewport spent on one sentence before
                the paragraph or either button. The intermediate steps put 768px
                at 60px and 640px at 48px, which is the ramp the Display role's
                own clamp implies. */}
            <h1
              className={cn(
                "font-headline text-4xl leading-[1.1] font-black tracking-tight text-white font-stretch-semi-condensed sm:text-5xl md:text-6xl lg:text-7xl",
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
      <section className="relative w-full overflow-hidden border-y border-surface/10 bg-dark-ui py-16 md:py-24">
        <div className="mx-auto mb-10 max-w-[1280px] px-6 text-center md:mb-12 md:px-8">
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
        {/* The rows separate more on phone than on desktop, not less: the chip
            sits above its row there instead of beside it, so 32px between
            groups would be barely more than the 12px inside one. */}
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-6 md:gap-8 md:px-8">
          <LogoRow label="Agencies" logos={agencyLogos} direction="left" />
          <LogoRow label="Clientele" logos={clienteleLogos} direction="right" />
        </div>
      </section>

      {/* Services Overview — landing target for the removed /services hub (see next.config.ts).
          scroll-mt clears the fixed navbar when arriving via the #services anchor. */}
      <section
        id="services"
        className="relative w-full scroll-mt-28 bg-background py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          {/* Every section header on this page is centred, the closing CTA
              included. Owner's call, and it is applied uniformly — the section
              that used to sit flush left while its three neighbours centred was
              the one thing here that read as an accident. */}
          <div className="mb-12 flex flex-col items-center text-center md:mb-16">
            <SectionLabel className="mb-4 block">
              Our Core Services
            </SectionLabel>
            <h2 className="font-headline text-4xl font-black md:text-5xl">
              Aerial and Ground Video Solutions
            </h2>
            <div className="mt-6 h-1 w-24 bg-primary md:mt-8" />
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
        className="w-full scroll-mt-28 border-y border-surface/10 bg-graphite py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="mb-12 flex flex-col items-center text-center md:mb-16">
            <SectionLabel className="mb-4 block">Where We Operate</SectionLabel>
            <h2 className="font-headline text-4xl font-black md:text-5xl">
              Sectors We Serve
            </h2>
            <p className="mt-6 max-w-2xl font-body text-industrial-grey">
              We work where scale, safety and site access matter most. Every
              deployment is planned around live operations rather than dropped
              on top of them.
            </p>
            <div className="mt-6 h-1 w-24 bg-primary md:mt-8" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <div
                key={sector.slug}
                className="glass-panel group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-8"
              >
                {/* On phone the glyph and the sector name share a line; from
                    `md` the glyph goes back above the name.

                    In one column the stacked form spent 72px per card on a
                    48px ring and the air under it, and four cards ran the
                    section to 2902px — 3.4 viewports for a taxonomy the
                    visitor scans rather than reads. Side by side the ring
                    becomes what it actually is at that width: the marker on a
                    labelled row. In a narrow multi-column grid it has to go
                    back on top, because the name alone needs the full column.

                    `md:block` rather than a second flex: the children carry
                    their own bottom margins from `md` up, and `display: block`
                    is what lets those margins do the stacking. */}
                <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
                  {/* 44px inline, 48px stacked — same reasoning as the service
                      cards, and the same value, so the two inline rows on this
                      page mark themselves identically. */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-surface/20 transition-colors group-hover:border-primary md:mb-6 md:h-12 md:w-12">
                    <MaterialIcon
                      name={sector.icon}
                      className="text-2xl text-surface transition-all group-hover:text-primary group-hover:[font-variation-settings:'FILL'_1]"
                    />
                  </div>
                  <h3 className="font-headline text-xl font-bold tracking-wide text-surface uppercase md:mb-3">
                    {sector.title}
                  </h3>
                </div>
                <p className="mb-5 font-body text-sm leading-relaxed text-industrial-grey md:mb-6">
                  {sector.summary}
                </p>
                <ul className="mt-auto space-y-2 border-t border-surface/10 pt-5 md:pt-6">
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
          <div className="glass-panel mt-12 flex flex-col gap-8 rounded-2xl p-6 md:mt-16 md:gap-10 md:p-10 lg:flex-row lg:items-center">
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
      <section className="relative w-full border-y border-surface/10 bg-dark-ui py-16 md:py-24">
        {/* Abstract background accent */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="mb-12 flex flex-col items-center text-center md:mb-16">
            <SectionLabel className="mb-4 block">The Advantage</SectionLabel>
            <h2 className="font-headline text-4xl font-black md:text-5xl">
              Why Firstman Videos
            </h2>
            <div className="mt-6 h-1 w-24 bg-primary md:mt-8" />
          </div>
          {/* Metrics Bar.

              A grid rather than `flex justify-around` with hand-placed 1px
              divider divs. `justify-around` distributes leftover space, so the
              three columns were never equal and the dividers landed wherever
              the copy left room; a grid guarantees thirds and `divide-x` draws
              the rules between real cells. That also lets the phone rendition
              be the same markup rotated — `divide-y` instead of `divide-x` —
              rather than three centred blocks floating in 40px of gap with no
              separation between them at all.

              The size ramp is set by the longest value, not by taste. Equal
              thirds mean the cell width is known at every step, and
              "500+ Projects" in Archivo 900 measures 265px at 36px, 221px at
              30px, 177px at 24px. Against the cell's own inner width — 181px at
              768, 266px at 1024, 341px at 1280 — only one size fits each band,
              which is why the ramp dips at `md` rather than climbing evenly.

              Before this change all THREE values broke to two lines the moment
              `md:flex-row` fired at 768px, so a tablet was handed "25+ /
              Years". 36px does not return until `xl`; at `lg` it left exactly
              1px of headroom, which is not headroom. */}
          <div className="glass-panel mb-10 grid w-full grid-cols-1 divide-y divide-surface/10 rounded-xl md:mb-12 md:grid-cols-3 md:divide-x md:divide-y-0">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center px-4 py-5 text-center md:py-8 lg:items-start lg:px-6 lg:text-left xl:px-8"
              >
                <span className="font-headline text-3xl font-black text-primary md:text-2xl lg:text-3xl xl:text-4xl">
                  {metric.value}
                </span>
                {/* Label role per DESIGN.md: 12px, 0.1em. These ran at 10px/0.2em,
                    which paired a 36px value with a caption 3.6x smaller and pushed
                    the tracking past the point where the words read as words. */}
                <span className="mt-1 font-label text-xs font-bold tracking-widest text-surface/60 uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
          {/* Row height is governed here and nowhere else. The children used to
              carry their own min-h-[250px]/min-h-[200px], which always won over
              the grid's auto-rows and left two rules fighting over one value.

              Three columns wait for `lg`. At `md` the bento went straight from
              one column to three, and with two cards spanning two of them the
              other two were left a third of a tablet: measured 214px wide at
              768px, where a 20px two-line title and its icon covered most of
              the frame and the photograph showed as a strip above the scrim.
              These are photo cards — a card whose picture is not legible has
              stopped being one.

              At two columns the spanning cards go full-bleed across the row and
              the pair between them splits it, which is the same alternating
              rhythm the three-column version has, at a width that still holds a
              picture: 308px at 768px, 380px at 1024px-minus. The `md:col-span-2`
              on the two wide cards needs no change — two of two is a full row,
              two of three is the desktop bento. */}
          <div className="grid auto-rows-[minmax(250px,auto)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* All four run on the shared PhotoCard, the same card the
                /services pages use: title alone at rest, description revealed
                on hover. One bento where three cards opened and a fourth did
                not would read as a bug, so the "Rapid Regional Deployment"
                card gave up its aside glyph and takes the marker position the
                other three use.

                The four photographs are licensed Unsplash stock, replacing the
                512px Google Stitch AI renders that backed these cards — see
                PRODUCT.md `## Evidence on Hand` for why an AI render must not
                sit where project documentation is implied. They are stock, and
                the alt text on each describes only what is in the frame.

                PhotoCard's scrim stops were tuned against a different set, so
                white-on-photo contrast was re-measured for these rather than
                inherited: brightest pixel under each text rect, resting and
                hovered. Everything clears its floor, the tightest at 1.35x on
                the hovered title over `why-site-awareness.jpg` — much the
                brightest of the four. Figures and method are in
                public/images/unsplash/CREDITS.md; swap that image for anything
                brighter and the measurement has to be run again. */}
            <PhotoCard
              alt="An oil refinery at dusk, distillation columns and a lit flare stack silhouetted above a river"
              body="Every drone operation begins with a documented risk assessment, coordinated with your HSE team and cleared through full Permit to Work (PTW) approval. We arrive prepared for the site — so capture stays safe and your operations keep running."
              className="md:col-span-2"
              icon="shield"
              image="/images/unsplash/why-safety-permit.jpg"
              size="lg"
              title="Safety-First Workflow & Compliance"
            />
            <PhotoCard
              alt="Top-down aerial view of pipework, ducting and cooling fans on an industrial plant roof"
              body="We know the logistics, the safety gates, and the operational realities of heavy industry from the moment we mobilise."
              icon="factory"
              image="/images/unsplash/why-site-awareness.jpg"
              title="Deep Industrial Site Awareness"
            />
            <PhotoCard
              alt="A quadcopter drone in flight, silhouetted against an orange dusk sky above distant cranes"
              body="Multi-angle coverage combining aerial perspectives with detailed ground-level cinematography."
              icon="photo_camera"
              image="/images/unsplash/why-uav-ground.jpg"
              title="Integrated UAV + Ground Production"
            />
            <PhotoCard
              alt="Four large cylindrical storage tanks on a coastal terminal, seen across open water"
              body="A major fabrication yard or a short-notice site visit — large-scale or ad-hoc, we mobilise across the region to cover it."
              className="md:col-span-2"
              icon="public"
              image="/images/unsplash/why-regional-deployment.jpg"
              title="Rapid Regional Deployment"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA — until now the page's only route to the enquiry form was the
          hero, so anyone who read to the end had to scroll back up. pt-32 is the
          system's closing-section rhythm; the bottom spacing comes from the
          footer's own mt-24, so adding pb here would double it. */}
      <section className="w-full bg-background pt-24 md:pt-32">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center md:px-8">
          <SectionLabel className="mb-4 block">Next Step</SectionLabel>
          <h2 className="max-w-3xl font-headline text-4xl font-black md:text-5xl">
            Tell us about the site.
          </h2>
          <div className="mt-6 h-1 w-24 bg-primary md:mt-8" />
          <CtaButton
            href="/contact"
            arrow
            size="lg"
            className="mt-10 w-full sm:w-fit md:mt-12"
          >
            Get an Estimate
          </CtaButton>
        </div>
      </section>
    </>
  )
}
