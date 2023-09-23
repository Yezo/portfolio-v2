import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const TitleH3 = dynamic(() => import("@/components/Typography/TitleH3"))

type Props = {
  imageURL: StaticImageData
  imageALT: string
  title: string
  description: string
  caseLink: string
}

export default function ProjectBox({ imageURL, imageALT, title, description, caseLink }: Props) {
  return (
    <article className="group relative flex flex-col items-center gap-4 border border-transparent px-4 py-6 transition-all hover:overflow-hidden hover:rounded-md hover:border-transparent-white hover:bg-dark-glass-gradient hover:dark:bg-glass-gradient sm:flex-row">
      <Link href={caseLink}>
        <Image
          src={imageURL}
          alt={imageALT}
          placeholder="blur"
          className="h-[185px] min-w-full basis-3/5 rounded-md border border-transparent-white object-cover shadow-sm sm:w-[300px] md:w-[300px]"
        />
      </Link>
      <div className="basis-2/5">
        <div className="flex min-h-full flex-col justify-center">
          <Link href={caseLink}>
            <span className="font-medium text-zinc-800 transition-colors group-hover:text-[#237bd3] dark:text-slate-200 dark:group-hover:text-sky-300">
              {title}
            </span>
          </Link>
          <div className="space-y-4">
            <p className="mt-2 text-sm leading-6">{description}</p>

            <Link
              href={caseLink}
              className="flex max-w-fit select-none items-center gap-2 rounded-full py-1 text-xs font-medium leading-5 transition-colors hover:text-[#237bd3] dark:hover:text-sky-300"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
