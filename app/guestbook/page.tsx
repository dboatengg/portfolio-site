import GuestbookEntries from "@/components/guestbook/GuestbookEntries";
import GuestbookFormSection from "@/components/guestbook/GuestbookFormSection";
import GuestbookHeading from "@/components/guestbook/GuestbookHeading";
import GuestbookShell from "@/components/guestbook/GuestbookShell";
import { getGuestbookEntries } from "@/lib/guestbook";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "If you've found my work helpful or inspiring, I'd love to hear from you. Leave a message in my guestbook.",
  alternates: {
    canonical: "/guestbook",
  },
  openGraph: {
    title: "Guestbook | Dickson Boateng",
    description:
      "Leave a message, share your thoughts, or just say hello.",
    url: "/guestbook",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default async function GuestbookPage() {
  const entries = await getGuestbookEntries();

  return (
    <GuestbookShell initialEntries={entries}>
      <div className="flex flex-col gap-4 mb-8">
        <GuestbookHeading />
        <GuestbookFormSection />
      </div>

      <GuestbookEntries />
    </GuestbookShell>
  );
}