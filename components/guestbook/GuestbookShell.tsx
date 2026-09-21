"use client";

import { SessionProvider } from "next-auth/react";
import { GuestbookProvider } from "./GuestbookContext";

type Entry = {
  id: string;
  name: string;
  username: string;
  image: string | null;
  message: string;
  signature: string;
  createdAt: Date;
};

export default function GuestbookShell({
  children,
  initialEntries,
}: {
  children: React.ReactNode;
  initialEntries: Entry[];
}) {
  return (
    <SessionProvider>
      <GuestbookProvider initialEntries={initialEntries}>
        {children}
      </GuestbookProvider>
    </SessionProvider>
  );
}