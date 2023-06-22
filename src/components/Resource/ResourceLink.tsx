"use client"

import { ExternalLinkIcon } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {
  title: string
  url: string
  date: string
  description: string
  avatar: StaticImageData | string
}

export default function ResourceLink({ title, url, date, description, avatar }: Props) {
  const [visible, setVisible] = useState(false)

  return (
    <Link
      href={url}
      className="flex min-h-[75px] items-center justify-between px-4 font-rubik tracking-tight transition-colors hover:bg-[#e5e6e8] hover:transition-all hover:duration-300 dark:hover:bg-[#212121]"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      target="_blank"
    >
      <div className="flex items-center gap-4">
        <div>
          <Image src={avatar} alt={title} width={32} height={32} className="rounded " />
        </div>
        <div className="flex flex-col">
          <p className="flex items-center gap-2 font-medium dark:text-white">
            {title}

            {visible && (
              <p className=" opacity-100 transition-opacity duration-700 ease-in hover:opacity-0">
                <ExternalLinkIcon size={14} />
              </p>
            )}
          </p>
          <p className="hidden text-sm opacity-50 dark:text-[#a0a0a0] dark:opacity-90 sm:block">
            {description}
          </p>
        </div>
      </div>
      <div className="rounded-md text-[0.8rem] tracking-tighter opacity-50 dark:text-[#a0a0a0] dark:opacity-90">
        {date}
      </div>
    </Link>
  )
}
