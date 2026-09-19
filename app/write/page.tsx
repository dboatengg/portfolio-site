import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { isAdmin } from '@/app/actions/SavePost'
import ArticleEditor from '@/components/ArticleEditor'

type PostDraft = {
  slug: string
  title: string
  summary: string
  date: string
  tags: string
  body: string
  published: boolean
}

function getDrafts(): PostDraft[] {
  const postsDir = path.join(process.cwd(), 'content', 'blog')

  return fs.readdirSync(postsDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const source = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const parsed = matter(source)
      const date = parsed.data.date instanceof Date
        ? parsed.data.date.toISOString().slice(0, 10)
        : String(parsed.data.date || '')

      return {
        slug,
        title: String(parsed.data.title || ''),
        summary: String(parsed.data.summary || ''),
        date,
        tags: Array.isArray(parsed.data.tags) ? parsed.data.tags.join(', ') : '',
        body: parsed.content.trim(),
        published: parsed.data.published !== false,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export const dynamic = 'force-dynamic'

export default async function WritePage() {
  const session = await auth()
  if (!session) redirect('/api/auth/signin?callbackUrl=/write')
  if (!(await isAdmin(session))) {
    return (
      <section className="mx-auto max-w-2xl py-20 text-center">
        <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">Writing access is not enabled</h1>
        <p className="mt-3 text-[rgb(var(--muted-text))]">
          You are signed in as <strong>{session.user.username || session.user.name}</strong>, but this account is not configured as the blog editor administrator.
        </p>
        <p className="mt-3 text-sm text-[rgb(var(--muted-text))]">
          Set <code>ADMIN_GITHUB_USERNAME</code> or <code>ADMIN_GITHUB_ID</code> on the server, then restart the app.
        </p>
      </section>
    )
  }

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 px-4 py-8 sm:px-6 lg:px-10">
      <ArticleEditor drafts={getDrafts()} />
    </section>
  )
}
