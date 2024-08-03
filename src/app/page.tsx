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
      <Section>
        <Paragraph>
          Hi, I'm Kevin — a design-oriented fullstack developer who is focused on blurring the line
          between aesthetics and performance. I specialize in solving complex problems with my
          experience in the Javascript ecosystem.
        </Paragraph>

        <Paragraph>
          My comfort zone lies where creativity meets development — dedicated to crafting refined
          and memorable digital experiences for others to enjoy. I'm currently working at
          <WordLink href="https://enginedigital.com/" newTab={true}>
            Engine Digital
          </WordLink>
          where I collaborate with multidisciplinary teams to design and build polished interfaces
          for global brands.
        </Paragraph>
        <Paragraph>
          In my spare time, you'll find me exploring design systems, catching up on manga, or
          helping cleanse
          <WordLink href="https://oldschool.runescape.com/" newTab={true}>
            Glienor
          </WordLink>
          of all things evil.
        </Paragraph>
      </Section>

      <Section className="mt-12 space-y-4">
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
