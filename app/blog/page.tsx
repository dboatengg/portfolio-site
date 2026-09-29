import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[rgb(var(--text))] mb-3">
          Blog
        </h1>
        <p className="text-base text-[rgb(var(--muted-text))] max-w-2xl">
          I write about web development in plain, easy-to-follow language.
        </p>
      </header>

      {/* Empty state */}
      {posts.length === 0 && (
        <p className="text-[rgb(var(--muted-text))]">
          No posts yet. Check back soon.
        </p>
      )}

      {/* Blog List */}
      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--muted-text))] mb-4">
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
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-2 w-full"
                  >
                    <div className="flex items-start justify-between gap-4 w-full">
                      <h3 className="min-w-0 flex-1 text-base font-medium text-[rgb(var(--text))] group-hover:underline">
                        {post.title}
                      </h3>

                      <div className="hidden sm:flex items-center gap-3 shrink-0 pt-0.5">
                        <time className="text-xs text-[rgb(var(--muted-text))] whitespace-nowrap">
                          {formatShortDate(post.date)}
                        </time>

                        <ArrowRight
                          size={15}
                          aria-hidden="true"
                          className="text-[rgb(var(--muted-text))] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--text))]"
                        />
                      </div>
                    </div>

                    {post.summary && (
                      <p className="w-full text-sm text-[rgb(var(--muted-text))]">
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