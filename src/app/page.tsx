import { Paragraph } from "@/components/layout/paragraph"
import { ProjectItem } from "@/components/project-item"
import { RightArrowSVG } from "@/assets/icons"
import { WordLink } from "@/components/layout/wordlink"
import { Section } from "@/components/layout/section"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { Logo } from "@/components/layout/logo"
import { H1 } from "@/components/layout/h1"
import { H2 } from "@/components/layout/h2"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <div className="mb-4 flex items-center gap-4">
        <Logo />

        <H1 className="font-bricolage text-lg tracking-tight text-slate-100">kevin vo.</H1>
      </div>

      <Section>
        <Paragraph>
          A design-oriented
          <WordLink href="/about" newTab={false}>
            frontend developer
          </WordLink>
          whose comfort zone lies where creativity meets development — dedicated to crafting refined
          and memorable digital experiences for others to enjoy.
        </Paragraph>
        <div>This is my branch and this is an additional test edit.</div>
      </Section>

      <Section className="mt-12 space-y-4">
        <H2>Selected projects</H2>
        <ProjectItem
          imageUrl="/selfbox.png"
          imageAlt="Picture of Selfbox's case study"
          imageTitle="selfbox."
          imageDescription="Link-in-bio platform for content creators, professionals, and hobbyists "
          externalUrl={siteConfig.links.selfbox}
          data={siteConfig.stack.selfbox}
        />

        <ProjectItem
          imageUrl="/nunko.png"
          imageAlt="Picture of Nunko's case study"
          imageTitle="nunko."
          imageDescription="Discover new
          anime/manga and manage watching and reading progress"
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
      </Section>
    </>
  )
}
