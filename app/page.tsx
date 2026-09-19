import Intro from "@/components/Intro";
import { Metadata } from "next";
import Projects from "@/components/Projects";
import BlogList from "@/components/BlogList";
import { siteUrl } from "@/config/site";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Software Developer from Ghana",
  description:
    "Hi, I'm Dickson—a Software Developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. Computers are not very common in Ghanaian homes, so you can imagine how excited we were. At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.",
  keywords: [
    "frontend developer Ghana",
    "frontend engineer Ghana",
    "web developer Ghana",
    "web developer Africa",
    "software developer Ghana",
    "Next.js developer",
    "React developer Ghana",
    "React.js developer",
    "Next.js portfolio",
    "JavaScript developer Ghana",
    "TypeScript developer Ghana",
    "Ghana software engineer",
    "remote frontend developer",
    "modern web development Ghana",
    "Tailwind CSS developer",
    "WordPress developer Ghana",
    "full-stack web developer Ghana",
    "UI developer Ghana",
    "creative developer Ghana",
  ],
  openGraph: {
    title: "Dickson Boateng | Frontend Developer in Ghana",
    description: "Personal website of Dickson Boateng",
    url: siteUrl,
    siteName: "Dickson Boateng Personal Website",
    images: ["/og-image.jpg"],
    locale: "en_GH",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Dickson Boateng",
      url: siteUrl,
      jobTitle: "Software Developer",
      description:
        "Software developer from Ghana who builds clean, responsive, and practical web applications.",
      image: `${siteUrl}/images/DicksonBoateng.webp`,
      sameAs: ["https://x.com/alege_dev", "https://github.com/dboatengg"],
    },
    {
      "@type": "WebSite",
      name: "Dickson Boateng",
      url: siteUrl,
      description:
        "The personal portfolio and blog of Dickson Boateng, a software developer from Ghana.",
      publisher: { "@type": "Person", name: "Dickson Boateng" },
    },
  ],
};

const publishedBlogs = allBlogs.filter((post) => post.published !== false);

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Intro />
      <BlogList posts={publishedBlogs} />
      <Projects />
    </main>
  );
}
