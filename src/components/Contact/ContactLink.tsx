"use client"

import { CopyIcon, SendIcon, GithubIcon, ExternalLinkIcon, CheckIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactLink() {
  return (
    <>
      <div className="flex min-h-[75px] items-center justify-between font-rubik tracking-tight">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 font-medium dark:text-white">{`Let's connect`}</p>
            <p className="hidden text-sm opacity-50 dark:text-[#a0a0a0] dark:opacity-90 sm:block">
              kvo.codes@gmail.com
            </p>
          </div>
        </div>
        <div className="flex space-x-2 rounded-md text-[0.8rem] tracking-tighter dark:divide-[#333333] dark:text-white dark:opacity-90 ">
          <ContactExternalButton url="mailto:kvo.codes@gmail.com">
            <SendIcon size={17} />
            Compose
          </ContactExternalButton>
          <span className="border-r border-[#d6d6d6]"> </span>
          <CopyEmailButton url="/">
            <CopyIcon size={17} />
            Copy
          </CopyEmailButton>
        </div>
      </div>

      <div className="flex min-h-[75px] items-center justify-between font-rubik tracking-tight">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 font-medium dark:text-white">Media</p>
            <p className="hidden text-sm opacity-50 dark:text-[#a0a0a0] dark:opacity-90 sm:block">
              Should I make a twitter?
            </p>
          </div>
        </div>
        <div className="flex space-x-2 rounded-md text-[0.8rem] tracking-tighter dark:divide-[#333333] dark:text-white dark:opacity-90 ">
          <ContactExternalButton url="https://www.linkedin.com/in/kvocodes/">
            <LinkedInSVG />
            LinkedIn
          </ContactExternalButton>
          <span className="border-r border-[#d6d6d6]"> </span>
          <ContactExternalButton url="https://github.com/Yezo">
            <GithubIcon size={17} />
            GitHub
          </ContactExternalButton>
        </div>
      </div>

      <div className="flex min-h-[75px] items-center justify-between font-rubik tracking-tight">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 font-medium dark:text-white">Résumé</p>
            <p className="hidden text-sm opacity-50 dark:text-[#a0a0a0] dark:opacity-90 sm:block">
              {`Currently open to opportunities`}
            </p>
          </div>
        </div>
        <div className="rounded-md text-[0.8rem] tracking-tighter dark:text-white dark:opacity-90 ">
          <ContactExternalButton url="/resume.pdf">
            <ExternalLinkIcon size={17} />
            Hire me
          </ContactExternalButton>
        </div>
      </div>
    </>
  )
}

const ContactExternalButton = ({ url, children }: { url: string; children: React.ReactNode }) => {
  return (
    <div className="rounded-md text-[0.8rem] tracking-tight dark:text-white dark:opacity-90">
      <Link
        href={url}
        className="flex min-w-[95px] items-center justify-center gap-2 rounded-md px-2 py-2  hover:bg-[#e5e6e8] hover:ring-1 hover:ring-black/10 hover:transition-all hover:duration-300 dark:hover:bg-[#212121]"
        target="_blank"
      >
        {children}
      </Link>
    </div>
  )
}

const CopyEmailButton = ({ url, children }: { url: string; children: React.ReactNode }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText("kvo.codes@gmail.com")
    setClicked(true)
  }
  return (
    <button
      className="rounded-md text-[0.8rem] tracking-tight dark:text-white dark:opacity-90"
      onClick={handleClick}
    >
      <div className="flex min-w-[95px] items-center justify-center gap-2 rounded-md px-2 py-2  hover:bg-[#e5e6e8] hover:ring-1 hover:ring-black/10 hover:transition-all hover:duration-300 dark:hover:bg-[#212121]">
        {clicked ? <CheckIcon size={17} /> : <CopyIcon size={17} />}
        {clicked ? "Copied" : "Copy"}
      </div>
    </button>
  )
}

const LinkedInSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}
