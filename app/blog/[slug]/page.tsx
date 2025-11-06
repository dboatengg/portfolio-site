import { compileMDX } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug, rehypePlugins } from "@/utils/mdx"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // 👇 Unwrap params (Next.js 15+/React 19)
  const { slug } = await params

  console.log("🧩 BlogPost params:", slug)

  const { source } = await getPostBySlug(slug)

  const { content, frontmatter } = await compileMDX<{
    title: string
    description?: string
    date?: string
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [], rehypePlugins },
    },
  })

  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">{frontmatter.title}</h1>
        {frontmatter.date && (
          <p className="text-gray-400 text-sm">
            {new Date(frontmatter.date).toDateString()}
          </p>
        )}
      </header>
      {content}
    </article>
  )
}
