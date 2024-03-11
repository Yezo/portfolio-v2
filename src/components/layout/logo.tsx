import { LogoProps } from "@/types"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export const Logo = ({ className }: LogoProps) => {
  const imgHeight = "h-12"
  const imgWidth = "w-12"

  return (
    <div className={cn("", className)}>
      <Link href="/">
        <Avatar className={`${imgHeight} ${imgWidth} rounded-md`}>
          <AvatarImage src="https://github.com/yezo.png" />
          <AvatarFallback className="rounded-md">
            <Skeleton className={`${imgHeight} ${imgWidth} rounded-md`} />
          </AvatarFallback>
        </Avatar>
      </Link>
    </div>
  )
}
