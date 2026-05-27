import { Suspense } from "react";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import GuestbookEntries, { EntriesSkeleton } from "@/components/guestbook/GuestbookEntries";
import GuestbookFormSection, { FormSkeleton } from "@/components/guestbook/GuestbookFormSection";
import GuestbookShell from "@/components/guestbook/GuestbookShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook | Dickson Boateng",
  description:
    " I specialize in building responsive, user-friendly web applications with modern technologies such as Next.js, React, PostgreSQL,Prisma, etc.",
  alternates: {
    canonical: "/guestbook",
  },
};

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
  const [session, initialEntries] = await Promise.all([
    auth(),
    prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <GuestbookShell initialEntries={initialEntries}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-medium mb-1 text-[rgb(var(--text))]">
              {session?.user ? `Hello, ${session.user.name}` : "Guestbook"}
            </h1>
            <p className="text-sm text-[rgb(var(--muted-text))]">
              Leave your mark and let me know you stopped by.
            </p>
          </div>

          <Suspense fallback={<FormSkeleton />}>
            <GuestbookFormSection session={session} />
          </Suspense>
        </div>

        <Suspense fallback={<EntriesSkeleton />}>
          <GuestbookEntries />
        </Suspense>
      </GuestbookShell>
    </main>
  );
}