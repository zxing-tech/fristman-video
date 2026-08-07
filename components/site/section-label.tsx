import { cn } from "@/lib/utils"

type SectionLabelProps = {
  children: React.ReactNode
  withLine?: boolean
  className?: string
}

export function SectionLabel({
  children,
  withLine,
  className,
}: SectionLabelProps) {
  const label = (
    <span
      className={cn(
        "font-label text-xs font-bold tracking-widest text-primary uppercase",
        !withLine && className
      )}
    >
      {children}
    </span>
  )

  if (!withLine) return label

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="block h-px w-12 bg-primary" />
      {label}
    </div>
  )
}
