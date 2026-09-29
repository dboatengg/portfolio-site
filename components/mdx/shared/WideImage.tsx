// components/mdx/shared/WideImage.tsx
import Image from "next/image"

interface WideImageProps {
  src?: string
  alt?: string
}

export default function WideImage({ src, alt }: WideImageProps) {
  if (!src) return null
  if (alt === undefined) {
    throw new Error(`Missing alt text for MDX image: ${src}`)
  }

  return (
    <span className="block relative my-8 aspect-[3/2] shadow-lg overflow-hidden rounded-lg -mx-5 w-[calc(100%+2.5rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] md:-mx-12 md:w-[calc(100%+6rem)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </span>
  )
}