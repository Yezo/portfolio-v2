import arkoko from "../../../../public/arkoko.png"
import ArkokoInfographOne from "../../../../public/arkoko/ArkokoInfographOne.png"
import ArkokoInfographTwo from "../../../../public/arkoko/ArkokoInfographTwo.png"
import ArkokoInfographThree from "../../../../public/arkoko/ArkokoInfographThree.png"
import ArkokoInfographFour from "../../../../public/arkoko/ArkokoInfographFour.png"
import dynamic from "next/dynamic"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))
const ExternalLinkContainer = dynamic(() => import("@/components/Contact/ExternalLinkContainer"))
const ExternalLinkButton = dynamic(() => import("@/components/Contact/ExternalLinkButton"))
const ExternalLinkDate = dynamic(() => import("@/components/Contact/ExternalLinkDate"))
const ProjectFigureImage = dynamic(() => import("@/components/Projects/ProjectFigureImage"))
const ProjectLinkContainer = dynamic(() => import("@/components/Projects/ProjectLinkContainer"))
const WordLink = dynamic(() => import("@/components/Typography/WordLink"))

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
          <ProjectFigureImage
            src={ArkokoInfographOne}
            alt="Image of a venn diagram between enjoying the game, calculating strategies, and arkoko finding a balance between them"
          />
          <Paragraph>
            Video games are a beloved pastime for many, offering an immersive experience. However,
            players often find themselves frustrated when faced with the task of figuring out
            efficient methods or calculating various outcomes on their own. This process can be
            tedious, time-consuming, and detracts from the valuable time they could have spent
            enjoying the game itself.
          </Paragraph>

          <Paragraph>
            Through <WordLink url="https://arkoko.vercel.app">Arkoko</WordLink>, I aim to create an
            intuitive experience that maximizes players&apos; enjoyment. By reducing the mental
            effort involving complex calculations and optimizing strategies, I enable gamers to
            focus on what truly matters — the thrill of playing the game that they enjoy.
          </Paragraph>

          <ProjectFigureImage
            src={ArkokoInfographTwo}
            alt="Image of the different things that arkoko has to offer"
          />
          <Paragraph>
            Arkoko is dedicated to solving this issue by offering a comprehensive all-in-one pitstop
            of calculators, guides, tools, and resources tailored for the online MMORPG{" "}
            <WordLink url="https://www.playlostark.com/en-us">LOST ARK.</WordLink> Players are no
            longer required to spend valuable time crunching numbers to find out what&apos;s
            efficient and what&apos;s not.
          </Paragraph>
          <Paragraph>
            With Arkoko&apos;s efficient tools, users can input minimal values and have all the
            necessary calculations performed automatically. This streamlined approach simplifies
            decision-making processes and empowers players to optimize their gaming experience.
          </Paragraph>

          <ProjectFigureImage
            src={ArkokoInfographThree}
            alt="Image of line graph between guidance and self-accomplishment"
          />
          <Paragraph>
            Ever since I wrote my first line of code, creating Arkoko has been a long-held
            aspiration. Crafting a website from scratch presented its difficulties, yet I am proud
            of the modern and distinctive appearance of Arkoko today.
          </Paragraph>
          <Paragraph>
            Developing the in-game tools, particularly the calculators, posed a unique challenge.
            Without any guidance or documentation to rely on, I had to overcome hurdles to ensure
            they functioned precisely as intended. However, the process of troubleshooting and
            resolving these obstacles by myself has made the achievement doubly rewarding.
          </Paragraph>

          <ProjectFigureImage
            src={ArkokoInfographFour}
            alt="Image that compares crowd-sourced 3rd party APIs vs. official API"
          />
          <Paragraph>
            Arkoko has been an ambitious project with a vision to introduce a multitude of
            additional features in the future. However, one significant challenge is the absence of
            an official API that can provide real-time data.
          </Paragraph>
          <Paragraph>
            Currently, Arkoko relies on its own local API and an{" "}
            <WordLink url="https://documenter.getpostman.com/view/20821530/UyxbppKr">
              external third-party API
            </WordLink>{" "}
            that relies on crowd-sourced information. The dependency on these limited data sources
            is less than ideal. Ideally, in the future, it is my hope that Amazon will launch an
            official API, offering comprehensive and reliable data that would greatly enhance the
            capabilities of Arkoko.
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
