"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-24 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10"
    >
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-2">
          Dickson Boateng
        </h1>
        <p className="text-[rgb(var(--muted-text))] text-lg mb-4">
          Software Developer
        </p>

        <p className="text-base leading-relaxed max-w-2xl mb-6">
          My tech journey began years ago, when my father surprised my younger brother and me with
          our first home computer.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          At first, we just used it to play various computer games, but that
          early exposure to a home computer soon sparked a fascination that led
          me to explore programming.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          Today, I specialize in building responsive, user-friendly web
          applications with modern technologies such as Next.js, React,
          PostgreSQL, and Prisma.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-block px-4 py-2 text-sm font-medium text-[rgb(var(--accent))] border border-[rgb(var(--accent))] rounded-full hover:bg-[rgb(var(--accent))]/10 transition-colors duration-200"
          >
            Learn more →
          </Link>

          <a
            href="#projects"
            className="inline-block px-4 py-2 text-sm font-medium text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full hover:bg-[rgb(var(--ctrl-border))]/10 transition-colors duration-200"
          >
            View my work →
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="shrink-0">
        <div className="relative mx-auto md:mx-0 shrink-0 w-fit">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-50 md:h-96 rounded-sm md:rounded-full overflow-hidden border border-[rgb(var(--border))] shadow-lg shadow-black/30">
            <Image
              src="/images/DicksonBoateng-profile.webp"
              alt="Dickson Boateng"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              priority
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
