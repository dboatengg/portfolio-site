"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
          My tech journey began years ago, when our parents bought a home computer for my younger brother and me.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          At the start, we used it mostly to play games, but that experience quickly 
          sparked a curiosity that led me to explore programming.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          Today, I specialize in building responsive, user-friendly web
          applications with modern technologies such as Next.js, React,
          PostgreSQL,Prisma, etc.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://dicksonboateng.com/DicksonBoatengCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(var(--text))] text-[rgb(var(--bg))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
          >
            View resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>

          
            <a href="#projects"
            className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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