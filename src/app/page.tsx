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
          Hi there, most people around me call me Kev. I'm a design-focused frontend developer from
          Barrie who enjoys dipping his toes into full stack development. Currently, I'm interested
          in learning more about the development and uses of design systems.
        </Paragraph>
        {/* <Paragraph>
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
        </Paragraph> */}
        <Paragraph>
          I've put a strong focus on the Javascript ecosystem where I use
          <WordLink href="https://nextjs.org/" newTab={true}>
            Next.js
          </WordLink>
          and
          <WordLink href="https://nextjs.org/" newTab={true}>
            React
          </WordLink>
          to help build responsive interfaces. For styling, I enjoy
          <WordLink href="https://tailwindcss.com/" newTab={true}>
            Tailwind
          </WordLink>
          for hand-crafted elements layered on top of
          <WordLink href="https://ui.shadcn.com/" newTab={true}>
            shadcn/UI&apos;s
          </WordLink>
          accessible component library.
          <WordLink href="https://www.mongodb.com/" newTab={true}>
            MongoDB
          </WordLink>
          has been my main database of choice for a large portion of my projects, however, I've also
          recently discovered the joys of using{" "}
          <WordLink href="https://www.postgresql.org/" newTab={true}>
            PostgreSQL.
          </WordLink>
        </Paragraph>

        <Paragraph>
          I'm actively looking for a professional home where I can contribute my dedication and
          skills. Feel free to <WordLink href="mailto:kvo.codes@gmail.com">reach out</WordLink> and
          say hello.
        </Paragraph>
      </Section>

      <Section className="mt-6 space-y-4">
        <ProjectItem
          imageUrl="/selfbox.png"
          imageAlt="Picture of Selfbox's case study"
          imageTitle="selfbox."
          imageDescription="New take on a link-in-bio platform for content creators, professionals, and hobbyists "
          externalUrl={siteConfig.links.selfbox}
          data={siteConfig.stack.selfbox}
        />

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
