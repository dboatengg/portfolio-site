"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function Intro() {
  const { openModal } = useContactModal();

  return (
    <section className="animate-intro-in mb-16 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 md:gap-16 lg:gap-20">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-2">
          Dickson Boateng
        </h1>
        <p className="text-[rgb(var(--muted-text))] text-lg mb-4">
          Software Developer
        </p>

        <p className="text-base leading-relaxed max-w-2xl mb-6">
          I build and maintain websites and web applications for businesses and clients.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          As a software developer, I always aim to create clean and reliable software that is both intuitive and enjoyable for users.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          I have a passion for learning, and I am constantly seeking to improve my skills through reading and writing.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-[rgb(var(--text))] text-[rgb(var(--bg))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} />
          </button>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            View my work
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="shrink-0 animate-float">
        <div className="relative mx-auto md:mx-0 shrink-0 w-fit">
          <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 rounded-[999px] overflow-hidden border border-[rgb(var(--border))] shadow-lg shadow-black/30">
            <Image
              src="/images/DicksonBoateng-profile.webp"
              alt="Dickson Boateng, software developer from Ghana"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}