import riskthinking from "../../../../public/riskthinking.png"

import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"

const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "RiskThinking",
  description: "RiskThinking page for Kevin Vo's Portfolio",
}

export default function KorePage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={riskthinking}
          alt="RiskThinking"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/riskthinking"
        demoURL="https://riskthinking.vercel.app/"
      />

      <WorksProjectHeader
        title="riskthinking"
        subtitle="Apr. 2023"
        technologies={[
          "Next.js",
          "React",
          "Jotai",
          "TypeScript",
          "Tailwind",
          "Chart.js",
          "React-Leaflet",
          "PrimeReact",
          "Jest",
        ]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Objective</TitleH2>
          <Paragraph>
            This project was designed and developed by myself as a work sample for{" "}
            <Link href="https://riskthinking.ai/" className="font-semibold underline">
              riskthinking.ai
            </Link>{" "}
            Following their guidelines, the objective was to create a compelling visualization of
            climate risk datasets using various formats such as charts, maps, and tables.
            Furthermore, the project required an integrated user interface that seamlessly
            incorporated multiple components and offered interactive functionality for users to
            engage with.
          </Paragraph>
          <Paragraph>
            {`In order to meet these requirements, I carefully crafted an interface that effectively
            showcased the climate risk datasets through visually appealing and informative charts,
            maps, and tables. The goal was to present the data in a manner that facilitated easy
            comprehension and allowed users to explore different insights. By integrating various
            components, I ensured a cohesive user experience, enabling users to navigate seamlessly
            between different views and access the information they needed.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>{`When it came to integrating the dataset with maps, I opted for Leaflet as the primary choice for displaying the data. It proved to be a convenient and hassle-free solution, as it was free to use and didn't require additional steps or API keys to set up. Thankfully, there was a community npm package called React-Leaflet, which seamlessly integrated Leaflet with React, making the implementation process straightforward. To ensure user interactivity, I implemented map markers that displayed relevant data. Upon clicking a marker, the information was stored globally using Jotai's global state management, enabling its display on the Line Chart component as well. `}</Paragraph>
          <Paragraph>{`For charts, Chart.js was the obvious choice. It is widely recognized as one of the most popular libraries for visualizing this type of data. The documentation for customiztion charts was not very intuitive. Despite this, I delved into experimentation with various configurations and settings to achieve the desired result for the line chart. Although there is room for improvement, the implementation adequately fulfilled the project requirements.`}</Paragraph>
          <Paragraph>{`Lastly, it was required to create a data table with sorting, filtering, and pagination features. Initially, I attempted to develop this functionality from scratch, but later decided to leverage an external library called PrimeReact for its time efficiency, accessibility benefits, and cleaner code. This marked my first experience utilizing PrimeReact's Data Table component, and I was thoroughly impressed with its functionality and well-documented features. `}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`The original dataset was stored in a Google spreadsheet file. The spreadsheet data had to be converted into a CSV file and then parsed using an external library called PapaParse. However, each component that required the data had to individually parse it, resulting in repetitive code. To address this, I refactored the data parsing logic into a custom reusable hook, streamlining the process and eliminating code duplication.`}</Paragraph>
          <Paragraph>{`After parsing the dataset, I encountered one of the data fields was an object stored as a string after being parsed from the spreadsheet. To work with this data effectively, I needed to manipulate the string and convert it into proper key-value pairs.`}</Paragraph>
          <Paragraph>{`One significant challenge I faced during the project was an error that occurred during the loading stage of pages when attempting to utilize any form of global state management library. Despite trying Redux, ContextAPI, and Jotai, the error persisted. Eventually, I discovered that the issue stemmed from using the latest version of Next.js, where there was a problem with JSON.parse causing crashes in numerous applications. To resolve this, I downgraded the project's version to 13.2.4, which allowed me to successfuly implement a global state management library.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`The user interface for this project adopts a clean and simplistic design approach. In spite of this, it doesn't possess any elements that particularly stand out in terms of design. Given additional time, I would have liked to transform the UI into a more refined and modern approach. My aim would have been to enhance the overall aesthetics and deliver a more polished user experience.`}</Paragraph>
          <Paragraph>{`While I successfully completed the tasks assigned by riskthinking.ai, I believe there were opportunities to implement additional features and tests for the project. In particular, I could have developed a dedicated statistics page that would prove valuable to users. This page could showcase insightful data such as "Locations with the highest risk factor" or provide information on the prevalence of specific risk factors within various business categories. By incorporating such statistics, users would gain a deeper understanding of the data and its implications, fostering informed decision-making and enhancing the overall utility of the application. `}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://riskthinking.vercel.app/"
        demoTitle="RiskThinking"
        previousURL="/projects/aniflux"
        previousTitle="AniFlux"
        nextURL="/projects/portfolio"
        nextTitle="My Portfolio"
      ></WorksEndNavigation>
    </main>
  )
}
