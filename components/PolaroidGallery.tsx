"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type PolaroidImage = {
  src: string
  caption: string
  alt?: string
}

function getRotation(index: number) {
  const tilts = [-3.5, 2.5, -2, 3, -2.5]
  return tilts[index % tilts.length]
}

const MAX_VISIBLE = 5

export default function PolaroidGallery({ images = [] }: { images?: PolaroidImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null || i >= images.length - 1 ? i : i + 1)),
    [images.length]
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null || i <= 0 ? i : i - 1)),
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex, close, next, prev])

  if (images.length === 0) return null

  const visibleImages = images.slice(0, MAX_VISIBLE)
  // const remainingCount = images.length - MAX_VISIBLE

  return (
    <>
      <div className="not-prose my-12 w-[100vw] max-w-[100vw] relative left-1/2 -translate-x-1/2">
        <div className="polaroid-gallery-track overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-4 sm:px-8 md:px-12 pb-3 pt-6 pb-3">
          <div className="flex w-max min-w-full items-end gap-5 sm:gap-7 md:gap-8 md:justify-center">
            {visibleImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="polaroid-card group relative snap-center cursor-pointer rounded-[1px]
                           bg-[#f0f0eb] dark:bg-[#e8e8e2]
                           px-2.5 pb-6 shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2"
                style={{ "--rotate": `${getRotation(i)}deg` } as React.CSSProperties}
              >
                <div className="relative h-40 w-40 overflow-hidden sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52">
                  <Image
                    src={img.src}
                    alt={img.alt ?? img.caption}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 208px"
                    className="object-cover"
                  />
                </div>
                {/* <div className="mt-2 px-1 text-center text-[12px] leading-snug text-neutral-600 dark:text-neutral-700 font-serif italic"> */}
                <div className="mt-2 px-1 text-center text-[15px] leading-snug text-neutral-800 font-handwriting not-italic">
                  {img.caption}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fadeIn"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-[60] text-white/70 hover:text-white transition-colors disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Previous image"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-[60] text-white/70 hover:text-white transition-colors disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Next image"
            disabled={activeIndex === images.length - 1}
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt ?? images[activeIndex].caption}
              fill
              className="object-contain"
            />
            <p className="absolute -bottom-8 w-full text-center !text-white/80 text-sm font-serif italic">
              {images[activeIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
