import { Info } from "lucide-react"
import Link from "next/link"

export default function InfoBox() {
  return (
    <div className="my-6 flex gap-2 rounded bg-[#2b2b2b] px-6 py-4  text-white shadow-sm ring-1 ring-black/10">
      <div className="pt-[3px]">
        <Info strokeWidth="2.5" size="20" />
      </div>
      <div className="space-y-3">
        <div className="font-faustina font-semibold tracking-wide">
          Currently looking for opportunities
        </div>
        <div className="text-sm leading-6">
          <div> {"I'd love to join a team of fellow creative developers."}</div>
          <span>
            {`Shoot an email my way or say hello, that's fine too. Let's`}{" "}
            <span>
              <Link
                href="mailto:kvo.codes@gmail.com"
                className={`relative inline-block max-w-fit select-none text-sm italic tracking-tight outline-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition hover:before:scale-100`}
              >
                {"connect!"}
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
