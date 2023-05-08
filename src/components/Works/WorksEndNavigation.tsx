import Link from "next/link"
import React from "react"
import {
  GithubIcon,
  RocketIcon,
  ExternalLinkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "lucide-react"

type Props = {
  demoURL: string
  demoTitle: string
  previousURL?: string
  previousTitle?: string
  nextURL?: string
  nextTitle?: string
}

export default function WorksEndNavigation({
  demoURL,
  demoTitle,
  previousURL,
  previousTitle,
  nextTitle,
  nextURL,
}: Props) {
  return (
    <div className="mb-4 mt-8 grid grid-cols-2 gap-[5px]">
      {previousURL && (
        <Link
          href={previousURL}
          target="_blank"
          className="flex w-full select-none items-center justify-between rounded border border-neutral-500 bg-black p-4 font-rubik text-[0.8rem] font-light text-white transition-colors hover:bg-[#262626]"
        >
          <ArrowLeftIcon />
          <div className="flex gap-1">
            <span className="font-medium">Previous:</span>
            <span>{`${previousTitle}`}</span>
          </div>
        </Link>
      )}
      {nextURL && (
        <Link
          href={nextURL}
          target="_blank"
          className="flex w-full select-none items-center justify-between rounded border border-neutral-500 bg-black p-4 font-rubik text-[0.8rem] font-light text-white transition-colors hover:bg-[#262626]"
        >
          <div className="flex gap-1">
            <span className="font-medium">Next:</span>
            <span>{`${nextTitle}`}</span>
          </div>
          <ArrowRightIcon />
        </Link>
      )}

      <Link
        href={demoURL}
        target="_blank"
        className="col-span-2 flex select-none items-center justify-center rounded border border-neutral-500 bg-black p-4 font-rubik font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#262626]"
      >
        <div className="flex items-center gap-2 text-[0.8rem]">
          {`Visit ${demoTitle}`} <ExternalLinkIcon size="20" />
        </div>
      </Link>
    </div>
  )
}
