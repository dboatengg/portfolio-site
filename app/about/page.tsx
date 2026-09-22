import { Metadata } from "next";
import Link from "next/link";

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
  "Continuously learning and building interesting side projects"
];

const outsideItems = [
  <><b>Podcasts:</b> Darknet Diaries, What Now with Trevor Noah</>,
  <><b>Movies & shows:</b> Perfect Days, Ted Lasso, Slow Horses, Mythic Quest</>,
  <><b>Books:</b> 100 World&apos;s Greatest Short Stories</>,
];

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-10">

      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2 text-[rgb(var(--text))]">
          About
        </h1>
      </header>

      {/* Background */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-[rgb(var(--text))]">
          Background
        </h2>
        <div className="space-y-4 text-[rgb(var(--body-text))] leading-relaxed">
          <p>
          Most of what I know about software and programming comes from building things, breaking them, 
          and fixing them. 
        </p>
          <p>
            My path into software development wasn&apos;t conventional. I started out of curiosity by learning through various online courses
             and staying connected to developer communities on Reddit and Twitter. 
            Over time, that curiosity turned into professional work and a career I genuinely enjoy.
          </p>

          <p>
            Today, I build software for businesses and clients and have worked with developers, designers, and clients from diverse backgrounds. 
          </p>
          <p>
            Outside of client and professional work, I enjoy experimenting with new ideas and sharing my personal and professional experiences through writing.
          </p>
        </div>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* What I'm doing now */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-[rgb(var(--text))]">
          What I&apos;m doing now
        </h2>
        <ul className="space-y-3">
          {nowItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[rgb(var(--body-text))]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* Outside of coding */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-[rgb(var(--text))]">
          Outside of coding
        </h2>
        <p>Technology is a big part of what I do, but it isn&apos;t everything I&apos;m interested in.</p><br/>
        
        <p>I enjoy listening to podcasts, watching films, and reading various interesting books I pick up from the roadside bookshop.</p><br/>

        <p>A few things I&apos;ve been enjoying lately:</p><br/>
        <ul className="space-y-3">
          {outsideItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[rgb(var(--body-text))]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <br></br><p>And, of course, I spend a ridiculous amount of time tweaking this website.</p>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* Publications */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4 text-[rgb(var(--text))]">
          Publications
        </h2>
        <div className="space-y-3">
          {publications.map((pub) => (
            <Link
              key={pub.href}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 p-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] hover:bg-[rgb(var(--muted))] transition-colors group"
            >
              <span className="text-sm text-[rgb(var(--body-text))] leading-relaxed group-hover:text-[rgb(var(--text))] transition-colors">
                {pub.title}
              </span>
              <svg
                className="flex-shrink-0 mt-0.5 text-[rgb(var(--muted-text))] group-hover:text-[rgb(var(--accent))] transition-colors"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[rgb(var(--border))] mb-12" />

      {/* Resume */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[rgb(var(--text))]">
          Resume
        </h2>
        
          <a href="/DicksonBoateng-v3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[rgb(var(--text))] text-[rgb(var(--bg))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
        >
          View resume
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>

    </section>
  );
}