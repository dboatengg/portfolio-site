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
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">
        Recent Writing
      </h2>

      <ul className="space-y-5">
        {posts.slice(0, 3).map((post, index) => (
          <li
            key={post._id}
            className={`pb-3 ${index !== 2 ? "border-b border-[rgb(var(--divide))]" : ""}`}
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

      <Link
        href="/blog"
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--text))] hover:underline"
      >
        Browse all posts
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  )
}