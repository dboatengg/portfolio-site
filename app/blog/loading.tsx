export default function BlogPostLoading() {
  return (
    <article className="max-w-3xl mx-auto pt-10 pb-20">
      {/* Back link */}
      <div className="h-4 w-28 bg-[rgb(var(--divide))] rounded animate-pulse mb-10" />

      {/* Header */}
      <header className="mb-10">
        {/* Title */}
        <div className="h-11 md:h-12 w-3/4 bg-[rgb(var(--divide))] rounded animate-pulse mb-5" />

        {/* Date + reading time */}
        <div className="flex items-center gap-3">
          <div className="h-4 w-24 bg-[rgb(var(--divide))] rounded animate-pulse" />
          <div className="h-3 w-3 bg-[rgb(var(--divide))] rounded-full animate-pulse" />
          <div className="h-4 w-20 bg-[rgb(var(--divide))] rounded animate-pulse" />
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