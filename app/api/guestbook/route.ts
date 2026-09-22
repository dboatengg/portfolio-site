import { NextResponse } from "next/server";
// import { revalidateTag } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getGuestbookEntries, GUESTBOOK_TAG } from "@/lib/guestbook";
import { revalidatePath, revalidateTag } from "next/cache";


// GET — fetch all entries
export async function GET() {
  const entries = await getGuestbookEntries();
  return NextResponse.json(entries, {
    headers: {
      // browser always revalidates; Vercel's CDN holds it for 60s
      "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
    },
  });
}

// POST — create a new entry
export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  // Block if already signed
    const existing = await prisma.guestbookEntry.findUnique({
    where: {
      provider_providerId: {
        provider: session.user.provider,
        providerId: session.user.id,
      },
    },
  });

  if (existing) {
    return NextResponse.json(
      { error: "You've already signed the guestbook." },
      { status: 403 }
    );
  }

  const { message, signature } = await req.json();

  if (!message?.trim() || !signature) {
    return NextResponse.json(
      { error: "Message and signature are required." },
      { status: 400 }
    );
  }

  if (message.length > 300) {
    return NextResponse.json(
      { error: "Message must be under 300 characters." },
      { status: 400 }
    );
  }

    const entry = await prisma.guestbookEntry.create({
    data: {
      provider: session.user.provider,
      providerId: session.user.id,
      name: session.user.name!,
      username: session.user.username,
      image: session.user.image,
      message: message.trim(),
      signature,
    },
  });

  revalidateTag(GUESTBOOK_TAG, { expire: 0 });
    revalidatePath("/guestbook");

  return NextResponse.json(entry, { status: 201 });
}