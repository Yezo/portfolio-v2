import { BodyProps } from "@/types"
import { cn } from "@/lib/utils"

export const Body = ({ className, children }: BodyProps) => {
  return (
    <body
      className={cn(
        "my-20 flex max-w-4xl flex-col bg-main font-inter antialiased selection:bg-sky-400/10 selection:text-sky-300 sm:mx-8 md:mx-16 md:flex-row lg:mx-auto",
        className
      )}
    >
      {children}
    </body>
  )
}
