import Link from "next/link"

import { MaterialIcon } from "@/components/site/material-icon"

type CaseStudyCardProps = {
  href: string
  title: string
  client: string
  industry: string
  gated?: boolean
  image?: string
  summary?: string
}

export function CaseStudyCard({
  href,
  title,
  client,
  industry,
  gated,
  image,
  summary,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 block"
    >
      <div className="relative aspect-video overflow-hidden bg-graphite">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            src={image}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        {gated && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
            <MaterialIcon name="lock" className="text-primary text-sm" />
            <span className="font-label uppercase tracking-wider text-[10px] font-bold text-white">
              Confidential
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="font-label uppercase tracking-widest text-[10px] font-bold text-primary block mb-1">
            {industry}
          </span>
          <span className="font-headline font-bold text-white text-sm">{client}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {summary && (
          <p className="font-body text-industrial-grey text-sm leading-relaxed mb-4">{summary}</p>
        )}
        <span className="font-label uppercase tracking-wider text-xs font-bold text-white/80 flex items-center gap-2 group-hover:text-primary transition-colors">
          View Case Study
          <MaterialIcon
            name="arrow_forward"
            className="text-sm group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </Link>
  )
}
