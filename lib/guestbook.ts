import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

export const GUESTBOOK_TAG = "guestbook";

export const getGuestbookEntries = unstable_cache(
  async () => {
    try {
      return await prisma.guestbookEntry.findMany({
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
      });
    } catch (error) {
      console.error("Failed to load guestbook entries:", error);
      return [];
    }
  },
  ["guestbook-entries"],
  { tags: [GUESTBOOK_TAG], revalidate: 300 }
);