import { cn } from "@/lib/utils"

type SectionLabelProps = {
  children: React.ReactNode
  withLine?: boolean
  className?: string
}

export function SectionLabel({ children, withLine, className }: SectionLabelProps) {
  const label = (
    <span
      className={cn(
        "text-primary font-label uppercase tracking-widest text-xs font-bold",
        !withLine && className
      )}
    >
      {children}
    </span>
  )

  if (!withLine) return label

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="w-12 h-px bg-primary block" />
      {label}
    </div>
  )
}
