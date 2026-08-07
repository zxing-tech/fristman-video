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
      className="glass-panel group block overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative aspect-video overflow-hidden bg-graphite">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={title}
            className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
            src={image}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        {gated && (
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
            <MaterialIcon name="lock" className="text-sm text-primary" />
            <span className="font-label text-[10px] font-bold tracking-wider text-white uppercase">
              Confidential
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="mb-1 block font-label text-[10px] font-bold tracking-widest text-primary uppercase">
            {industry}
          </span>
          <span className="font-headline text-sm font-bold text-white">
            {client}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-headline text-lg font-bold transition-colors group-hover:text-primary">
          {title}
        </h3>
        {summary && (
          <p className="mb-4 font-body text-sm leading-relaxed text-industrial-grey">
            {summary}
          </p>
        )}
        <span className="flex items-center gap-2 font-label text-xs font-bold tracking-wider text-surface/80 uppercase transition-colors group-hover:text-primary">
          View Case Study
          <MaterialIcon
            name="arrow_forward"
            className="text-sm transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  )
}
