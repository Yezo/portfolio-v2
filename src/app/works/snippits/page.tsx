import Image from "next/image"
import snippits from "../../../../public/snippits.webp"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"

export const metadata = {
  title: "Snippits",
  description: "Snippits page for Kevin Vo's Portfolio",
}

export default function SnippitsPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={snippits}
          alt="Snippits"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/snippit"
        demoURL="https://snippits.vercel.app/"
      />

      <WorksProjectHeader
        title="snippits"
        subtitle="Jan. 2023"
        technologies={["React", "TypeScript", "Tailwind", "PrismJS", "React-Router", "Vite"]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Problem</TitleH2>
          <Paragraph>
            {`Newer and even veteran developers often forget basic syntax while programming. Often times, a quick google search can consume more time than needed. What if there was a single repository for useful code snippets for our favorite programming languages?`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>
            {`Snippits serves as a mini cheatsheet filled with code snippets and other tips and tricks I've found over the course of self teaching myself how to code as a software engineer. The code snippits includes CSS, Javascript, TypeScript, React, and even includes useful Git commands.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>
            {`Between in-depth articles, blog posts, or a grid of random snippets, it was rather challenging trying to figure out which format I wanted the website to use. The idea of code snippets was for it to be easily accessible and fast to look up on a whim. In-depth articles didn't satisfy either of those although articles and blog posts would have allowed me to go a lot more indepth. Ultimately, I went with dropdown selections for the code snippets and added a mini description to help facilitate further explanation if needed.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>
            {`Snippits can be expanded to allow users from across the world to enter in their own code snippets into a database and have it displayed on the website. There would have to a way to filter between code snippets that actually help people or useless excerpts. Otherwise, users could input wrong data and spread false information. For now, the code snippets are purely curated by myself.`}
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://snippits.vercel.app/"
        demoTitle="Snippits"
        previousURL="/works/portfolio"
        previousTitle="My Portfolio"
        nextURL="/works/kore"
        nextTitle="Kore"
      ></WorksEndNavigation>
    </main>
  )
}
