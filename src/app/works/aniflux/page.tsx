import aniflux from "../../../../public/aniflux.webp"

import dynamic from "next/dynamic"
import Image from "next/image"

const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "AniFlux",
  description: "AniFlux page for Kevin Vo's Portfolio",
}

export default function AniFluxPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={aniflux}
          alt="AniFlux"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/jikan-anime-project"
        demoURL="https://aniflux.onrender.com/"
      />

      <WorksProjectHeader
        title="aniflux"
        subtitle="Feb. 2023 - Apr. 2023"
        technologies={[
          "React",
          "Redux Toolkit",
          "Redux Query",
          "TypeScript",
          "Tailwind",
          "React-Router",
          "Vite",
        ]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Problem</TitleH2>
          <Paragraph>
            {`There are a lot of anime and manga related websites out there but a large majority of them do not have a modern experience. It is often bloated with unnecessary information making it difficult to digest the details of whatever it is the user is trying to read. As a byproduct, it can be hard to navigate around the website as well.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>
            {`AniFlux is my rendition of an anime/manga website built with modern technologies with modern visuals and a pleasant user experience. Many of the bloat is removed and what remains is the important details regarding a specific anime or manga. Navigation is intuitive and provides many of the resources to allow a user to find exactly which anime or manga they're looking for.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>
            {`Unfortunately, the JikanAPI has some shortcomings despite providing a ton of data about anime. It is missing some data points for obscure anime. The API is also free which results in rate-limiting to prevent too many requests. Users that visit AniFlux may experience missing data due to being rate-limited. Despite being such a great API resource, it was rather difficult to develop with it since I would often run into 429 Too Many Requests errors while testing out components. As such, it's difficult to populate pages with multiple pieces of content from the API since you cannot exceed 3 requests a second.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>
            {`The Jikan API has many endpoints to fetch data from. Aniflux can definitely be improved by adding more links to more content including recommendations for different anime and manga, fetching reviews, and even schedules for currently airing anime.`}
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://aniflux.onrender.com/"
        demoTitle="AniFlux"
        previousURL="/works/arkoko"
        previousTitle="Arkoko"
        nextURL="/works/riskthinking"
        nextTitle="RiskThinking"
      ></WorksEndNavigation>
    </main>
  )
}
