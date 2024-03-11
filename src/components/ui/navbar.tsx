import { Separator } from "@/components/ui/separator"

import { cn } from "@/lib/utils"
import Link from "next/link"

type NavbarProps = {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <>
      <header className={cn("flex items-center justify-between px-4 md:px-0", className)}>
        <Link
          href="/"
          className="font-bricolage text-xs font-medium text-slate-100 transition-colors duration-300 hover:text-slate-300"
        >
          kevin vo.
        </Link>
        <nav>
          <ul className="flex items-center gap-2 font-bricolage text-xs font-light">
            <li>
              <Link
                href="/projects"
                className="transition-colors duration-300 hover:text-slate-100"
              >
                projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors duration-300 hover:text-slate-100">
                about
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Separator className="bg mb-4 mt-2 bg-zinc-700" />
    </>
  )
}
