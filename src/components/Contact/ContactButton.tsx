import React from "react"
import { ExternalLinkIcon, DownloadIcon } from "lucide-react"
import Link from "next/link"
type Props = {
  url: string
  children: React.ReactNode
  type: "link" | "download"
}

export default function ContactButton({ url, children, type }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex w-full select-none items-center justify-between rounded border border-neutral-500 bg-black p-4 font-rubik font-medium text-white transition-colors hover:bg-[#262626]"
    >
      <div className="flex items-center gap-2 text-[0.8rem]">{children}</div>
      <div>
        {type === "link" && <ExternalLinkIcon size="18" />}{" "}
        {type === "download" && <DownloadIcon size="18" />}
      </div>
    </Link>
  )
}
