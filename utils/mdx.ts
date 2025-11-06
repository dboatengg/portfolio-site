// lib/mdx.ts
import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"


export type BlogFrontmatter = {
    title: string
    description?: string
    summary?: string
    date?: string
    tags?: string[]
}

const BLOG_PATH = path.join(process.cwd(), "content", "blog")

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  })

  return { content, frontmatter }
}


// export async function getPostBySlug(slug: string) {
//   const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
//   const source = fs.readFileSync(filePath, "utf8")

//   const { content, frontmatter } = await compileMDX({
//     source,
//     options: { parseFrontmatter: true },
//   })

//   return { content, frontmatter }
// }

export function getAllSlugs() {
  return fs
    .readdirSync(BLOG_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}


