"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

type RevealImageProps = Omit<
  ImageProps,
  "fill" | "loading" | "onLoad" | "onError"
> & {
  containerClassName?: string;
};

export default function RevealImage({
  alt,
  className,
  containerClassName = "",
  src,
  ...imageProps
}: RevealImageProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasEnteredViewport) return;

    if (!("IntersectionObserver" in window)) {
      const fallbackId = globalThis.setTimeout(() => setHasEnteredViewport(true), 0);
      return () => globalThis.clearTimeout(fallbackId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.65 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  const revealClass = hasLoaded
    ? prefersReducedMotion
      ? "reveal-image--fade"
      : "reveal-image--wipe"
    : "";

  return (
    <span
      ref={containerRef}
      className={`reveal-image-container ${containerClassName}`.trim()}
      data-loaded={hasLoaded}
    >
      {!hasLoaded && (
        <span className="reveal-image-skeleton" aria-hidden="true" />
      )}
      {hasEnteredViewport && (
        <Image
          {...imageProps}
          src={src}
          alt={alt}
          fill
          loading="lazy"
          onLoad={() => setHasLoaded(true)}
          onError={() => setHasLoaded(true)}
          className={`${className ?? ""} ${revealClass}`.trim()}
        />
      )}
    </span>
  );
}
