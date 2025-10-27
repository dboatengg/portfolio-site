import { allBlogs } from "contentlayer/generated"
import Link from "next/link"
import { formatDate } from "@/utils/formatDate" 

export const metadata = {
  title: "Blog | Dickson Boateng",
  description: "Articles and thoughts on software development and personal life.",
}

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li
            key={post._id}
            className="py-4 border-b border-neutral-800 flex justify-between"
          >
            <Link href={`/blog/${post.slug}`} className="text-lg hover:underline">
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
