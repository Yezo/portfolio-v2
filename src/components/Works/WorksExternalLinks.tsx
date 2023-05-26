import { GithubIcon, RocketIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

type Props = {
  githubURL: string
  demoURL: string
}

export default function WorksExternalLinks({ githubURL, demoURL }: Props) {
  return (
    <div className="grid grid-cols-2 gap-[5px]">
      <Link
        href={githubURL}
        target="_blank"
        className="flex w-full select-none items-center justify-between rounded border border-neutral-500 bg-black p-4 font-rubik font-medium text-white transition-colors hover:bg-[#262626]"
      >
        <div className="flex items-center gap-2 text-[0.8rem]">
          <GithubIcon size="20" />
          GitHub Repository
        </div>

        <ExternalLinkIcon size="18" />
      </Link>
      <Link
        href={demoURL}
        target="_blank"
        className="flex w-full select-none items-center justify-between rounded border border-neutral-500 bg-black p-4 font-rubik font-medium text-white transition-colors hover:bg-[#262626]"
      >
        <div className="flex items-center gap-2 text-[0.8rem]">
          <RocketIcon size="20" />
          Visit Live Website
        </div>
        <ExternalLinkIcon size="18" />
      </Link>
    </div>
  )
}
