import arkoko from "../../public/arkoko.png"
import aniflux from "../../public/aniflux.png"
import riskthinking from "../../public/riskthinking.png"
import kv from "../../public/kv.png"

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
      <TitleH1>{`Kevin Vo `}</TitleH1>

      <section className="mb-12 mt-4">
        <Paragraph>{`I'm a design-focused developer specializing in crafting user-centered digital experiences through creativity and strategic design. By understanding user needs, I create visually compelling interfaces that enhance usability and drive positive interactions. `}</Paragraph>
        <Paragraph>{`I am currently actively seeking new opportunities. If you are in search of a developer who possesses a strong eye for design, I am extremely excited to collaborate with a team of creative designers and developers.`}</Paragraph>
        <Paragraph>
          {`Please feel free to reach out and`}{" "}
          <span>
            <Link
              href="mailto:kvo.codes@gmail.com"
              className="text-[0.95rem] font-bold transition-all hover:opacity-[0.7] dark:text-[#F3F4F6]"
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

        <div className="pt-8 font-rubik text-lg tracking-wide dark:text-white">
          <Link href="/projects">{"View all projects → "}</Link>
        </div>
      </div>
    </MainContainer>
  )
}
