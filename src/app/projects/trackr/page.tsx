import trackr from "../../../../public/trackr.png"

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
  title: "trackr",
  description: "Trackr page for Kevin Vo's Portfolio",
}

export default function TrackrPage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={trackr} alt="Image of trackr' website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer
          title="Trackr"
          description="Next.js, NextAuth, MongoDB, TypeScript, TailwindCSS, shad/cn "
        >
          <ExternalLinkDate>Aug. 2023</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="trackr-v2.vercel.app/">
          <ExternalLinkButton url="https://trackr-v2.vercel.app/" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="GitHub Repository" description="github.com/Yezo/trackr-v2">
          <ExternalLinkButton url="https://github.com/Yezo/trackr-v2" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <ProjectFigureImage
            src={TrackrInfographicOne}
            alt="Image of a venn diagram between enjoying the game, calculating strategies, and arkoko finding a balance between them"
          />
          <Paragraph>
            Trackr is a comprehensive solution designed to allow users to track and manage their job
            applications. Users can create personalized accounts, with their data securely stored
            within a MongoDB database, They can seamlessly add, edit and remove all of their past,
            current, and future job applications, all of which are displayed through an intuitive
            dashboard or visualized using dynamic data charts.
          </Paragraph>
          <Paragraph>
            An initial iteration of Trackr came to life when I was first applying for tech jobs. The
            objective involved building a React.js CRUD application that enabled users to add, edit,
            and delete job applications. Unfortunately, I didn't move onto the next round with them.
            Instead, I dedicated my personal time to reimagining the application. Feel free to
            explore the original version
            <WordLink url="https://trackr-beta.vercel.app/">here</WordLink>.
          </Paragraph>

          <Paragraph>
            After getting the hang of Next.js, it suddenly dawned on me: User Authorization suddenly
            became way easier with NextAuth than the hoops I used to jump through with Vanilla
            Javascript. I was itching to start a new project but wasn't sure where to focus. What I
            did know was that I wanted users to make accounts, stash their stuff in a database, and
            allow users to interact with their own data.
          </Paragraph>

          <ProjectFigureImage
            src={TrackrInfographicTwo}
            alt="Image of a venn diagram between enjoying the game, calculating strategies, and arkoko finding a balance between them"
          />

          <Paragraph>
            NextAuth was a no-brainer when it came to choosing how to implement user authentication.
            Its setup was swift and seamless, and the range of valuable features it provides is
            great for developers. As for the database, I went with MongoDB to house user accounts
            and their data.
          </Paragraph>

          <Paragraph>
            And yes, passwords are indeed encrypted before making their way into the database!
          </Paragraph>

          <ProjectFigureImage
            src={TrackrInfographicThree}
            alt="Image of a venn diagram between enjoying the game, calculating strategies, and arkoko finding a balance between them"
          />
          <Paragraph>
            Thanks to <WordLink url="https://ui.shadcn.com/">shadcn's component library</WordLink>,
            this project got to its current state a lot faster than my past projects. The library
            handles all the necessary accessibility aspects for a website, while also granting
            developers complete styling control over their components. It's boosted my productivity
            by multiple magnitudes and I'm excited to build future projects with it again.
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://trackr-v2.vercel.app/"
        demoTitle="Trackr"
        previousURL="/projects/kore"
        previousTitle="Kore"
        nextURL="/projects/arkoko"
        nextTitle="Arkoko"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
