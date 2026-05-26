"use client";

import { useGuestbook } from "./GuestbookContext";
import EntryCard from "./EntryCard";

export default function GuestbookEntriesClient() {
  const { entries } = useGuestbook();

  return (
    <>
      <p className="text-sm text-[rgb(var(--muted-text))] mb-4">
        {entries.length} {entries.length === 1 ? "entry" : "entries"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </>
  );
}