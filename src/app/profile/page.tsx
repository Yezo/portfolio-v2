export const metadata = {
  title: "Profile",
  description: "Profile page for Kevin Vo's Portfolio",
}

import Paragraph from "@/components/Typography/Paragraph"
import TitleH1 from "@/components/Typography/TitleH1"
import TitleH2 from "@/components/Typography/TitleH2"
import TitleH3 from "@/components/Typography/TitleH3"
import { SKILLS } from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"
import ContactButton from "@/components/Contact/ContactButton"
import { GithubIcon, MailIcon, AtSignIcon, CopyIcon, ScrollIcon } from "lucide-react"
import ListItem from "@/components/Typography/ListItem"

export default function ProfilePage() {
  const fundamentals = SKILLS.filter(({ category }) => category === "fundamental")
  const familiarity = SKILLS.filter(({ category }) => category === "familiarity")
  const beginner = SKILLS.filter(({ category }) => category === "beginner")
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <div className="border-b border-[#2b2b2b]/20 pb-2">
        <TitleH1>{`Hey, call me Kev 👋`}</TitleH1>
      </div>

      <Paragraph>{`As a design-focused Software Engineer, I am most experienced with the Javascript ecosystem (React, TS, Next.js, Redux, Node). I currently specialize in crafting responsive web applications with a mobile-first approach. My passion thrives in front-end web positions where creative design meets web development.  `}</Paragraph>

      <Paragraph>{`Video games have been a large part of my life and I contribute that to a game developer's ability to fully immerse a player into the experience. As much as players love the atmosphere, the environment, and the interactions within a game, I hope to replicate those moments for others through an enriching and powerful web experience.`}</Paragraph>

      <section className="mt-6">
        <TitleH2>Contact</TitleH2>

        <div className="mt-6">
          <div className="my-2 flex flex-col gap-[5px] md:grid md:grid-cols-3">
            <ContactButton url="/resume.pdf" type="download">
              <ScrollIcon size="20" />
              Resume
            </ContactButton>
            <ContactButton url="https://github.com/Yezo" type="link">
              <GithubIcon size="20" />
              GitHub
            </ContactButton>
            <ContactButton url="https://www.linkedin.com/in/kvocodes/" type="link">
              <LinkedInSVG />
              LinkedIn
            </ContactButton>

            <div className="col-span-3">
              <ContactButton url="mailto:kvo.codes@gmail.com" type="link">
                <AtSignIcon size="20" />
                Reach me directly by email: kvo.codes@gmail.com
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <TitleH2>Skillset</TitleH2>

        <div className="mt-6 grid grid-cols-4 gap-[1px] font-faustina text-3xl md:grid-cols-6">
          {SKILLS.map((item) => (
            <div key={item.name} className="flex min-h-[91px] items-center justify-center bg-black">
              {item.url && item.url ? (
                <Link href={item.url}>
                  <Image src={item.icon} alt={item.name} width={35} height={35} />
                </Link>
              ) : (
                <Image src={item.icon} alt={item.name} width={35} height={35} />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const LinkedInSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}
