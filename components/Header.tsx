"use client"

import Link from "next/link"
import { useState } from "react"
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
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md border border-[rgb(var(--border))] p-2 text-[rgb(var(--text))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--accent))] transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 top-full w-full z-40 md:hidden transform transition-transform duration-300 ease-out transition-opacity ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="border-y border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.96)] px-4 py-3 shadow-lg backdrop-blur-md" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-4xl flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--accent))]"
                >
                  <Icon size={18} className="text-[rgb(var(--muted-text))]" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
