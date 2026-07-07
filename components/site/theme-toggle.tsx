"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { MaterialIcon } from "@/components/site/material-icon"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label="Switch color theme"
      title="Switch light / dark"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "w-9 h-9 rounded-full border border-surface/15 flex items-center justify-center text-surface/80 hover:text-primary hover:border-primary transition-all duration-300 shrink-0",
        className
      )}
    >
      <MaterialIcon
        name={mounted ? (isDark ? "light_mode" : "dark_mode") : "dark_mode"}
        className="text-lg"
      />
    </button>
  )
}
