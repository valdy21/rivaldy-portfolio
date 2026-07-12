"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Mencegah error hydration dari Next.js
  useEffect(() => {
    // Memberitahu ESLint untuk mengabaikan aturan ini khusus di baris bawahnya
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" /> 
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 text-xl rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Light mode">☀️</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  )
}