"use client";

import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";
import GuestbookModal from "./GuestbookModal";
import EntryCard from "./EntryCard";

type Entry = {
  id: string;
  name: string;
  username: string;
  image: string | null;
  message: string;
  signature: string;
  createdAt: Date;
};

type Props = {
  session: Session | null;
  entries: Entry[];
  hasSigned: boolean;
};

export default function GuestbookClient({
  session,
  entries: initialEntries,
  hasSigned: initialHasSigned,
}: Props) {
  const [entries, setEntries] = useState(initialEntries);
  const [hasSigned, setHasSigned] = useState(initialHasSigned);
  const [modalOpen, setModalOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  function handleNewEntry(entry: Entry) {
    setEntries((prev) => [entry, ...prev]);
    setHasSigned(true);
    setModalOpen(false);
  }

  async function handleSignIn() {
    setAuthLoading(true);
    await signIn("github");
  }

  async function handleSignOut() {
    setAuthLoading(true);
    await signOut();
  }

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

        {session?.user ? (
          <button
            onClick={handleSignOut}
            disabled={authLoading}
            className="self-start flex items-center gap-2 border border-[rgb(var(--border))] rounded-lg px-3 py-2 text-sm text-[rgb(var(--muted-text))] hover:bg-[rgb(var(--muted))] transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {authLoading ? (
              <>
                <Spinner />
                Signing out...
              </>
            ) : (
              "Sign out"
            )}
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            disabled={authLoading}
            className="self-start flex items-center gap-2 bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {authLoading ? (
              <>
                <Spinner />
                Redirecting...
              </>
            ) : (
              <>
                <GitHubIcon />
                Sign in with GitHub
              </>
            )}
          </button>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[rgb(var(--muted-text))]">
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </p>

        {session?.user &&
          (hasSigned ? (
            <p className="text-sm text-green-600">✓ You&apos;ve signed</p>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              Sign the guestbook
            </button>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>

      {modalOpen && (
        <GuestbookModal
          onClose={() => setModalOpen(false)}
          onSuccess={handleNewEntry}
          user={session!.user}
        />
      )}
    </main>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}