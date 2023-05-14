import kv from "../../../../public/kv.png"

import dynamic from "next/dynamic"
import Image from "next/image"

const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "Portfolio",
  description: "Portfolio page for Kevin Vo's Portfolio",
}

export default function PortfolioPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={kv}
          alt="Portfolio"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/portfolio-v2"
        demoURL="https://kvo.vercel.app"
      />

      <WorksProjectHeader
        title="my portfolio"
        subtitle="Apr. 2023 - May. 2023"
        technologies={["Next.js", "React", "TypeScript", "Jotai", "Tailwind"]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>Why Make A New Portfolio?</TitleH2>
          <Paragraph>{`Originally, my first portfolio was created with React and featured a lot of fading animations. It had a lot of white space and in my opinion, it had good visuals and had a clean user interface. The goal was to make myself marketable and show that I could build appealing UIs. However, it became rather apparent that a large majority of hiring managers and recruiters don't visit an applicant's portfolio. `}</Paragraph>
          <Paragraph>{`Therefore, if there is a low amount of people that actually visit my portfolio, then it is probably a bad idea to have things animate in slowly as well as making the user scroll down just to view my projects. There is a high chance the user may not want to waste their time scrolling down at all! `}</Paragraph>
          <Paragraph>{`Ultimately, I chose to re-design my portfolio from the ground up. This time, I chose to build the website using Next.js. The goal of this version is to minimize eye travel time for the user from the moment they read my name to the moment they get to see my selected projects on display.  `}</Paragraph>
        </div>

        <div>
          <TitleH2>Artistic Direction</TitleH2>
          <Paragraph>{`The portfolio itself is very minimalistic in nature. The width of the actual content is fairly short which allows the user to easily read any text content. To achieve this, all content is presented in a singular column. In order to add more depth to the website, I added a second column for the navigation bar.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Lessons Learnt</TitleH2>
          <Paragraph>{`While my first portfolio was ambitious, I've learned to tailor my websites to the target audience. At first, the portfolio was an artistic outlet for my creativity. In my opinion, it was appealing - for others, it may have been a distraction. As a junior developer, my goal was not to market my portfolio as one that could end up on awwwwards or dribble. The goal is to showcase myself as a Software Engineer and the projects I've done in a concise manner to recruiters, hiring managers, and potential employers as efficiently as possible. `}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://kvo.vercel.app"
        demoTitle="Portfolio"
        previousURL="/projects/"
        previousTitle="Arkoko"
        nextURL="/projects/riskthinking"
        nextTitle="RiskThinking"
      ></WorksEndNavigation>
    </main>
  )
}
