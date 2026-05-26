"use client";

import { createContext, useContext, useState } from "react";

type Entry = {
  id: string;
  name: string;
  username: string;
  image: string | null;
  message: string;
  signature: string;
  createdAt: Date;
};

type GuestbookContextType = {
  entries: Entry[];
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
  const [entries, setEntries] = useState(initialEntries);

  function addEntry(entry: Entry) {
    setEntries((prev) => [entry, ...prev]);
  }

  return (
    <GuestbookContext.Provider value={{ entries, addEntry }}>
      {children}
    </GuestbookContext.Provider>
  );
}

export function useGuestbook() {
  const ctx = useContext(GuestbookContext);
  if (!ctx) throw new Error("useGuestbook must be used within GuestbookProvider");
  return ctx;
}