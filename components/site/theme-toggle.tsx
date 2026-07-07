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
        "w-9 h-9 rounded-full border border-surface/15 flex items-center justify-center text-surface/80 hover:text-primary hover:border-primary transition-all duration-300 shrink-0",
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
