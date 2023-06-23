"use client"

import React, { useState } from "react"
import { CopyIcon, CheckIcon } from "lucide-react"

export default function ExternalCopyEmailButton() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText("kvo.codes@gmail.com")
    setClicked(true)
  }
  return (
    <button
      className="rounded-md text-[0.8rem] tracking-tight dark:text-white dark:opacity-90"
      onClick={handleClick}
    >
      <div className="flex min-w-[95px] items-center justify-center gap-2 rounded-md px-2 py-2  hover:bg-[#e5e6e8] hover:ring-1 hover:ring-black/10 hover:transition-all hover:duration-300 dark:hover:bg-[#212121]">
        {clicked ? <CheckIcon size={17} /> : <CopyIcon size={17} />}
        {clicked ? "Copied" : "Copy"}
      </div>
    </button>
  )
}
