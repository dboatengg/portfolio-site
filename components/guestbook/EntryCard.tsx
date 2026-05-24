type Entry = {
  id: string;
  name: string;
  username: string;
  image: string | null;
  message: string;
  signature: string;
  createdAt: Date;
};

export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="bg-[rgb(var(--card))] border border-[rgb(var(--border))] border-l-[3px] border-l-[rgb(var(--accent))] rounded-r-xl p-4 flex flex-col gap-3">
      <p className="text-sm text-[rgb(var(--body-text))] leading-relaxed">
        {entry.message}
      </p>

      <div className="flex items-end justify-between gap-4 mt-auto flex-nowrap">
        <div className="min-w-0">
          <span className="text-sm font-medium text-[rgb(var(--text))] whitespace-nowrap block">
            {entry.name}
          </span>
          <p className="text-xs text-[rgb(var(--muted-text))] whitespace-nowrap">
            {new Date(entry.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              // hour: "2-digit",
              // minute: "2-digit",
            })}
          </p>
        </div>
        <img
          src={entry.signature}
          alt={`${entry.name}'s signature`}
          className="signature-img flex-shrink-0"
          style={{ maxHeight: "64px", maxWidth: "180px", objectFit: "contain", flexShrink: 0 }}
        />
      </div>
    </div>
  );
}