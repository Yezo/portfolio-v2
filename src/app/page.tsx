import arkoko from "../../public/arkoko.webp"
import aniflux from "../../public/aniflux.webp"
import snippits from "../../public/snippits.webp"
import avatar from "../../public/avatar.webp"

import dynamic from "next/dynamic"
import Image from "next/image"

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
        <Paragraph>{`I'm a design-focused Software Developer that specializes in crafting user-centered digital experiences through creativity and strategic design.`}</Paragraph>
      </section>
      <InfoBox />
      <TitleH2>Selected works</TitleH2>
      <div className="mt-6">
        <ProjectBox
          imageURL={arkoko}
          imageALT="Picture of Arkoko's brand logo"
          title="Arkoko"
          description="Helping gamers minimize daily micro-decisions through data-driven analysis"
          caseLink="/works/arkoko"
        />
        <ProjectBox
          imageURL={aniflux}
          imageALT="Picture of AniFlux's brand logo"
          title="AniFlux"
          description="Exploring a modern re-design to the anime and manga database experience"
          caseLink="/works/aniflux"
        />
        <ProjectBox
          imageURL={snippits}
          imageALT="Picture of Snippit's brand logo"
          title="Snippits"
          description="Code snippet repository built for programmers with the memory of a goldfish "
          caseLink="/works/snippits"
        />
      </div>
    </main>
  )
}
