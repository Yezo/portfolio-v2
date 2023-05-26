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
    <section className="mt-1 rounded border border-neutral-500 bg-black p-4 text-white shadow-sm ">
      <div className="text-white ">
        <h1 className="pb-2 font-alegreya text-2xl font-bold [word-spacing:-.04em] lg:text-4xl">
          {title}
        </h1>
      </div>
      <Subtitle>{subtitle}</Subtitle>
      <div className="mt-8 flex select-none flex-wrap gap-2 font-rubik text-[0.65rem] tracking-widest ">
        {technologies.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </div>
    </section>
  )
}
