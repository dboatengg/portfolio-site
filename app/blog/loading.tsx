export default function BlogLoading() {
  return (
    <section className="py-10" aria-busy="true" aria-label="Loading blog posts">
      {/* Header Skeleton */}
      <header className="mb-12">
        <div className="h-10 w-24 bg-[rgb(var(--divide))] rounded animate-pulse mb-3" />
        <div className="h-5 w-full max-w-md bg-[rgb(var(--divide))] rounded animate-pulse" />
      </header>

      {/* Blog List Skeleton */}
      <div className="space-y-12">
        {[1, 2].map((group) => (
          <section key={group}>
            {/* Year heading skeleton */}
            <div className="h-4 w-12 bg-[rgb(var(--divide))] rounded animate-pulse mb-4" />

            <ul className="space-y-5">
              {[1, 2, 3].map((i) => (
                <li
                  key={i}
                  className={`pb-3 ${
                    i !== 3 ? "border-b border-[rgb(var(--divide))]" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-start justify-between gap-4 w-full">
                      <div className="h-5 flex-1 max-w-md bg-[rgb(var(--divide))] rounded animate-pulse" />

                      <div className="hidden sm:flex items-center gap-3 shrink-0 pt-0.5">
                        <div className="h-3 w-16 bg-[rgb(var(--divide))] rounded animate-pulse" />
                        <div className="h-3.5 w-3.5 bg-[rgb(var(--divide))] rounded animate-pulse" />
                      </div>
                    </div>

                    <div className="space-y-2 mt-1">
                      <div className="h-4 w-full bg-[rgb(var(--divide))] rounded animate-pulse" />
                      <div className="h-4 w-3/4 bg-[rgb(var(--divide))] rounded animate-pulse" />
                    </div>
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