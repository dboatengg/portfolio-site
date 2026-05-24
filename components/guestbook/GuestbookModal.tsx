"use client";

import { useRef, useState } from "react";
import SignaturePad from "./SignaturePad";

type User = {
  name?: string | null;
  username: string;
  image?: string | null;
};

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
  onClose: () => void;
  onSuccess: (entry: Entry) => void;
  user: User;
};

export default function GuestbookModal({ onClose, onSuccess, user }: Props) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const sigPadRef = useRef<{ toDataURL: () => string; isEmpty: () => boolean }>(null);

  async function handleSubmit() {
    if (!message.trim()) return;
    if (sigPadRef.current?.isEmpty()) {
      setError("Please draw your signature.");
      return;
    }

    setStatus("loading");
    setError("");

    const signature = sigPadRef.current!.toDataURL();

    const res = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, signature }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Something went wrong.");
      setStatus("error");
      return;
    }

    const entry = await res.json();
    onSuccess(entry);
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[rgb(var(--bg))] border border-[rgb(var(--border))] rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <p className="font-medium text-[rgb(var(--text))]">Sign my guestbook</p>
          <button
            onClick={onClose}
            className="text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] text-xl leading-none transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex items-center gap-2 bg-[rgb(var(--muted))] rounded-lg px-3 py-2 mb-4">
          {user.image && (
            <img
              src={user.image}
              alt={user.name ?? ""}
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          <p className="text-sm text-[rgb(var(--muted-text))]">
            Signing as{" "}
            <span className="font-medium text-[rgb(var(--text))]">{user.username}</span>
          </p>
        </div>

        <textarea
          placeholder="Leave a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={300}
          rows={3}
          className="w-full border border-[rgb(var(--border))] rounded-lg px-3 py-2 text-sm resize-none mb-3 text-[rgb(var(--text))] bg-[rgb(var(--bg))] placeholder:text-[rgb(var(--muted-text))]"
        />

        <p className="text-xs text-[rgb(var(--muted-text))] mb-2">Sign here</p>
        <SignaturePad ref={sigPadRef} />

        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="text-sm text-[rgb(var(--muted-text))] hover:text-[rgb(var(--text))] px-3 py-2 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={status === "loading" || !message.trim()}
            className="bg-[rgb(var(--accent))] text-[rgb(var(--accent-foreground))] text-sm rounded-lg px-4 py-2 disabled:opacity-40 transition-colors"
          >
            {status === "loading" ? "Signing..." : "Sign guestbook"}
          </button>
        </div>
      </div>
    </div>
  );
}