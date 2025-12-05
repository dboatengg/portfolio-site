import { notFound } from "next/navigation";
// import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<{ title: string; description: string }> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} | Dickson Boateng`
      : "Project | Dickson Boateng",
    description: project?.description || "",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-16 space-y-10">
      {/* Hero Section */}
      <header className="space-y-6 text-center">
        <h1 className="text-4xl font-semibold text-[rgb(var(--text))]">
          {project.title}
        </h1>
        <p className="text-[rgb(var(--body-text))] text-lg">
          {project.description}
        </p>
        {/* TOP COLOR SECTION */}
        <div
          className={`
                        relative h-55 w-full rounded-t-3xl 
                        bg-linear-to-br ${project.gradient}
                        flex items-end px-6 pb-4
                        overflow-hidden
                      `}
        >
          {/* diagonal texture */}
          <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/diagonal-lines.svg')] bg-cover" />

          {/* big number */}
          <span className="relative text-5xl font-extrabold text-white/40 select-none">
            {String(projects.findIndex((p) => p.slug === slug) + 1).padStart(
              2,
              "0"
            )}
          </span>
        </div>
      </header>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-[rgb(var(--text))] mb-3">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 text-sm border border-[rgb(var(--border))] text-[rgb(var(--body-text))] rounded-md bg-[rgb(var(--surface-overlay))]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold text-[rgb(var(--text)/0.9)] mb-3">
          Introduction
        </h2>
        <p className="text-[rgb(var(--body-text))] leading-relaxed">
          {project.intro}
        </p>
      </section>

      {/* Purpose & Goal */}
      <section>
        <h2 className="text-2xl font-semibold text-[rgb(var(--text)/0.9)] mb-3">
          Purpose & Goal
        </h2>
        <p className="text-[rgb(var(--body-text))] leading-relaxed">
          {project.purpose}
        </p>
      </section>

      {/* Spotlight Feature */}
      <section>
        <h2 className="text-2xl font-semibold text-[rgb(var(--text)/0.9)] mb-3">
          Spotlight
        </h2>
        <p className="text-[rgb(var(--body-text))] leading-relaxed">
          {project.spotlight}
        </p>
      </section>

      {/* Lessons Learned */}
      <section>
        <h2 className="text-2xl font-semibold text-[rgb(var(--text)/0.9)] mb-3">
          Lessons Learned
        </h2>
        <p className="text-[rgb(var(--body-text))] leading-relaxed">
          {project.lessons}
        </p>
      </section>

      {/* Links */}
      <section className="flex flex-wrap gap-4 pt-6 border-t border-[rgb(var(--border))]">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[rgb(var(--ctrl-border))] text-sm text-[rgb(var(--text))] hover:bg-[rgb(var(--bg)/0.6)] transition"
            target="_blank"
          >
            <ExternalLink size={16} /> <span>View Live Site</span>
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[rgb(var(--ctrl-border))] text-sm text-[rgb(var(--text))] hover:bg-[rgb(var(--bg)/0.6)] transition"
            target="_blank"
          >
            <Github size={16} /> <span>View Source Code</span>
          </Link>
        )}
      </section>
    </article>
  );
}
