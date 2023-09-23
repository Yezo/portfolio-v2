import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hovercard"
import Image, { StaticImageData } from "next/image"

type HovercardTextProps = {
  imageURL: StaticImageData
  imageTitle: string
  imageSubtitle?: string
  children: React.ReactNode
}
export default function HovercardText({
  imageURL,
  imageTitle,
  imageSubtitle,
  children,
}: HovercardTextProps) {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger
        className="font-medium leading-[1.6] text-zinc-900 transition-colors [word-spacing:-.02em] hover:text-[#237bd3] focus-visible:text-sky-300 dark:text-slate-100 hover:dark:text-sky-300"
        asChild
      >
        <span> {children} </span>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="border border-transparent-white bg-background"
        asChild
      >
        <div>
          <Image src={imageURL} alt="Image of the login screen from Oldschool Runescape" />
          <div className={`${imageSubtitle && "flex flex-col "}`}>
            <div className="pt-2 text-center text-sm font-medium dark:text-slate-200">
              {imageTitle}
            </div>
            <p className="text-center text-sm font-medium dark:text-slate-200">{imageSubtitle}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
