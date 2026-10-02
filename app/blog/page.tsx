import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { formatShortDate } from "@/utils/formatShortDate";
import { Metadata } from "next";

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
  const posts = allBlogs
    .filter((post) => post.published !== false)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const postsByYear = posts.reduce<Record<string, BlogPost[]>>(
    (groups, post) => {
      const year = new Date(post.date).getFullYear().toString();
      groups[year] ||= [];
      groups[year].push(post);
      return groups;
    },
    {}
  );

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="py-10">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[rgb(var(--text))] mb-3">
          Blog
        </h1>
        <p className="text-base text-[rgb(var(--muted-text))] max-w-2xl leading-relaxed">
          Notes on web development, backend engineering, and the things I learn
          while building software.
        </p>
      </header>

      {/* Empty state */}
      {posts.length === 0 && (
        <p className="text-[rgb(var(--muted-text))]">
          No posts yet. Check back soon.
        </p>
      )}

      {/* Blog List */}
      <div className="space-y-16">
        {years.map((year) => (
          <section key={year}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted-text))]">
                {year}
              </h2>
              <div className="flex-1 h-px bg-[rgb(var(--divide))]" />
            </div>

            <ul className="space-y-6">
              {postsByYear[year].map((post, index) => (
                <li key={post._id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-1"
                  >
                    <div className="flex flex-col gap-1.5 sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-8 sm:items-baseline">
                      <h3 className="text-lg font-medium text-[rgb(var(--text))] group-hover:underline underline-offset-4 decoration-1">
                        {post.title}
                      </h3>

                      <time className="text-xs sm:text-sm text-[rgb(var(--muted-text))] tabular-nums whitespace-nowrap">
                        {formatShortDate(post.date)}
                      </time>
                    </div>

                    {post.summary && (
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[rgb(var(--muted-text))]">
                        {post.summary}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}