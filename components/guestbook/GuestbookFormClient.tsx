"use client";

import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";
import GuestbookModal from "./GuestbookModal";
import { useGuestbook } from "./GuestbookContext";
import { useSWRConfig } from "swr";
import { useEffect } from "react";

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
  hasSigned: boolean;
};

export default function GuestbookFormClient({ session, hasSigned: initialHasSigned }: Props) {
  const { addEntry } = useGuestbook();
  const { mutate } = useSWRConfig();
  const [hasSigned, setHasSigned] = useState(initialHasSigned);
  const [modalOpen, setModalOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState<"github" | "google" | null>(null);
  const [signOutLoading, setSignOutLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  async function handleSignIn(provider: "github" | "google") {
    setAuthLoading(provider);
    setAuthError("");
    try {
      await signIn(provider, { callbackUrl: window.location.href });
    } catch {
      setAuthLoading(null);
      setAuthError("Sign-in could not start. Check the OAuth configuration.");
    }
  }

  async function handleSignOut() {
    setSignOutLoading(true);
    await signOut();
  }

  function handleNewEntry(entry: Entry) {
    setHasSigned(true);
    setModalOpen(false);
    addEntry(entry);
    void mutate("/api/guestbook/me", { hasSigned: true }, { revalidate: false });
  }

  useEffect(() => {
  function handlePageShow(event: PageTransitionEvent) {
    if (event.persisted) {
      setAuthLoading(null);
      setSignOutLoading(false);
    }
  }

  window.addEventListener("pageshow", handlePageShow);
  return () => window.removeEventListener("pageshow", handlePageShow);
}, []);

  return (
    <>
      <div className="flex flex-row gap-3">
        {session?.user ? (
          <>
            <button
              onClick={handleSignOut}
              disabled={signOutLoading}
              className="self-start flex items-center gap-2 border border-[rgb(var(--border))] rounded-lg px-3 py-2 text-sm text-[rgb(var(--muted-text))] hover:bg-[rgb(var(--muted))] transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {signOutLoading ? <><Spinner /> Signing out...</> : "Sign out"}
            </button>

            {hasSigned ? (
              <p className="text-sm text-green-600">✓ You&apos;ve signed</p>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="self-start flex items-center gap-2 bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                Sign the guestbook
              </button>
            )}
          </>
        ) : (
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSignIn("github")}
                disabled={authLoading !== null}
                className="self-start flex items-center gap-2 bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {authLoading === "github" ? <><Spinner /> Redirecting...</> : <><GitHubIcon /> Sign in with GitHub</>}
              </button>
              <button
                onClick={() => handleSignIn("google")}
                disabled={authLoading !== null}
                className="self-start flex items-center gap-2 border border-[rgb(var(--ctrl-border))] text-[rgb(var(--text))] rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {authLoading === "google" ? <><Spinner /> Redirecting...</> : <><GoogleIcon /> Sign in with Google</>}
              </button>
            </div>
            {authError && <p className="max-w-xs text-xs text-red-600">{authError}</p>}
          </div>
        )}
      </div>

      {modalOpen && (
        <GuestbookModal
          onClose={() => setModalOpen(false)}
          onSuccess={handleNewEntry}
          user={session!.user}
        />
      )}
    </>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.92l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1C3.25 21.3 7.31 24 12 24z"/>
      <path fill="#FBBC05" d="M5.27 14.27A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.56.37-2.27v-3.1H1.27A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.27 5.37l4-3.1z"/>
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.6 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.63l4 3.1c.95-2.85 3.6-4.96 6.73-4.96z"/>
    </svg>
  );
}