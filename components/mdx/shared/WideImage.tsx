// components/mdx/shared/WideImage.tsx
import Image from "next/image"

interface WideImageProps {
  src?: string
  alt?: string
}

export default function WideImage({ src, alt }: WideImageProps) {
  if (!src) return null

  return (
    <span className="block relative my-8 -mx-12 w-[calc(100%+6rem)] aspect-[3/2] shadow-lg overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt || ""}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </span>
  )
}