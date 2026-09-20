"use client";

import { createContext, useContext } from "react";
import useSWR from "swr";

export type Entry = {
  id: string;
  name: string;
  username: string;
  image: string | null;
  message: string;
  signature: string;
  createdAt: Date;
};

export const GUESTBOOK_KEY = "/api/guestbook";

async function fetcher(url: string): Promise<Entry[]> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to load guestbook entries");
  return response.json();
}

type GuestbookContextType = {
  entries: Entry[];
  loading: boolean;
  error: boolean;
  setEntries: (entries: Entry[]) => void;
  addEntry: (entry: Entry) => void;
};

const GuestbookContext = createContext<GuestbookContextType | null>(null);

export function GuestbookProvider({
  children,
  initialEntries,
}: {
  children: React.ReactNode;
  initialEntries: Entry[];
}) {
  const { data, error, isLoading, mutate } = useSWR<Entry[]>(
    GUESTBOOK_KEY,
    fetcher,
    {
      fallbackData: initialEntries.length > 0 ? initialEntries : undefined,
      // Once loaded, reuse the cached list for the rest of the session
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  function setEntries(entries: Entry[]) {
    void mutate(entries, { revalidate: false });
  }

  function addEntry(entry: Entry) {
    void mutate((prev) => [entry, ...(prev ?? [])], { revalidate: false });
  }

  return (
    <GuestbookContext.Provider
      value={{
        entries: data ?? [],
        loading: isLoading,
        error: !data && !!error,
        setEntries,
        addEntry,
      }}
    >
      {children}
    </GuestbookContext.Provider>
  );
}

export function useGuestbook() {
  const ctx = useContext(GuestbookContext);
  if (!ctx) throw new Error("useGuestbook must be used within GuestbookProvider");
  return ctx;
}