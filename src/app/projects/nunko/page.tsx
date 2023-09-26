import nunko from "../../../../public/nunko.png"

import dynamic from "next/dynamic"
import TrackrInfographicOne from "../../../../public/trackr/TrackrInfographicOne.png"
import TrackrInfographicTwo from "../../../../public/trackr/TrackrInfographicTwo.png"
import TrackrInfographicThree from "../../../../public/trackr/TrackrInfographicThree.png"

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
  title: "nunko",
  description: "Nunko page for Kevin Vo's Portfolio",
}

export default function TrackrPage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={nunko} alt="Image of Nunko's website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer
          title="Nunko"
          description="Next.js, NextAuth, TypeScript, MongoDB, TailwindCSS, React Hook Form, Zod, Server Actions"
        >
          <ExternalLinkDate>Sept. 2023</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="nunko-amber.vercel.app/">
          <ExternalLinkButton url="https://nunko-amber.vercel.app/" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="GitHub Repository" description="github.com/Yezo/nunko">
          <ExternalLinkButton url="https://github.com/Yezo/nunko" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <ProjectFigureImage src={TrackrInfographicOne} alt="Reiterations" />
          <Paragraph>
            Nunko is the next generational standard for anime and manga enthusiasts, delivering a
            comprehensive platform that combines social interactions with tracking and management
            capabiltiies. This application enables users to join the community, create personalized
            accounts, and dive straight into the world of anime and manga. With a rich filtering
            system, users can sift through an extensive library of entries and curate their own
            collections.
          </Paragraph>
          <Paragraph>
            Every user is equipped with a customized profile that showcases their ongoing anime
            series, planned watchlist, and completed titles. Nunko extends its services beyond anime
            to cover manga enthusiasts as well, providing the same array of features. Adding,
            editing, or removing anime and manga entries has never been more intuitive.
          </Paragraph>

          <Paragraph>
            Nunko originally emerged as a redesign of an outdated personal project known as
            <WordLink url="/projects/aniflux">AniFlux</WordLink>. Whether you've come across it
            while exploring my portfolio or found it directly, this journey started with a curiosity
            about React Server Components and
            <WordLink url="https://nextjs.org/docs/app/api-reference/functions/server-actions">
              Server Actions
            </WordLink>
            , their interaction with forms, and their potential to enhance the developer experience.
            It's safe to say that I'm not as afraid of dealing with forms as I used to.
          </Paragraph>

          <Paragraph>
            Although this project shares many technologies with my previous project,{" "}
            <WordLink url="/projects/trackr">Trackr</WordLink>, I've gained invaluable insights into
            Next.js and the overall workflow of building out a full-stack application. A big lesson
            I learned includes error handling, and how to deliver the most seamless user experience,
            especially when addressing error states and messages. As Nunko has evolved, the codebase
            has naturally expanded.
          </Paragraph>

          <Paragraph>
            While it still doesn't compare to a corporate-scale codebase, it's undoubtedly given me
            insight that I should carefully plan out my projects in advance, both in terms of
            infrastructure, services, design, and workflow.
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://nunko-amber.vercel.app/"
        demoTitle="Nunko"
        previousURL="/projects/kore"
        previousTitle="Kore"
        nextURL="/projects/trackr"
        nextTitle="Trackr"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
