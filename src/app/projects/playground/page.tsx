import trackr from "../../../../public/trackr.png"

import dynamic from "next/dynamic"
import Image from "next/image"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "Playground",
  description: "Playground page for Kevin Vo's Portfolio",
}

//TODO add playground images

export default function TrackrPage() {
  return (
    <MainContainer>
      <figure>
        <Image
          src={trackr}
          alt="Playground"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded border border-neutral-500 object-cover"
        />
      </figure>

      <WorksExternalLinks githubURL="https://github.com/Yezo/shadcn-playground" demoURL="/" />

      <WorksProjectHeader
        title="Playground"
        subtitle="Apr. 2023"
        technologies={["Next.js", "TypeScript", "Tailwind", "RadixUI", "shadcn"]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Purpose</TitleH2>
          <Paragraph>{`This playground is a place for me to play around and test different components from the component library that shadcn has built.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{``}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{``}</Paragraph>
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
