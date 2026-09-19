'use server'

import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { auth } from '@/auth'
import type { Session } from 'next-auth'

const postsDir = path.join(process.cwd(), 'content', 'blog')

export async function isAdmin(session: Session | null) {
  const username = process.env.ADMIN_GITHUB_USERNAME?.trim().toLowerCase()
  const githubId = process.env.ADMIN_GITHUB_ID?.trim()
  const sessionUsername = session?.user?.username?.toLowerCase()
  const sessionId = session?.user?.id

  return Boolean(
    session?.user &&
      ((username && sessionUsername === username) || (githubId && sessionId === githubId))
  )
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function validateSlug(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error('Slug must contain lowercase letters, numbers, and hyphens only.')
  }
}

export async function savePost(formData: FormData) {
  const session = await auth()
  if (!(await isAdmin(session))) {
    throw new Error('You are not authorized to edit blog posts.')
  }

  const title = formData.get('title')?.toString().trim() || ''
  const summary = formData.get('summary')?.toString().trim() || ''
  const date = formData.get('date')?.toString().trim() || ''
  const tags = formData.get('tags')?.toString().split(',').map((tag) => tag.trim()).filter(Boolean) || []
  const body = formData.get('body')?.toString().trim() || ''
    const published = formData.get('published') === 'true'
  const requestedSlug = formData.get('slug')?.toString().trim() || ''
  const isNew = formData.get('isNew') === 'true'
  const slug = requestedSlug || slugify(title)

  if (!title || !summary || !date || !body) {
    throw new Error('Title, summary, date, and article body are required.')
  }
  validateSlug(slug)

  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (isNew) {
    try {
      await fs.access(filePath)
      throw new Error('A post with this slug already exists.')
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error
    }
  }

  const source = matter.stringify(`\n${body}\n`, {
    title,
    date,
    summary,
    published,
    ...(tags.length > 0 ? { tags } : {}),
  })

  await fs.writeFile(filePath, source, 'utf8')
  return { slug, message: isNew ? 'Draft created.' : 'Post saved.' }
}

