import React from "react"
import dynamic from "next/dynamic"

type Props = {
  title: string
  description: string
  children?: React.ReactNode
}

export default function ExternalLinkContainer({ title, description, children }: Props) {
  return (
    <div className="flex min-h-[75px] items-center justify-between tracking-tight">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <p className="flex items-center gap-2 font-medium dark:text-white">{title}</p>
          <p className="hidden text-sm opacity-50 dark:text-[#a0a0a0] dark:opacity-90 sm:block">
            {description}
          </p>
        </div>
      </div>
      <div className="flex space-x-2 rounded-md text-[0.8rem] tracking-tighter dark:divide-[#333333] dark:text-white dark:opacity-90 ">
        {children}
      </div>
    </div>
  )
}
