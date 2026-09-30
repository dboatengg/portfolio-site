"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, ChevronDown } from "lucide-react";

type ContactFormProps = {
  onSuccess?: () => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const STORAGE_KEY = "contact-form-draft";

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Business websites",
  "Online shops",
  "Custom web apps",
  "Fixes & upkeep",
  "Other",
];

function loadSavedDraft(): FormData | null {
  if (typeof window === "undefined") return null;

  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const parsed = JSON.parse(saved) as Partial<FormData>;
    const restored: FormData = {
      name: parsed.name ?? "",
      email: parsed.email ?? "",
      phone: parsed.phone ?? "",
      service: parsed.service ?? "",
      message: parsed.message ?? "",
    };

    const hasContent = Object.values(restored).some(
      (v) => v.trim().length > 0
    );
    return hasContent ? restored : null;
  } catch {
    return null;
  }
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(
    () => loadSavedDraft() ?? EMPTY_FORM
  );
  const [isRestored, setIsRestored] = useState<boolean>(
    () => loadSavedDraft() !== null
  );

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      const hasContent = Object.values(formData).some(
        (v) => v.trim().length > 0
      );

      if (hasContent) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Storage unavailable; ignore
    }
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setIsRestored(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearDraft = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData(EMPTY_FORM);
      setIsRestored(false);
      clearDraft();

      setTimeout(() => {
        onSuccess?.();
        setStatus("idle");
      }, 2000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  const handleManualReset = () => {
    setFormData(EMPTY_FORM);
    setIsRestored(false);
    clearDraft();
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="mb-4 text-green-500" size={40} />
        <h3 className="text-lg font-medium text-[rgb(var(--text))]">
          Message sent!
        </h3>
        <p className="mt-2 text-sm text-[rgb(var(--muted-text))]">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3.5 py-2.5 text-sm text-[rgb(var(--text))] outline-none transition-colors placeholder:text-[rgb(var(--muted-text))]/60 focus:border-[rgb(var(--accent))]";

  return (
    <div>
      <h3 className="text-lg font-medium text-[rgb(var(--text))]">
        Let&apos;s talk
      </h3>
      <p className="mt-1 text-sm text-[rgb(var(--muted-text))]">
        Tell me about your project.
      </p>

      {isRestored && (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-md bg-[rgb(var(--muted))] px-3 py-2">
          <p className="text-xs text-[rgb(var(--muted-text))]">
            Picked up where you left off.
          </p>
          <button
            type="button"
            onClick={handleManualReset}
            className="shrink-0 text-xs font-medium text-[rgb(var(--text))] hover:underline transition-colors"
          >
            Start fresh
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-[rgb(var(--text))]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[rgb(var(--text))]"
            >
              Email{" "}
              <span className="font-normal text-[rgb(var(--muted-text))]">
                (optional)
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-[rgb(var(--text))]"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="+233 20 000 0000"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-sm font-medium text-[rgb(var(--text))]"
          >
            What do you need help with?
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`${inputClass} appearance-none pr-11 ${
                formData.service
                  ? "text-[rgb(var(--text))]"
                  : "text-[rgb(var(--muted-text))]/60"
              }`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[rgb(var(--muted-text))]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-[rgb(var(--text))]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Tell me a bit about your project"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--text))] px-4 py-2.5 text-sm font-medium text-[rgb(var(--bg))] transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={15} />
              Sending...
            </>
          ) : (
            "Send message"
          )}
        </button>
      </form>
    </div>
  );
}