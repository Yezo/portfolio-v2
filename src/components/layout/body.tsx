import { BodyProps } from "@/types"
import { cn } from "@/lib/utils"

export const Body = ({ className, children }: BodyProps) => {
  return (
    <body
      className={cn(
        "mx-auto my-4 max-w-[520px] bg-main font-inter text-sub antialiased selection:bg-sky-400/10 selection:text-sky-300",
        className
      )}
    >
      {children}
    </body>
  )
}
