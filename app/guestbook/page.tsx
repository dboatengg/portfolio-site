import GuestbookEntries from "@/components/guestbook/GuestbookEntries";
import GuestbookFormSection from "@/components/guestbook/GuestbookFormSection";
import GuestbookHeading from "@/components/guestbook/GuestbookHeading";
import GuestbookShell from "@/components/guestbook/GuestbookShell";
import { getGuestbookEntries } from "@/lib/guestbook";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    " If you've found my work helpful or inspiring, I would love to hear from you! Please feel free to leave a message in my guestbook. Your feedback and encouragement mean a lot to me.",
  alternates: {
    canonical: "/guestbook",
  },
};

export default async function GuestbookPage() {
  const entries = await getGuestbookEntries();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <GuestbookShell initialEntries={entries}>
        <div className="flex flex-col gap-4 mb-8">
          <GuestbookHeading />
          <GuestbookFormSection />
        </div>

        <GuestbookEntries />
      </GuestbookShell>
    </main>
  );
}