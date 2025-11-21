import fs from "fs"
import path from "path"
import rehypePrettyCode from "rehype-pretty-code"
// import type { Pluggable } from "unified"

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

export const rehypePlugins = [
  [
    rehypePrettyCode,
    {
      theme: "github-dark",
      keepBackground: false,
      onVisitLine(node: any) {
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }]
        }
      },
      onVisitHighlightedLine(node: any) {
        node.properties.className.push("highlighted")
      },
      onVisitHighlightedWord(node: any) {
        node.properties.className = ["word-highlight"]
      },
    },
  ],
] as any 