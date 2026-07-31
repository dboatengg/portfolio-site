import { MDXRemote } from "next-mdx-remote/rsc"
import { Pre } from "@/components/mdx/shared/Pre"

const components = {
  pre: Pre,
}

export default function MDXContent({ code }: { code: string }) {
  return (
    <div className="prose prose-invert prose-headings:scroll-mt-24 max-w-none">
      <MDXRemote source={code} components={components} />
    </div>
  )
}