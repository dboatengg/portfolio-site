"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { Menu, X, PenLine, User, BookOpen, ArrowUpRight, Home, BriefcaseBusiness } from "lucide-react"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import { useContactModal } from "@/contexts/ContactModalContext"

const navLinks = [
  { href: "/#projects", label: "Work", icon: BriefcaseBusiness },
  { href: "/blog", label: "Blog", icon: PenLine },
  { href: "/about", label: "About", icon: User },
  { href: "/guestbook", label: "Guestbook", icon: BookOpen },
]

const mobileNavLinks = [
  { href: "/", label: "Home", icon: Home },
  navLinks[0],
  ...navLinks.slice(1),
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavigationRef = useRef<HTMLDivElement>(null)
  const { openModal } = useContactModal()

  const closeMenu = () => setIsMenuOpen(false)

  const isLinkActive = (href: string) => {
    if (href === "/#projects") return pathname.startsWith("/projects")
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const handleTalkClick = () => {
    closeMenu()
    openModal()
  }

  useEffect(() => {
    if (!isMenuOpen) return

    mobileNavigationRef.current?.querySelector<HTMLAnchorElement>("a")?.focus({
      preventScroll: true,
    })

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
        menuButtonRef.current?.focus()
        return
      }

      if (event.key === "Tab") {
        const links = mobileNavigationRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]")
        if (!links?.length) return

        const firstLink = links[0]
        const lastLink = links[links.length - 1]
        const activeElement = document.activeElement

        if (event.shiftKey && activeElement === firstLink) {
          event.preventDefault()
          lastLink.focus()
        } else if (!event.shiftKey && activeElement === lastLink) {
          event.preventDefault()
          firstLink.focus()
        }
      }
    }

    document.addEventListener("keydown", handleMenuKeyDown)
    return () => {
      document.removeEventListener("keydown", handleMenuKeyDown)
    }
  }, [isMenuOpen])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (ticking) return

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = currentY - lastY

        // Ignore tiny scrolls (trackpad noise)
        if (Math.abs(delta) > 5) {
          if (currentY > 120 && delta > 0) {
            setIsHidden(true)
          } else if (delta < 0) {
            setIsHidden(false)
          }
          lastY = currentY
        }

        ticking = false
      })

      ticking = true
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Body lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.width = "100%"
      document.documentElement.style.overflow = "hidden"
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
      document.documentElement.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
      document.documentElement.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-[rgb(var(--bg))] backdrop-blur-md border-b border-[rgb(var(--border)/1)] transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" onClick={closeMenu}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 transition-colors hover:text-[rgb(var(--accent))] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--accent))] ${
                    active ? "text-[rgb(var(--accent))]" : "text-[rgb(var(--text))]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[rgb(var(--accent))]" />
                  )}
                </Link>
              )
            })}

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
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-md border border-[rgb(var(--border))] text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--muted))]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu size={20} />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <X size={20} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        id="mobile-navigation"
        ref={mobileNavigationRef}
        className={`fixed inset-0 z-40 md:hidden bg-[rgb(var(--bg))] flex flex-col transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="h-[57px] shrink-0" />

        <nav
          className="flex-1 flex flex-col justify-center px-6"
          aria-label="Mobile navigation"
        >
          {mobileNavLinks.map((link, i) => {
            const Icon = link.icon
            const active = isLinkActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center gap-4 border-b border-[rgb(var(--border))] py-5 text-4xl font-semibold transition-all duration-300 hover:text-[rgb(var(--accent))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--accent))] ${
                  active ? "text-[rgb(var(--accent))]" : "text-[rgb(var(--text))]"
                } ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms" }}
              >
                <Icon
                  size={28}
                  className={`transition-colors group-hover:text-[rgb(var(--accent))] ${active ? "text-[rgb(var(--accent))]" : "text-[rgb(var(--muted-text))]"}`}
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
                ? `${mobileNavLinks.length * 60}ms`
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