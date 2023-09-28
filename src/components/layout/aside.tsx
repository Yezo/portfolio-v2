import { AsideProps } from "@/types"
import { cn } from "@/lib/utils"

export const Aside = ({ className, children }: AsideProps) => {
  return (
    <aside className={cn("px-4 pb-10 text-foreground md:w-[165px] md:flex-shrink-0", className)}>
      {children}
    </aside>
  )
}
