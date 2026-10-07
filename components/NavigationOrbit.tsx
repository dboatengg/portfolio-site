"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function NavigationOrbit() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);
  const initialMount = useRef(true);

  useEffect(() => {
  if (!pending) return;
  const timeout = setTimeout(() => setPending(false), 3000);
  return () => clearTimeout(timeout);
}, [pending]);

  // Detect route changes and clear pending
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

    // Route changed — navigation finished
    const timeout = setTimeout(() => setPending(false), 100);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  // Detect navigation start via click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        target.getAttribute("target") === "_blank" ||
        target.hasAttribute("download")
      ) {
        return;
      }

      const current = `${window.location.pathname}${window.location.search}`;
      if (href === current) return;

      setPending(true);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Safety: hide if navigation never completes
  useEffect(() => {
    if (!pending) return;
    const timeout = setTimeout(() => setPending(false), 5000);
    return () => clearTimeout(timeout);
  }, [pending]);

  return (
<div
  aria-hidden="true"
  className={`pointer-events-none fixed bottom-6 left-6 z-[60] transition-opacity duration-300 ${
    pending ? "opacity-100" : "opacity-0"
  }`}
>
  <div className="relative flex h-10 w-10 items-center justify-center">
    {/* Amber glow halo */}
    <span
      className="absolute inset-0 rounded-full animate-ping"
      style={{
        background:
          "radial-gradient(circle, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0) 70%)",
      }}
    />
    {/* Amber core */}
    <span
      className="relative h-2.5 w-2.5 rounded-full"
      style={{
        background: "rgb(245,158,11)",
        boxShadow: "0 0 12px rgba(245,158,11,0.9), 0 0 4px rgba(245,158,11,1)",
      }}
    />
  </div>
</div>
  );
}