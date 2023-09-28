import { NavProps } from "@/types"
import { cn } from "@/lib/utils"

export const Nav = ({ className, children }: NavProps) => {
  return (
    <nav
      className={cn(
        "relative flex scroll-pr-6 flex-row items-center gap-4 tracking-wider md:relative md:flex-col md:items-start md:gap-0 md:overflow-auto",
        className
      )}
    >
      {children}
    </nav>
  )
}
