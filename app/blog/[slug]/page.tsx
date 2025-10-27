import { allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import MDXContent from "@/components/MDXContent"

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allBlogs.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Dickson Boateng`,
    description: post.summary,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = allBlogs.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400 text-sm">
          {new Date(post.date).toLocaleDateString()}
        </p>

        {post.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <MDXContent code={post.body.code} />
    </article>
  )
}
