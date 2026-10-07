export default function BlogPostLoading() {
  return (
    <article className="blog-post-wide mx-auto max-w-4xl pt-10 pb-20">
      {/* Back link skeleton */}
      <div className="mb-10">
        <div className="h-4 w-32 bg-[rgb(var(--muted))] rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start lg:gap-x-20 lg:gap-y-0">
        {/* Header — spans both columns */}
        <header className="mb-0 lg:col-span-2">
          {/* Title */}
          <div className="h-9 sm:h-10 md:h-11 w-full bg-[rgb(var(--muted))] rounded animate-pulse mb-3" />
          <div className="h-9 sm:h-10 md:h-11 w-3/4 bg-[rgb(var(--muted))] rounded animate-pulse mb-5" />

          {/* Date • reading time */}
          <div className="flex items-center gap-2 mt-2">
            <div className="h-4 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-3 w-3 rounded-full bg-[rgb(var(--muted))] animate-pulse" />
            <div className="h-4 w-20 bg-[rgb(var(--muted))] rounded animate-pulse" />
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:flex mt-10 items-center gap-3">
            <span className="h-px flex-1 bg-[rgb(var(--border))]" />
            <span className="h-1 w-1 rounded-full bg-[rgb(var(--muted))]" />
            <span className="h-px flex-1 bg-[rgb(var(--border))]" />
          </div>
        </header>

        {/* Mobile TOC skeleton — sticky bar */}
        <div className="lg:hidden -mx-5 sm:-mx-6 md:-mx-8">
          <div className="flex min-h-12 items-center justify-between border-b border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.9)] px-5 py-3 sm:px-6 md:px-8">
            <div className="h-3 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-4 bg-[rgb(var(--muted))] rounded animate-pulse" />
          </div>
        </div>

        {/* Desktop TOC skeleton — sidebar */}
        <div className="hidden lg:block lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4">
            <div className="h-3 w-24 bg-[rgb(var(--muted))] rounded animate-pulse mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-3 bg-[rgb(var(--muted))] rounded animate-pulse ${
                    i === 3 ? "ml-3 w-5/6" : "w-full"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content skeleton */}
        <div className="order-3 min-w-0 lg:order-none lg:col-start-1 lg:row-start-2">
          {/* Paragraph 1 */}
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-full bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-[rgb(var(--muted))] rounded animate-pulse" />
          </div>

          {/* Heading */}
          <div className="h-6 w-2/3 bg-[rgb(var(--muted))] rounded animate-pulse mb-4 mt-12" />

          {/* Paragraph 2 */}
          <div className="space-y-3 mb-8">
            <div className="h-4 w-full bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-full bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-full bg-[rgb(var(--muted))] rounded animate-pulse" />
          </div>

          {/* Code block */}
          <div className="h-40 w-full bg-[rgb(var(--muted))] rounded-xl animate-pulse mb-8 -mx-5 sm:-mx-6 md:-mx-12 w-[calc(100%+2.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]" />

          {/* Paragraph 3 */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-[rgb(var(--muted))] rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-[rgb(var(--muted))] rounded animate-pulse" />
          </div>
        </div>
      </div>
    </article>
  );
}