// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// const projects = [
//   {
//     title: 'Personal Portfolio Website',
//     description:
//       'I designed and built this portfolio from the ground up to showcase my work, share my journey, and experiment with Next.js, React 19, and Tailwind CSS.',
//     image: '/images/featured-project-img.webp',
//     href: '/projects/portfolio-website',
//     // tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
//   },
//   {
//     title: 'Stride',
//     description:
//       'A fully functional e-commerce store built to explore the complexity and features of modern online stores without relying on CMS tools.',
//     image: '/images/featured-project-img.webp',
//     href: '/projects/stride-ecommerce',
//     // tech: ['React', 'TypeScript', 'API Integration'],
//   },
//   {
//     title: 'Landing Page Collection',
//     description:
//       'I wanted to test how far I could push myself to recreate some of the stunning websites I have seen on the SaaS Landing Pages website.',
//     image: '/images/featured-project-img.webp',
//     href: '/projects/landing-page-collection',
//     // tech: ['Node.js', 'Prisma', 'React'],
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="mb-24">
//       <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
//         Featured Projects
//       </h2>

//       <div className="grid gap-10 md:grid-cols-2">
//         {projects.map((project) => (
//           <div
//             key={project.title}
//             className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 flex flex-col"
//           >
//             {/* Project Image */}
//             <div className="relative w-full h-56 md:h-64 overflow-hidden">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Project Details */}
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
//                 {project.description}
//               </p>

//               {/* <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div> */}

//               {/* Learn More Button */}
//               <Link
//                 href={project.href}
//                 className="inline-block mt-auto px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors duration-300 self-start"
//               >
//                 Learn more →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// COMING SOON
'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'I designed and built this portfolio from the ground up to showcase my work, share my journey, and experiment with Next.js, React 19, and Tailwind CSS.',
    image: '/images/featured-project-img.webp',
    href: '/projects/portfolio-website',
  },
  {
    title: 'Stride',
    description:
      'A fully functional e-commerce store built to explore the complexity and features of modern online stores without relying on CMS tools.',
    image: '/images/featured-project-img.webp',
    href: '/projects/stride-ecommerce',
  },
  {
    title: 'Landing Page Collection',
    description:
      'I wanted to test how far I could push myself by recreating some of the stunning websites I have seen on SaaS Landing Pages with code.',
    image: '/images/featured-project-img.webp',
    href: '/projects/landing-page-collection',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
        Featured Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300 flex flex-col"
          >
            {/* Coming Soon Badge */}
            <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
              Coming Soon
            </span>

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
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Learn More Button */}
              <Link
                href={project.href}
                className="inline-block mt-auto px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors duration-300 self-start opacity-70 cursor-not-allowed"
                onClick={(e) => e.preventDefault()} // disables navigation for now
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
