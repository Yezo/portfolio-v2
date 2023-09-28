import { ExternalArrowSVG } from "@/assets/icons"
import { H3 } from "@/components/layout/h3"
import { Paragraph } from "@/components/layout/paragraph"
import { ProjectItemProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

export const ProjectItem = ({
  imageUrl,
  imageAlt,
  imageTitle,
  imageDescription,
  externalUrl,
  data,
}: ProjectItemProps) => {
  return (
    <article>
      <Link
        href={externalUrl}
        className="group relative flex cursor-pointer flex-col items-center gap-4 border border-transparent px-4 py-6 transition-all duration-500 hover:rounded-md hover:border-transparent-white hover:bg-glass-gradient min-[515px]:flex-row "
        target="_blank"
      >
        <div>
          <Image
            src={imageUrl}
            alt={imageAlt}
            height={185}
            width={700}
            className="h-[225px] min-w-full basis-2/5 rounded-md border border-transparent-white object-cover shadow-sm min-[515px]:h-[175px] min-[515px]:w-[275px]"
          />
        </div>
        <div className="basis-3/5">
          <div className="flex flex-col gap-2 ">
            <H3 className="flex items-center gap-2 font-medium text-slate-200 transition-colors group-hover:text-sky-300">
              {imageTitle} <ExternalArrowSVG />
            </H3>
            <Paragraph className="text-sm leading-loose [&:not(:first-child)]:mt-2">
              {imageDescription}
            </Paragraph>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.map((item) => (
                <div
                  className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-[0.7rem] font-medium leading-5 text-sky-300"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
