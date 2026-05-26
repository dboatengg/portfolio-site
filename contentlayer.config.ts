import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

//  Define Blog document type
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },

    readingTime: {
      type: "json",
      resolve: (doc) => {
        const text = doc.body.raw ?? ""
        const words = text.split(/\s+/).length
        const minutes = Math.ceil(words / 200)
        return {
          minutes,
          text: `${minutes} min read`,
        }
      },
    },

    formattedDate: {
      type: "string",
      resolve: (doc) =>
        new Date(doc.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
    },
  },
}))

// rehype-pretty-code config
const rehypeOptions = {
  theme: {
    dark: "one-dark-pro",
    light: "github-light",
  },
  keepBackground: false,
  defaultLang: "js",
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
}

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
  },
})
