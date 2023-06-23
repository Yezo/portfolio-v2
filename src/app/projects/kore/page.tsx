import kore from "../../../../public/kore.png"
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
  title: "Kore",
  description: "Kore page for Kevin Vo's Portfolio",
}

export default function KorePage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={kore} alt="Image of kore' website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer
          title="Kore"
          description="React, TypeScript, Tailwind, PrismJS, React-Router, Vite"
        >
          <ExternalLinkDate>Mar. 2023</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="kore-beta.vercel.app">
          <ExternalLinkButton url="https://kore-beta.vercel.app" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="GitHub Repository" description="github.com/Yezo/learn-korean">
          <ExternalLinkButton url="https://github.com/Yezo/learn-korean" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <TitleH2>The Objective</TitleH2>
          <Paragraph>{`Since high school, I have been dedicated to studying and self-teaching myself the Korean language. When people learn about my passion for Korean, they often admire my commitment, and expressing their own desire to learn a new language. However, many are surprised to discover that the Korean alphabet, known as Hangul, is actually one of the easier writing systems to learn. To assist language learners on their journey to mastering Korean, I developed Kore, a mini-application/game designed to familiarize users with the Korean lettering system.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`Implementing the game logic for Kore proved to be more challenging than anticipated. Numerous edge cases needed to be addressed, especially when users navigated between letters. For instance, if a user was in the middle of the alphabet and chose to memorize a letter, several actions had to occur simultaneously. The selected letter had to be removed from the array of available letters, the count of remaining letters needed to be updated accordingly, and the current displayed item had to show the previous or next item since the removed letter could no longer be displayed. Tackling these intricacies and ensuring a seamless user experience required careful consideration.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`Although Kore started as a small project aimed at enhancing my understanding of array manipulation, I have grand aspirations to expand its scope beyond a simple mini-game. I envision transforming this project into a comprehensive web application that offers a plethora of learning resources, enabling users to delve deeper into South Korea's rich culture and language. One potential avenue for expansion is going beyond just learning the alphabet and help users with word and sentence learning. `}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://kore-beta.vercel.app/"
        demoTitle="Kore"
        previousURL="/projects/snippits"
        previousTitle="Snippits"
        nextURL="/projects/trackr"
        nextTitle="Trackr"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
