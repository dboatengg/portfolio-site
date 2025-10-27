import { allBlogs } from "contentlayer/generated"
import Link from "next/link"

export const metadata = {
  title: "Blog | Dickson Boateng",
  description: "Articles and thoughts on software development and personal life.",
}

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => +new Date(b.date) - +new Date(a.date)) // Sort posts by date descending

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="divide-y divide-neutral-800">
        {posts.map((post) => (
          <li
            key={post._id}
            className="py-4 flex justify-between items-center hover:bg-neutral-900/40 transition-colors rounded-lg px-3"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium hover:underline"
            >
              {post.title}
            </Link>
            <time className="text-gray-400 text-sm">
              {new Date(post.date).toLocaleDateString()} 
            </time>
          </li>
        ))}
      </ul>
    </section>
  )
}
