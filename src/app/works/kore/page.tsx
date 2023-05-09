import Image from "next/image"
import kore from "../../../../public/kore.png"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"

export const metadata = {
  title: "Snippits",
  description: "Snippits page for Kevin Vo's Portfolio",
}

export default function KorePage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={kore}
          alt="Kore"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/learn-korean"
        demoURL="https://kore-beta.vercel.app/"
      />

      <WorksProjectHeader
        title="kore"
        subtitle="Mar. 2023"
        technologies={["React", "TypeScript", "Tailwind", "Vite"]}
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
        demoURL="https://snippits.vercel.app/"
        demoTitle="Snippits"
        previousURL="/works/"
        previousTitle="Arkoko"
        nextURL="/works/riskthinking"
        nextTitle="RiskThinking"
      ></WorksEndNavigation>
    </main>
  )
}
