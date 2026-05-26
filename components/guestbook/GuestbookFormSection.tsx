import { prisma } from "@/lib/prisma";
import type { Session } from "next-auth";
import GuestbookFormClient from "./GuestbookFormClient";

type Props = {
  session: Session | null;
};

export default async function GuestbookFormSection({ session }: Props) {
  const hasSigned = session?.user
    ? !!(await prisma.guestbookEntry.findUnique({
        where: { githubId: String(session.user.id) },
      }))
    : false;

  return <GuestbookFormClient session={session} hasSigned={hasSigned} />;
}

export function FormSkeleton() {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="h-4 w-16 bg-[rgb(var(--muted))] rounded animate-pulse" />
      <div className="h-9 w-36 bg-[rgb(var(--muted))] rounded-lg animate-pulse" />
    </div>
  );
}