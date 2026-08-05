import { CtaButton } from "@/components/site/cta-button"
import { SectionLabel } from "@/components/site/section-label"

/**
 * The closing band on every `/services/*` page.
 *
 * Three of the six pages used to end on a card grid with no route to the
 * enquiry form at all — on a site whose only measure of success is a contact
 * enquiry, the task path simply stopped. The other three ended differently
 * from each other (py-16, py-12, py-32) with three different button shapes.
 *
 * This is also the one centred block on a service page. Everything above it is
 * left-aligned and scannable; the change in axis is the signal that the
 * reading is over and there is one thing to do.
 *
 * `pt-32` with no bottom padding is the system's closing rhythm — the space
 * below comes from the footer's own `mt-24`, so adding `pb` here doubles it.
 */

type ServiceCtaProps = {
  title: string
  /** Optional supporting line under the heading. */
  lede?: string
  /** Button text. Defaults to the site-wide enquiry wording. */
  action?: string
  href?: string
  /** Optional fine print under the button. */
  footnote?: string
}

export function ServiceCta({
  title,
  lede,
  action = "Discuss Your Production",
  href = "/contact",
  footnote,
}: ServiceCtaProps) {
  return (
    <section className="w-full bg-background pt-32">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-8 text-center">
        <SectionLabel className="mb-4 block">Next Step</SectionLabel>
        <h2 className="max-w-3xl font-headline text-4xl leading-none font-black tracking-tight text-balance text-surface md:text-5xl">
          {title}
        </h2>
        {lede && (
          <p className="mt-6 max-w-xl font-body leading-relaxed text-industrial-grey">
            {lede}
          </p>
        )}
        <div className="mt-8 h-1 w-24 bg-primary" />
        <CtaButton href={href} arrow className="mt-12 w-full sm:w-fit">
          {action}
        </CtaButton>
        {footnote && (
          <p className="mt-6 font-label text-xs tracking-widest text-industrial-grey uppercase">
            {footnote}
          </p>
        )}
      </div>
    </section>
  )
}
