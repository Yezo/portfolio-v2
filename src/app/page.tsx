import arkoko from "../../public/arkoko.png"
import aniflux from "../../public/aniflux.png"
import riskthinking from "../../public/riskthinking.png"
import kv from "../../public/kv.png"
import trackr from "../../public/trackr.png"
import dynamic from "next/dynamic"
import Link from "next/link"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const ProjectBox = dynamic(() => import("@/components/Projects/ProjectBox"))
const WordLink = dynamic(() => import("@/components/Typography/WordLink"))

export default function Home() {
  return (
    <MainContainer>
      <TitleH1>kv.</TitleH1>
      <section className="mb-12 mt-4">
        <Paragraph>
          I'm a design-focused fullstack developer committed to crafting digital experiences through
          creativity and strategic design. Through a user-centered lens, I help create visually
          compelling interfaces that aim to enhance and drive positive interactions.
        </Paragraph>
        <Paragraph>
          I am actively seeking for new opportunities. If you're in search for a creative developer,
          I'd love to collaborate with your talented team.
        </Paragraph>
        <Paragraph>
          Please reach out and
          <WordLink url="mailto:kvo.codes@gmail.com">say hello!</WordLink>
          👋
        </Paragraph>
      </section>

      <TitleH2>Selected projects.</TitleH2>

      <section className="mt-6">
        <ProjectBox
          imageURL={trackr}
          imageALT="Picture of Trackr's brand logo"
          title="trackr."
          description="Ditch the spreadsheets, manage and track your job applications"
          caseLink="/projects/trackr"
        />
        <ProjectBox
          imageURL={arkoko}
          imageALT="Picture of Arkoko's brand logo"
          title="arkoko."
          description="Helping gamers minimize daily micro-decisions through data-driven analytics"
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
          imageALT="Picture of riskthinking's brand logo"
          title="riskthinking."
          description="Work sample for riskthinking.ai visualizing climate risk datasets"
          caseLink="/projects/riskthinking"
        />
        <ProjectBox
          imageURL={kv}
          imageALT="Picture of Kevin Vo's brand logo"
          title="my portfolio."
          description="A deep dive on a junior web developer's perspective to self-branding"
          caseLink="/projects/portfolio"
        />

        <div className="pt-8 tracking-wide dark:text-white">
          <Link href="/projects">{"View all projects → "}</Link>
        </div>
      </section>
    </MainContainer>
  )
}
