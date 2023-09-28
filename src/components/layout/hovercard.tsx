import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hovercard"
import { HoverCardItemProps } from "@/types"
import Image from "next/image"

export const HoverCardItem = ({
  children,
  imageUrl,
  imageAlt,
  imageTitle,
  imageSubtitle,
}: HoverCardItemProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger
        className="font-medium leading-[1.6] text-slate-100 transition-colors [word-spacing:-.02em] hover:text-sky-300 focus-visible:text-sky-300"
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
          <Image src={imageUrl} alt={imageAlt} height={200} width={200} className="min-w-full" />
          <div className={`${imageSubtitle && "flex flex-col"}`}>
            <div className="pt-2 text-center text-sm font-medium text-slate-200">{imageTitle}</div>
            <p className="text-center text-sm font-medium text-slate-200">{imageSubtitle}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
