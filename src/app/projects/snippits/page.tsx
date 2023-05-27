import snippits from "../../../../public/snippits.webp"

import dynamic from "next/dynamic"
import Image from "next/image"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const WorksProjectHeader = dynamic(() => import("@/components/Works/WorksProjectHeader"))
const WorksExternalLinks = dynamic(() => import("@/components/Works/WorksExternalLinks"))
const WorksEndNavigation = dynamic(() => import("@/components/Works/WorksEndNavigation"))

export const metadata = {
  title: "Snippits",
  description: "Snippits page for Kevin Vo's Portfolio",
}

export default function SnippitsPage() {
  return (
    <MainContainer>
      <figure>
        <Image
          src={snippits}
          alt="Snippits"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded border border-neutral-500 object-cover"
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
            {`Developers, both new and experienced, frequently encounter situations where they forget or need a quick reference to basic syntax while programming. In such cases, resorting to a time-consuming Google search for code snippets can be inefficient. Imagine if there existed a centralized repository that housed a comprehensive collection of useful code snippets for our favorite programming languages. By providing a convenient and reliable source of reference, developers could save valuable time and streamline their coding process, fostering greater productivity and efficiency in their work.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>The Solution</TitleH2>
          <Paragraph>
            {`Snippits is a curated collection of code snippets and invaluable tips and tricks that I have gathered throughout my journey of self-teaching as a software engineer. This resource offers quick access to a wide range of code snippets covering CSS, JavaScript, TypeScript, React, and even helpful Git commands. By compiling these snippets, I aim to provide fellow developers with a handy reference guide that can assist them in their coding endeavors. Snippits offers a convenient repository of practical code examples and insights to enhance your development workflow.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>
            {`Determining the optimal format for presenting the content on the website posed a significant challenge. Balancing between in-depth articles, blog posts, or a grid of random snippets required careful consideration. Considering the primary objective of Snippits, which is to provide quick and easily accessible code references, articles and blog posts did not align with the goal of instant access to information.`}
          </Paragraph>
          <Paragraph>
            {`In the end, I opted for an accordion-sstyle approach for the code snippets, allowing users to swiftly navigate and find the desired information. To provide additional context and facilitate understanding, I included concise descriptions alongside the snippets. By finding the right balance between accessibility and information, Snippits strives to serve as a valuable resource for developers seeking instant and concise code references.`}
          </Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>
            {`Snippits has the potential to evolve into a platform that allows users worldwide to contribute their own code snippets to a single database. However, to ensure the quality and reliability of the content, careful measures must be taken to filter and validate the submissions. Implementing a robust system that distinguishes between helpful and irrelevant or inaccurate snippets becomes crucial to prevent the spread of false information.`}
          </Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://snippits.vercel.app/"
        demoTitle="Snippits"
        previousURL="/projects/portfolio"
        previousTitle="My Portfolio"
        nextURL="/projects/kore"
        nextTitle="Kore"
      ></WorksEndNavigation>
    </MainContainer>
  )
}
