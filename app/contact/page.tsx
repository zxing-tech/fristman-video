import Link from "next/link"

import { JsonLd } from "@/components/seo/json-ld"
import { MaterialIcon } from "@/components/site/material-icon"
import { Readout } from "@/components/site/readout"
import {
  OFFICE_READOUT,
  REGISTRATION,
  SITE,
  breadcrumbSchema,
  graph,
  pageMeta,
} from "@/lib/seo"

import { ConsultationForm } from "./consultation-form"

export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact Firstman Videos for industrial drone cinematography in Malaysia and Southeast Asia. Request a consultation or quote - we reply within 24 business hours.",
  path: "/contact",
})

const schema = graph(
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ])
)

/**
 * The fallback routes, for the visitor who will not fill a form. One list, not
 * a card apiece: these are four short strings each, and cards spent 616px of
 * column on them while nesting a box inside the box beside the form.
 *
 * Every number here is a `tel:` link. They were plain text on a
 * `cursor-pointer` div — a card that looked clickable, was not, and sat next to
 * others that were.
 */
const channels: {
  icon: string
  label: string
  values: { text: string; href?: string; external?: boolean }[]
}[] = [
  // The office landline went on 2026-08-06 at the owner's instruction. The
  // first mobile below is the one JSON-LD publishes, so it reads from `SITE`
  // rather than being typed again — the number a search engine serves and the
  // number on this page cannot drift apart.
  {
    icon: "smartphone",
    label: "Mobile",
    values: [
      { text: SITE.telephoneDisplay, href: `tel:${SITE.telephone}` },
      { text: "+6012 327 6737", href: "tel:+60123276737" },
    ],
  },
  {
    icon: "mail",
    label: "Email",
    values: [{ text: SITE.email, href: `mailto:${SITE.email}` }],
  },
  {
    icon: "share",
    label: "Facebook",
    values: [{ text: "firstmanvideos", href: SITE.facebook, external: true }],
  },
]

/**
 * `/contact` was the last page still carrying its own frame, and the only one
 * where the structure argued against the page's own job. PRODUCT.md is explicit
 * that the site has exactly one measure of success — an enquiry through this
 * form — and the layout put five groups of fallback content in front of it.
 *
 * Measured before the rebuild, on a 390x844 phone: the first form field sat at
 * y=1323, so a visitor scrolled 1.6 screens of badge, heading, lede, four
 * contact cards, an address panel and an SLA note before reaching the thing
 * they came to do. On desktop the form had no heading at all — it opened cold
 * on "Full Name" — so at a squint the loudest element on the page was
 * "GET IN TOUCH" and the form read as a grey field of boxes.
 *
 * Three structural changes answer that:
 *
 * 1. **The form leads.** It is first in the DOM and sits in the left column, so
 *    reading order and focus order agree and the breadcrumb, heading, lede and
 *    form panel all share one left edge. The old split put the heading left and
 *    the form right, which made the eye jump the column to start the task.
 * 2. **The fallbacks became a rail, not a second page.** Four channel cards, an
 *    address card and an SLA note are now hairline-separated blocks on the band
 *    beside the form. One panel on the page — the form — so there is a figure
 *    and a ground rather than two competing boxes.
 * 3. **No footage hero.** Same call, and the same reason, as the `/our-work`
 *    hub: a 38rem video band before the first field would push the task past
 *    the fold on every laptop. The compact header carries the Signal Red wash
 *    instead, which is what that hub already does.
 *
 * The page-filling background layer went with it. It was `stitch/d3edef792e.jpg`
 * — a 512px AI render (PRODUCT.md `## Evidence on Hand`) — fixed to the
 * viewport, blurred 4px, at 30% opacity under a scrim that ran to the page
 * colour, plus a dot grid drawn in hardcoded `rgba(255,255,255,0.05)`. It
 * rendered as flat black in dark and as nothing at all in light, where white
 * dots on a white page are invisible. It cost an image request to deliver a
 * blank field.
 */
export default function ContactPage() {
  return (
    <main className="relative flex flex-grow flex-col">
      <JsonLd data={schema} />

      {/* Compact header. `pt-28` still clears the floating navbar (a 16px inset
          plus a ~56px pill) — the same value `ServiceHero` uses on phones, and
          the 40px it and the tighter bottom give back are what put the form's
          heading and its first field inside the first viewport on an 844px
          screen. The band closes with its own padding rather than the section
          below adding more, so the header and the form read as one field
          instead of two stacked sections. */}
      <header className="relative w-full overflow-hidden bg-background pt-28 pb-10 md:pt-32 md:pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary/10 to-transparent"
        />

        {/* 24px opening to 32px at `md`, per DESIGN.md's Layout note. This page
            was the last one still pinned at 32px on a phone, and it is the one
            that could least afford it: the form panel sits inside this column
            and then adds its own padding, so every pixel of gutter comes off
            the field width twice over. At 360px the panel measured 281px and a
            select had 171px of room for a 26-character option. */}
        <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-8">
          {/* Breadcrumb and readout share a row and read as a status bar — the
              same pattern as `ServiceHero`, in the flipping tokens this band
              needs. It was a hand-rolled `<nav>` of spans with a "/" divider,
              the one breadcrumb on the site that was not an ordered list. */}
          <div className="mb-8 flex items-center justify-between gap-6 md:mb-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                <li className="flex items-center gap-x-2">
                  {/* 24px hit area — see service-hero.tsx for the measurement. */}
                  <Link
                    className="-my-1 py-1 transition-colors hover:text-surface"
                    href="/"
                  >
                    Home
                  </Link>
                  <MaterialIcon name="chevron_right" className="text-base!" />
                </li>
                <li aria-current="page" className="text-primary">
                  Contact
                </li>
              </ol>
            </nav>
            {/* Grey, not the Signal Red `ServiceHero` gives its readout. That
                one sits over a black scrim where red is the only colour with
                any separation; here the band flips, and red at 10px measures
                3.95:1 on the dark page — under AA, for a string that is neither
                active nor clickable. Industrial Grey measures 5.29:1. */}
            <Readout className="hidden shrink-0 text-industrial-grey md:block">
              {OFFICE_READOUT}
            </Readout>
          </div>

          {/* Capped at the form column's width so the heading block and the
              panel below it share a measure as well as a left edge. */}
          <div className="max-w-2xl">
            {/* `rounded-2xl` until `sm`. This label runs 47 characters, and at
                12px tracked to 0.1em it wraps to two lines on a 390px screen —
                measured 46px tall against a 9999px radius, which reads as a
                lozenge rather than a chip. Same correction, same reason, as the
                data-handling chips on /about. */}
            <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-1.5 sm:rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-label text-xs font-bold tracking-widest text-surface uppercase">
                Priority consultation slots available this month
              </span>
            </div>

            {/* Display role, sentence case. It was `uppercase` with "Touch" in a
                hand-rolled red gradient — against The Scarce Capitals Rule, and
                the only gradient text on the site outside `.text-gradient`,
                which DESIGN.md restricts to headings over dark photography. */}
            {/* `lg:text-7xl` was missing. DESIGN.md scopes the Display role at
                36px to 72px and every one of the twelve detail heroes runs the
                full ramp; this h1 stopped at `md:text-6xl`, so it measured 60px
                on a 1440 screen where its siblings measure 72. Condensed to
                87.5%, "Get in touch" still sets on one line inside the 672px
                lead column. */}
            {/* The `sm` step closes a jump from 36px straight to 60px at 768px,
                matching the 36/48/60/72 ramp the homepage, ServiceHero and both
                hub h1s now run. */}
            <h1 className="mt-6 font-headline text-4xl leading-[1.1] font-black tracking-tight text-balance text-surface font-stretch-semi-condensed sm:text-5xl md:text-6xl lg:text-7xl">
              Get in touch
            </h1>

            <div className="mt-6 h-1 w-24 bg-primary" />

            <p className="mt-8 max-w-[62ch] font-body text-lg leading-relaxed text-pretty text-industrial-grey">
              Request a consultation, quote or site assessment. Our specialized
              industrial cinematography team typically responds within{" "}
              <strong className="font-bold text-surface">
                24 business hours
              </strong>
              .
            </p>

            {/* Phone-first visitors, on phones only. Below `lg` the rail sits
                after the form, so the two live channels get a one-tap route
                here rather than a scroll past every field. On desktop the rail
                is already on screen beside the form and this would duplicate
                it. */}
            <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
              <a
                className="group flex items-center gap-2 rounded-full border border-surface/25 bg-surface/5 px-5 py-2.5 font-label text-xs font-bold tracking-wider text-surface uppercase transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                href={`tel:${SITE.telephone}`}
              >
                <MaterialIcon name="call" fill className="text-base!" />
                Call us
              </a>
              <a
                className="group flex items-center gap-2 rounded-full border border-surface/25 bg-surface/5 px-5 py-2.5 font-label text-xs font-bold tracking-wider text-surface uppercase transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                href={`mailto:${SITE.email}`}
              >
                <MaterialIcon name="mail" fill className="text-base!" />
                Email us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* The enquiry band. No top padding — the header's own bottom padding is
          the gap — and no bottom padding either: the space below comes from the
          footer's `mt-24`, so adding `pb` here doubles it. That is the closing
          rhythm `ServiceCta` documents, and it was rendering 192px of void
          under the form before. */}
      <section className="relative w-full bg-background">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
            {/* The one panel on the page. The form is the object you act on;
                everything beside it is reference, so only this carries a fill,
                a border and a radius. */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10">
                <ConsultationForm />
              </div>
            </div>

            {/* Reference rail. `self-start` is what lets it stick — a grid item
                stretches to the row height by default, and a stretched element
                has nothing to stick within. It is shorter than the form, which
                is the case where sticky earns its keep: the channels stay on
                screen while the fields scroll. */}
            {/* `lg:pt-10` is an optical correction, not spacing: it matches the
                panel's own `md:p-10` so the rail's first heading sits level
                with "Consultation request" rather than with the panel's edge,
                which is 40px higher and reads as a misalignment. */}
            <aside className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start lg:pt-10">
              <section>
                <h2 className="font-headline text-base font-bold text-surface">
                  Direct channels
                </h2>
                <ul className="mt-4">
                  {channels.map((channel) => (
                    <li
                      className="flex items-start gap-4 border-t border-surface/10 py-4"
                      key={channel.label}
                    >
                      <MaterialIcon
                        name={channel.icon}
                        className="mt-0.5 shrink-0 text-xl! text-primary"
                      />
                      <div className="min-w-0">
                        <span className="block font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                          {channel.label}
                        </span>
                        {/* `py-1` takes each link from 20px tall to 28px, over
                            the 24px floor in WCAG 2.5.8 — the same correction
                            the breadcrumb crumbs carry. `w-fit` keeps the hit
                            area on the number itself: a `block` link would span
                            the rail, and clicking empty space beside a phone
                            number to start a call is a surprise, not a bigger
                            target. The container's own spacing drops to `mt-0.5`
                            because the padding now supplies the rhythm. */}
                        <div className="mt-0.5">
                          {/* `tabular-nums`: three phone numbers sit stacked in
                              this rail and proportional digits set them at three
                              different widths. Lining them up is what the
                              feature is for, and instrument readouts are the
                              register this whole system is written in. */}
                          {channel.values.map((value) => (
                            <a
                              className="block w-fit py-1 font-body text-sm font-medium break-words text-surface tabular-nums transition-colors hover:text-primary"
                              href={value.href}
                              key={value.text}
                              rel={
                                value.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              target={value.external ? "_blank" : undefined}
                            >
                              {value.text}
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="font-headline text-base font-bold text-surface">
                  Registered office
                </h2>
                <div className="mt-4 flex items-start gap-4 border-t border-surface/10 pt-4">
                  <MaterialIcon
                    name="location_on"
                    className="mt-0.5 shrink-0 text-xl! text-primary"
                  />
                  <div>
                    <p className="font-body text-sm font-bold text-surface">
                      {SITE.legalName}{" "}
                      <span className="font-medium text-industrial-grey tabular-nums">
                        Co Reg: {REGISTRATION}
                      </span>
                    </p>
                    {/* Broken where the owner breaks it, not where the measure
                        runs out: the unit holds its own line, the street and
                        neighbourhood share one, and the postcode leads the city
                        the way a Malaysian address is written. An address is
                        read as a block to be copied, not as prose. */}
                    <p className="mt-1 font-body text-sm leading-relaxed text-pretty text-industrial-grey">
                      {SITE.address.unit},
                      <br />
                      {SITE.address.street}, {SITE.address.district},
                      <br />
                      {SITE.address.postalCode} {SITE.address.locality},{" "}
                      {SITE.address.region}, Malaysia
                    </p>
                  </div>
                </div>
              </section>

              {/* The 2px Signal Red left border went. A coloured side tab over
                  1px is the one border the craft floor refuses, and the block
                  already reads as its own by sitting under its own heading. */}
              <section className="mt-10">
                <h2 className="flex items-center gap-2 font-headline text-base font-bold text-surface">
                  <MaterialIcon
                    name="timer"
                    fill
                    className="text-lg! text-primary"
                  />
                  Response SLA
                </h2>
                <p className="mt-4 border-t border-surface/10 pt-4 font-body text-sm leading-relaxed text-pretty text-industrial-grey">
                  Enquiries are securely routed to our Business Development
                  team. A confirmation copy will be sent to your provided email
                  address immediately.
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
