import { H1Props } from "@/types"
import { cn } from "@/lib/utils"

export const H1 = ({ className, children }: H1Props) => {
  return <h1 className={cn("text-4xl font-medium text-slate-200", className)}>{children}</h1>
}
