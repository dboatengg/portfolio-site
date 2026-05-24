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
        <p className="text-sm md:text-base text-[rgb(var(--muted-text))] max-w-2xl">
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

            <ul className="space-y-5">
              {postsByYear[year].map((post, index) => (
                <li
                  key={post._id}
                  className={`flex justify-between items-baseline pb-3 ${
                    index !== postsByYear[year].length - 1
                      ? "border-b border-[rgb(var(--divide))]"
                      : ""
                  }`}
                >
                  <div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-base font-medium hover:underline text-white"
                    >
                      {post.title}
                    </Link>
                    {post.summary && (
                      <p className="text-sm text-gray-500 mt-2">
                        {post.summary}
                      </p>
                    )}
                  </div>

                  <time className="text-sm text-gray-500 whitespace-nowrap">
                    {formatShortDate(post.date)}
                  </time>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
