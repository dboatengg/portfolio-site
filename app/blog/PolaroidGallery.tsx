"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type PolaroidImage = {
  src: string
  caption: string
  alt?: string
}

export default function PolaroidGallery({ images }: { images: PolaroidImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
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

  return (
    <>
      <div className="not-prose flex flex-wrap justify-center gap-6 my-10">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(i)}
            className="group relative bg-[#f5f5f0] p-3 pb-10 rounded-sm shadow-lg
                       transition-transform duration-300 ease-out
                       hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:z-10
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg)` }}
          >
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 overflow-hidden">
              <Image src={img.src} alt={img.alt ?? img.caption} fill className="object-cover" />
            </div>
            <p className="mt-3 text-center text-sm text-neutral-700 font-serif italic">
              {img.caption}
            </p>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fadeIn"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close() }}
            className="absolute top-5 right-5 text-white/70 hover:text-white"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white"
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
            <p className="absolute -bottom-8 w-full text-center text-white/80 text-sm font-serif italic">
              {images[activeIndex].caption}
            </p>
          </div>
        </div>
      )}
    </>
  )
}