
import fs from "fs"
import path from "path"
import rehypePrettyCode from "rehype-pretty-code"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "content", "blog")

export function getAllSlugs() {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .filter((file) => {
      const source = fs.readFileSync(path.join(postsDir, file), "utf8")
      return matter(source).data.published !== false
    })
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function isPublished(source: string) {
  return matter(source).data.published !== false
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")
  return { source }
}

export function getPostLastModified(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  return fs.statSync(filePath).mtime
}

const rehypeOptions = {
  theme: {
    dark: "one-dark-pro",
    light: "github-light-default",
  },
  keepBackground: true,
  onVisitLine(node: { children: { type: string; value: string }[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine(node: { properties: { className?: string[] } }) {
    node.properties.className = [...(node.properties.className ?? []), "highlighted"]
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    node.properties.className = ["word-highlight"]
  },
}


// export const rehypePlugins = [[rehypePrettyCode, rehypeOptions]] as const
export const rehypePlugins = [[rehypePrettyCode, rehypeOptions]] as any[]

export const mdxCompileOptions = {
  parseFrontmatter: true,
  // Allow JSX expression props (e.g. images={[...]}) in author-written MDX
  blockJS: false,
  mdxOptions: { rehypePlugins },
}

export const lightMdxCompileOptions = {
  parseFrontmatter: true,
  blockJS: false,
  mdxOptions: { rehypePlugins: [] },
}