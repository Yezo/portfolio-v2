import arkoko from "../../../../public/arkoko.webp"

import dynamic from "next/dynamic"
import Image from "next/image"

const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "Arkoko",
  description: "Arkoko page for Kevin Vo's Portfolio",
}

export default function ArkokoPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={arkoko}
          alt="Arkoko"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/arkoko"
        demoURL="https://arkoko.vercel.app/"
      />

      <WorksProjectHeader
        title="arkoko"
        subtitle="Dec. 2023 - Apr. 2023"
        technologies={[
          "React",
          "TypeScript",
          "Tailwind",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose",
          "React-Router",
          "Vite",
        ]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Problem</TitleH2>
          <Paragraph>
            {`People enjoy playing video games but they tend to dislike figuring out efficient methods
          or calculating various outcomes themselves. It's tedious, time-consuming, and it
          ultimately takes away from the precious time they could have spent playing the video game
          in the first place.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>
            {`Arkoko aims to alleviate this situation by providing an all-in-one pitstop for calculators, guides, tools, and resources for the online MMORPG "Lost Ark." Players no longer need to spend minutes themselves calculating whether or not an item is profitable to craft. The tools that Arkoko provides calculates everything for the user when provided with minimal input values.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>
            {`Arkoko was a project I've wanted to create ever since I started my first line of code. I knew this was a goal I wanted to achieve and the process of developing it was quite the hurdle. Ultimately, it has gone through many different versions, both from a technological standpoint and a visual one. Designing a website from scratch was definitely difficult but I am confident the current look of Arkoko is modern and unique. The in-game tools I've developed are unique and it was a challenge getting the calculators to work how I wanted them to without any guidance or documentation to refer to. However, it is without a doubt twice as rewarding when I figure out the problems myself and I think that is what keeps me working on Arkoko as my main passion project.`}
          </Paragraph>
          <Paragraph>
            {`From a technical standpoint, the biggest challenge was definitely the Oreha Crafting Calculator. The data structures involved were complicated since they used nested objects for the recipes. It was also difficult managing data coming from the local API as well as from the LostArkMarketOnline API. The code implementation for this specific tool leaves much to be desired. I would definitely refactor the code into a more elegant solution the next time I re-visit that component. My biggest takeaway from programming this would have to be the merging and manipulation of nested array of objects.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>
            {`Arkoko has many features and a majority of its content comes in the form of tabular data. Designing tabular data for mobile-first responsive design is a challenging task. The main challenge is figuring out which categories should be omitted on mobile, if needed at all. On the other hand, one alternative is to implement a completely brand new design to an existing component to show to users when on mobile as seen with the Mari's Shop page.`}
          </Paragraph>
          <Paragraph>
            {`The website itself fetches a lot of data from multiple sources. It pulls data from our own API that has stored data in MongoDB and it also takes in data from an external API. It would be a huge improvement to the codebase as well as the developer experience if I added a state management library like Redux, SWR, or Zustand. To further abstract the component logic from the view logic, it would be wise to create custom hooks for many of the components.`}
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://arkoko.vercel.app/"
        demoTitle="Arkoko"
        previousURL="/works/trackr"
        previousTitle="Trackr"
        nextURL="/works/aniflux"
        nextTitle="AniFlux"
      ></WorksEndNavigation>
    </main>
  )
}
