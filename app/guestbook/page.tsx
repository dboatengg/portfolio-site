// import { auth } from "@/auth";
// import { prisma } from "@/lib/prisma";
// import GuestbookClient from "@/components/guestbook/GuestbookClient";

// export const dynamic = "force-dynamic";

// export default async function GuestbookPage() {
//   const [session, entries] = await Promise.all([
//     auth(),
//     prisma.guestbookEntry.findMany({
//       orderBy: { createdAt: "desc" },
//     }),
//   ]);

//   const hasSigned = session?.user
//     ? !!(await prisma.guestbookEntry.findUnique({
//         where: { githubId: session.user.id },
//       }))
//     : false;

//   return (
//     <GuestbookClient
//       session={session}
//       entries={entries}
//       hasSigned={hasSigned}
//     />
//   );
// }



// import { Suspense } from "react";
// import { auth } from "@/auth";
// import GuestbookEntries, { EntriesSkeleton } from "@/components/guestbook/GuestbookEntries";
// import GuestbookFormSection, { FormSkeleton } from "@/components/guestbook/GuestbookFormSection";

// export const dynamic = "force-dynamic";

// export default async function GuestbookPage() {
//   const session = await auth();

//   return (
//     <main className="max-w-4xl mx-auto px-4 py-12">
//       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-2xl font-medium mb-1 text-[rgb(var(--text))]">
//             {session?.user ? `Hello, ${session.user.name}` : "Guestbook"}
//           </h1>
//           <p className="text-sm text-[rgb(var(--muted-text))]">
//             Leave your mark and let me know you stopped by.
//           </p>
//         </div>
//       </div>

//       <Suspense fallback={<FormSkeleton />}>
//         <GuestbookFormSection session={session} />
//       </Suspense>

//       <Suspense fallback={<EntriesSkeleton />}>
//         <GuestbookEntries />
//       </Suspense>
//     </main>
//   );
// }


import { Suspense } from "react";
import { auth } from "@/auth";
import GuestbookEntries, { EntriesSkeleton } from "@/components/guestbook/GuestbookEntries";
import GuestbookFormSection, { FormSkeleton } from "@/components/guestbook/GuestbookFormSection";

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
  const session = await auth();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
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
    </main>
  );
}