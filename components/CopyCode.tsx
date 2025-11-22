"use client";

import { useEffect } from "react";

export default function CopyCode() {
  useEffect(() => {
    document.querySelectorAll("figure[data-rehype-pretty-code-figure]").forEach((figure) => {
      // Avoid inserting twice
      if (figure.querySelector(".copy-button")) return;

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
  }, []);

  return null;
}
