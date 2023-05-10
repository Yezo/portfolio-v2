import Image from "next/image"
import riskthinking from "../../../../public/riskthinking.png"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"

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
          <TitleH2>The Problem</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://riskthinking.vercel.app/"
        demoTitle="RiskThinking"
        previousURL="/works/"
        previousTitle="Arkoko"
        nextURL="/works/riskthinking"
        nextTitle="RiskThinking"
      ></WorksEndNavigation>
    </main>
  )
}
