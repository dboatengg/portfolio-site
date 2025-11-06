import { getAllSlugs, getPostBySlug } from "@/utils/mdx"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter } = await getPostBySlug(slug)

  return {
    title: `${frontmatter.title} | Dickson Boateng`,
    description: frontmatter.description || frontmatter.summary,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params                     
  const { content, frontmatter } = await getPostBySlug(slug)

  return (
    <article className="max-w-3xl mx-auto py-8 prose prose-invert">
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
