import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import GuestbookClient from "@/components/guestbook/GuestbookClient";

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
  const [session, entries] = await Promise.all([
    auth(),
    prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const hasSigned = session?.user
    ? !!(await prisma.guestbookEntry.findUnique({
        where: { githubId: session.user.id },
      }))
    : false;

  return (
    <GuestbookClient
      session={session}
      entries={entries}
      hasSigned={hasSigned}
    />
  );
}