import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/admin";
import DeleteEntryButton from "./DeleteEntryButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Guestbook admin",
  robots: { index: false, follow: false },
};

export default async function AdminGuestbookPage() {
  const session = await auth();
  // Signed out and non-admin both get a 404, so the page doesn't advertise itself
  if (!isAdmin(session)) notFound();

  // Deliberately uncached, and no signature column, since it isn't needed here
  const entries = await prisma.guestbookEntry.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
    select: {
      id: true,
      name: true,
      username: true,
      message: true,
      createdAt: true,
    },
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-medium mb-1 text-[rgb(var(--text))]">
        Guestbook admin
      </h1>
      <p className="text-sm text-[rgb(var(--muted-text))] mb-8">
        {entries.length} {entries.length === 1 ? "entry" : "entries"}
      </p>

      <div className="flex flex-col gap-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-xl p-4 flex items-start justify-between gap-4"
          >
            <div className="min-w-0">
              <p className="text-sm text-[rgb(var(--text))] break-words">
                {entry.message}
              </p>
              <p className="text-xs text-[rgb(var(--muted-text))] mt-2">
                {entry.name} (@{entry.username}) ·{" "}
                {entry.createdAt.toLocaleString("en-GB")}
              </p>
            </div>
            <DeleteEntryButton id={entry.id} name={entry.name} />
          </div>
        ))}
      </div>
    </main>
  );
}