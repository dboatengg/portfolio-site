"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ChevronDown } from "lucide-react";

type ContactFormProps = {
  onSuccess?: () => void;
};

const serviceOptions = [
  "Business websites",
  "Online shops",
  "Custom web apps",
  "Fixes & upkeep",
  "Other",
];

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
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

  return (
    <div>
      <h3 className="text-lg font-medium text-[rgb(var(--text))]">
        Let&apos;s talk
      </h3>
      <p className="mt-1 text-sm text-[rgb(var(--muted-text))]">
        Tell me about your project.
      </p>

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
            className="w-full rounded-lg border border-[rgb(var(--border))] bg-[#252525] px-3.5 py-2.5 text-sm text-[rgb(var(--text))] outline-none transition-colors focus:border-indigo-500"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[rgb(var(--text))]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[rgb(var(--border))] bg-[#252525] px-3.5 py-2.5 text-sm text-[rgb(var(--text))] outline-none transition-colors focus:border-indigo-500"
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
              className="w-full rounded-lg border border-[rgb(var(--border))] bg-[#252525] px-3.5 py-2.5 text-sm text-[rgb(var(--text))] outline-none transition-colors focus:border-indigo-500"
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
      className="w-full appearance-none rounded-lg border border-[rgb(var(--border))] bg-[#252525] px-3.5 py-2.5 pr-11 text-sm text-[rgb(var(--text))] outline-none transition-colors focus:border-indigo-500"
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
            className="w-full resize-none rounded-lg border border-[rgb(var(--border))] bg-[#252525] px-3.5 py-2.5 text-sm text-[rgb(var(--text))] outline-none transition-colors focus:border-indigo-500"
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