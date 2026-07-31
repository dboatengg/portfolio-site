"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ getCode }: { getCode: () => string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      className="copy-button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? <Check /> : <Copy />}
    </button>
  );
}