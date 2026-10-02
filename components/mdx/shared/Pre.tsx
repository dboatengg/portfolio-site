"use client";

import { useRef } from "react";
import CopyButton from "@/components/mdx/shared/CopyButton";

export function Pre(props: React.ComponentProps<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <div className="relative group">
      <pre ref={preRef} {...props} />
      <CopyButton getCode={() => preRef.current?.textContent ?? ""} />
    </div>
  );
}