import Image from "next/image"

interface WideImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function WideImage({
  src,
  alt,
  width = 1200,
  height = 800,
}: WideImageProps) {
  if (!src) return null
  if (alt === undefined) {
    throw new Error(`Missing alt text for MDX image: ${src}`)
  }

  return (
    <span className="block my-8 -mx-5 sm:-mx-6 md:-mx-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto rounded-lg shadow-lg"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </span>
  )
}