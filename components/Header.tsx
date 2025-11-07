"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import Logo from "./Logo"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    setMounted(true)
    if (
      window.matchMedia("(prefers-color-scheme: light)").matches &&
      !localStorage.getItem("theme")
    ) {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-neutral-900/70 border-b border-neutral-800">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/"><Logo /></Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link
            href="/#writing"
            className="hover:text-white transition-colors"
          >
            Writing
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          {/* <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link> */}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="ml-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} strokeWidth={1.75} />
              ) : (
                <Moon size={18} strokeWidth={1.75} />
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
