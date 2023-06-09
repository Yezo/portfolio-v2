import arkoko from "../../../public/arkoko.png"
import aniflux from "../../../public/aniflux.png"
import snippits from "../../../public/snippits.png"
import trackr from "../../../public/trackr.png"
import kore from "../../../public/kore.png"
import riskthinking from "../../../public/riskthinking.png"
import kv from "../../../public/kv.png"

import dynamic from "next/dynamic"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const ProjectBox = dynamic(() => import("@/components/Projects/ProjectBox"))

export const metadata = {
  title: "Projects",
  description: "Projects page for Kevin Vo's Portfolio",
}

export default function ProjectsPage() {
  return (
    <MainContainer>
      <TitleH1>{`Projects`}</TitleH1>

      <section className="mt-6">
        <ProjectBox
          imageURL={arkoko}
          imageALT="Picture of Arkoko's brand logo"
          title="arkoko."
          description="Helping gamers minimize daily micro-decisions through data-driven analysis"
          caseLink="/projects/arkoko"
        />
        <ProjectBox
          imageURL={aniflux}
          imageALT="Picture of AniFlux's brand logo"
          title="aniflux."
          description="Exploring a modern re-design to the anime and manga database experience"
          caseLink="/projects/aniflux"
        />
        <ProjectBox
          imageURL={riskthinking}
          imageALT="Picture of inging's brand logo"
          title="riskthinking."
          description="Web application as a work sample for riskthinking.ai visualizing climate risk datasets"
          caseLink="/projects/riskthinking"
        />
        <ProjectBox
          imageURL={kv}
          imageALT="Picture of Kevin Vo's brand logo"
          title="my portfolio."
          description="A deep dive on a junior web developer's perspective to self-branding"
          caseLink="/projects/portfolio"
        />
        <ProjectBox
          imageURL={snippits}
          imageALT="Picture of Snippit's brand logo"
          title="snippits."
          description="Code snippet repository built for programmers with the memory of a goldfish "
          caseLink="/projects/snippits"
        />
        <ProjectBox
          imageURL={kore}
          imageALT="Picture of Kore's brand logo"
          title="kore."
          description="Minigame where players can learn the Korean alphabet"
          caseLink="/projects/kore"
        />
        <ProjectBox
          imageURL={trackr}
          imageALT="Picture of Trackr's brand logo"
          title="trackr."
          description="Keep track of your job applications by adding, editing, or removing job applications as needed"
          caseLink="/projects/trackr"
        />
      </section>
    </MainContainer>
  )
}
