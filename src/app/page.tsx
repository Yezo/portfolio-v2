import arkoko from "../../public/arkoko.webp"
import aniflux from "../../public/aniflux.webp"
import riskthinking from "../../public/riskthinking.png"
import avatar from "../../public/avatar.webp"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

const InfoBox = dynamic(() => import("@/components/InfoBox/InfoBox"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const ProjectBox = dynamic(() => import("@/components/Projects/ProjectBox"))

export default function Home() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <div className="flex items-center gap-4 border-b border-[#2b2b2b]/20 pb-3">
        <Image
          src={avatar}
          alt="Avatar"
          width="65"
          height="65"
          priority
          placeholder="blur"
          className="rounded object-cover shadow-sm ring-1 ring-black "
        ></Image>
        <TitleH1>{`Kevin Vo `}</TitleH1>
      </div>
      <section className="mt-4">
        <Paragraph>{`I am a design-focused Software Engineer specializing in crafting user-centered digital experiences through creativity and strategic design. By understanding user needs, I create visually compelling interfaces that enhance usability and drive positive interactions. `}</Paragraph>
      </section>
      <InfoBox />
      <TitleH2>Selected projects</TitleH2>
      <div className="mt-6">
        <ProjectBox
          imageURL={arkoko}
          imageALT="Picture of Arkoko's brand logo"
          title="Arkoko"
          description="Helping gamers minimize daily micro-decisions through data-driven analysis"
          caseLink="/projects/arkoko"
        />
        <ProjectBox
          imageURL={aniflux}
          imageALT="Picture of AniFlux's brand logo"
          title="AniFlux"
          description="Exploring a modern re-design to the anime and manga database experience"
          caseLink="/projects/aniflux"
        />
        <ProjectBox
          imageURL={riskthinking}
          imageALT="Picture of riskthinking's brand logo"
          title="RiskThinking"
          description="Work sample for riskthinking.ai visualizing climate risk datasets"
          caseLink="/projects/riskthinking"
        />

        <div className="pt-8 font-rubik text-lg tracking-wide text-[#2b2b2b]">
          <Link href="/projects">{"View all projects → "}</Link>
        </div>
      </div>
    </main>
  )
}
