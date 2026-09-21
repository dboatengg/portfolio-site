"use client";

import useSWR from "swr";
import { useSession } from "next-auth/react";
import GuestbookFormClient from "./GuestbookFormClient";

async function fetcher(url: string): Promise<{ hasSigned: boolean }> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to check signature status");
  return response.json();
}

export default function GuestbookFormSection() {
  const { data: session, status } = useSession();
  const signedIn = !!session?.user;

  const { data, error } = useSWR(
    signedIn ? "/api/guestbook/me" : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (status === "loading" || (signedIn && !data && !error)) {
    return <FormSkeleton />;
  }

  return (
    <GuestbookFormClient
      session={session ?? null}
      hasSigned={data?.hasSigned ?? false}
    />
  );
}

export function FormSkeleton() {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="h-4 w-16 bg-[rgb(var(--muted))] rounded animate-pulse" />
      <div className="h-9 w-36 bg-[rgb(var(--muted))] rounded-lg animate-pulse" />
    </div>
  );
}