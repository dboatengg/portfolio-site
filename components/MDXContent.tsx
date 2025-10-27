"use client"

import { useMDXComponent } from "next-contentlayer/hooks"

export default function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return (
    <div className="prose prose-invert prose-headings:scroll-mt-24 max-w-none">
      <Component />
    </div>
  )
}
