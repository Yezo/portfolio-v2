import { ProjectItem } from "@/components/project-item"
import { siteConfig } from "@/config/site"
import { Main } from "@/components/layout/main"
import { H2 } from "@/components/layout/h2"
import { Section } from "@/components/layout/section"

export const metadata = {
  title: "Projects",
  description: "Projects page for Kevin Vo's Portfolio",
}

export default function ProjectsPage() {
  return (
    <Main>
      <H2 className="mt-3 px-4 text-lg font-medium tracking-tight text-slate-200 sm:text-2xl">
        Projects
      </H2>

      <Section className="mt-6">
        <ProjectItem
          imageUrl="/nunko.png"
          imageAlt="Picture of Nunko's case study"
          imageTitle="nunko."
          imageDescription="Web app designed to help users discover new
          anime/manga and manage their progress"
          externalUrl={siteConfig.links.nunko}
          data={siteConfig.stack.nunko}
        />

        <ProjectItem
          imageUrl="/trackr.png"
          imageAlt="Picture of Trackr's case study"
          imageTitle="trackr."
          imageDescription="Job application tracker that eliminates the need for old boring spreadsheets"
          externalUrl={siteConfig.links.trackr}
          data={siteConfig.stack.trackr}
        />

        <ProjectItem
          imageUrl="/arkoko.png"
          imageAlt="Picture of Arkoko's case study"
          imageTitle="arkoko."
          imageDescription="Innovative tools and resources to help minimize player daily micro-decisions"
          externalUrl={siteConfig.links.arkoko}
          data={siteConfig.stack.arkoko}
        />

        <ProjectItem
          imageUrl="/aniflux.png"
          imageAlt="Picture of Aniflux's case study"
          imageTitle="aniflux."
          imageDescription="Exploring a modern re-design to the anime and manga database experience"
          externalUrl={siteConfig.links.aniflux}
          data={siteConfig.stack.aniflux}
        />

        <ProjectItem
          imageUrl="/riskthinking.png"
          imageAlt="Picture of riskthinking's case study"
          imageTitle="riskthinking."
          imageDescription="Work sample for riskthinking.ai that visualizes climate risk datasets in multiple form factors"
          externalUrl={siteConfig.links.riskthinking}
          data={siteConfig.stack.riskthinking}
        />

        <ProjectItem
          imageUrl="/kv.png"
          imageAlt="Picture of kv's case study"
          imageTitle="kv."
          imageDescription="A design-focused fullstack developer's personal portfolio"
          externalUrl={siteConfig.links.main}
          data={siteConfig.stack.main}
        />

        <ProjectItem
          imageUrl="/kore.png"
          imageAlt="Picture of kore's case study"
          imageTitle="kore."
          imageDescription="Minigame where players can start learning the Korean alphabet one by one"
          externalUrl={siteConfig.links.kore}
          data={siteConfig.stack.kore}
        />
      </Section>
    </Main>
  )
}
