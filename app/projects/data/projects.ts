export interface Project {
  slug: string;
  title: string;
  description: string;
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
    slug: "stride-ecommerce",
    title: "Stride - E-Commerce Platform",
    description:
      "A online shoe ecommerce store focused on modern design, dynamic product handling, and smooth checkout flow.",
    image: "/images/featured-project02.webp",
    liveUrl: "#",
    githubUrl: "#",
    intro:
      "I built Stride out of curiosity to find out how complex it would be build a fully functional E-commerce platform without relying on WordPress or prebuilt systems.",
    purpose:
      "The main goal was to challenge myself to build a robust and scalable online store entirely with code. I wanted to understand the architecture behind real-world e-commerce systems, things like: cart state, checkout logic, product data, and API communication.",
    spotlight:
      "The standout feature is the custom shopping cart system, which maintains persistent cart state across sessions and syncs seamlessly with the checkout flow.",
    lessons:
      "This project taught me a great deal about managing state effectively in larger applications, handling asynchronous operations, and creating a UX that feels effortless.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

  },
    {
    slug: "portfolio-website",
    title: "Portfolio Website",
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
    techStack: ["Next.js","React","TypeScript","Tailwind CSS","Contentlayer","MDX","Shiki","Resend","Giscus","Framer Motion"],


  },
];
