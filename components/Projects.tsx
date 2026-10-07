"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectSheet from "./ProjectSheet";

export default function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="mb-16">
        <h2 className="section-heading">Projects</h2>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-lg transition-all duration-500 hover:shadow-xl"
            >
              {/* Cover */}
              <div
                className={`relative h-40 w-full overflow-hidden rounded-t-2xl bg-linear-to-br ${project.gradient}`}
              >
                {project.cover ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.cover}
                      alt={`${project.title} cover`}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  </>
                ) : (
                  <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/diagonal-lines.svg')] bg-cover" />
                )}

                <span className="absolute bottom-4 left-6 text-5xl font-extrabold text-white/80 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
                  {project.title}
                </h3>

                <p className="mt-2 mb-6 text-sm leading-relaxed text-[rgb(var(--muted-text))]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--text))] px-4 py-2 text-sm font-medium text-[rgb(var(--bg))] transition-opacity hover:opacity-80"
                    >
                      Live site
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {project.learnMore && (
                    <button
                      type="button"
                      onClick={() => setOpenProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--ctrl-border))] bg-transparent px-4 py-2 text-sm font-medium text-[rgb(var(--text))] transition-opacity hover:opacity-70"
                    >
                      Learn more
                      <ArrowRight size={13} />
                    </button>
                  )}

                  {project.github && !project.githubPrivate && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--ctrl-border))] bg-transparent px-4 py-2 text-sm font-medium text-[rgb(var(--text))] transition-opacity hover:opacity-70"
                    >
                      <Github size={13} />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProjectSheet
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </>
  );
}