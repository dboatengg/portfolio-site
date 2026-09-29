import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Lock, Github } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectScreenshots from "@/components/ProjectScreenshots";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((project) => project.learnMore && project.detail)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.detail) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.detail.tagline,
    openGraph: {
      title: project.title,
      description: project.detail.tagline,
      images: [project.detail.screenshots[0]?.src ?? "/og-image.jpg"],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.detail) notFound();

  return (
    <article className="pb-16">
      {/* Back link */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] transition-colors mb-8"
      >
        <ArrowLeft size={15} />
        Back to projects
      </Link>

      {/* Hero */}
      <div
        className={`relative h-56 w-full rounded-3xl bg-linear-to-br ${project.gradient} flex items-end px-8 pb-6 overflow-hidden mb-8`}
      >
        <div className="absolute inset-0 opacity-[0.07] bg-[url('/images/diagonal-lines.svg')] bg-cover" />
        <h1 className="relative text-3xl md:text-4xl font-bold text-white">
          {project.title}
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-lg text-[rgb(var(--text))] mb-8 leading-relaxed">
        {project.detail.tagline}
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(var(--text))] text-[rgb(var(--bg))] rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
          >
            Visit live site
            <ArrowUpRight size={14} />
          </a>
        )}

        {project.githubOnDetail && (
          <a
            href={project.githubOnDetail}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            <Github size={14} />
            View source
          </a>
        )}

        {project.githubPrivate && (
          <span className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--muted-text))] border border-[rgb(var(--ctrl-border))] rounded-full px-4 py-2 text-sm font-medium opacity-70">
            <Lock size={14} />
            Private repository
          </span>
        )}
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[rgb(var(--text))] mb-4">
          Overview
        </h2>
        <div className="space-y-4 text-[rgb(var(--muted-text))] leading-relaxed">
          {project.detail.overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[rgb(var(--text))] mb-4">
          Key features
        </h2>
        <ul className="space-y-2 text-[rgb(var(--muted-text))]">
          {project.detail.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[rgb(var(--muted-text))]"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Screenshots */}
      <ProjectScreenshots screenshots={project.detail.screenshots} />

      {/* Tech stack */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[rgb(var(--text))] mb-4">
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.detail.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[rgb(var(--ctrl-border))] px-3 py-1 text-xs font-medium text-[rgb(var(--muted-text))]"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}