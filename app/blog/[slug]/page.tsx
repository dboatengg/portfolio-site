// import GiscusComments from "@/components/GiscusComments"
// import { compileMDX } from "next-mdx-remote/rsc"
// import { getAllSlugs, getPostBySlug, rehypePlugins } from "@/utils/mdx"

// export async function generateStaticParams() {
//   return getAllSlugs().map((slug) => ({ slug }))
// }

// export default async function BlogPost({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {
//   const { slug } = await params

//   console.log("🧩 BlogPost params:", slug)

//   const { source } = await getPostBySlug(slug)

//   const { content, frontmatter } = await compileMDX<{
//     title: string
//     description?: string
//     date?: string
//   }>({
//     source,
//     options: {
//       parseFrontmatter: true,
//       mdxOptions: { remarkPlugins: [], rehypePlugins },
//     },
//   })

//   return (
//     <article className="prose prose-invert max-w-3xl mx-auto py-8">
//       <header className="mb-10">
//         <h1 className="!text-2xl sm:!text-3xl md:!text-4xl font-bold mb-3">{frontmatter.title}</h1>
//         {frontmatter.date && (
//           <p className="text-gray-400 text-sm">
//             {new Date(frontmatter.date).toISOString().split("T")[0]}

//           </p>
//         )}
//       </header>
//       {content}
//       <GiscusComments />
//     </article>
//   )
// }


//SEO READY VERSION
import { compileMDX } from "next-mdx-remote/rsc"
import { getAllSlugs, getPostBySlug, rehypePlugins } from "@/utils/mdx"
import GiscusComments from "@/components/GiscusComments"
import type { Metadata } from "next"
import { formatDate } from "@/utils/formatDate"

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
    <article className="prose prose-invert max-w-3xl mx-auto py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-10">
        <h1 className="!text-2xl sm:!text-3xl md:!text-4xl font-bold mb-3">
          {frontmatter.title}
        </h1>
        {date && (
          <p className="text-[rgb(var(--muted-text))] text-sm">{formatDate(date)}</p>
        )}
      </header>
      {content}
      <GiscusComments />
    </article>
  )
}
