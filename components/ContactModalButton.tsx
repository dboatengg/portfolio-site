"use client";

import type { ReactNode } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

type ContactModalButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function ContactModalButton({
  children,
  className = "",
}: ContactModalButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
