import { MetadataRoute } from "next"
import { getAllSlugs, getPostBySlug, mdxCompileOptions } from "@/utils/mdx"
import { compileMDX } from "next-mdx-remote/rsc"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dicksonboateng.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = getAllSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { source } = await getPostBySlug(slug)
      const { frontmatter } = await compileMDX<{ date?: string }>({
        source,
        options: mdxCompileOptions,
      })

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: frontmatter.date ? new Date(frontmatter.date) : new Date(),
      }
    })
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...posts,
  ]
}