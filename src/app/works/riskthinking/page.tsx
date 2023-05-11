import Image from "next/image"
import riskthinking from "../../../../public/riskthinking.png"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"
import Link from "next/link"

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
            </Link>
            . As outlined in their guidelines, the goal was to visualize climate risk datasets in
            multiple forms including charts, maps, and tables. The project should also have a user
            interface that integrated different multiple components and it should have interactable
            user functionality.
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>{`For integrating the dataset with Maps, I chose Leaflet as my main choice for displaying the data. It was free to use, easy to set-up, and didn't require any extra steps or API keys to get it up and running. Luckily, Leaflet has a community npm package named React-Leaflet that allows for easy integrations when using it alongside React. In regards to user interactivity, I created map markers that displayed data. When a user clicked on the map marker, the data is stored globally through Jotai's global state management which also displayed the relevant information on the Line Chart as well. `}</Paragraph>
          <Paragraph>{`Chart.js as my library for creating charts was a no-brainer. It is one of the most popular libraries for displaying this type of data. The documentation for Chart.js was not so great which led to a lot of tinkering with configurations and settings. The end result for the line chart is much to be desired but it sufficiently got the job done for me. `}</Paragraph>
          <Paragraph>{`Finally, I was tasked with visualizing all the data as a table and was required to have sorting, filtering and pagination. At first, I attempted to do this by myself with hand-written code but opted for an external library called PrimeReact to help since it would time-efficient, be more accessible, and have cleaner code. This was my first time using PrimeReact's Data Table component and I was thoroughly impressed with the functionality and documentation. I definitely see myself using this library for all future tabular data.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`The original dataset was actually data stored in a Google spreadsheet file. It was not data that could be easily fetched and be served conveniently as a JSON object. Thus, the spreadsheet would have to be turned into a CSV file and then parsed using an external library called PapaParse. Every component that wanted the data would end up having to individually parse the data which ended up in a lot of repeated code. To solve this, I converted the data parsing logic into a custom hook. `}</Paragraph>
          <Paragraph>{`Once the dataset was parsed, it turns out one of the fields was just JSON but as a string format since it was parsed through a Google spreadsheet. I found myself needing to manipulate the string in such a way to have it returned as a proper key-value pair so that I could work with this data.  `}</Paragraph>
          <Paragraph>{`One of the biggest time sinks during this project was an error that occured during the hydration stage of loading a page when attempting to use any form of global state management library within the project. I had tried Redux, ContextAPI, and Jotai all to no avail. Eventually, I found the error was due to using the latest version of Next.js and that there was a problem with JSON.parse crashing a lot of applications. My solution was to downgrade the project's version back down to 13.2.4.  `}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`The user interface for this project is clean and simple, but it is exactly that. It doesn't stand out in any way and given more time, I would have liked to have transformed the UI into something more polished and presentable. `}</Paragraph>
          <Paragraph>{`Although I've carried out the tasks outlined by riskthinking.ai, I think I could have implemented more features and tests for the project. In particular, I believe a page dedicated to statistics regarding the data would be helpful to users such as "Locations with the highest risk factor" or "How many locations in this business category have this particular risk factor". `}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://riskthinking.vercel.app/"
        demoTitle="RiskThinking"
        previousURL="/works/aniflux"
        previousTitle="AniFlux"
        nextURL="/works/portfolio"
        nextTitle="My Portfolio"
      ></WorksEndNavigation>
    </main>
  )
}
