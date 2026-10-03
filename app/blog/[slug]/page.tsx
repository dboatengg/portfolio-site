import { compileMDX } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug, getPostLastModified, isPublished, mdxCompileOptions } from "@/utils/mdx"
import { notFound } from "next/navigation"
import GiscusComments from "@/components/GiscusComments"
import type { Metadata } from "next"
import { formatDate } from "@/utils/formatDate"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ReadingProgress } from "@/components/ReadingProgress"
import TableOfContents from "@/components/TableOfContents"

// Blog components
import RequestDemo from "@/components/mdx/demos/jwt-auth/RequestDemo"
import StatelessDiagram from "@/components/mdx/diagrams/jwt-auth/StatelessDiagram"
// import LoadBalancerDiagram from "@/components/mdx/diagrams/jwt-auth/LoadBalancerDiagram"
import StatelessJWTDiagram from "@/components/mdx/diagrams/jwt-auth/StatelessJWTDiagram"
import TakeNote from "@/components/mdx/shared/TakeNote"
// import TokenAnatomyDiagram from "@/components/mdx/diagrams/jwt-auth/TokenAnatomyDiagram"
// import LoginFlowDiagram from "@/components/mdx/diagrams/jwt-auth/LoginFlowDiagram"
import RequestVerifyDiagram from "@/components/mdx/diagrams/jwt-auth/RequestVerifyDiagram"
import TokenTimelineDiagram from "@/components/mdx/diagrams/jwt-auth/TokenTimelineDiagram"
import WideImage from "@/components/mdx/shared/WideImage"
import { Pre } from "@/components/mdx/shared/Pre"
import { allBlogs } from "contentlayer/generated"
import { siteUrl } from "@/config/site"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// ---------- Helpers ----------

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

type Heading = {
  level: 2 | 3
  text: string
  id: string
}

function extractHeadings(source: string): Heading[] {
  const matches = [...source.matchAll(/^(#{2,3})\s+(.+?)\s*$/gm)]
  return matches.map(([, hashes, rawText]) => {
    // Strip common inline markdown so "**Bold heading**" becomes "Bold heading"
    const text = rawText
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/\[(.+?)\]\(.+?\)/g, "$1")
      .trim()
    return {
      level: hashes.length as 2 | 3,
      text,
      id: slugifyHeading(text),
    }
  })
}

// ---------- TOC component (server-rendered) ----------



// ---------- Custom heading renderers (inject IDs) ----------

function MdxH2({ children }: { children?: React.ReactNode }) {
  const text = String(children)
  return <h2 id={slugifyHeading(text)}>{children}</h2>
}

function MdxH3({ children }: { children?: React.ReactNode }) {
  const text = String(children)
  return <h3 id={slugifyHeading(text)}>{children}</h3>
}

// ---------- Shared MDX component map ----------

const mdxComponents = {
  RequestDemo,
  StatelessDiagram,
  StatelessJWTDiagram,
  TakeNote,
  RequestVerifyDiagram,
  TokenTimelineDiagram,
  pre: Pre,
  img: WideImage,
  h2: MdxH2,
  h3: MdxH3,
}

// ---------- SEO Metadata generation ----------

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const { source } = await getPostBySlug(slug)
  if (!isPublished(source)) notFound()

  const { frontmatter } = await compileMDX<{
    title: string
    summary?: string
    date?: string
    tags?: string[]
    image?: string
  }>({
    source,
    options: mdxCompileOptions,
    components: mdxComponents,
  })

  const title = frontmatter.title || "Untitled Post"
  const description = frontmatter.summary || "Read this article on my blog."
  const url = `${siteUrl}/blog/${slug}`
  const image = new URL(frontmatter.image || "/og-image.jpg", siteUrl).toString()
  const publishedTime = frontmatter.date
    ? new Date(frontmatter.date).toISOString()
    : undefined

  return {
    title,
    description,
    keywords: frontmatter.tags?.join(", "),
    authors: [{ name: "Dickson Boateng", url: siteUrl }],
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} social preview`,
        },
      ],
      publishedTime,
      modifiedTime: getPostLastModified(slug).toISOString(),
      authors: [siteUrl],
      section: "Web development",
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image,
          alt: `${title} social preview`,
        },
      ],
    },
  }
}

// ---------- Blog content renderer ----------

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { source } = await getPostBySlug(slug)
  if (!isPublished(source)) notFound()

  const { content, frontmatter } = await compileMDX<{
    title: string
    summary?: string
    date?: string
    tags?: string[]
    image?: string
  }>({
    source,
    options: mdxCompileOptions,
    components: mdxComponents,
  })

  // Reading time (excluding frontmatter)
  const withoutFrontmatter = source.replace(/^---[\s\S]*?---/, "")
  const plainText = withoutFrontmatter.replace(/<[^>]+>/g, "")
  const wordCount = plainText.split(/\s+/).filter(Boolean).length
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200))
  const readingTime = `${readingMinutes} min read`

  const date = frontmatter.date
    ? new Date(frontmatter.date).toISOString().split("T")[0]
    : undefined
  const lastModified = getPostLastModified(slug)
  const lastModifiedDate = lastModified.toISOString().split("T")[0]
  const currentTags = new Set(frontmatter.tags ?? [])

  // Table of contents headings
  const headings = extractHeadings(withoutFrontmatter)

  // Simple related posts: same tag match, newest first, max 2
  const relatedPosts = [...allBlogs]
    .filter(
      (post) =>
        post.slug !== slug &&
        post.published !== false &&
        new Date(post.date) < new Date(date || 0)
    )
    .sort((a, b) => {
      const sharedTagsA =
        a.tags?.filter((tag) => currentTags.has(tag)).length ?? 0
      const sharedTagsB =
        b.tags?.filter((tag) => currentTags.has(tag)).length ?? 0
      return sharedTagsB - sharedTagsA || +new Date(b.date) - +new Date(a.date)
    })
    .slice(0, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: date,
    description: frontmatter.summary || "Read this article on my blog.",
    image: new URL(frontmatter.image || "/og-image.jpg", siteUrl).toString(),
    keywords: frontmatter.tags?.join(", "),
    author: {
      "@type": "Person",
      name: "Dickson Boateng",
      url: siteUrl,
    },
    publisher: { "@type": "Person", name: "Dickson Boateng" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
    url: `${siteUrl}/blog/${slug}`,
    dateModified: lastModified.toISOString(),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />
      

        <article className="blog-post-wide mx-auto max-w-4xl pt-10 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        {/* <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start lg:gap-x-20 lg:gap-y-0 [&>*]:min-w-0"> */}
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start lg:gap-x-20 lg:gap-y-0">
          <header className="mb-0 lg:col-start-1 lg:row-start-1">
            <h1 className="!text-3xl sm:!text-4xl md:!text-[2.75rem] !leading-tight font-bold tracking-tight mb-5">
              {frontmatter.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[rgb(var(--muted-text))]">
              {date && <span>{formatDate(date)}</span>}
              <span>•</span>
              <span>{readingTime}</span>
            </div>

            {lastModifiedDate !== date && (
              <p className="mt-3 text-sm text-[rgb(var(--muted-text))]">
                Last updated {formatDate(lastModifiedDate)}
              </p>
            )}
          </header>

          <TableOfContents headings={headings} />

          <div className="order-3 min-w-0 prose dark:prose-invert max-w-none prose-p:leading-8 prose-p:mb-6 prose-headings:tracking-tight lg:order-none lg:col-start-1 lg:row-start-2">
            {content}

            {relatedPosts.length > 0 && (
              <section
                className="mt-20 pt-10 border-t border-[rgb(var(--border))]"
                aria-labelledby="related-posts-heading"
            >
                <h2
                  id="related-posts-heading"
                  className="!text-xl !mt-0 !mb-8 !font-semibold !text-[rgb(var(--text))] !no-underline !border-0 !pb-0"
                >
                  Related posts
                </h2>

                <ul className="!not-prose space-y-5 !p-0 !m-0">
                  {relatedPosts.map((post) => {
                    const postDate = post.date
                      ? new Date(post.date).toISOString().split("T")[0]
                      : undefined

                    return (
                      <li key={post.slug} className="!m-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex flex-col gap-1.5 sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-8 sm:items-baseline py-1"
                        >
                          <h3 className="text-base font-medium text-[rgb(var(--text))] sm:order-1">
                            {post.title}
                          </h3>

                          {post.summary && (
                            <p className="text-sm leading-relaxed text-[rgb(var(--muted-text))] sm:col-start-1 sm:order-2">
                              {post.summary}
                            </p>
                          )}

                          <time className="text-xs sm:text-sm text-[rgb(var(--muted-text))] tabular-nums whitespace-nowrap sm:order-3 sm:col-start-2 sm:row-start-1">
                            {postDate ? formatDate(postDate) : ""}
                          </time>
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-10">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--text))] hover:underline underline-offset-4"
                  >
                    <ArrowLeft size={15} />
                    All posts
                  </Link>
                </div>
              </section>
            )}

            <div className="my-16" aria-hidden="true" />
            <GiscusComments />
          </div>
        </div>
      </article>
    </>
  )
}