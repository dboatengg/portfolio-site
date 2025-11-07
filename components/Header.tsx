"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

//   console.log("theme:", theme)


  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-neutral-900/70 border-b border-neutral-800">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-100 hover:text-white transition-colors"
        >
          Dickson Boateng
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="/#writing" className="hover:text-white transition-colors">
            Writing
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>

          {/* {mounted && (
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="ml-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} strokeWidth={1.75} />
              ) : (
                <Moon size={18} strokeWidth={1.75} />
              )}
            </button>
          )} */}
        </div>
      </nav>
    </header>
  )
}
