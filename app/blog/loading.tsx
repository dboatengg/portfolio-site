export default function BlogLoading() {
  return (
    <section className="py-10" aria-busy="true" aria-label="Loading blog posts">
      {/* Header Skeleton */}
      <header className="max-w-3xl mx-auto mb-12">
        <div className="h-10 w-32 bg-[rgb(var(--divide))] rounded animate-pulse mb-3" />
        <div className="h-5 w-80 bg-[rgb(var(--divide))] rounded animate-pulse" />
      </header>

      {/* Blog List Skeleton */}
      <ul className="max-w-3xl mx-auto divide-y divide-[rgb(var(--divide))]">
        {[1, 2, 3].map((i) => (
          <li key={i} className="py-6">
            <article>
              <div className="flex justify-between items-center mb-2">
                <div className="h-6 w-64 bg-[rgb(var(--divide))] rounded animate-pulse" />
                <div className="h-4 w-20 bg-[rgb(var(--divide))] rounded animate-pulse" />
              </div>
              <div className="space-y-2 mt-2">
                <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-[rgb(var(--divide))] rounded animate-pulse" />
              </div>
              <div className="h-4 w-24 bg-[rgb(var(--divide))] rounded animate-pulse mt-4" />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
