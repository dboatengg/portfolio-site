"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/admin";
import { GUESTBOOK_TAG } from "@/lib/guestbook";

export async function deleteGuestbookEntry(
  id: string
): Promise<{ ok: boolean; error?: string }> {
  // The real security check. Hiding the button is not enough.
  const session = await auth();
  if (!isAdmin(session)) {
    return { ok: false, error: "Forbidden." };
  }

  try {
    await prisma.guestbookEntry.delete({ where: { id } });
  } catch {
    return { ok: false, error: "Entry not found or could not be deleted." };
  }

  // Same invalidation as the POST handler, so visitors stop seeing it
  revalidateTag(GUESTBOOK_TAG, { expire: 0 });
  revalidatePath("/guestbook");
  revalidatePath("/admin/guestbook");
  return { ok: true };
}