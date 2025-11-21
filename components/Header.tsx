"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
// import { Moon, Sun } from "lucide-react"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

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


  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[rgb(var(--bg)/0.7)] border-b border-[rgb(var(--border)/1)]">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        
        <Link href="/"><Logo /></Link>

        <div className="flex items-center gap-6 text-sm font-medium text-text">
          <Link
            href="/blog"
            className="hover:text-accent transition-colors "
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="hover:text-accent transition-colors"
          >
            About
          </Link>
          <ThemeToggle/>
        </div>

      </nav>
    </header>
  )
}
