import Image from "next/image"
import trackr from "../../../../public/trackr.png"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"

export const metadata = {
  title: "trackr",
  description: "Trackr page for Kevin Vo's Portfolio",
}

export default function TrackrPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={trackr}
          alt="Trackr"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/learn-trackran"
        demoURL="https://trackr-beta.vercel.app/"
      />

      <WorksProjectHeader
        title="trackr"
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
        demoURL="https://trackr-beta.vercel.app/"
        demoTitle="Trackr"
        previousURL="/works/kore"
        previousTitle="Kore"
        nextURL="/works/arkoko"
        nextTitle="Arkoko"
      ></WorksEndNavigation>
    </main>
  )
}
