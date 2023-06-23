import React from "react"

type Props = {
  children: React.ReactNode
}

export default function ExternalLinkDate({ children }: Props) {
  return (
    <div className="rounded-md px-2 text-[0.8rem] tracking-tight dark:text-white dark:opacity-90">
      {children}
    </div>
  )
}
