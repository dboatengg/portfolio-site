import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { auth } from '@/auth'
import { isAdmin } from '@/app/actions/SavePost'
import { getPostBySlug } from '@/utils/mdx'
import { mdxCompileOptions } from '@/utils/mdx'
import Link from 'next/link'
import RequestDemo from '@/components/mdx/demos/jwt-auth/RequestDemo'
import StatelessDiagram from '@/components/mdx/diagrams/jwt-auth/StatelessDiagram'
import LoadBalancerDiagram from '@/components/mdx/diagrams/jwt-auth/LoadBalancerDiagram'
import StatelessJWTDiagram from '@/components/mdx/diagrams/jwt-auth/StatelessJWTDiagram'
import TakeNote from '@/components/mdx/shared/TakeNote'
import TokenAnatomyDiagram from '@/components/mdx/diagrams/jwt-auth/TokenAnatomyDiagram'
import LoginFlowDiagram from '@/components/mdx/diagrams/jwt-auth/LoginFlowDiagram'
import RequestVerifyDiagram from '@/components/mdx/diagrams/jwt-auth/RequestVerifyDiagram'
import TokenTimelineDiagram from '@/components/mdx/diagrams/jwt-auth/TokenTimelineDiagram'
import WideImage from '@/components/mdx/shared/WideImage'
import { Pre } from '@/components/mdx/shared/Pre'

export const metadata: Metadata = {
  title: 'Article preview',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function ArticlePreview({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const session = await auth()
  if (!session || !(await isAdmin(session))) notFound()

  const { slug } = await params
  let source: string
  try {
    source = (await getPostBySlug(slug)).source
  } catch {
    notFound()
  }

  const { content, frontmatter } = await compileMDX<{
    title: string
    summary?: string
    date?: string
  }>({
    source,
    options: mdxCompileOptions,
    components: {
      RequestDemo,
      StatelessDiagram,
      LoadBalancerDiagram,
      StatelessJWTDiagram,
      TakeNote,
      TokenAnatomyDiagram,
      LoginFlowDiagram,
      RequestVerifyDiagram,
      TokenTimelineDiagram,
      pre: Pre,
      img: WideImage,
    },
  })

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[rgb(var(--accent)/0.3)] bg-[rgb(var(--accent)/0.08)] px-4 py-3 text-sm">
        <span className="text-[rgb(var(--text))]">Private preview. This page is not public or indexed.</span>
        <Link href="/write" className="font-medium text-[rgb(var(--accent))] hover:underline">Back to editor</Link>
      </div>
      <article className="prose dark:prose-invert max-w-3xl prose-p:leading-8 prose-p:mb-6 prose-headings:tracking-tight">
        <header className="mb-14">
          <h1 className="!text-3xl sm:!text-4xl md:!text-5xl !leading-tight font-bold tracking-tight mb-5">
            {frontmatter.title}
          </h1>
          {frontmatter.summary && <p className="lead">{frontmatter.summary}</p>}
          {frontmatter.date && <p className="text-sm text-[rgb(var(--muted-text))]">Publish date: {String(frontmatter.date)}</p>}
        </header>
        {content}
      </article>
    </main>
  )
}
