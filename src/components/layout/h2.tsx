import { H2Props } from "@/types"
import { cn } from "@/lib/utils"

export const H2 = ({ className, children }: H2Props) => {
  return <h2 className={cn("", className)}>{children}</h2>
}
