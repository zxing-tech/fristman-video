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
    <div className="glass-panel group relative h-full overflow-hidden rounded-xl p-8 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary transition-colors duration-300 group-hover:bg-primary">
        <MaterialIcon
          name={icon}
          className="text-3xl text-primary group-hover:text-white"
        />
      </div>
      <h3 className="mb-3 font-headline text-xl font-bold transition-colors group-hover:text-primary">
        {title}
      </h3>
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
