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
}

export const projects: Project[] = [
  {
    slug: "stride-ecommerce",
    title: "Stride - E-Commerce Platform",
    description:
      "A custom-built online shoe store focused on modern design, dynamic product handling, and smooth checkout flow.",
    image: "/images/featured-project02.webp",
    liveUrl: "https://stride.dicksonboateng.com",
    githubUrl: "https://github.com/dicksonboateng/stride",
    intro:
      "Stride was born from my curiosity about what it takes to build a complete e-commerce platform from scratch — without relying on WordPress or prebuilt systems.",
    purpose:
      "The main goal was to challenge myself to build a robust and scalable online store entirely with code. I wanted to understand the architecture behind real-world e-commerce systems — cart state, checkout logic, product data, and API communication.",
    spotlight:
      "The standout feature is the custom shopping cart system, which maintains persistent cart state across sessions and syncs seamlessly with the checkout flow. It’s fast, intuitive, and written with reusable React hooks.",
    lessons:
      "This project taught me a great deal about managing state effectively in larger applications, handling asynchronous operations, and creating a UX that feels effortless. It also reinforced the importance of balancing design, performance, and maintainability.",
  },
    {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A custom-built portfolio designed to reflect my personality, showcase my projects, and serve as a playground for trying new tools and design ideas.",
    image: "/images/featured-project01.jpg",
    liveUrl: "https://dicksonboateng.com",
    githubUrl: "https://github.com/dicksonboateng/portfolio",
    intro:
      "This portfolio was built from the ground up using Next.js, React, Tailwind CSS, and TypeScript. I wanted a space that not only displays my work but also reflects my craftsmanship and attention to detail as a frontend developer.",
    purpose:
      "My main goal was to create a personal site that feels clean, fast, and uniquely mine — something that goes beyond templates. I wanted a flexible foundation where I could integrate a blog, highlight key projects, and experiment with new ideas as my skills evolve.",
    spotlight:
      "The standout feature of this portfolio is its modular architecture using the Next.js App Router with full support for dynamic content — including a blog powered by Contentlayer and custom project pages sourced from static data. Every section is built for scalability and maintainability.",
    lessons:
      "This project taught me a lot about the importance of good structure and developer experience. I refined how I use server components, TypeScript types, and accessibility principles in real-world builds. I also learned how powerful small design details can be when they align with performance and usability goals.",
  },
];
