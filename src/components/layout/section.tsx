import { SectionProps } from "@/types"
import { cn } from "@/lib/utils"

export const Section = ({ className, children }: SectionProps) => {
  return <section className={cn("", className)}>{children}</section>
}
