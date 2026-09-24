"use client";

import { useEffect, useState } from "react";


const projectscomp = [
  {
    title: "Portfolio Website",
    description:
      "I built this site from scratch as both a personal portfolio and a playground to experiment with modern full-stack technologies like Next.js, PostgreSQL, Prisma, etc.",
    gradient: "from-blue-500 to-purple-600",
    github: "https://github.com/dboatengg/portfolio-site",
  },

  {
    title: "Capstone",
    description:
      "A full-stack real estate platform that connects clients with property agents. Built with Next.js, Express, PostgreSQL, Prisma, etc.",
    gradient: "from-emerald-500 to-teal-700",
    live: "https://capstone-frontend-rust.vercel.app/",
    github: "https://github.com/dboatengg/capstone",
  },

  {
    title: "Spark & Drive",
    description:
      "A full-stack website for an auto electrical repair shop in Kumasi. Includes a customer-facing site with a Paystack-integrated checkout, and an admin panel for managing products, orders, etc. ",
    gradient: "from-[#C81E1E] to-[#F2A900]",
    live: "https://spark-and-drive-auto.vercel.app/",
    githubPrivate: true,
  },

  // {
  //   title: "DownNote",
  //   description:
  //     "A lightweight markdown editor for developers and writers who want a clean writing experience with live previews and cross-device syncing.",
  //   gradient: "from-[#06b6d4] to-[#2563eb]",
  //   live: "https://downnote.vercel.app/",
  //   github: "https://github.com/dboatengg/downnote",
  // },
  {
  title: "iCenter Ghana",
  description:
    "A full-stack website for an Apple phone shop in Madina, Accra. Customers can browse iPhones, request a swap, sell their old phone, or apply for an installment plan.",
  gradient: "from-[#d81159] to-[#2451c4]",
  live: "https://icenter-ghana.vercel.app/",
  githubPrivate: true,
},
];

export default function Projects() {
  const [tappedPrivate, setTappedPrivate] = useState<string | null>(null);

  useEffect(() => {
    if (!tappedPrivate) return;
    const timer = setTimeout(() => setTappedPrivate(null), 2000);
    return () => clearTimeout(timer);
  }, [tappedPrivate]);

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-8">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projectscomp.map((project, index) => (
          <div
            key={project.title}
            className="animate-project-in group relative rounded-3xl overflow-hidden border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col"
            style={{ "--project-delay": `${index * 0.15}s` } as React.CSSProperties}
          >
            {/* TOP COLOR SECTION */}
            <div
              className={`relative h-40 w-full rounded-t-3xl bg-linear-to-br ${project.gradient} flex items-end px-6 pb-4 overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/diagonal-lines.svg')] bg-cover" />

              <span className="relative text-5xl font-extrabold text-white/40 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* BOTTOM SECTION */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
                {project.title}
              </h3>

              <p className="text-[rgb(var(--muted-text))] text-sm leading-relaxed mt-2 mb-6">
                {project.description}
              </p>

              <div className="mt-auto flex items-center gap-3">
                {/* LIVE SITE */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[rgb(var(--text))] text-[rgb(var(--bg))] rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
                  >
                    Live site

                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}

                {/* GITHUB / PRIVATE SOURCE */}
                {project.githubPrivate ? (
                  <div className="relative group/private">
                    <button
                      type="button"
                      aria-disabled="true"
                      aria-label="Source code is private"
                      onClick={() => setTappedPrivate(project.title)}
                      className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--muted-text))] border border-[rgb(var(--ctrl-border))] rounded-full px-4 py-2 text-sm font-medium cursor-not-allowed opacity-70 transition-all duration-200 group-hover/private:border-[rgb(var(--text))] group-hover/private:text-[rgb(var(--text))]"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="4" y="10" width="16" height="11" rx="2" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                      </svg>

                      Source code
                    </button>

                    {/* TOOLTIP — shows on hover (desktop) OR after a tap (mobile) */}
                    <span
                      className={`pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[rgb(var(--text))] text-[rgb(var(--bg))] px-3 py-1.5 text-xs font-medium transition-all duration-200 group-hover/private:opacity-100 group-hover/private:translate-y-0 ${
                        tappedPrivate === project.title ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                      }`}
                    >
                      Private repository
                    </span>
                  </div>
                ) : (
                  project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>

                      Source code
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
