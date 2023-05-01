import TitleH3 from "@/components/Typography/TitleH3"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Props = {
  imageURL: StaticImageData
  imageALT: string
  title: string
  description: string
  caseLink: string
  externalLink?: string
}
export default function ProjectBox({
  imageURL,
  imageALT,
  title,
  description,
  caseLink,
  externalLink,
}: Props) {
  return (
    <div className="my-4 flex gap-4">
      <Image
        src={imageURL}
        alt={imageALT}
        placeholder="blur"
        className="max-h-[183px] basis-3/5 rounded object-cover"
        width={300}
        height={183}
      />
      <div className="basis-2/5">
        <TitleH3>{title}</TitleH3>
        <div className="space-y-6">
          <p className="mt-2 text-sm leading-6 text-[#2b2b2b]">{description}</p>
          <div>
            <Link href={caseLink} className="text-[0.9rem] tracking-wide text-[#2b2b2b]">
              {"Read more → "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
