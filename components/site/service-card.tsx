import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

type ServiceCardProps = {
  icon: string
  title: string
  summary: string
  href?: string
}

export function ServiceCard({ icon, title, summary, href }: ServiceCardProps) {
  const card = (
    <div className="glass-panel group relative h-full overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      {/* Below `md` the ring sits beside the title instead of above it. Six of
          these stack in one column on a phone, and 56px of ring plus 24px of
          air under it was 80px of every card spent before a word of the service
          name — the same trade the sector cards make in the section below. From
          `md` the grid narrows each card to a column and the title needs the
          full width back, so the ring returns to its own line.

          The ring also shrinks to 44px while it is inline, and that is the
          arrangement talking, not the width. On its own line 56px is a card
          marker with nothing to be measured against. Beside the title it is
          measured against the title, and 56px is exactly twice that line box —
          a marker the same Video weight as the thing it marks. 44px reads as
          1.5x, which is the ratio the sector cards already run. */}
      <div className="mb-4 flex items-center gap-4 md:mb-0 md:block">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary transition-colors duration-300 group-hover:bg-primary md:mb-6 md:h-14 md:w-14">
          <MaterialIcon
            name={icon}
            className="text-3xl text-primary group-hover:text-white"
          />
        </div>
        <h3 className="font-headline text-xl font-bold transition-colors group-hover:text-primary md:mb-3">
          {title}
        </h3>
      </div>
      <p className="font-body text-sm leading-relaxed text-industrial-grey">
        {summary}
      </p>
    </div>
  )

  if (!href) return card

  return (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  )
}
