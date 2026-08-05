import { Readout } from "@/components/site/readout"
import { cn } from "@/lib/utils"

/**
 * The status bar under a case-study hero: client, sector, service, location,
 * year, access. The facts a Project Manager reads first (PRODUCT.md `## Users`,
 * buyer 1) and the ones the six pages used to bury — four of them carried no
 * structured metadata at all, and the two that did disagreed on shape:
 * `petrofac` ran a five-cell glass card that squeezed "Safety and Induction
 * Videos" into a 230px column at `md`, `mahb` ran a four-row label/value list
 * inside a sidebar panel two thirds of the way down the page.
 *
 * Deliberately NOT a card. The band and the label/value pairing do the
 * grouping; wrapping six facts in a glass panel would add a frame around
 * something that is already one row of one thing.
 *
 * `auto-fit` rather than breakpoint columns. Cell counts differ per page (three
 * to six) and a fixed `lg:grid-cols-6` leaves a hole on a five-cell page;
 * `auto-fit` collapses the empty tracks instead, so the last row always fills.
 *
 * The floor is deliberately wide enough that a phone gets ONE column, not two.
 * At 390px the column is 326px, and two 10rem tracks plus the 2.5rem gap need
 * 360px, so the strip stacks. That is the intent: the longest values here are
 * "Safety and Induction Videos", "UAV / Site-Aware Systems" and "Strategic
 * Fabrication Yard & Marine Terminal", and at 147px a column they break to
 * three, four and six lines. A stacked spec sheet is taller but scans; a 2-up
 * one at this width is a ragged block. Lower the floor and both change.
 */

export type CaseSpec = {
  label: string
  value: string
  /**
   * Renders the value as a readout. Genuinely identifying content only —
   * reference codes and coordinates. A client name in monospace is a costume.
   */
  mono?: boolean
  /** Signal Red, for a value that states a restriction or a live status. */
  accent?: boolean
}

export function CaseSpecs({ items }: { items: CaseSpec[] }) {
  return (
    <section className="w-full border-b border-surface/10 bg-dark-ui py-8">
      <div className="mx-auto max-w-[1280px] px-8">
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-x-10 gap-y-8">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="mb-2 font-label text-xs font-bold tracking-widest text-industrial-grey uppercase">
                {item.label}
              </dt>
              {/* `tabular-nums` because this row is a spec sheet: years,
                  quarters and reference codes read as data, and lining figures
                  of equal width keep a column of them from wobbling. Archivo
                  ships proportional figures by default, so "2018" and "2024"
                  set to different widths without it. */}
              {item.mono ? (
                // A reference code is a Readout, not a bold body value — and
                // the role tops out at 12px, which is what `md` is.
                <Readout
                  as="dd"
                  size="md"
                  className={cn(
                    "tabular-nums",
                    item.accent ? "text-primary" : "text-surface"
                  )}
                >
                  {item.value}
                </Readout>
              ) : (
                <dd
                  className={cn(
                    "font-body text-base font-bold text-balance tabular-nums",
                    item.accent ? "text-primary" : "text-surface"
                  )}
                >
                  {item.value}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
