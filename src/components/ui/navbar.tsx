import { Separator } from "@/components/ui/separator"

import { cn } from "@/lib/utils"
import Link from "next/link"

type NavbarProps = {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <>
      <header className={cn("mb-8 flex items-center justify-between px-4 md:px-0", className)}>
        <Link
          href="/"
          className="flex items-center gap-2 font-bricolage text-xs font-medium text-slate-100 transition-colors duration-300 hover:text-slate-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-[spin_8s_linear_infinite]"
          >
            <path
              d="M17 0L19.8174 11.1496L30.2911 6.40067L23.3306 15.5551L33.5738 20.7829L22.0768 21.0486L24.376 32.3165L17 23.4934L9.62398 32.3165L11.9232 21.0486L0.426226 20.7829L10.6694 15.5551L3.70887 6.40067L14.1826 11.1496L17 0Z"
              fill="currentColor"
            ></path>
          </svg>
          kevinvo.
        </Link>
        {/* <nav>
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
        </nav> */}
      </header>

      {/* <Separator className="bg mb-4 mt-2 bg-zinc-700" /> */}
    </>
  )
}
