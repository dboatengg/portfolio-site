"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, PenLine, User, BookOpen } from "lucide-react"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "/blog", label: "Blog", icon: PenLine },
  { href: "/about", label: "About", icon: User },
  { href: "/guestbook", label: "Guestbook", icon: BookOpen },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Do NOT lock body scroll; allow page to remain scrollable when menu is open
  useEffect(() => {
    return () => {}
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[rgb(var(--bg)/0.7)] border-b border-[rgb(var(--border)/1)]">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" onClick={closeMenu}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel (top glass effect) */}
      <div
        className={`fixed left-0 top-[57px] w-full z-40 md:hidden transform transition-transform duration-300 ease-out transition-opacity ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-[100vh] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Glass padding area */}
        <div className="backdrop-blur-md bg-[rgb(var(--bg)/0.32)] border-b border-[rgb(var(--border))]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            {/* Solid menu panel */}
            <div className="bg-[rgb(var(--bg))] rounded-md shadow-sm border border-[rgb(var(--border))]">
              <nav className="flex flex-col p-4 pt-6">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-[rgb(var(--text))] hover:bg-[rgb(var(--divide))] hover:text-[rgb(var(--accent))] transition-all"
                    >
                      <Icon size={18} className="text-[rgb(var(--muted-text))]" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
