"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CopyIcon } from "lucide-react"
import { toast } from "sonner"

type CopyButtonProps = {
  className?: string
}

export const CopyButton = ({ className }: CopyButtonProps) => {
  function handleClick() {
    navigator.clipboard.writeText("kvo.codes@gmail.com")
    toast("Copied to clipboard.")
  }
  return (
    <button
      className="flex items-center gap-2 text-xs transition-colors duration-300 hover:bg-main/20 hover:text-slate-100"
      onClick={handleClick}
    >
      <CopyIcon className="h-3 w-3" /> Copy
    </button>
  )
}
