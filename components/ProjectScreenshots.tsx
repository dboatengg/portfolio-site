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

            <div className="space-y-8">
              {items.map(({ shot, globalIndex }) => (
                <figure key={globalIndex}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group relative w-full aspect-video overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] cursor-zoom-in"
                    aria-label={`View ${shot.alt} full size`}
                  >
                    <RevealImage
                      src={shot.src}
                      alt={shot.alt}
                      containerClassName="absolute inset-0"
                      sizes="(min-width: 768px) 720px, 100vw"
                      className="transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{ objectFit: "cover", objectPosition: "top" }}
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