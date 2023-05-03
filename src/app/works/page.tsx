import ProjectBox from "@/components/Projects/ProjectBox"
import TitleH2 from "@/components/Typography/TitleH2"
import arkoko from "../../../public/arkoko.webp"
import aniflux from "../../../public/aniflux.webp"
import snippits from "../../../public/snippits.webp"
import trackr from "../../../public/trackr.png"
import kore from "../../../public/kore.png"
import TitleH1 from "@/components/Typography/TitleH1"

export const metadata = {
  title: "Works",
  description: "Works page for Kevin Vo's Portfolio",
}

export default function WorksPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <section className="border-b border-[#2b2b2b]/20 pb-3">
        <TitleH1>Works</TitleH1>
      </section>
      <section className="mt-6">
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
        <ProjectBox
          imageURL={kore}
          imageALT="Picture of Kore's brand logo"
          title="Kore"
          description="Minigame where players can learn the Korean alphabet"
          caseLink="/works/kore"
        />
        <ProjectBox
          imageURL={trackr}
          imageALT="Picture of Trackr's brand logo"
          title="Trackr"
          description="Keep track of your job applications by adding, editing, or removing job applications as needed"
          caseLink="/works/trackr"
        />
      </section>
    </main>
  )
}
