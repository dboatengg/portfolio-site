"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, PenLine, User } from "lucide-react"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
  { href: "/blog", label: "Blog", icon: PenLine },
  { href: "/about", label: "About", icon: User },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

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

      {/* Mobile Menu Overlay - transparent, just for closing */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-[57px] z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[57px] right-0 h-[calc(100vh-57px)] w-72 bg-[rgb(var(--bg))] border-l border-[rgb(var(--border))] z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4 pt-6">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-4 px-4 py-4 rounded-lg text-[rgb(var(--text))] hover:bg-[rgb(var(--divide))] hover:text-[rgb(var(--accent))] transition-all"
              >
                <Icon size={20} className="text-[rgb(var(--muted-text))]" />
                <span className="text-base font-medium">{link.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
