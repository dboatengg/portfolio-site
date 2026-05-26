import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Dickson Boateng",
  description:
    "I'm Dickson Boateng, a software developer from Ghana who enjoys building clean, responsive, and practical web interfaces with modern JavaScript tools.",
  alternates: {
    canonical: "/about",
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
  "Experimenting and tweaking this website",
  "Working on side projects",
  "Writing about web development and personal growth",
];

const outsideItems = [
  <>I have never missed an episode from these podcasts: <b>Darknet Diaries</b> and <b>What Now with Trevor Noah</b>.</>,
  <>My favorite movies and shows: <b>Perfect Days</b>, <b>Ted Lasso</b>, and <b>Shrinking</b>.</>,
  <>I consider Pavel Durov (Telegram Founder &amp; CEO) a mentor from afar. His discipline and philosophy deeply inspire me.</>,
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
          I didn&apos;t take the traditional path into software development. My journey
          started with pure curiosity, taking online courses, and
          staying connected to tech communities on Twitter and Reddit.
        </p>
          <p>
            I currently work in web development and have had the privilege of
            working and collaborating with developers and designers from diverse backgrounds.
          </p>
          <p>
            The path here wasn&apos;t linear, but it shaped me into a problem-solver
            who learns quickly, works well with others, and approaches challenges
            with both creativity and discipline.
          </p>
          <p>
            When I&apos;m not coding, I enjoy writing articles about web development
            and personal growth. Sharing my experiences and insights with the{" "}
            <Link
              href="https://x.com/search?q=alege_dev&src=typed_query"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--accent))] underline underline-offset-2"
            >
              tech community
            </Link>{" "}
            is something I find incredibly rewarding.
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
        <ul className="space-y-3">
          {outsideItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[rgb(var(--body-text))]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] flex-shrink-0" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
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
        
          <a href="/DicksonBoatengCV.pdf"
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