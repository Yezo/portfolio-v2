import { SKILLS } from "@/lib/icons"
import { GithubIcon, AtSignIcon, ScrollIcon } from "lucide-react"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const ContactButton = dynamic(() => import("@/components/Contact/ContactButton"))

export const metadata = {
  title: "Profile",
  description: "Profile page for Kevin Vo's Portfolio",
}

export default function ProfilePage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <div className="border-b border-[#2b2b2b]/20 pb-2">
        <TitleH1>{`Hey, call me Kev 👋`}</TitleH1>
      </div>

      <Paragraph>{`As a design-focused Software Engineer, I am most experienced with the Javascript ecosystem (React, TS, Next.js, Redux, Node). My current specialization revolves around crafting responsive web applications with a mobile-first approach. I am truly passionate about front-end web positions where the worlds of creative design and web development intersect.`}</Paragraph>

      <Paragraph>{`Video games have played a significant role in shaping my life, as they have the incredible ability to fully immerse players in unforgettable experiences. I attribute my passion for creating immersive experiences to game developers who skillfully craft atmospheres, environments, and interactions within games. It is my goal to replicate those captivating moments and bring them to others through enriching and powerful web experiences. `}</Paragraph>

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
