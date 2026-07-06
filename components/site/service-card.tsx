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
    <div className="glass-panel p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <MaterialIcon name={icon} className="text-primary group-hover:text-white text-3xl" />
      </div>
      <h3 className="font-headline font-bold text-xl mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body text-industrial-grey text-sm leading-relaxed">{summary}</p>
    </div>
  )

  if (!href) return card

  return (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  )
}
