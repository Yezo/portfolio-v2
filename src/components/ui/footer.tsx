export const dynamic = "force-dynamic"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"

type FooterProps = {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  function getCurrentTimeInToronto() {
    const now = new Date()
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Toronto",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    })
    return formatter.format(now)
  }

  return (
    <>
      <Separator className="mb-2 mt-4 bg-zinc-700" />
      <footer
        className={cn(
          "flex items-center justify-between px-4 font-bricolage text-xs font-light tracking-tight text-sub md:px-0",
          className
        )}
      >
        <span>Barrie — {getCurrentTimeInToronto()}</span>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="transition-colors duration-300 hover:text-slate-100"
        >
          resume
        </Link>
      </footer>
    </>
  )
}
