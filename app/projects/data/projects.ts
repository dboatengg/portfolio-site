export interface Project {
  slug: string;
  title: string;
  description: string;
  gradient: string;
  status: string;
  image: string;
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
    image: "/images/featured-project01.webp",
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
    image: "/images/featured-project02.webp",
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
    slug: "task-hub",
    title: "Task Hub",
    status: "done",
    description:
      "I built this project to practice buildng full-stack applications with PHP.",
    image: "/images/featured-project01.web",
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
];
