import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<{ title: string; description: string }>   {
    const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Dickson Boateng` : "Project | Dickson Boateng",
    description: project?.description || "",
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-16 space-y-10">
      {/* Hero Section */}
      <header className="space-y-6 text-center">
        <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
        <p className="text-gray-400 text-lg">{project.description}</p>
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

              {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
        <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Tech Stack</h2>
            <ul className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
                <li
                key={tech}
                className="px-3 py-1 text-sm border border-gray-700 text-gray-300 rounded-md bg-gray-800/40"
                >
                {tech}
                </li>
            ))}
            </ul>
        </section>
        )}

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">{project.intro}</p>
            </section>

      {/* Purpose & Goal */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Purpose & Goal</h2>
        <p className="text-gray-300 leading-relaxed">{project.purpose}</p>
      </section>

      {/* Spotlight Feature */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Spotlight</h2>
        <p className="text-gray-300 leading-relaxed">{project.spotlight}</p>
      </section>

      {/* Lessons Learned */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-3">Lessons Learned</h2>
        <p className="text-gray-300 leading-relaxed">{project.lessons}</p>
      </section>

      

      {/* Links */}
      <section className="flex flex-wrap gap-4 pt-6 border-t border-gray-800">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-700 text-sm text-white hover:bg-gray-800 transition"
            target="_blank"
          >
            <ExternalLink size={16}/> <span>View Live Site</span>
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-700 text-sm text-white hover:bg-gray-800 transition"
            target="_blank"
          >
            <Github size={16}/> <span>View Source</span>
          </Link>
        )}
        {/* <Link
          href="/#projects"
          className="px-5 py-2 rounded-full border border-gray-700 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Projects
        </Link> */}
      </section>
    </article>
  );
}
