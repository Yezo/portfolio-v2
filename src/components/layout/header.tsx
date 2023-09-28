import { HeaderProps } from "@/types"
import { cn } from "@/lib/utils"

export const Header = ({ className, children }: HeaderProps) => {
  return <header className={cn("space-y-4", className)}>{children}</header>
}
