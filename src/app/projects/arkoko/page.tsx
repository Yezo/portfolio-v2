import arkoko from "../../../../public/arkoko.png"
import dynamic from "next/dynamic"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))
const ExternalLinkContainer = dynamic(() => import("@/components/Contact/ExternalLinkContainer"))
const ExternalLinkButton = dynamic(() => import("@/components/Contact/ExternalLinkButton"))
const ExternalLinkDate = dynamic(() => import("@/components/Contact/ExternalLinkDate"))
const ProjectFigureImage = dynamic(() => import("@/components/Projects/ProjectFigureImage"))
const ProjectLinkContainer = dynamic(() => import("@/components/Projects/ProjectLinkContainer"))

export const metadata = {
  title: "Arkoko",
  description: "Arkoko page for Kevin Vo's Portfolio",
}

export default function ArkokoPage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={arkoko} alt="Image of arkoko's website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer
          title="Arkoko"
          description="React, Typescript, Tailwind, Node.js, Express, MongoDB, Vite"
        >
          <ExternalLinkDate>Dec. 2022 - Apr.2023</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="arkoko.vercel.app">
          <ExternalLinkButton url="https://arkoko.vercel.app" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="GitHub Repository" description="github.com/Yezo/arkoko">
          <ExternalLinkButton url="https://github.com/Yezo/arkoko" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <TitleH2>The Problem</TitleH2>
          <Paragraph>
            {`Video games are a beloved pastime for many, offering an immersive experience. However, players often find themselves frustrated when faced with the task of figuring out efficient methods or calculating various outcomes on their own. `}
          </Paragraph>
          <Paragraph>
            {`This process can be tedious, time-consuming, and detracts from the valuable time they could have spent enjoying the game itself.`}
          </Paragraph>
          <Paragraph>
            {`As a software engineer, I am driven by the opportunity to develop tools, systems, and algorithms that streamline gameplay and remove unnecessary barriers. By automating complex calculations, optimizing strategies, and providing in-game guidance.`}
          </Paragraph>
          <Paragraph>
            {`Through Arkoko, I aim to create an intuitive experience that maximizes players' enjoyment. By reducing the mental effort associated with figuring out efficient methods or calculating outcomes, I enable gamers to focus on what truly matters — the thrill of playing the game that they enjoy.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>
            {`Arkoko is dedicated to solving this issue by offering a comprehensive all-in-one pitstop of calculators, guides, tools, and resources tailored for the online MMORPG "Lost Ark." Players are no longer required to spend valuable time crunching numbers to find out what's efficient and what's not.
            `}
          </Paragraph>
          <Paragraph>
            {`With Arkoko's efficient tools, users can input minimal values and have all the necessary calculations performed automatically. This streamlined approach simplifies decision-making processes and empowers players to optimize their gaming experience.
            `}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>
            {`Ever since I wrote my first line of code, creating Arkoko has been a long-held aspiration. It has been a challenging journey, marked by numerous iterations and iterations, both in terms of technology and visual design. Crafting a website from scratch presented its difficulties, yet I am proud of the modern and distinctive appearance of Arkoko today. `}
          </Paragraph>
          <Paragraph>
            {`Developing the in-game tools, particularly the calculators, posed a unique challenge. Without any guidance or documentation to rely on, I had to overcome hurdles to ensure they functioned precisely as intended. However, the process of troubleshooting and resolving these obstacles by myself has made the achievement doubly rewarding.`}
          </Paragraph>
          <Paragraph>
            {`It is this sense of personal accomplishment that fuels my unwavering dedication to Arkoko, which remains my foremost passion project.`}
          </Paragraph>
          <Paragraph>
            {`Undoubtedly, the most significant technical challenge I encountered was while working on the Oreha Crafting Calculator. The complexity arose from the intricate data structures involved, particularly the usage of nested objects for the recipes. Managing data from both the local API and the LostArkMarketOnline API further added to the difficulty. `}
          </Paragraph>
          <Paragraph>
            {`Upon reflection, the code implementation for this specific tool falls short of my desired standards. Given the chance, I would refactor the code to achieve a more elegant and streamlined solution when revisiting that component. The most valuable lesson I gained from programming this feature was mastering the art of merging and manipulating nested arrays of objects.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>
            {`Arkoko is an ambitious project with a vision to introduce a multitude of additional features in the future. However, one significant challenge is the absence of an official API that can provide real-time data. `}
          </Paragraph>
          <Paragraph>
            {`Currently, Arkoko relies on its own local API, which, regrettably, lacks sufficient data, and an external third-party API that relies on crowd-sourced information. The dependency on these limited data sources is less than ideal. Ideally, in the future, it is my hope that Amazon will launch an official API, offering comprehensive and reliable data that would greatly enhance the capabilities of Arkoko.`}
          </Paragraph>
          <Paragraph>
            {`The website also relies on fetching extensive data from multiple sources. It retrieves information from our MongoDB-based API, which houses our stored data, and also integrates data from an external API. `}
          </Paragraph>
          <Paragraph>
            {`To enhance both the codebase and the developer experience, incorporating a state management library such as Redux, SWR, or Zustand would yield significant improvements. Additionally, in order to further separate the component logic from the view logic, creating custom hooks for various components would be a good choice to achieve abstraction.`}
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://arkoko.vercel.app/"
        demoTitle="Arkoko"
        previousURL="/projects/trackr"
        previousTitle="Trackr"
        nextURL="/projects/aniflux"
        nextTitle="AniFlux"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
