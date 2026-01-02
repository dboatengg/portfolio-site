export default function BlogPostLoading() {
  return (
    <article className="max-w-3xl mx-auto py-8">
      {/* Title */}
      <header className="mb-10">
        <div className="h-10 w-3/4 bg-[rgb(var(--divide))] rounded animate-pulse mb-3" />

        {/* Date + Reading time */}
        <div className="flex items-center gap-3">
          <div className="h-4 w-28 bg-[rgb(var(--divide))] rounded animate-pulse" />
          <div className="h-4 w-4 bg-[rgb(var(--divide))] rounded-full animate-pulse" />
          <div className="h-4 w-20 bg-[rgb(var(--divide))] rounded animate-pulse" />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-16 bg-[rgb(var(--divide))] rounded-full animate-pulse"
            />
          ))}
        </div>
      </header>

      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-[rgb(var(--divide))] rounded animate-pulse" />

        {/* Code block placeholder */}
        <div className="h-32 w-full bg-[rgb(var(--divide))] rounded animate-pulse mt-6" />

        <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-4/5 bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-[rgb(var(--divide))] rounded animate-pulse" />
      </div>
    </article>
  );
}
