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

export default function Home() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <TitleH1>{`Kevin Vo \u00A0 / \u00A0 Design-focused Engineer`}</TitleH1>
      <Paragraph>{`My passion thrives in front-end web positions where creative design meets software development. I'm most comfortable with the Javascript ecosystem where I use React on a daily basis to craft modern web experiences. Recently, I've been gaining more interest in web design fundamentals including UI/UX, Typography, and Brand Identity.`}</Paragraph>
      <InfoBox />

      <TitleH2>Selected works</TitleH2>

      <ProjectBox
        imageURL={arkoko}
        imageALT="Picture of Arkoko's brand logo"
        title="Arkoko"
        description="Helping players minimize daily micro-decisions through data-driven analysis"
        caseLink="/works/arkoko"
      />
      <ProjectBox
        imageURL={aniflux}
        imageALT="Picture of AniFlux's brand logo"
        title="AniFlux"
        description="Exploring a modern design to the anime and manga experience"
        caseLink="/works/aniflux"
      />
      <ProjectBox
        imageURL={snippits}
        imageALT="Picture of Snippit's brand logo"
        title="Snippits"
        description="Code snippet repository built for programmers with the memory of a goldfish "
        caseLink="/works/snippits"
      />
    </main>
  )
}
