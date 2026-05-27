"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CopyCode() {
  const pathname = usePathname();

  function attachButtons() {
    const scrollY = window.scrollY;
    
    document.querySelectorAll(".copy-button").forEach((btn) => btn.remove());
    document.querySelectorAll("figure[data-rehype-pretty-code-figure]").forEach((figure) => {
      const button = document.createElement("button");
      button.className = "copy-button";
      button.innerText = "Copy";

      button.onclick = async () => {
        const code = figure.querySelector("pre code")?.textContent ?? "";
        await navigator.clipboard.writeText(code);
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1200);
      };

      figure.appendChild(button);
    });

    window.scrollTo({ top: scrollY, behavior: "instant" });
  }

  useEffect(() => {
    attachButtons();

    const observer = new MutationObserver(() => {
      attachButtons();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}