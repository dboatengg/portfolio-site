import { allBlogs } from "contentlayer/generated"
import Link from "next/link"
import { formatDate } from "@/utils/formatDate" 

export const metadata = {
  title: "Blog | Dickson Boateng",
  description: "Articles and thoughts on software development and personal life.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return (
    <section className="py-10">
      <header className="max-w-3xl mx-auto mb-10 space-y-8">
        <h1 className="text-3xl font-bold mb-3">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">Sharing technical guides, personal stories and experiences.</p>

      </header>
      <ul>
        {posts.map((post, index) => (
          <li
            key={post._id}
            className={`py-4 flex justify-between ${
              index !== posts.length - 1 ? "border-b border-neutral-800" : ""
            }`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg hover:underline text-white"
            >
              {post.title}
            </Link>
            <time className="text-gray-400 text-sm">
              {formatDate(post.date)} 
            </time>
          </li>
        ))}
      </ul>
    </section>
  )
}
