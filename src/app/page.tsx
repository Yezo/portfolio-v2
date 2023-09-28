import { Paragraph } from "@/components/layout/paragraph"
import { ProjectItem } from "@/components/project-item"
import { RightArrowSVG } from "@/assets/icons"
import { HoverCardItem } from "@/components/layout/hovercard"
import { WordLink } from "@/components/layout/wordlink"
import { Section } from "@/components/layout/section"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Section className="px-4">
        <Paragraph>
          Video games have played a significant role in shaping my life, as they are able to fully
          <HoverCardItem
            imageUrl="/osrs.webp"
            imageAlt="An image of Oldschool Runescape"
            imageTitle="Oldschool Runescape"
          >
            immerse
          </HoverCardItem>
          their users in an unforgettable experience. It's my goal to recreate these
          <HoverCardItem
            imageUrl="/lostark.jpeg"
            imageAlt="An image of Lost Ark"
            imageTitle="Lost Ark"
          >
            captivating
          </HoverCardItem>
          moments and deliver an
          <HoverCardItem
            imageUrl="/erbs.jpg"
            imageAlt="An image of Eternal Return"
            imageTitle="Eternal Return"
          >
            exceptional
          </HoverCardItem>
          web experience for others.
        </Paragraph>

        <Paragraph>
          To help build responsive interfaces, I've put a strong focus on
          <WordLink href="https://nextjs.org/" newTab={true}>
            Next.js
          </WordLink>
          and
          <WordLink href="https://nextjs.org/" newTab={true}>
            React.
          </WordLink>
          For styling, I enjoy
          <WordLink href="https://tailwindcss.com/" newTab={true}>
            Tailwind
          </WordLink>
          for hand-crafted elements layered on top of
          <WordLink href="https://ui.shadcn.com/" newTab={true}>
            shadcn/UI&apos;s
          </WordLink>
          accessible component library.
        </Paragraph>

        <Paragraph>
          I'm actively looking for a professional home where I can contribute my dedication and
          skills. Feel free to <WordLink href="mailto:kvo.codes@gmail.com">reach out</WordLink> and
          say hello.
        </Paragraph>
      </Section>

      <Section className="mt-6 space-y-4">
        <ProjectItem
          imageUrl="/nunko.png"
          imageAlt="Picture of Nunko's case study"
          imageTitle="nunko."
          imageDescription="Comprehensive platform designed for anime and manga enthusiasts to discover new
          titles, manage their progress, and engage in a social community"
          externalUrl={siteConfig.links.nunko}
          data={siteConfig.stack.nunko}
        />

        <ProjectItem
          imageUrl="/trackr.png"
          imageAlt="Picture of Trackr's case study"
          imageTitle="trackr."
          imageDescription="Ditch the spreadsheets, manage and track your job applications"
          externalUrl={siteConfig.links.trackr}
          data={siteConfig.stack.trackr}
        />

        <ProjectItem
          imageUrl="/arkoko.png"
          imageAlt="Picture of Arkoko's case study"
          imageTitle="arkoko."
          imageDescription="Helping gamers minimize daily micro-decisions through data-driven analytics"
          externalUrl={siteConfig.links.arkoko}
          data={siteConfig.stack.arkoko}
        />

        <Link
          href="/projects"
          className="my-4 flex max-w-fit select-none items-center gap-2 rounded-full px-4 font-medium leading-5 text-slate-200 transition-colors hover:text-sky-300 "
        >
          View all projects
          <RightArrowSVG />
        </Link>
      </Section>
    </>
  )
}
