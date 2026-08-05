import Link from "next/link"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"

type CtaButtonProps = {
  href: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  arrow?: boolean
  className?: string
  children: React.ReactNode
}

const sizeClasses = {
  sm: "px-6 py-2 text-xs",
  md: "px-8 py-3.5 text-sm",
  lg: "px-8 py-4 text-sm",
}

/**
 * The pill itself, without the element around it. Exported so the one control
 * that cannot be a `<Link>` — the Request Access trigger, which opens a dialog
 * rather than navigating — wears the same shape instead of hand-copying it and
 * drifting on padding or hover.
 */
export function ctaClasses({
  variant = "primary",
  size = "lg",
  className,
}: Pick<CtaButtonProps, "variant" | "size" | "className"> = {}) {
  return cn(
    "group flex w-fit items-center justify-center gap-2 rounded-full font-label font-bold tracking-wider uppercase transition-all duration-300",
    sizeClasses[size],
    variant === "primary" &&
      "border border-primary bg-primary text-white hover:bg-background hover:text-primary",
    // The secondary CTA only ever appears alongside a primary one over a
    // photograph, so it follows the photo exception: literal white, never
    // `text-surface` (which turns near-black in light mode and disappears
    // into the picture).
    variant === "secondary" &&
      "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:border-primary hover:bg-primary/25",
    className
  )
}

export function CtaButton({
  href,
  variant = "primary",
  size = "lg",
  arrow,
  className,
  children,
}: CtaButtonProps) {
  return (
    <Link href={href} className={ctaClasses({ variant, size, className })}>
      {children}
      {arrow && (
        <MaterialIcon
          name="arrow_forward"
          className="text-lg transition-transform group-hover:translate-x-1"
        />
      )}
    </Link>
  )
}
