"use client";

import { useState } from "react";
import RevealImage from "@/components/RevealImage";
import ImageLightbox, { LightboxImage } from "./ImageLightbox";

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
  section?: string;
};

type ProjectScreenshotsProps = {
  screenshots: Screenshot[];
};

type GroupedItem = {
  shot: Screenshot;
  globalIndex: number;
};

export default function ProjectScreenshots({
  screenshots,
}: ProjectScreenshotsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (screenshots.length === 0) return null;

  const lightboxImages: LightboxImage[] = screenshots.map((s) => ({
    src: s.src,
    alt: s.alt,
    caption: s.caption,
  }));

  const grouped: Record<string, GroupedItem[]> = {};

  screenshots.forEach((shot, i) => {
    const key = shot.section ?? "Screenshots";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({ shot, globalIndex: i });
  });

  return (
    <>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[rgb(var(--text))] mb-6">
          Screenshots
        </h2>

        {Object.entries(grouped).map(([sectionName, items]) => (
          <div key={sectionName} className="mb-12 last:mb-0">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--muted-text))] mb-4">
              {sectionName}
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              {items.map(({ shot, globalIndex }) => (
                <figure key={globalIndex}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group relative w-full aspect-video overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-sm cursor-zoom-in transition-[border-color,box-shadow] hover:border-[rgb(var(--ctrl-border))] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
                    aria-label={`View ${shot.alt} full size`}
                  >
                    <RevealImage
                      src={shot.src}
                      alt={shot.alt}
                      containerClassName="absolute inset-0"
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-contain"
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </button>

                  {shot.caption && (
                    <figcaption className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-text))]">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ImageLightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}