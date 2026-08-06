import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"
import { ServiceSection } from "@/components/site/service-section"

/**
 * The route off a case study and back into the services. All six pages carried
 * one of these and all six drew it differently: two photo cards at
 * `aspect-[16/7]`, two cards nested inside a `p-1` glass wrapper, a pair of
 * `p-10` panels with a 60px watermark glyph behind them, two hairline rows, and
 * a stack of `p-4` rows in a sidebar. Only the hairline rows survived here,
 * because this block is a signpost rather than a destination — the photo
 * versions spent a 512px render and a third of a viewport to say the same two
 * words.
 *
 * Each page keeps its own heading wording. The sentence casing is the house
 * rule (DESIGN.md, The Scarce Capitals Rule); the words are the page's.
 */

export type RelatedService = {
  href: string
  title: string
  body: string
}

type RelatedServicesProps = {
  eyebrow?: string
  title: string
  /** Which step of the neutral ramp this lands on, given the band above it. */
  band?: "page" | "panel" | "graphite"
  /** Optional route on to the full list, for pages that carried one. */
  action?: { href: string; label: string }
  items: RelatedService[]
}

export function RelatedServices({
  eyebrow,
  title,
  band = "panel",
  action,
  items,
}: RelatedServicesProps) {
  return (
    <ServiceSection band={band} eyebrow={eyebrow} title={title}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Link
            // 32px of padding each side, a 24px arrow and a 24px gap left the
            // text column far narrower than the card looks: three separate
            // things ate the row before the copy got any. Measured at 213px on
            // a 326px phone card, and 218px at 768px, where this grid goes to
            // two columns and each card is only 340px — the tablet was no
            // better off than the phone.
            //
            // The 32px inset is a 1280-column value, so it waits for `lg`,
            // where the card is 596px. Below that the same column measures
            // 238px and 252px, and the title stops breaking after two words.
            className="group flex items-center justify-between gap-4 rounded-2xl border border-surface/10 bg-background/40 p-6 transition-colors duration-300 hover:border-primary/50 lg:gap-6 lg:p-8"
            href={item.href}
            key={item.href}
          >
            <div>
              <h3 className="font-headline text-xl font-bold text-surface transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-industrial-grey">
                {item.body}
              </p>
            </div>
            <MaterialIcon
              name="arrow_forward"
              className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
      {action && (
        <div className="mt-10 flex justify-center">
          <Link
            className="group flex items-center gap-2 font-label text-xs font-bold tracking-widest text-surface uppercase transition-colors hover:text-primary"
            href={action.href}
          >
            {action.label}
            <MaterialIcon
              name="arrow_forward"
              className="text-lg! transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </ServiceSection>
  )
}
