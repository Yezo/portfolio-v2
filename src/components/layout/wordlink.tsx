import { WordLinkProps } from "@/types"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const WordLink = ({ className, children, href, newTab }: WordLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "font-medium leading-[1.6] text-slate-200 transition-colors ease-in-out [word-spacing:-.02em] hover:text-sky-300 focus-visible:text-sky-300",
        className
      )}
      target={newTab ? "_blank" : "_self"}
    >
      {" "}
      {children}{" "}
    </Link>
  )
}
