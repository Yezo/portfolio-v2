import aniflux from "../../../../public/aniflux.png"
import AniFluxInfograph1 from "../../../../public/aniflux/AniFluxInfograph1.png"
import AniFluxInfograph2 from "../../../../public/aniflux/AniFluxInfograph2.png"
import AniFluxInfograph3 from "../../../../public/aniflux/AniFluxInfograph3.png"
import dynamic from "next/dynamic"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))
const ExternalLinkContainer = dynamic(() => import("@/components/Contact/ExternalLinkContainer"))
const ExternalLinkButton = dynamic(() => import("@/components/Contact/ExternalLinkButton"))
const ExternalLinkDate = dynamic(() => import("@/components/Contact/ExternalLinkDate"))
const ProjectFigureImage = dynamic(() => import("@/components/Projects/ProjectFigureImage"))
const ProjectLinkContainer = dynamic(() => import("@/components/Projects/ProjectLinkContainer"))

export const metadata = {
  title: "AniFlux",
  description: "AniFlux page for Kevin Vo's Portfolio",
}

export default function AniFluxPage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={aniflux} alt="Image of AniFlux's website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer
          title="AniFlux"
          description="React, Redux Toolkit, Redux Query TypeScript, Tailwind, Vite"
        >
          <ExternalLinkDate>Feb. 2023 - Apr. 2023</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="aniflux.onrender.com/">
          <ExternalLinkButton url="https://aniflux.onrender.com/" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer
          title="GitHub Repository"
          description="github.com/Yezo/jikan-anime-project"
        >
          <ExternalLinkButton url="https://github.com/Yezo/jikan-anime-project" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <ProjectFigureImage src={AniFluxInfograph1} alt="Image of aniflux's website" />
          <Paragraph>
            {`Many anime and manga-related websites fall short in delivering a modern design and user-friendly experience. These platforms often suffer from information overload, bombarding users with an overwhelming amount of unnecessary data that hinders their ability to focus on the content they seek. The excessive clutter and irrelevant details make it arduous for users to digest and absorb the essential information they are looking for, be it news updates, reviews, or insightful articles.`}
          </Paragraph>
          <Paragraph>{`Consequently, navigating through such websites can prove to be a challenging task. A lack of a clear user interface make it frustrating for users to navigate around the website and find what they need. Simplifying the interface, implementing logical menu structures, and enhancing search functionalities are crucial steps toward creating a more friendly user experience.`}</Paragraph>

          <ProjectFigureImage src={AniFluxInfograph2} alt="Image of aniflux's website" />
          <Paragraph>
            {`AniFlux is my personal take on an anime and manga website, crafted using modern technologies to deliver a visually appealing and modern experience. With a focus on streamlining the content, unnecessary bloat is eliminated, allowing the detailed information of each anime or manga to shine. The intuitive navigation system empowers users to effortlessly navigate between their desired anime or manga. `}
          </Paragraph>

          <ProjectFigureImage src={AniFluxInfograph3} alt="Image of aniflux's website" />
          <Paragraph>
            {`The JikanAPI, while offering a vast amount of data, has certain limitations. Notably, it lacks complete data for more obscure anime titles, which can result in incomplete information being displayed. Additionally, as a free API, it imposes rate limits to prevent an excessive number of requests. This means that users visiting AniFlux may encounter missing data due to rate limiting. `}
          </Paragraph>
          <Paragraph>
            {`JikanAPI also presented challenges during development, as I frequently encountered "429 Too Many Requests" errors when testing components. Consequently, populating pages with multiple pieces of content from the API became difficult, as it was necessary to adhere to the strict limit of no more than 3 requests per second which meant I could not show extra data from more than 2-3 sources for a single page.`}
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://aniflux.onrender.com/"
        demoTitle="AniFlux"
        previousURL="/projects/arkoko"
        previousTitle="Arkoko"
        nextURL="/projects/riskthinking"
        nextTitle="RiskThinking"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
