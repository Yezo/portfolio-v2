import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

const TitleH3 = dynamic(() => import("@/components/Typography/TitleH3"))

type Props = {
  imageURL: StaticImageData
  imageALT: string
  title: string
  description: string
  caseLink: string
}
export default function ProjectBox({ imageURL, imageALT, title, description, caseLink }: Props) {
  return (
    <div className="my-4 flex gap-4">
      <Link href={caseLink}>
        <Image
          src={imageURL}
          alt={imageALT}
          placeholder="blur"
          className="max-h-[185px] min-h-[185px] max-w-[180px] basis-3/5 rounded object-cover md:max-w-[300px]"
        />
      </Link>
      <div className="basis-2/5">
        <div className="flex min-h-full flex-col justify-center">
          <Link href={caseLink}>
            <TitleH3>{title}</TitleH3>
          </Link>
          <div className="space-y-4 md:space-y-6">
            <p className="mt-2 font-rubik text-sm font-light leading-6 text-[#2b2b2b]">
              {description}
            </p>
            <div>
              <Link href={caseLink} className="text-[0.9rem] tracking-wide text-[#2b2b2b]">
                {"Read more → "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
