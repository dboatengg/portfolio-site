"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function CtaSection() {
  const { openModal } = useContactModal();

  return (
    <section className="mb-16">
      <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-6 py-12 sm:px-10 sm:py-16">
        {/* Subtle gradient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[rgb(var(--accent))] opacity-10 blur-3xl" />

        <div className="relative max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] leading-tight">
            Have a project in mind?
          </h2>

          <p className="mt-4 text-[rgb(var(--muted-text))] leading-relaxed">
            Most people I work with hold onto their project for months before reaching out. If that&apos;s you, let&apos;s talk.
          </p>

          <button
            type="button"
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--text))] px-5 py-3 text-sm font-medium text-[rgb(var(--bg))] transition-opacity hover:opacity-80"
          >
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}