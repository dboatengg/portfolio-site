"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox, { LightboxImage } from "./ImageLightbox";

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
  section?: string;
};

type ProjectScreenshotsProps = {
  screenshots: Screenshot[];
  variant?: "grid" | "carousel";
};

export default function ProjectScreenshots({
  screenshots,
  variant = "grid",
}: ProjectScreenshotsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (screenshots.length === 0) return null;

  const lightboxImages: LightboxImage[] = screenshots.map((s) => ({
    src: s.src,
    alt: s.alt,
    caption: s.caption,
  }));

  // ---- CAROUSEL VARIANT ----
  if (variant === "carousel") {
    return (
      <>
        <div className="-mx-6 overflow-x-auto overscroll-x-contain px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-3">
            {screenshots.map((shot, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] w-64 shrink-0 overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))] cursor-zoom-in sm:w-72"
                aria-label={`View ${shot.alt} full size`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-top"
                />
                {shot.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-6 pb-2 text-left">
                    <p className="line-clamp-2 text-xs text-white/90">
                      {shot.caption}
                    </p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <ImageLightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      </>
    );
  }

  // ---- GRID VARIANT (for the detail page if you keep it) ----
  const grouped = screenshots.reduce<
    Record<string, { shot: Screenshot; globalIndex: number }[]>
  >((acc, shot, i) => {
    const key = shot.section ?? "Screenshots";
    if (!acc[key]) acc[key] = [];
    acc[key].push({ shot, globalIndex: i });
    return acc;
  }, {});

  return (
    <>
      {Object.entries(grouped).map(([sectionName, items]) => (
        <div key={sectionName} className="mb-12 last:mb-0">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[rgb(var(--muted-text))]">
            {sectionName}
          </h3>
          <div className="space-y-8">
            {items.map(({ shot, globalIndex }) => (
              <figure key={globalIndex}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] cursor-zoom-in"
                  aria-label={`View ${shot.alt} full size`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
                {shot.caption && (
                  <figcaption className="mt-3 text-sm text-[rgb(var(--muted-text))] text-center">
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      ))}

      <ImageLightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}