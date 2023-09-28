import { SectionProps } from "@/types"
import { cn } from "@/lib/utils"

export const Section = ({ className, children }: SectionProps) => {
  return <section className={cn("mb-12", className)}>{children}</section>
}
