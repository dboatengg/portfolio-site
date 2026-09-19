'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { savePost } from '@/app/actions/SavePost'

type Draft = {
  slug: string
  title: string
  summary: string
  date: string
  tags: string
  body: string
  published: boolean
}

const emptyDraft: Draft = {
  slug: '',
  title: '',
  summary: '',
  date: new Date().toISOString().slice(0, 10),
  tags: '',
  body: '# Start writing\n\nWrite your article here using Markdown or MDX.',
  published: false,
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-[rgb(var(--muted-text))]">
      <span>{label}</span>
      {children}
    </label>
  )
}

export default function ArticleEditor({ drafts }: { drafts: Draft[] }) {
  const router = useRouter()
  const [selectedSlug, setSelectedSlug] = useState(drafts[0]?.slug || '')
  const [draft, setDraft] = useState<Draft>(drafts[0] || emptyDraft)
  const [isNew, setIsNew] = useState(drafts.length === 0)
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState('')

  function loadDraft(slug: string) {
    const nextDraft = drafts.find((item) => item.slug === slug)
    if (!nextDraft) return
    setSelectedSlug(slug)
    setDraft(nextDraft)
    setIsNew(false)
    setStatus('')
  }

  function update(field: keyof Draft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }))
  }

  function startNew() {
    setSelectedSlug('')
    setDraft(emptyDraft)
    setIsNew(true)
    setStatus('')
  }

  function updatePublished(published: boolean) {
    setDraft((current) => ({ ...current, published }))
  }

  function insertMarkdown(before: string, after = '') {
    const textarea = document.querySelector<HTMLTextAreaElement>('#article-body')
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = draft.body.slice(start, end) || 'your text'
    update('body', `${draft.body.slice(0, start)}${before}${selected}${after}${draft.body.slice(end)}`)
    requestAnimationFrame(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selected.length)
    })
  }

  function handleSubmit(formData: FormData) {
    formData.set('slug', isNew ? '' : selectedSlug)
    formData.set('isNew', String(isNew))
    formData.set('published', String(draft.published))
    setStatus('Saving...')

    startTransition(async () => {
      try {
        const result = await savePost(formData)
        setStatus(result.message)
        setSelectedSlug(result.slug)
        setIsNew(false)
        if (formData.get('intent') === 'preview') {
          router.push(`/write/preview/${result.slug}`)
        } else {
          router.refresh()
        }
      } catch (error) {
        setStatus(error instanceof Error ? error.message : 'Could not save post.')
      }
    })
  }

  return (
    <form action={handleSubmit} className="mx-auto max-w-[1440px] space-y-8">
      <header className="flex flex-col gap-5 border-b border-[rgb(var(--border))] pb-7 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm text-[rgb(var(--accent))]">Writing workspace</p>
          <h1 className="mt-1 text-3xl font-semibold text-[rgb(var(--text))]">Write an article</h1>
          <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--muted-text))]">
            These edits save directly to the MDX files in <code>content/blog</code>. You can always edit the source by hand.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto">
          <select
            value={selectedSlug}
            onChange={(event) => loadDraft(event.target.value)}
            disabled={isNew}
            aria-label="Choose an article"
            className="min-w-0 flex-1 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] xl:min-w-72"
          >
            <option value="">Choose an article</option>
            {drafts.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}
          </select>
          <button type="button" onClick={startNew} className="rounded-lg border border-[rgb(var(--ctrl-border))] px-3 py-2 text-sm font-medium text-[rgb(var(--text))] hover:bg-[rgb(var(--muted))]">
            New article
          </button>
        </div>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-8">
        <aside className="space-y-5 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold text-[rgb(var(--text))]">Article details</h2>
          <Field label="Title">
            <input name="title" value={draft.title} onChange={(event) => update('title', event.target.value)} className="editor-input" required />
          </Field>
          <Field label="Summary">
            <textarea name="summary" value={draft.summary} onChange={(event) => update('summary', event.target.value)} rows={4} className="editor-input resize-y" required />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Field label="Publish date">
              <input name="date" type="date" value={draft.date} onChange={(event) => update('date', event.target.value)} className="editor-input" required />
            </Field>
            <Field label="Tags, comma separated">
              <input name="tags" value={draft.tags} onChange={(event) => update('tags', event.target.value)} className="editor-input" />
            </Field>
          </div>
          <Field label={isNew ? 'Slug (generated from title)' : 'Slug'}>
            <input value={isNew ? (draft.title || 'your-new-article').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : selectedSlug} readOnly className="editor-input opacity-70" />
          </Field>
          <p className="text-xs leading-relaxed text-[rgb(var(--muted-text))]">
            The publish date is independent from the automatic “Last updated” date shown on the public article.
          </p>
          <label className="flex items-center gap-3 rounded-lg border border-[rgb(var(--border))] p-3 text-sm text-[rgb(var(--text))]">
            <input
              type="checkbox"
              checked={draft.published}
              onChange={(event) => updatePublished(event.target.checked)}
              className="h-4 w-4 accent-[rgb(var(--accent))]"
            />
            <span>
              <span className="block font-medium">Published</span>
              <span className="block text-xs text-[rgb(var(--muted-text))]">
                {draft.published ? 'Visible after the next deployment.' : 'Draft only; hidden from the public site.'}
              </span>
            </span>
          </label>
        </aside>

        <section className="min-w-0 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-[rgb(var(--text))]">Article body</h2>
            <div className="flex flex-wrap gap-1" aria-label="Formatting tools">
              <button type="button" onClick={() => insertMarkdown('## ')} className="editor-tool">H2</button>
              <button type="button" onClick={() => insertMarkdown('**', '**')} className="editor-tool">Bold</button>
              <button type="button" onClick={() => insertMarkdown('`', '`')} className="editor-tool">Code</button>
              <button type="button" onClick={() => insertMarkdown('```tsx\n', '\n```')} className="editor-tool">Block</button>
            </div>
          </div>
          <textarea
            id="article-body"
            name="body"
            value={draft.body}
            onChange={(event) => update('body', event.target.value)}
            spellCheck
            className="min-h-[55vh] w-full resize-y rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4 font-mono text-sm leading-7 text-[rgb(var(--text))] outline-none focus:border-[rgb(var(--accent))] focus:ring-2 focus:ring-[rgb(var(--accent)/0.2)] sm:min-h-[65vh]"
            required
          />
          <div className="mt-4 flex flex-col gap-3 text-xs text-[rgb(var(--muted-text))] sm:flex-row sm:items-center sm:justify-between">
            <span className="max-w-xl">Markdown and MDX are supported. Preview the published page before sharing.</span>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <button
                type="submit"
                name="intent"
                value="preview"
                disabled={isPending}
                className="w-full rounded-lg border border-[rgb(var(--ctrl-border))] px-4 py-2.5 font-medium text-[rgb(var(--text))] hover:bg-[rgb(var(--muted))] disabled:opacity-60 sm:w-auto"
              >
                Preview
              </button>
              <button type="submit" disabled={isPending} className="w-full rounded-lg bg-[rgb(var(--accent))] px-4 py-2.5 font-medium text-white disabled:opacity-60 sm:w-auto">
                {isPending ? 'Saving...' : 'Save article'}
              </button>
            </div>
          </div>
          <p className="mt-3 min-h-5 text-sm text-[rgb(var(--accent))]" role="status">{status}</p>
        </section>
      </div>
    </form>
  )
}
