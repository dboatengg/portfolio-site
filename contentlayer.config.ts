import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

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

    // Reading time field
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
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
  },
})
