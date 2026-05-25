
import { compileMDX } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug, rehypePlugins } from "@/utils/mdx"
import GiscusComments from "@/components/GiscusComments"
import type { Metadata } from "next"
import { formatDate } from "@/utils/formatDate"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// SEO Metadata generation
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const { source } = await getPostBySlug(slug)

  const { frontmatter } = await compileMDX<{
    title: string
    summary?: string
    date?: string
    tags?: string[]
    image?: string
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins },
    },
  })

  const title = frontmatter.title || "Untitled Post"
  const description = frontmatter.summary || "Read this article on my blog."
  // const keywords = frontmatter.tags?.join(", ")
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dicksonboateng.com"
  const url = `${baseUrl}/blog/${slug}`
  const image = frontmatter.image || `${baseUrl}/og-image.jpg`

  return {
    title,
    description,
    keywords: frontmatter.tags?.join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      
      type: "article",
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

// Blog content renderer
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { source } = await getPostBySlug(slug)

  const { content, frontmatter } = await compileMDX<{
    title: string
    description?: string
    date?: string
    tags?: string[]
    image?: string
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins },
    },
  })

  // --- Reading time (computed locally) ---
  const plainText = source.replace(/<[^>]+>/g, "")
  const wordCount = plainText.split(/\s+/).length
  const readingMinutes = Math.ceil(wordCount / 200)
  const readingTime = `${readingMinutes} min read`

  const date = frontmatter.date
    ? new Date(frontmatter.date).toISOString().split("T")[0]
    : undefined

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: date,
    description: frontmatter.description,
    keywords: frontmatter.tags?.join(", "),
    author: { "@type": "Person", name: "Dickson Boateng" },
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
  }

  return (
    <article className=" prose prose-invert max-w-3xl mx-auto pt-10 pb-20 text-zinc-300 leading-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] transition-colors mb-10">
      <ArrowLeft size={16} />
        Back to blog
      </Link>
      <header className="mb-10">
        {/* <h1 className="!text-2xl sm:!text-3xl md:!text-4xl font-bold mb-3"> */}
        <h1 className="!text-3xl sm:!text-4xl md:!text-5xl !leading-tight font-bold tracking-tight mb-5">
          {frontmatter.title}
        </h1>
        {/* {date && (
          <p className="text-[rgb(var(--muted-text))] text-sm">{formatDate(date)}</p>
        )} */}

        {/* Date + Reading time */}
        {/* <div className="flex items-center gap-3 text-[rgb(var(--muted-text))] text-sm"> */}
        <div className="flex items-center gap-2 text-sm text-[rgb(var(--muted-text))]">
          {date && <span>{formatDate(date)}</span>}
          <span>•</span>
          <span>{readingTime}</span>
        </div>



        {/* TAGS */}
        {frontmatter.tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full 
                bg-[rgb(var(--surface-solid))] text-[rgb(var(--muted-text))] 
                dark:bg-zinc-800 dark:text-zinc-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      {content}
      <hr className="my-16 border-[rgb(var(--border))]" />
      {/* <div className="mt-16 rounded-2xl border border-[rgb(var(--border))] p-4 sm:p-6">
        <GiscusComments />
      </div> */}
      <GiscusComments />
    </article>
  )
}
