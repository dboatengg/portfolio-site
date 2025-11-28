export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-24 animate-fadeIn">
      <div className="flex gap-2">
        <span className="h-3 w-3 bg-accent rounded-full animate-bounce [animation-delay:-0.2s]"></span>
        <span className="h-3 w-3 bg-accent rounded-full animate-bounce [animation-delay:-0.1s]"></span>
        <span className="h-3 w-3 bg-accent rounded-full animate-bounce"></span>
      </div>

      <p className="mt-6 text-muted-text text-sm">Loading article…</p>
    </div>
  );
}
