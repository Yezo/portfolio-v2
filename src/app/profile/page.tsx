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
export default function ProfilePage() {
  const fundamentals = SKILLS.filter(({ category }) => category === "fundamental")
  const familiarity = SKILLS.filter(({ category }) => category === "familiarity")
  const beginner = SKILLS.filter(({ category }) => category === "beginner")
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <TitleH1>{`Hey, my name is Kevin and I'm a design-focused engineer based in Barrie, ON.`}</TitleH1>

      <Paragraph>
        {`Before deciding to become a software engineer, I studied Psychology at York University. I found that path was not for me and I ended up trying web development instead. `}
      </Paragraph>
      <Paragraph>{`Entering such a technical field without proper guidance and self-teaching myself how to program was an arduous journey. Ultimately, it ended up being rather rewarding seeing my hard work translate into something people could interact with on the browser.`}</Paragraph>
      <Paragraph>{`Video games have been a large part of my life and I contribute it in part to a game developer's ability to fully immerse a player into the experience. As much as players love the atmosphere, the environment, and the interactions within a game, I hope to replicate those moments for others through an enriching and powerful web experience.`}</Paragraph>

      <section className="mt-6">
        <TitleH2>Skillset</TitleH2>

        <div className="mt-4">
          <TitleH3>Fundamentals</TitleH3>
          <div className="my-2 flex flex-wrap gap-[4px]">
            {fundamentals.map((item, index) => (
              <div
                key={index}
                className="flex min-w-[273.5px] items-center gap-4 rounded bg-transparent/[.02] px-6 py-4 text-sm ring-1 ring-black/70"
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <TitleH3>Familiarity</TitleH3>
          <div className="my-2 flex flex-wrap gap-[4px]">
            {familiarity.map((item, index) => (
              <div
                key={index}
                className="flex min-w-[273.5px] items-center gap-4 rounded bg-transparent/[.02]  px-6 py-4 text-sm ring-1 ring-black/70"
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <TitleH3>Beginner</TitleH3>
          <div className="my-2 flex flex-wrap gap-[4px]">
            {beginner.map((item, index) => (
              <div
                key={index}
                className="flex min-w-[273.5px] items-center gap-4 rounded bg-transparent/[.02]  px-6 py-4 text-sm ring-1 ring-black/70"
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
