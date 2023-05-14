import arkoko from "../../../public/arkoko.webp"
import aniflux from "../../../public/aniflux.webp"
import snippits from "../../../public/snippits.webp"
import trackr from "../../../public/trackr.png"
import kore from "../../../public/kore.png"
import riskthinking from "../../../public/riskthinking.png"
import kv from "../../../public/kv.png"

import dynamic from "next/dynamic"

const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const ProjectBox = dynamic(() => import("@/components/Projects/ProjectBox"))

export const metadata = {
  title: "Projects",
  description: "Projects page for Kevin Vo's Portfolio",
}

export default function ProjectsPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <section className="border-b border-[#2b2b2b]/20 pb-3">
        <TitleH1>Projects</TitleH1>
      </section>
      <section className="mt-6">
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
        <ProjectBox
          imageURL={kv}
          imageALT="Picture of Kevin Vo's brand logo"
          title="My Portfolio"
          description="A deep dive on a junior developer perspective to self-branding"
          caseLink="/projects/portfolio"
        />
        <ProjectBox
          imageURL={snippits}
          imageALT="Picture of Snippit's brand logo"
          title="Snippits"
          description="Code snippet repository built for programmers with the memory of a goldfish "
          caseLink="/projects/snippits"
        />
        <ProjectBox
          imageURL={kore}
          imageALT="Picture of Kore's brand logo"
          title="Kore"
          description="Minigame where players can learn the Korean alphabet"
          caseLink="/projects/kore"
        />
        <ProjectBox
          imageURL={trackr}
          imageALT="Picture of Trackr's brand logo"
          title="Trackr"
          description="Keep track of your job applications by adding, editing, or removing job applications as needed"
          caseLink="/projects/trackr"
        />
      </section>
    </main>
  )
}
