// import { prisma } from "@/lib/prisma";
// import EntryCard from "./EntryCard";

// export default async function GuestbookEntries() {
//   const entries = await prisma.guestbookEntry.findMany({
//     orderBy: { createdAt: "desc" },
//     take: 50,
//   });

//   return (
//     <>
//       <p className="text-sm text-[rgb(var(--muted-text))] mb-4">
//         {entries.length} {entries.length === 1 ? "entry" : "entries"}
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         {entries.map((entry) => (
//           <EntryCard key={entry.id} entry={entry} />
//         ))}
//       </div>
//     </>
//   );
// }

// export function EntriesSkeleton() {
//   return (
//     <>
//       <div className="h-4 w-16 bg-[rgb(var(--muted))] rounded animate-pulse mb-4" />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         {[...Array(4)].map((_, i) => (
//           <div
//             key={i}
//             className="bg-[rgb(var(--card))] border border-[rgb(var(--border))] border-l-[3px] border-l-[rgb(var(--accent))] rounded-r-xl p-4 flex flex-col gap-3"
//           >
//             <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-3/4" />
//             <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-full" />
//             <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-1/2" />
//             <div className="flex items-end justify-between mt-auto pt-2">
//               <div className="flex flex-col gap-1">
//                 <div className="h-3 w-20 bg-[rgb(var(--muted))] rounded animate-pulse" />
//                 <div className="h-2 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
//               </div>
//               <div className="h-8 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }



// import { prisma } from "@/lib/prisma";
// import GuestbookEntriesClient from "./GuestbookEntriesClient";

// export default async function GuestbookEntries() {
//   const entries = await prisma.guestbookEntry.findMany({
//     orderBy: { createdAt: "desc" },
//     take: 50,
//   });

//   return <GuestbookEntriesClient initialEntries={entries} />;
// }

// export function EntriesSkeleton() {
//   return (
//     <>
//       <div className="h-4 w-16 bg-[rgb(var(--muted))] rounded animate-pulse mb-4" />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         {[...Array(4)].map((_, i) => (
//           <div
//             key={i}
//             className="bg-[rgb(var(--card))] border border-[rgb(var(--border))] border-l-[3px] border-l-[rgb(var(--accent))] rounded-r-xl p-4 flex flex-col gap-3"
//           >
//             <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-3/4" />
//             <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-full" />
//             <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-1/2" />
//             <div className="flex items-end justify-between mt-auto pt-2">
//               <div className="flex flex-col gap-1">
//                 <div className="h-3 w-20 bg-[rgb(var(--muted))] rounded animate-pulse" />
//                 <div className="h-2 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
//               </div>
//               <div className="h-8 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


import GuestbookEntriesClient from "./GuestbookEntriesClient";

export default function GuestbookEntries() {
  return <GuestbookEntriesClient />;
}

export function EntriesSkeleton() {
  return (
    <>
      <div className="h-4 w-16 bg-[rgb(var(--muted))] rounded animate-pulse mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-[rgb(var(--card))] border border-[rgb(var(--border))] border-l-[3px] border-l-[rgb(var(--accent))] rounded-r-xl p-4 flex flex-col gap-3"
          >
            <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-3/4" />
            <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-full" />
            <div className="h-3 bg-[rgb(var(--muted))] rounded animate-pulse w-1/2" />
            <div className="flex items-end justify-between mt-auto pt-2">
              <div className="flex flex-col gap-1">
                <div className="h-3 w-20 bg-[rgb(var(--muted))] rounded animate-pulse" />
                <div className="h-2 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
              </div>
              <div className="h-8 w-24 bg-[rgb(var(--muted))] rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}