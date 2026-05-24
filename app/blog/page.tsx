import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { formatShortDate } from "@/utils/formatShortDate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dickson Boateng",
  description:
    "I’m Dickson Boateng, a software developer from Ghana who enjoys building clean, responsive, and practical web interfaces with modern JavaScript tools.",
};

type BlogPost = (typeof allBlogs)[number];

export default function BlogPage() {
  const posts = [...allBlogs].sort(
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
      <header className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[rgb(var(--text))] mb-3">
          Blog
        </h1>
        <p className="text-[rgb(var(--body-text))]">
          A collection of technical write-ups and personal reflections.
        </p>
      </header>

      {/* Blog List */}
      <div className="max-w-3xl mx-auto space-y-16">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-2xl font-semibold text-[rgb(var(--text))] mb-6">
              {year}
            </h2>

            <ul className="divide-y divide-[rgb(var(--divide))]">
              {postsByYear[year].map((post) => (
                <li key={post._id} className="py-6">
                  <article>
                    <div className="flex justify-between items-center mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xl font-medium text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                      <time className="text-sm text-[rgb(var(--muted-text))]">
                        {formatShortDate(post.date)}
                      </time>
                    </div>

                    {post.summary && (
                      <p className="text-[rgb(var(--body-text))] leading-relaxed text-sm md:text-base mt-2">
                        {post.summary}
                      </p>
                    )}

                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-block text-sm text-[rgb(var(--accent))] hover:text-[rgb(var(--accent)/0.6)] transition"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
