import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
// import { formatShortDate } from "@/utils/formatShortDate";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Dickson Boateng about web development, JavaScript, Next.js, backend engineering, learning, and personal growth.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Dickson Boateng",
    description:
      "Articles about web development, JavaScript, Next.js, backend engineering, learning, and personal growth.",
    url: "/blog",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

type BlogPost = (typeof allBlogs)[number];

export default function BlogPage() {
  const posts = allBlogs.filter((post) => post.published !== false).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  const postsByYear = posts.reduce<Record<string, BlogPost[]>>((groups, post) => {
    const year = new Date(post.date).getFullYear().toString();
    groups[year] ||= [];
    groups[year].push(post);
    return groups;
  }, {});

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="py-10">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[rgb(var(--text))] mb-3">
          Blog
        </h1>
        <p className="text-sm md:text-base italic text-[rgb(var(--muted-text))] max-w-2xl">
        I write to break down complex ideas into simpler easy-to-understand concepts.
        </p>
      </header>

      {/* Blog List */}
      <div className="max-w-3xl mx-auto space-y-16">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-2xl font-semibold text-[rgb(var(--text))] mb-6">
              {year}
            </h2>

            <ul className="space-y-5">
              {postsByYear[year].map((post, index) => (
                <li
                  key={post._id}
                  className={`pb-3 ${
                    index !== postsByYear[year].length - 1
                      ? "border-b border-[rgb(var(--divide))]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-wrap justify-between items-baseline gap-4 w-full">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="min-w-0 flex-1 text-base font-medium hover:underline text-[rgb(var(--text))]"
                      >
                        {post.title}
                      </Link>

                      {/* <time className="text-sm text-[rgb(var(--muted-text))] whitespace-nowrap">
                        {formatShortDate(post.date)}
                      </time> */}
                    </div>

                    {post.summary && (
                      <p className="w-full text-sm text-[rgb(var(--muted-text))] mt-2">
                        {post.summary}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
