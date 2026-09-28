"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, PenLine, User, BookOpen, ArrowUpRight } from "lucide-react"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import { useContactModal } from "@/contexts/ContactModalContext"

const navLinks = [
  { href: "/blog", label: "Blog", icon: PenLine },
  { href: "/about", label: "About", icon: User },
  { href: "/guestbook", label: "Guestbook", icon: BookOpen },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openModal } = useContactModal()

  const closeMenu = () => setIsMenuOpen(false)

  const handleTalkClick = () => {
    closeMenu()
    openModal()
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
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

            <button
              type="button"
              onClick={handleTalkClick}
              className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--text))] px-4 py-2 text-sm font-medium text-[rgb(var(--bg))] transition-opacity hover:opacity-80"
            >
              Let&apos;s talk
              <ArrowUpRight size={14} />
            </button>

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
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 md:hidden bg-[rgb(var(--bg))] flex flex-col transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-[57px] shrink-0" />

        <nav
          className="flex-1 flex flex-col justify-center px-6"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className={`group flex items-center gap-4 border-b border-[rgb(var(--border))] py-5 text-4xl font-semibold text-[rgb(var(--text))] transition-all duration-300 hover:text-[rgb(var(--accent))] ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms" }}
              >
                <Icon
                  size={28}
                  className="text-[rgb(var(--muted-text))] transition-colors group-hover:text-[rgb(var(--accent))]"
                />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-6 pb-10">
          <a
            href="https://wa.me/233532683209"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isMenuOpen ? 0 : -1}
            className={`flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--text))] px-4 py-4 text-sm font-medium text-[rgb(var(--bg))] transition-opacity hover:opacity-80 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: isMenuOpen
                ? `${navLinks.length * 60}ms`
                : "0ms",
            }}
          >
            Chat on WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </>
  )
}