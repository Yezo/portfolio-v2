import kore from "../../../../public/kore.png"

import dynamic from "next/dynamic"
import Image from "next/image"

const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "Kore",
  description: "Kore page for Kevin Vo's Portfolio",
}

export default function KorePage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={kore}
          alt="Kore"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/learn-korean"
        demoURL="https://kore-beta.vercel.app/"
      />

      <WorksProjectHeader
        title="kore"
        subtitle="Mar. 2023"
        technologies={["React", "TypeScript", "Tailwind", "Vite"]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Objective</TitleH2>
          <Paragraph>{`I have been studying and self-teaching myself the Korean language since high school. A lot of people that hear this usually praise me for my dedication to the Korean culture and often say they would also love to learn a language someday. To their surprise, the Korean alphabet is one of the easier languages to learn. Kore is a mini-application/game that helps users be more acquainted with the Korean lettering system and help in their memorization journey. `}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`It was suprisingly difficult when implementing the game logic at first. There were a lot of edge cases that needed to be covered when users were navigating between letters. For example, if the user is the in the middle of the alphabet and chooses to memorize a letter, the letter should be removed from the array of letters, the count of remaining letters should update accordingly, and the current displayed item should display the previous or next item since it can't display an item that has just been removed. `}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`While this was just a small project to help myself learn more about array manipulation, I hope to expand this project into something bigger than just a mini-game. These type of things can be transferred to learning words and sentences. Ultimately, I'd love to create a web application with multiple learning resources for people to learn more about South Korea's culture and their language.`}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://kore-beta.vercel.app/"
        demoTitle="Kore"
        previousURL="/projects/snippits"
        previousTitle="Snippits"
        nextURL="/projects/trackr"
        nextTitle="Trackr"
      ></WorksEndNavigation>
    </main>
  )
}
