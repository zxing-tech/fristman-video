import { cn } from "@/lib/utils"

/**
 * The Readout role from DESIGN.md: IBM Plex Mono 500, 10–12px, uppercase,
 * tracked `0.15em`. Reference codes, coordinates, phase markers, statuses —
 * content that is genuinely measured or identifying, and nothing else. A mono
 * face worn as a costume for "technical" spends the role's meaning.
 *
 * This exists for the same reason `SectionLabel` does: the role is documented,
 * so it should be authored once. It was not. Measured across `/our-work` on
 * 2026-08-05, eight sites spelled it five different ways —
 *
 *   font-mono text-[10px] tracking-[0.15em] text-primary            (no weight, no caps)
 *   font-mono text-[10px] tracking-[0.15em] text-surface            (no weight, no caps)
 *   font-mono text-[10px] tracking-[0.15em] ... uppercase           (no weight)
 *   font-mono text-sm  font-medium tracking-[0.15em] uppercase      (14px — off the role)
 *   font-mono text-[10px] tracking-[0.15em] text-primary uppercase  (no weight)
 *
 * — so the role rendered at weight 400 nearly everywhere against a documented
 * 500, and once at 14px against a documented ceiling of 12px.
 *
 * `size="md"` is the 12px step, for a readout that has to hold its own beside
 * body copy rather than sit in a corner.
 */

const sizes = {
  sm: "text-[10px]",
  md: "text-xs",
}

type ReadoutProps = {
  children: React.ReactNode
  size?: keyof typeof sizes
  /**
   * The element to render. `dd` matters: inside a `<dl>` the value has to stay
   * a `<dd>` or the definition list loses its pairing, so the role travels as a
   * class set rather than forcing a wrapper.
   */
  as?: "span" | "p" | "div" | "dd"
  className?: string
}

export function Readout({
  children,
  size = "sm",
  as: Tag = "span",
  className,
}: ReadoutProps) {
  return (
    <Tag
      className={cn(
        "font-mono font-medium tracking-[0.15em] uppercase",
        sizes[size],
        className
      )}
    >
      {children}
    </Tag>
  )
}
