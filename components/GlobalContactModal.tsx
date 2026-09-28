"use client";

import { useContactModal } from "@/contexts/ContactModalContext";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

export default function GlobalContactModal() {
  const { isOpen, closeModal } = useContactModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ContactForm onSuccess={closeModal} />
    </Modal>
  );
}