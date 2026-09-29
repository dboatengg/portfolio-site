"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

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
        Recent Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.slug}
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

              <div className="mt-auto flex flex-wrap items-center gap-3">
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

                {/* LEARN MORE (only for projects with detail pages) */}
                {project.learnMore && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
                  >
                    Learn more
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}

                {/* GITHUB (public repos only, hidden on private projects) */}
                {project.github && !project.githubPrivate && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}