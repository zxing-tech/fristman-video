"use client"

import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label="Switch color theme"
      title="Switch light / dark"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface/15 text-surface/80 transition-all duration-300 hover:border-primary hover:text-primary",
        className
      )}
    >
      {/* Visibility lives on the plain wrapper spans (not the icon span, whose
          Material Symbols font CSS forces display:inline-block and would win). */}
      <span className="flex dark:hidden">
        <MaterialIcon name="dark_mode" className="text-lg" />
      </span>
      <span className="hidden dark:flex">
        <MaterialIcon name="light_mode" className="text-lg" />
      </span>
    </button>
  )
}
