import { H3Props } from "@/types"
import { cn } from "@/lib/utils"

export const H3 = ({ className, children }: H3Props) => {
  return <h3 className={cn("", className)}>{children}</h3>
}
