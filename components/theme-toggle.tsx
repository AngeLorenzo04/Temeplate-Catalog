"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  // Hydration fix: only render icons after mount if needed, 
  // but next-themes handles basic SSR reasonably. For perfection:
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-9" /> // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      title="Toggle theme"
    >
      <Sun className="h-5 w-5 scale-100 transition-all dark:scale-0" />
      <Moon className="absolute h-5 w-5 scale-0 transition-all dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
