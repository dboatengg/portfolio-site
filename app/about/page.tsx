import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Dickson Boateng, a software developer from Ghana who builds responsive web applications with modern JavaScript technologies.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dickson Boateng",
    description:
      "Learn more about Dickson Boateng, a software developer from Ghana.",
    url: "/about",
    type: "profile",
    images: ["/og-image.jpg"],
  },
};

const publications = [
  {
    title: "Asynchronous Programming in JavaScript – Guide for Beginners",
    href: "https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/",
  },
  {
    title: "How to Use the React Context API in Your Projects",
    href: "https://www.freecodecamp.org/news/context-api-in-react/",
  },
  {
    title: "How the Document Object Model Works in JavaScript",
    href: "https://www.freecodecamp.org/news/javascript-dom/",
  },
  {
    title: "How to Use Redux and Redux Toolkit – Tutorial for Beginners",
    href: "https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/",
  },
];

const nowItems = [
  "Working remotely as a web developer",
  "Building and maintaining various client websites and web applications",
  "Writing about software development, technology, and personal growth",
  "Continuously learning and building interesting side projects",
];

const outsideItems = [
  <>
    <b>Podcasts:</b> Darknet Diaries, What Now with Trevor Noah
  </>,
  <>
    <b>Movies &amp; shows:</b> Perfect Days, Ted Lasso, Slow Horses, Mythic Quest
  </>,
  <>
    <b>Books:</b> 100 World&apos;s Greatest Short Stories
  </>,
];

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-[rgb(var(--text))]">
          About
        </h1>
        <p className="text-[rgb(var(--muted-text))]">
          A short note on how I got into software and what I do now.
        </p>
      </header>

      {/* Background */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">
          Background
        </h2>
        <div className="space-y-4 text-[rgb(var(--body-text))] leading-relaxed">
          <p>
            Most of what I know about software and programming comes from
            building things, breaking them, and fixing them.
          </p>
          <p>
            My path into software development wasn&apos;t conventional. I
            started out of curiosity by learning through various online
            courses and staying connected to developer communities on Reddit
            and Twitter. Over time, that curiosity turned into professional
            work and a career I genuinely enjoy.
          </p>
          <p>
            Today, I build software for businesses and clients and have
            worked with developers, designers, and clients from diverse
            backgrounds.
          </p>
          <p>
            Outside of client and professional work, I enjoy experimenting
            with new ideas and sharing my personal and professional
            experiences through writing.
          </p>
        </div>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* What I'm doing now */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">
          What I&apos;m doing now
        </h2>
        <ul className="space-y-3">
          {nowItems.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[rgb(var(--body-text))]"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* Outside of coding */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">
          Outside of coding
        </h2>
        <div className="space-y-4 text-[rgb(var(--body-text))] leading-relaxed mb-6">
          <p>
            Technology is a big part of what I do, but it isn&apos;t
            everything I&apos;m interested in.
          </p>
          <p>
            I enjoy listening to podcasts, watching films, and reading
            various interesting books I pick up from the roadside bookshop.
          </p>
          <p>A few things I&apos;ve been enjoying lately:</p>
        </div>

        <ul className="space-y-3">
          {outsideItems.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[rgb(var(--body-text))]"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[rgb(var(--body-text))] leading-relaxed">
          And, of course, I spend a ridiculous amount of time tweaking this
          website.
        </p>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* Publications */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">
          Publications
        </h2>
        <div className="space-y-3">
          {publications.map((pub) => (
            <Link
              key={pub.href}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 p-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] hover:border-[rgb(var(--ctrl-border))] transition-colors group"
            >
              <span className="text-sm text-[rgb(var(--body-text))] leading-relaxed group-hover:text-[rgb(var(--text))] transition-colors">
                {pub.title}
              </span>
              <ArrowUpRight
                size={14}
                className="flex-shrink-0 mt-0.5 text-[rgb(var(--muted-text))] group-hover:text-[rgb(var(--accent))] transition-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}