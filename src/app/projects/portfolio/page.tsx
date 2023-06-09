import kv from "../../../../public/kv.png"
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
  title: "Portfolio",
  description: "Portfolio page for Kevin Vo's Portfolio",
}

export default function PortfolioPage() {
  return (
    <MainContainer>
      <ProjectFigureImage src={kv} alt="Image of portfolio's website" />

      <ProjectLinkContainer>
        <ExternalLinkContainer
          title="My Portfolio"
          description="Next.js, React, TypeScript, Tailwind"
        >
          <ExternalLinkDate>Apr. 2023 - Present</ExternalLinkDate>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="Live Demo" description="kvo.vercel.app">
          <ExternalLinkButton url="https://kvo.vercel.app" type="External">
            View Live Demo
          </ExternalLinkButton>
        </ExternalLinkContainer>

        <ExternalLinkContainer title="GitHub Repository" description="github.com/Yezo/portfolio-v2">
          <ExternalLinkButton url="https://github.com/Yezo/portfolio-v2" type="GitHub">
            View on GitHub
          </ExternalLinkButton>
        </ExternalLinkContainer>
      </ProjectLinkContainer>

      <section className="mt-8 space-y-16">
        <div>
          <TitleH2>Why Make A New Portfolio?</TitleH2>
          <Paragraph>{`Initially, I developed my portfolio using React, incorporating fading animations and white space to create visually appealing UI. The intention was to showcase my skills and market myself effectively. However, I soon realized that the majority of hiring managers and recruiters rarely visit applicants' portfolios. It became clear that features like slow animations and requiring users to scroll down to view my projects might not be the best approach. There was a high likelihood that users wouldn't want to invest their time scrolling extensively.`}</Paragraph>
          <Paragraph>{`As a result, I made the decision to completely redesign my portfolio from scratch, this time using Next.js. The primary objective of this revamped version was to minimize eye travel time for users, ensuring that they quickly encounter my name and have immediate access to my selected projects on display. By streamlining the user experience and focusing on efficiency, I aimed to create a portfolio that effectively showcases my work and captivates the attention of potential employers.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Artistic Direction</TitleH2>
          <Paragraph>{`The portfolio takes a sleek and minimalist design approach. To ensure optimal readability, the width of the content is deliberately kept short, enabling users to effortlessly consume text-based information. In order to enhance the website's visual appeal and provide added functionality, a second column is incorporated specifically for the navigation bar, introducing depth and facilitating easy navigation throughout the portfolio.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Lessons Learnt</TitleH2>
          <Paragraph>{`Through experience, I have come to understand the importance of tailoring my websites to suit the specific target audience. While my initial portfolio was driven by ambition and served as an artistic outlet to showcase my creativity, I recognized that its appeal might have been subjective and potentially distracting for certain viewers. As a junior developer, my primary objective was not to create a portfolio that could match the websites found on awwwards or Dribbble. Instead, my focus shifted towards effectively presenting myself as a skilled Software Engineer and showcasing my projects in a concise manner to recruiters, hiring managers, and potential employers. By aligning my portfolio's design and content with the needs and expectations of this audience, I aimed to highlight my technical expertise and demonstrate my suitability for relevant professional opportunities. `}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://kvo.vercel.app"
        demoTitle="Portfolio"
        previousURL="/projects/riskthinking"
        previousTitle="riskthinking"
        nextURL="/projects/snippits"
        nextTitle="Snippits"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
