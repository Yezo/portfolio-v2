import Image from "next/image"
import kv from "../../../../public/kv.png"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"
import Subtitle from "@/components/Typography/Subtitle"
import TitleH1 from "@/components/Typography/TitleH1"
import Badge from "@/components/Works/Badge"

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
        technologies={["Next.js", "React", "TypeScript", "Jotai", "Tailwind", "Framer Motion"]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Old Version</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>Why Make A New Portfolio?</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>Artistic Direction</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>Lessons Learnt</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>

        <div>
          <TitleH2>{`What's Next`}</TitleH2>
          <Paragraph>{`???`}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://kvo.vercel.app"
        demoTitle="Portfolio"
        previousURL="/works/"
        previousTitle="Arkoko"
        nextURL="/works/riskthinking"
        nextTitle="RiskThinking"
      ></WorksEndNavigation>
    </main>
  )
}
