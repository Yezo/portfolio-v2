import { MainProps } from "@/types"
import { cn } from "@/lib/utils"

export const Main = ({ className, children }: MainProps) => {
  return <main className={cn("mx-4 md:mx-0", className)}>{children}</main>
}
