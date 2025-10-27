import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { formatDate } from "@/utils/formatDate"

export default function BlogList() {
  const posts = allBlogs.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  )

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-neutral-400">✍</span> Writing
      </h2>

      <ul className="space-y-5">
        {posts.slice(0, 5).map((post) => (
          <li
            key={post._id}
            className="flex justify-between items-baseline border-b border-neutral-800 pb-3"
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
