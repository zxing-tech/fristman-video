import { SectionLabel } from "@/components/site/section-label"
import { cn } from "@/lib/utils"

/**
 * The banded section every `/services/*` and `/our-work/*` page is built from.
 *
 * Three things live here rather than in twelve page files: the 1280 column with
 * its 32px gutter, the 96px section rhythm, and the heading block. The pages
 * previously ran five different content columns (one as narrow as 1088px from
 * `lg:px-24`) and four different section-heading sizes, so a heading was
 * sometimes barely larger than the card titles beneath it.
 *
 * Section headings are centred and sentence case, matching the homepage. They
 * were left-aligned and uppercase when this component was written; both went
 * on the owner's call, and the capitals also went for a reason worth keeping —
 * see The Scarce Capitals Rule in DESIGN.md.
 */

const bandClasses = {
  page: "bg-background",
  panel: "border-y border-surface/10 bg-dark-ui",
  graphite: "border-y border-surface/10 bg-graphite",
}

const headingClasses =
  "font-headline text-4xl leading-none font-black tracking-tight text-balance text-surface md:text-5xl"

type ServiceSectionProps = {
  /** Anchor id; adds scroll-mt to clear the fixed navbar. */
  id?: string
  /** Which step of the neutral ramp this band sits on. */
  band?: keyof typeof bandClasses
  eyebrow?: string
  title?: string
  lede?: string
  /**
   * Header alignment.
   *
   * `center` is the default and matches the homepage.
   *
   * `split` pairs the heading and the lede as two columns on one row from `lg`
   * — heading left, prose right — for sections whose supporting copy runs long
   * enough that centring it would cost more than the symmetry is worth.
   *
   * `lead` stacks the heading and its lede together in a five-column lead and
   * hands the remaining seven to the caller. Use it where the lede is the
   * section's opening statement rather than a caption for the grid below, so
   * the first paragraph reads under its own heading and the rest of the
   * content sits beside it instead of underneath.
   */
  align?: "center" | "split" | "lead"
  className?: string
  /** Optional: a band may be a heading and a lede with nothing under it. */
  children?: React.ReactNode
}

export function ServiceSection({
  id,
  band = "page",
  eyebrow,
  title,
  lede,
  align = "center",
  className,
  children,
}: ServiceSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full py-24",
        bandClasses[band],
        id && "scroll-mt-28",
        className
      )}
      id={id}
    >
      <div className="mx-auto max-w-[1280px] px-8">
        {align === "lead" ? (
          // One grid holds the header AND the children, which is what separates
          // this from `split`: the children are direct grid items, so the
          // caller places them (`lg:col-span-7` beside the lead, `lg:col-span-12`
          // to run a closing rule under both). Below `lg` it collapses to one
          // column and the source order is the reading order.
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              {eyebrow && (
                <SectionLabel className="mb-4 block">{eyebrow}</SectionLabel>
              )}
              {title && <h2 className={headingClasses}>{title}</h2>}
              <div className="mt-6 h-1 w-24 bg-primary" />
              {lede && (
                <p className="mt-8 max-w-[62ch] font-body leading-relaxed text-industrial-grey">
                  {lede}
                </p>
              )}
            </div>
            {children}
          </div>
        ) : (
          <>
            {title &&
              (align === "split" ? (
                // Heading left, lede right, paired on one row from `lg`.
                //
                // The eyebrow sits ABOVE the pair rather than inside the left
                // column, and that is what makes the alignment work: with only
                // the heading and the prose in the grid, `items-start` lines
                // the paragraph's first line up with the heading itself. Put
                // the eyebrow in the column instead and the prose aligns to the
                // eyebrow — the heading then starts lower than the text beside
                // it.
                //
                // The bar is wrapped WITH the heading, not placed in a grid row
                // of its own. Sharing a row with the paragraph made that row as
                // tall as four lines of prose, and the bar dropped to the
                // bottom of it, far below the heading it belongs to.
                // `mb-16` only when there is something to separate from. The
                // margin exists to hold the header off the content below it;
                // on a heading-and-lede band it was 64px of dead space against
                // the section's own 96px padding, so the band read
                // bottom-heavy and broke the rhythm this component enforces.
                <div className={cn(children && "mb-16")}>
                  {eyebrow && (
                    <SectionLabel className="mb-4 block">
                      {eyebrow}
                    </SectionLabel>
                  )}
                  <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-x-16">
                    <div>
                      {/* Headline role per DESIGN.md: 36px to 48px, width normal. */}
                      <h2 className={headingClasses}>{title}</h2>
                      <div className="mt-6 h-1 w-24 bg-primary" />
                    </div>
                    {lede && (
                      // Left aligned, and capped in characters rather than
                      // pixels: 16px prose across the full heading width ran to
                      // 84 characters a line, past the point where the eye
                      // reliably finds the next one.
                      <p className="max-w-[62ch] font-body leading-relaxed text-industrial-grey">
                        {lede}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                // Centred, matching the homepage, where every section header is
                // centred by the owner's call. The grids and lists below stay
                // left aligned either way — aligning a heading announces a
                // section; doing the same to the content under it costs
                // scanability.
                <div
                  className={cn(
                    "flex flex-col items-center text-center",
                    children && "mb-16"
                  )}
                >
                  {eyebrow && (
                    <SectionLabel className="mb-4 block">
                      {eyebrow}
                    </SectionLabel>
                  )}
                  <h2 className={cn(headingClasses, "max-w-3xl")}>{title}</h2>
                  {/* The bar closes the heading, so it sits against it. Below
                      the lede it floated between two groups and belonged to
                      neither. */}
                  <div className="mt-6 h-1 w-24 bg-primary" />
                  {lede && (
                    <p className="mt-6 max-w-[62ch] font-body leading-relaxed text-industrial-grey">
                      {lede}
                    </p>
                  )}
                </div>
              ))}
            {children}
          </>
        )}
      </div>
    </section>
  )
}
