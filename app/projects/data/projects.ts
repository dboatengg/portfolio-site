export interface Project {
  slug: string;
  title: string;
  description: string;
  gradient: string;
  status: string;
  // image: string;
  liveUrl?: string;
  githubUrl?: string;
  intro: string;
  purpose: string;
  spotlight: string;
  lessons: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    gradient: "from-blue-500 to-purple-600",
    status: "done",
    description:
      "I built this portfolio site to showcase major projects I've worked on and to serve as a playground for trying new tools and blog ideas.",
    // image: "/images/featured-project01.webp",
    liveUrl: "https://dicksonboateng.com",
    githubUrl: "https://github.com/dboatengg/portfolio-site",
    intro:
      "I wanted a space that not only displays my work but also reflects my personality and attention to detail as a frontend developer.",
    purpose:
      "My main goal was to create my corner of the internet where I could integrate a blog to share technical guides, personal stories and experiences, highlight my key projects, and experiment with new ideas as my skills evolve.",
    spotlight:
      "The custom blog system, powered by Contentlayer and MDX, lets me write posts with live code samples, interactive demos, and rich media. This took the most work and best shows my ability to create developer-focused, dynamic content.",
    lessons:
      "Through this project, I learned how to work with MDX files to create rich, flexible blog content, and how to automate communication workflows, such as sending contact form responses using Resend. ",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Contentlayer",
      "MDX",
      "Shiki",
      "Resend",
      "Giscus",
      "Framer Motion",
    ],
  },
  {
    slug: "stride-ecommerce",
    title: "Stride - E-Commerce Platform",
    status: "progress",
    description:
      "A online shoe ecommerce store focused on modern design, dynamic product handling, and smooth checkout flow.",
    // image: "/images/featured-project02.webp",
    liveUrl: "#",
    githubUrl: "https://github.com/dboatengg/stride-ecommerce-platform",
    intro:
      "I built Stride out of curiosity to find out how complex it would be build a fully functional E-commerce platform without relying on WordPress or prebuilt systems.",
    gradient: "from-emerald-500 to-teal-600",
    purpose:
      "The main goal was to challenge myself to build a robust and scalable online store entirely with code. I wanted to understand the architecture behind real-world e-commerce systems, things like: cart state, checkout logic, product data, and API communication.",
    spotlight:
      "The standout feature is the custom shopping cart system, which maintains persistent cart state across sessions and syncs seamlessly with the checkout flow.",
    lessons:
      "This project taught me a great deal about managing state effectively in larger applications, handling asynchronous operations, and creating a UX that feels effortless.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    slug: "downnote",
    title: "DownNote",
    status: "done", // Change to "done" when you finish
    description:
      "A modern markdown editor that features real-time preview, dark mode, cloud sync, and guest mode for instant writing.",
    // image: "/images/downnote-preview.png", // Add a screenshot later
    liveUrl: "https://downnote.vercel.app", // Update with your deployment URL
    githubUrl: "https://github.com/dboatengg/downnote", // Update with your repo
    gradient: "from-[#06b6d4] to-[#2563eb]", // Matches DownNote's brand colors
    intro:
      "DownNote is a markdown editor that combines the simplicity of writing with powerful features like real-time preview, cloud synchronization, and a beautiful modern interface. ThIS project showcases modern full-stack development with React Server Components, authentication, database management, and responsive design.",
    purpose:
      "I built DownNote to create a better writing experience than traditional markdown editors like StackEdit. The goal was to modernize the interface while adding essential features like guest mode (localStorage), OAuth authentication, and cloud sync. This project also served as practice for building production-ready full-stack applications with the latest Next.js App Router.",
    spotlight:
      "The standout feature is the transition between guest and authenticated modes. Users can start writing immediately without an account, then sign in with GitHub, Google, or email to automatically sync their work to the cloud. The split-pane editor with real-time markdown preview, custom typography, and glass-morphism dark mode create a premium writing experience.",
    lessons:
      "This project deepened my understanding of Next.js 16's App Router, React Server Components, and API routes. I learned to implement multi-provider authentication with NextAuth.js, manage database schemas with Prisma, and handle localStorage for offline-first functionality. Key challenges included building auto-save with debouncing, managing theme persistence, and creating a responsive split-pane editor. I also gained experience with TypeScript generics, proper error handling, and deploying full-stack apps with database migrations.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth.js",
      "Tailwind CSS",
      "CodeMirror",
      "OAuth (GitHub/Google)",
      "localStorage API",
      "Framer Motion",
    ],
  },
  {
    slug: "task-hub",
    title: "Task Hub",
    status: "done",
    description:
      "I built this project to practice buildng full-stack applications with PHP.",
    // image: "/images/featured-project01.web",
    liveUrl: "https://taskhub-b.fwh.is/",
    githubUrl: "https://github.com/dboatengg/taskhub",
    gradient: "from-orange-500 to-red-600",
    intro:
      "This is a full-stack PHP application to help users manage personal tasks. It features user authentication, profile management, and a dashboard with task statistics. The project showcases my understanding of PHP, MySQL, MVC-style organization, session management, and deployment on a live hosting platform.",
    purpose:
      "The main goal of TaskHub was to practice building a full-stack PHP application from scratch.",
    spotlight:
      "The highlight of the project is its fully working user flow, from creating an account and managing tasks to updating a profile picture and viewing progress in a dashboard.",
    lessons:
      "This project taught me how to structure a multi-page PHP application, how to secure user data, and how to handle file uploads correctly. I also learned how to troubleshoot and deploy a PHP project to a real hosting environment. ",
    techStack: [
      "PHP",
      "MySQL",
      // "TypeScript",
      "CRUD",
      "Authentication",
      "File uploads",
    ],
  },

  // {
  //   slug: "next.js-fullstack-starter",
  //   title: "Next.js Fullstack Starter",
  //   status: "done",
  //   description:
  //     "A fullstack starter using Next.js 16, Prisma 7, and PostgreSQL.",
  //   // image: "/images/featured-project01.web",
  //   liveUrl: "https://fullstack-nextjs-starter-green.vercel.app/",
  //   githubUrl: "https://github.com/dboatengg/fullstack-nextjs-starter",
  //   gradient: "from-[#06b6d4] to-[#2563eb]",
  //   intro:
  //     "This project is a fullstack starter template to demonstrate modern Next.js App Router architecture. It includes server-side data fetching, type-safe database operations with Prisma, and authentication powered by NextAuth v5.",
  //   purpose:
  //     "The goal was to explore and implement a fullstack architecture for Next.js applications. The focus is solely on based on functionality and backend structure, not design or UI.",
  //   spotlight:
  //     "This project features a full authentication flow with GitHub OAuth, a draft-to-publish workflow for posts, and direct database queries inside Server Components.",
  //   lessons:
  //     "Building this project clarified how Server Actions reduce boilerplate in mutation logic, how relational data modeling works cleanly with Prisma, and how authentication is handled in the newest version of NextAuth. ",
  //   techStack: [
  //     "Next.js 16 (App Router)",
  //     "React 19",
  //     "Prisma 7",
  //     "PostgreSQL / Vercel Postgres",
  //     "NextAuth v5 (GitHub OAuth)",
  //     "TypeScript",
  //     "Tailwind CSS",
  //   ],
  // },
];
