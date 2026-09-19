"use client";

import { useEffect, useState } from "react";
import { useGuestbook } from "./GuestbookContext";
import EntryCard from "./EntryCard";

export default function GuestbookEntriesClient() {
  const { entries, setEntries } = useGuestbook();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/guestbook")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load guestbook entries");
        return response.json();
      })
      .then((loadedEntries) => {
        if (active) {
          setEntries(loadedEntries);
          setError(false);
        }
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [setEntries]);

  if (loading) {
    return <EntriesLoading />;
  }

  if (error) {
    return (
      <p className="text-sm text-[rgb(var(--muted-text))]" role="status">
        Guestbook entries could not be loaded right now.
      </p>
    );
  }

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

function EntriesLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3" aria-busy="true">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-[rgb(var(--card))] border border-[rgb(var(--border))] border-l-[3px] border-l-[rgb(var(--accent))] rounded-r-xl p-4 flex flex-col gap-3"
        >
          <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-3/4" />
          <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-full" />
          <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-1/2" />
        </div>
      ))}
    </div>
  );
}