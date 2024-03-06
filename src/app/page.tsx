import { Paragraph } from "@/components/layout/paragraph"
import { ProjectItem } from "@/components/project-item"
import { RightArrowSVG } from "@/assets/icons"
import { WordLink } from "@/components/layout/wordlink"
import { Section } from "@/components/layout/section"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Section className="px-4">
        <Paragraph>
          I'm a design-focused frontend developer from Barrie who enjoys dipping his toes into full
          stack development. My comfort zone lies where development meets design and I am always
          refining my skillset to help craft a memorable digital experience for others.
        </Paragraph>
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
          skills to. Feel free to <WordLink href="mailto:kvo.codes@gmail.com">reach out</WordLink>{" "}
          and say hello.
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
