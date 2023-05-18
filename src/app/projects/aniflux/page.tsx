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
            {`Many anime and manga-related websites fall short in delivering a modern design and user-friendly experience. These platforms often suffer from information overload, bombarding users with an overwhelming amount of unnecessary data that hinders their ability to focus on the content they seek. The excessive clutter and irrelevant details make it arduous for users to digest and absorb the essential information they are looking for, be it news updates, reviews, or insightful articles.`}
          </Paragraph>
          <Paragraph>{`Consequently, navigating through such websites can prove to be a challenging task. A lack of a clear user interface make it frustrating for users to navigate around the website and find what they need. Simplifying the interface, implementing logical menu structures, and enhancing search functionalities are crucial steps toward creating a more friendly user experience.`}</Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>
            {`AniFlux is my personal take on an anime and manga website, crafted using modern technologies to deliver a visually appealing and modern experience. With a focus on streamlining the content, unnecessary bloat is eliminated, allowing the detailed information of each anime or manga to shine. The intuitive navigation system empowers users to effortlessly navigate between their desired anime or manga. `}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>
            {`Regrettably, the JikanAPI, while offering a vast amount of data, has certain limitations. Notably, it lacks complete data for more obscure anime titles, which can result in incomplete information being displayed. Additionally, as a free API, it imposes rate limits to prevent an excessive number of requests. This means that users visiting AniFlux may encounter missing data due to rate limiting. While the JikanAPI proves to be a valuable resource, its usage presented challenges during development, as I frequently encountered "429 Too Many Requests" errors when testing components. Consequently, populating pages with multiple pieces of content from the API became difficult, as it was necessary to adhere to the strict limit of no more than 3 requests per second.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>
            {`The Jikan API offers a wide range of endpoints containing different forms of data. AniFlux has the potential for substantial improvement by leveraging these endpoints to incorporate additional links and expand its content. By integrating recommendations for various anime and manga, fetching reviews from users and critics, and even providing schedules for currently airing anime, AniFlux can enhance the overall user experience and offer a comprehensive platform for enthusiasts. The rate-limiting of the API proves to be a limitation of these features.`}
          </Paragraph>
          <Paragraph>
            {`The inclusion of recommendations will enable users to discover new titles based on their interests and preferences, fostering a sense of exploration and expanding their anime and manga horizons. By featuring user and critic reviews, AniFlux can provide valuable insights and opinions, allowing users to make informed decisions about what to watch or read next. Furthermore, by incorporating schedules for currently airing anime, visitors can stay up to date with the latest episodes and plan their viewing accordingly.`}
          </Paragraph>
          <Paragraph>
            {`These additional content elements will enrich the AniFlux experience, catering to the diverse needs and interests of anime and manga enthusiasts. By utilizing the diverse capabilities of the Jikan API, AniFlux can evolve into a comprehensive and dynamic platform that provides a wealth of information and recommendations, fostering a vibrant community of fans.`}
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
    </main>
  )
}
