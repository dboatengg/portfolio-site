import { ArrowUpRight } from "lucide-react";
import ContactModalButton from "@/components/ContactModalButton";

export default function CtaSection() {
  return (
    <section className="mb-24">
      <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-6 py-12 sm:px-10 sm:py-16">
        <div className="relative max-w-xl">
          <h2 className="section-heading mb-0 leading-tight">
            Have a project in mind?
          </h2>

          <p className="mt-4 text-[rgb(var(--muted-text))] leading-relaxed"> 
            Most people I work with hold onto their project for months before reaching out. If
            that&apos;s you, let&apos;s talk.
          </p>

          <ContactModalButton className="button-primary mt-8">
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </ContactModalButton>
        </div>
      </div>
    </section>
  );
}