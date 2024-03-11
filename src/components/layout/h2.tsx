import { H2Props } from "@/types"
import { cn } from "@/lib/utils"

export const H2 = ({ className, children }: H2Props) => {
  return <h2 className={cn("font-bricolage font-medium text-slate-100", className)}>{children}</h2>
}
