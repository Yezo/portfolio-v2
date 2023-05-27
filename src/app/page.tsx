import arkoko from "../../public/arkoko.webp"
import aniflux from "../../public/aniflux.webp"
import riskthinking from "../../public/riskthinking.png"

import dynamic from "next/dynamic"
import Link from "next/link"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const ProjectBox = dynamic(() => import("@/components/Projects/ProjectBox"))

export default function Home() {
  return (
    <MainContainer>
      <div className="border-b border-[#2b2b2b]/20 pb-1 dark:border-[#fff]/20">
        <TitleH1>{`Kevin Vo `}</TitleH1>
      </div>
      <section className="mb-8 mt-4">
        <Paragraph>{`I'm a design-focused developer specializing in crafting user-centered digital experiences through creativity and strategic design. By understanding user needs, I create visually compelling interfaces that enhance usability and drive positive interactions. `}</Paragraph>
        <Paragraph>{`I am currently actively seeking new opportunities. If you are in search of a developer who possesses a strong eye for design, I am extremely excited to collaborate with a team of creative designers and developers.`}</Paragraph>
        <Paragraph>
          {`Please feel free to reach out and`}{" "}
          <span>
            <Link
              href="mailto:kvo.codes@gmail.com"
              className="text-[0.95rem] font-bold underline transition-all hover:opacity-[0.7]"
            >
              {"say hello!"}
            </Link>
            {"👋 "}
          </span>
        </Paragraph>
      </section>

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

        <div className="pt-8 font-rubik text-lg tracking-wide dark:text-white">
          <Link href="/projects">{"View all projects → "}</Link>
        </div>
      </div>
    </MainContainer>
  )
}
