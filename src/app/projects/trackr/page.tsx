import trackr from "../../../../public/trackr.png"

import dynamic from "next/dynamic"
import Image from "next/image"

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
  title: "trackr",
  description: "Trackr page for Kevin Vo's Portfolio",
}

export default function TrackrPage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={trackr} alt="Image of trackr' website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer title="Trackr" description="React, TypeScript, Tailwind, Vite">
          <ExternalLinkDate>Mar. 2023</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="trackr-beta.vercel.app/">
          <ExternalLinkButton url="https://trackr-beta.vercel.app/" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="GitHub Repository" description="github.com/Yezo/trackr">
          <ExternalLinkButton url="https://github.com/Yezo/trackr" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <TitleH2>The Objective</TitleH2>
          <Paragraph>{`Trackr is a tool designed to streamline your job application process by centralizing all your applications in one convenient location. With Trackr, you can effortlessly add new job applications, edit existing entries, and remove outdated applications, ensuring that your job search remains organized and efficient. This intuitive platform also provides valuable insights by tracking essential statistics such as the number of pending applications and rejections, offering you a clear overview of your progress.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`I wanted to start a project with the aim of building a small CRUD (Create, Read, Update, Delete) application without relying on a traditional database for data storage. As I delved into the development process, I saw it as an excellent opportunity to explore and deepen my understanding of using LocalStorage. By leveraging LocalStorage, I ensured that all job applications added to Trackr would persist even if the user returned on a different day to continue managing their applications. This approach allowed for a seamless user experience, as previous applications would remain accessible and editable, providing continuity and convenience. Through this project, I not only honed my skills in working with LocalStorage but also gained valuable insights into building efficient and practical solutions that cater to user needs.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`The most significant improvement is the incorporation of a CRUD API coupled with user authentication functionality. By transitioning from LocalStorage to a dedicated database, users would benefit from a more seamless and secure user experience. Implementing user authentication would enable personalized access, ensuring that individuals can retrieve and manage their applications from any device without the risk of data loss.`}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://trackr-beta.vercel.app/"
        demoTitle="Trackr"
        previousURL="/projects/kore"
        previousTitle="Kore"
        nextURL="/projects/arkoko"
        nextTitle="Arkoko"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
