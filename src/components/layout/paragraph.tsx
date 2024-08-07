import { ParagraphProps } from "@/types"
import { cn } from "@/lib/utils"

export const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-[0.9rem] leading-relaxed text-sub [word-spacing:-.02em] [&:not(:first-child)]:mt-4 ",
        className
      )}
    >
      {children}
    </p>
  )
}
