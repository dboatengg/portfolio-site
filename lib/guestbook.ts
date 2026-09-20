import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

export const GUESTBOOK_TAG = "guestbook";

export const getGuestbookEntries = unstable_cache(
  async () =>
    prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        message: true,
        signature: true,
        createdAt: true,
      },
    }),
  ["guestbook-entries"],
  // tag for manual invalidation, plus a 5 min safety net
  { tags: [GUESTBOOK_TAG], revalidate: 300 }
);