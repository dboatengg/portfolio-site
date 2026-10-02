"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";

type Heading = {
  level: 2 | 3;
  text: string;
  id: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

const subscribeToDesktopMedia = (callback: () => void) => {
  const media = window.matchMedia("(min-width: 1024px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

const getDesktopSnapshot = () =>
  window.matchMedia("(min-width: 1024px)").matches;
const getServerSnapshot = () => false;

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const desktop = useSyncExternalStore(
    subscribeToDesktopMedia,
    getDesktopSnapshot,
    getServerSnapshot
  );
  const id = useId();
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(
    headings[0]?.id ?? null
  );

  const isOpen = desktop ? !desktopCollapsed : mobileExpanded;

  // Scroll-spy
  useEffect(() => {
    if (headings.length === 0) return;

    let frame = 0;
    const updateActiveHeading = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activationLine = 140;
        let currentId = headings[0].id;

        for (const heading of headings) {
          const element = document.getElementById(heading.id);
          if (
            element &&
            element.getBoundingClientRect().top <= activationLine
          ) {
            currentId = heading.id;
          }
        }

        setActiveId((previousId) =>
          previousId === currentId ? previousId : currentId
        );
      });
    };

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  // Close mobile TOC on Escape
  useEffect(() => {
    if (desktop || !mobileExpanded) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileExpanded(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [desktop, mobileExpanded]);

  if (headings.length < 3) return null;

  function toggleOpen() {
    if (desktop) {
      setDesktopCollapsed((collapsed) => !collapsed);
    } else {
      setMobileExpanded((expanded) => !expanded);
    }
  }

  // -------- DESKTOP: sticky sidebar --------
  if (desktop) {
    return (
      <nav
        aria-label="Table of contents"
        className="not-prose sticky top-24 z-30 mb-16 self-start overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mb-0"
      >
        <button
          type="button"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls={`toc-content-${id}`}
          className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[rgb(var(--muted))] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[rgb(var(--accent))] lg:min-h-0 lg:pb-3 lg:pt-4"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
            On this page
          </span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`shrink-0 text-[rgb(var(--muted-text))] transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          id={`toc-content-${id}`}
          inert={!isOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain">
            <ul className="space-y-1 border-t border-[rgb(var(--border))] px-3 py-3 lg:px-2">
              {headings.map((heading) => {
                const active = heading.id === activeId;
                return (
                  <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}>
                    <a
                      href={`#${heading.id}`}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMobileExpanded(false)}
                      className={`block rounded-lg border-l-2 px-2.5 py-1.5 text-[0.8125rem] leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[rgb(var(--accent))] ${
                        active
                          ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.08)] font-medium text-[rgb(var(--accent))]"
                          : "border-transparent text-[rgb(var(--muted-text))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // -------- MOBILE: sticky full-width bar + overlay panel --------
  return (
    <div className="not-prose sticky top-14 z-30 -mx-5 sm:-mx-6 md:-mx-8 lg:hidden">
      {/* Sticky trigger bar */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={mobileExpanded}
        aria-controls={`toc-content-${id}`}
        className="flex min-h-12 w-full items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.9)] px-5 py-3 text-left backdrop-blur-md transition-colors hover:bg-[rgb(var(--muted)/0.9)] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[rgb(var(--accent))] sm:px-6 md:px-8"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
          On this page
        </span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`shrink-0 text-[rgb(var(--muted-text))] transition-transform duration-200 ${
            mobileExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Overlay panel — absolute so it floats over the article */}
      <div
        id={`toc-content-${id}`}
        inert={!mobileExpanded}
        className={`absolute inset-x-0 top-full z-20 overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
          mobileExpanded
            ? "grid grid-rows-[1fr] opacity-100"
            : "grid grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-b border-[rgb(var(--border))] bg-[rgb(var(--card)/0.85)] backdrop-blur-md">
            <ul className="max-h-[70vh] space-y-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6 md:px-8">
              {headings.map((heading) => {
                const active = heading.id === activeId;
                return (
                  <li key={heading.id} className={heading.level === 3 ? "pl-4" : ""}>
                    <a
                      href={`#${heading.id}`}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMobileExpanded(false)}
                      className={`block rounded-lg border-l-2 px-3 py-2 text-[0.9375rem] leading-snug transition-colors ${
                        active
                          ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.08)] font-medium text-[rgb(var(--accent))]"
                          : "border-transparent text-[rgb(var(--body-text))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}