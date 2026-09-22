import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ hasSigned: false }, { status: 401 });
  }

  const entry = await prisma.guestbookEntry.findUnique({
    where: {
      provider_providerId: {
        provider: session.user.provider,
        providerId: session.user.id,
      },
    },
    select: { id: true },
  });

  return NextResponse.json(
    { hasSigned: !!entry },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}