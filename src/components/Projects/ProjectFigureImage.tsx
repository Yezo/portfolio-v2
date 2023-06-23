import { StaticImageData } from "next/image"
import React from "react"
import Image from "next/image"

type Props = {
  src: StaticImageData
  alt: string
}

export default function ProjectFigureImage({ src, alt }: Props) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        priority
        className="mb-1 max-h-[350px] min-w-full rounded object-cover shadow-sm"
      />
    </figure>
  )
}
