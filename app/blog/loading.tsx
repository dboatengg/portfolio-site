export default function BlogLoading() {
  return (
    <section className="py-10">
      {/* Header skeleton */}
      <header className="mb-16">
        <div className="h-9 md:h-10 w-24 bg-[rgb(var(--muted))] rounded mb-3 animate-pulse" />
        <div className="h-5 w-full max-w-2xl bg-[rgb(var(--muted))] rounded animate-pulse" />
        <div className="h-5 w-3/4 max-w-xl bg-[rgb(var(--muted))] rounded mt-2 animate-pulse" />
      </header>

      {/* Year group skeleton */}
      <div className="space-y-16">
        {[1, 2].map((yearIndex) => (
          <section key={yearIndex}>
            {/* Year heading skeleton */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-3 w-12 bg-[rgb(var(--muted))] rounded animate-pulse" />
              <div className="flex-1 h-px bg-[rgb(var(--divide))]" />
            </div>

            {/* Post rows skeleton */}
            <ul className="space-y-6">
              {[1, 2, 3].map((i) => (
                <li key={i}>
                  <div className="py-1">
                    <div className="flex flex-col gap-1.5 sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-8 sm:items-baseline">
                      <div className="h-6 w-3/4 bg-[rgb(var(--muted))] rounded animate-pulse" />
                      <div className="h-4 w-20 bg-[rgb(var(--muted))] rounded animate-pulse" />
                    </div>
                    <div className="mt-1.5 h-4 w-full max-w-2xl bg-[rgb(var(--muted))] rounded animate-pulse" />
                    <div className="mt-1 h-4 w-2/3 max-w-xl bg-[rgb(var(--muted))] rounded animate-pulse" />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}