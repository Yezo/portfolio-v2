import { Info } from "lucide-react"
import Link from "next/link"

export default function InfoBox() {
  return (
    <div className="my-6 flex gap-2 rounded bg-[#141414] px-6 py-4  text-white shadow-sm ring-1 ring-black/10">
      <div className="pt-[3px]">
        <Info strokeWidth="2.5" size="20" />
      </div>
      <div className="space-y-3">
        <div className="font-alegreya font-semibold tracking-wide">
          Currently looking for opportunities
        </div>
        <div className="font-rubik text-sm font-light leading-6">
          <div> {"I'd love to join a team of creative designers and developers."}</div>
          <span>
            {`Send an email my way saying`}{" "}
            <span>
              <Link
                href="mailto:kvo.codes@gmail.com"
                className={`relative inline-block max-w-fit select-none text-sm font-bold tracking-tight outline-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition hover:before:scale-100`}
              >
                {"hello! 👋"}
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
