import { cn } from "@/lib/utils"

type MaterialIconProps = {
  name: string
  className?: string
  fill?: boolean
}

export function MaterialIcon({ name, className, fill }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined", className)}
      style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  )
}
