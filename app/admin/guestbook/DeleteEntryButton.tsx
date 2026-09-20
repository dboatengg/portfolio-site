"use client";

import { useState, useTransition } from "react";
import { deleteGuestbookEntry } from "./actions";

export default function DeleteEntryButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    if (
      !window.confirm(`Delete ${name}'s entry? They will be able to sign again.`)
    ) {
      return;
    }
    setError(null);
    startTransition(async () => {
      const result = await deleteGuestbookEntry(id);
      if (!result.ok) setError(result.error ?? "Could not delete.");
    });
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={pending}
        className="text-sm px-3 py-1.5 rounded border border-[rgb(var(--border))] text-[rgb(var(--text))] hover:bg-[rgb(var(--muted))] disabled:opacity-50"
      >
        {pending ? "Deleting..." : "Delete"}
      </button>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}