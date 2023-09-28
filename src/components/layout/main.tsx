import { MainProps } from "@/types"
import { cn } from "@/lib/utils"

export const Main = ({ className, children }: MainProps) => {
  return <main className={cn("max-w-[600px] flex-auto", className)}>{children}</main>
}
