"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function ImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const isOpen = index !== null;
  const currentIndex = index ?? 0;
  const current = images[currentIndex];

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 text-white/90"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm">
          {currentIndex + 1} of {images.length}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image area */}
      <div
        className="relative flex-1 flex items-center justify-center px-4 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div className="relative w-full h-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* Caption */}
      {current.caption && (
        <div
          className="px-6 pb-6 text-center text-sm text-white/80"
          onClick={(e) => e.stopPropagation()}
        >
          {current.caption}
        </div>
      )}
    </div>
  );
}