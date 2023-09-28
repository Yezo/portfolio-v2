import { LogoProps } from "@/types"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { H1 } from "@/components/layout/h1"
import { H2 } from "@/components/layout/h2"
import Link from "next/link"

export const Logo = ({ className }: LogoProps) => {
  const imgHeight = "h-16"
  const imgWidth = "w-16"

  return (
    <div className={cn("flex items-center gap-4 md:flex-col md:items-start", className)}>
      <Link href="/">
        <Avatar className={`${imgHeight} ${imgWidth}`}>
          <AvatarImage src="https://github.com/yezo.png" />
          <AvatarFallback>
            <Skeleton className={`${imgHeight} ${imgWidth} rounded-full`} />
          </AvatarFallback>
        </Avatar>
      </Link>

      <div className="space-y-0.5">
        <H1 className="font-inter text-sm font-bold tracking-tight text-slate-200">
          <Link
            href="/"
            className="text-slate-100 transition-colors  hover:text-sky-300 focus-visible:text-sky-300"
          >
            Kevin Vo
          </Link>
        </H1>

        <H2 className="font-inter text-[0.8rem] tracking-tight text-[#babdc5]">
          <Link href="/">Fullstack Developer</Link>
        </H2>
      </div>
    </div>
  )
}
