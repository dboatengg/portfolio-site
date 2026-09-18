
import { compileMDX } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug, mdxCompileOptions } from "@/utils/mdx"
import GiscusComments from "@/components/GiscusComments"
import type { Metadata } from "next"
import { formatDate } from "@/utils/formatDate"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Blog components 
import PolaroidGallery from "../../../components/PolaroidGallery"
import RequestDemo from "@/components/mdx/demos/jwt-auth/RequestDemo"
import StatelessDiagram from "@/components/mdx/diagrams/jwt-auth/StatelessDiagram"
import LoadBalancerDiagram from "@/components/mdx/diagrams/jwt-auth/LoadBalancerDiagram"
import StatelessJWTDiagram from "@/components/mdx/diagrams/jwt-auth/StatelessJWTDiagram"
import TakeNote from "@/components/mdx/shared/TakeNote"
import TokenAnatomyDiagram from "@/components/mdx/diagrams/jwt-auth/TokenAnatomyDiagram"
import LoginFlowDiagram from "@/components/mdx/diagrams/jwt-auth/LoginFlowDiagram"
import RequestVerifyDiagram from "@/components/mdx/diagrams/jwt-auth/RequestVerifyDiagram"
import TokenTimelineDiagram from "@/components/mdx/diagrams/jwt-auth/TokenTimelineDiagram"
import WideImage from "@/components/mdx/shared/WideImage"
import { Pre } from "@/components/mdx/shared/Pre"
import { allBlogs } from "contentlayer/generated"
import { siteUrl } from "@/config/site"

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
    options: mdxCompileOptions,
    components: { 
      PolaroidGallery, 
      RequestDemo, 
      StatelessDiagram, 
      LoadBalancerDiagram, 
      TakeNote, 
      TokenAnatomyDiagram,  
      LoginFlowDiagram, 
      RequestVerifyDiagram, 
      TokenTimelineDiagram,
      pre: Pre,
      img:WideImage,
      },
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
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: `${title} social preview`,
      }],
      publishedTime,
      authors: [siteUrl],
      section: "Web development",
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{
        url: image,
        alt: `${title} social preview`,
      }],
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
    summary?: string
    date?: string
    tags?: string[]
    image?: string
  }>({
    source,
    options: mdxCompileOptions,
    components: { 
      PolaroidGallery, 
      RequestDemo, 
      StatelessDiagram, 
      LoadBalancerDiagram, 
      StatelessJWTDiagram, 
      TakeNote, 
      TokenAnatomyDiagram,  
      LoginFlowDiagram, 
      RequestVerifyDiagram, 
      TokenTimelineDiagram,
      pre: Pre,
      img:WideImage,

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
  const currentTags = new Set(frontmatter.tags ?? [])

  const relatedPosts = [...allBlogs]
    .filter((post) => post.slug !== slug && new Date(post.date) < new Date(date || 0))
    .sort((a, b) => {
      const sharedTagsA = a.tags?.filter((tag) => currentTags.has(tag)).length ?? 0
      const sharedTagsB = b.tags?.filter((tag) => currentTags.has(tag)).length ?? 0

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
      dateModified: date,
    }

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto pt-10 pb-20 prose-p:leading-8 prose-p:mb-6 prose-headings:tracking-tight">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] transition-colors mb-10">
      <ArrowLeft size={16} />
        Back to blog
      </Link>
      <header className="mb-14">
        <h1 className="!text-3xl sm:!text-4xl md:!text-5xl !leading-tight font-bold tracking-tight mb-5">
          {frontmatter.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-[rgb(var(--muted-text))]">
          {date && <span>{formatDate(date)}</span>}
          <span>•</span>
          <span>{readingTime}</span>
        </div>


      </header>
      {content}
      {relatedPosts.length > 0 && (
        <section className="mt-16" aria-labelledby="related-posts-heading">
          <h2 id="related-posts-heading" className="!text-xl !mt-0 mb-4">
            Related posts
          </h2>
          <ul className="space-y-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[rgb(var(--text))] hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <div className="my-16" aria-hidden="true" />
      <GiscusComments />
    </article>
  )
}
