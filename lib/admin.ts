import type { Session } from "next-auth";

export function isAdmin(session: Session | null) {
  const adminId = process.env.ADMIN_GITHUB_ID;
  return !!adminId && !!session?.user?.id && session.user.id === adminId;
}