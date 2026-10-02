import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { ArrowRight } from "lucide-react"
import { formatShortDate } from "@/utils/formatShortDate"

export default function BlogList({ posts: allPosts }: { posts: typeof allBlogs }) {
  // Sort by date (descending)
  const posts = [...allPosts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  return (
    <section className="mb-16 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))] p-6 sm:p-8">
      <h2 className="section-heading">Recent Writing</h2>

      <ul className="space-y-5">
        {posts.slice(0, 3).map((post, index) => (
          <li
            key={post._id}
            className={`pb-3 ${index !== 2 ? "border-b border-[rgb(var(--divide))]" : ""}`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 w-full rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--accent))]"
            >
              <div className="flex items-start justify-between gap-4 w-full">
                <h3 className="text-link min-w-0 flex-1 text-base font-medium">
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

      <Link
        href="/blog"
        className="text-link mt-7 inline-flex items-center gap-2 text-sm font-medium"
      >
        Browse all posts
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  )
}