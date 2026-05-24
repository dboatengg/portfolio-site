import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { formatShortDate } from "@/utils/formatShortDate"

export default function BlogList() {
  // Sort by date (descending)
  const posts = allBlogs.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
         Recent Writing
      </h2>

      <ul className="space-y-5">
        {posts.slice(0, 3).map((post, index) => (
          <li
            key={post._id}
            className={`pb-3 ${index !== 2 ? "border-b border-[rgb(var(--divide))]" : ""}`}
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-wrap justify-between items-baseline gap-4 w-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="min-w-0 flex-1 text-base font-medium hover:underline text-[rgb(var(--text))]"
                >
                  {post.title}
                </Link>

                <time className="text-sm text-[rgb(var(--muted-text))] whitespace-nowrap">
                  {formatShortDate(post.date)}
                </time>
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
  )
}
