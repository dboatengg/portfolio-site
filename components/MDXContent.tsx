import { MDXRemote } from "next-mdx-remote/rsc"

export default function MDXContent({ code }: { code: string }) {
  return (
    <div className="prose prose-invert prose-headings:scroll-mt-24 max-w-none">
      <MDXRemote source={code} />
    </div>
  )
}
