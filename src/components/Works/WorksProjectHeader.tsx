import dynamic from "next/dynamic"

const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const Badge = dynamic(() => import("@/components/Works/Badge"))
const Subtitle = dynamic(() => import("@/components/Typography/Subtitle"))

type Props = {
  title: string
  subtitle: string
  technologies: string[]
}

export default function WorksProjectHeader({ title, subtitle, technologies }: Props) {
  return (
    <section className="mt-1 rounded bg-black p-4 text-white shadow-sm">
      <div className="text-white">
        <TitleH1>{title}</TitleH1>
      </div>
      <Subtitle>{subtitle}</Subtitle>
      <div className="mt-8 flex select-none flex-wrap gap-2 font-rubik text-xs tracking-widest">
        {technologies.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>
    </section>
  )
}
