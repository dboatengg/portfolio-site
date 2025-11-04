import { allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import MDXContent from "@/components/MDXContent"

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = allBlogs.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Dickson Boateng`,
    description: post.summary,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-2 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold leading-tight mb-3">
          {post.title}
        </h1>

        <p className="text-gray-400 text-sm">
          {post.formattedDate}{" "}
          {post.readingTime?.text && (
            <>
              • <span>{post.readingTime.text}</span>
            </>
          )}
        </p>

        {post.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className="prose prose-invert prose-neutral max-w-none leading-relaxed">
        <MDXContent code={post.body.code} />
      </div>
    </article>
  )
}
