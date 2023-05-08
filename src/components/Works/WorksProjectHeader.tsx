import Subtitle from "@/components/Typography/Subtitle"
import TitleH1 from "@/components/Typography/TitleH1"
import Badge from "@/components/Works/Badge"
import React from "react"

type Props = {
  title: string
  subtitle: string
  technologies: string[]
}

export default function WorksProjectHeader({ title, subtitle, technologies }: Props) {
  return (
    <section className="mt-1 rounded bg-black p-4 text-white">
      <div className="text-white">
        <TitleH1>{title}</TitleH1>
      </div>
      <Subtitle>{subtitle}</Subtitle>
      <div className="mt-8 flex flex-wrap gap-2 font-rubik text-xs tracking-widest">
        {technologies.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>
    </section>
  )
}
