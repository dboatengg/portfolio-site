
import fs from "fs"
import path from "path"
import rehypePrettyCode from "rehype-pretty-code"

const postsDir = path.join(process.cwd(), "content", "blog")

export function getAllSlugs() {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")
  return { source }
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