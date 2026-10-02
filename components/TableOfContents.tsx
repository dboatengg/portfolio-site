"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Heading = {
  level: 2 | 3;
  text: string;
  id: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Only show TOC if there are enough sections to warrant it
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="not-prose mb-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="toc-content"
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-[rgb(var(--muted))]"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
          On this page
        </span>

        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`shrink-0 text-[rgb(var(--muted-text))] transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        id="toc-content"
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1.5 px-5 pb-4 pt-1">
            {headings.map((h) => (
              <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                <a
                  href={`#${h.id}`}
                  className="block text-sm leading-relaxed text-[rgb(var(--body-text))] hover:text-[rgb(var(--accent))] transition-colors"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}