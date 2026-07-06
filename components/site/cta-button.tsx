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

export function CtaButton({
  href,
  variant = "primary",
  size = "lg",
  arrow,
  className,
  children,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full font-label uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 group w-fit",
        sizeClasses[size],
        variant === "primary" &&
          "bg-primary text-white border border-primary hover:bg-black hover:text-primary",
        variant === "secondary" &&
          "glass-panel text-white hover:bg-primary/20 hover:border-primary",
        className
      )}
    >
      {children}
      {arrow && (
        <MaterialIcon
          name="arrow_forward"
          className="text-lg group-hover:translate-x-1 transition-transform"
        />
      )}
    </Link>
  )
}
