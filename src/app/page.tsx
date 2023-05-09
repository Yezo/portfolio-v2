import InfoBox from "@/components/InfoBox/InfoBox"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH1 from "@/components/Typography/TitleH1"
import TitleH2 from "@/components/Typography/TitleH2"
import TitleH3 from "@/components/Typography/TitleH3"
import Image from "next/image"
import arkoko from "../../public/arkoko.webp"
import aniflux from "../../public/aniflux.webp"
import snippits from "../../public/snippits.webp"
import ProjectBox from "@/components/Projects/ProjectBox"
import avatar from "../../public/avatar.webp"
import ListItem from "@/components/Typography/ListItem"

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
        ></Image>{" "}
        <TitleH1>{`Kevin Vo `}</TitleH1>
      </div>
      <section className="mt-4">
        <ListItem>💎 Design-focused Software Engineer based in Barrie, ON</ListItem>
        <ListItem>
          💎 Experienced with the Javascript ecosystem (React, TS, Next.js, Redux, Node)
        </ListItem>
        <ListItem>💎 Specializing in crafting mobile-first responsive web applications</ListItem>
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
