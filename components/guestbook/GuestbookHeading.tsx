"use client";

import { useSession } from "next-auth/react";

export default function GuestbookHeading() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-2xl font-medium mb-1 text-[rgb(var(--text))]">
        {session?.user ? `Hello, ${session.user.name}` : "Guestbook"}
      </h1>
      <p className="text-sm text-[rgb(var(--muted-text))]">
        Leave your mark to let me know you stopped by.
      </p>
    </div>
  );
}