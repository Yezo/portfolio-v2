import { Info } from "lucide-react"
import Link from "next/link"

export default function InfoBox() {
  return (
    <div className="my-4 flex gap-2 rounded bg-[#2b2b2b] p-5 text-white shadow-sm ring-1 ring-black/10">
      <div className="pt-[2px]">
        <Info strokeWidth="2.5" size="20" />
      </div>
      <div className="space-y-3">
        <div className="font-semibold">Currently looking for opportunities</div>
        <div className="text-sm leading-6">
          <div> {"I'm capable of both front-end and full-stack developer positions."}</div>
          <span>
            {`If you think I'm a good fit, let's`}{" "}
            <span>
              <Link
                href="mailto:kvo.codes@gmail.com"
                className={`relative inline-block max-w-fit select-none text-sm italic tracking-tight outline-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition hover:before:scale-100`}
              >
                {"get in touch!"}
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
