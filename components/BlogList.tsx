import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { formatDate } from "@/utils/formatDate"

export default function BlogList() {
  // Sort by date (descending)
  const posts = allBlogs.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
         Recent Writing
      </h2>

      <ul className="space-y-5">
        {posts.slice(0, 3).map((post, index) => (
          <li
            key={post._id}
            className={`flex justify-between items-baseline pb-3 ${
              index !== 2 ? "border-b border-neutral-800" : ""
            }`}
          >
            <div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-base font-medium hover:underline text-white"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.summary}</p>
            </div>

            <time className="text-sm text-gray-500 whitespace-nowrap">
              {formatDate(post.date)}
            </time>
          </li>
        ))}
      </ul>
    </section>
  )
}
