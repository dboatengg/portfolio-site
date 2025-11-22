'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion, Variants} from 'framer-motion';


const projects = [
  {
    title: 'Portfolio Website',
    description:
      'I built this portfolio site from the ground up to showcase my work, explore some blog ideas, and experiment with Next.js, React 19, and Tailwind CSS.',
    image: '/images/featured-project01.webp',
    href: '/projects/portfolio-website',
  },
  {
    title: 'Stride',
    description:
      'A fully functional e-commerce store I built to explore the complexity and features of modern online stores without relying on CMS tools like WordPress.',
    image: '/images/featured-project02.webp',
    href: '/projects/stride-ecommerce',
  },
  // {
  //   title: 'Landing Page Collection',
  //   description:
  //     'I wanted to test how far I could push myself by recreating some of the stunning websites I have seen on SaaS Landing Pages with code.',
  //   image: '/images/featured-project03.webp',
  //   href: '/projects/landing-page-collection',
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-8">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
            className="group relative border border-[rgb(var(--ctrl-border))] dark:border-gray-700 rounded-2xl overflow-hidden hover:border-[rgb(var(--border)/0.8)] bg-[rgb(var(--surface-overlay))] shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Coming Soon Badge */}
            {/* <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
              Coming Soon
            </span> */}

            {/* Project Image */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-[rgb(var(--text))] mb-2 transition-colors">
                {project.title}
              </h3>
              <p className="text-[rgb(var(--text))] text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Learn More Button */}
              <Link
                href={project.href}
                className="inline-block mt-auto px-4 py-2 text-sm font-medium text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full transition-colors duration-300 self-start "
                // onClick={(e) => e.preventDefault()} 
              >
                Learn more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
