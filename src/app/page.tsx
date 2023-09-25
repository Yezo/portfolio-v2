import arkoko from "../../public/arkoko.png"
import aniflux from "../../public/aniflux.png"
import riskthinking from "../../public/riskthinking.png"
import kv from "../../public/kv.png"
import trackr from "../../public/trackr.png"
import osrs from "../../public/osrs.webp"
import erbs from "../../public/erbs.jpg"
import tft from "../../public/tft.jpg"
import lostark from "../../public/lostark.jpeg"
import Link from "next/link"
import MainContainer from "@/components/Main/MainContainer"
import ProjectBox from "@/components/Projects/ProjectBox"
import HovercardText from "@/components/Typography/HovercardText"
import Paragraph from "@/components/Typography/Paragraph"
import WordLink from "@/components/Typography/WordLink"

export default function Home() {
  return (
    <MainContainer>
      <header className="flex flex-col px-4 pb-4">
        <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-800 dark:text-slate-200 sm:text-xl">
          Design-focused — Fullstack Developer
        </h2>
      </header>

      <section className="mb-12 mt-4 px-4">
        <Paragraph>
          Video games have played a significant role in shaping my life, as they are able to fully
          <HovercardText imageURL={osrs} imageTitle="Oldschool Runescape">
            immerse
          </HovercardText>
          their players in unforgettable experiences. It's my goal to recreate these
          <HovercardText imageURL={lostark} imageTitle="Lost Ark">
            captivating
          </HovercardText>
          moments and deliver an
          <HovercardText imageURL={erbs} imageTitle="Eternal Return">
            unforgettable
          </HovercardText>
          web experience. Through a user-centered lens, I help design and craft creative and
          <HovercardText
            imageURL={tft}
            imageTitle="Teamfight Tactics"
            imageSubtitle="(the only enjoyable riot game left)"
          >
            strategic
          </HovercardText>
          digital experiences aimed at positive interactivity.
        </Paragraph>
        <Paragraph>
          To help build responsive interfaces, I've immersed myself within the Javascript ecosystem
          with a strong focus on <WordLink url="https://nextjs.org/">Next.js</WordLink> and
          <WordLink url="https://nextjs.org/">React</WordLink>. For styling, I enjoy a combination
          of <WordLink url="https://tailwindcss.com/">Tailwind</WordLink> for hand-crafted elements
          layered on top of using
          <WordLink url="https://ui.shadcn.com/">shadcn/UI&apos;s </WordLink>
          accessible component library.
        </Paragraph>
        <Paragraph>
          I'm actively looking for a professional home where I can contribute my dedication and
          skills. I thrive the most in front-end positions where creativity and code intersect. Feel
          free to <WordLink url="https://nextjs.org/">reach out</WordLink> and say hello.
        </Paragraph>
      </section>

      <section className="mt-6 space-y-4">
        <ProjectBox
          imageURL={trackr}
          imageALT="Picture of Trackr's brand logo"
          title="trackr."
          description="Ditch the spreadsheets, manage and track your job applications"
          caseLink="/projects/trackr"
        />
        <ProjectBox
          imageURL={arkoko}
          imageALT="Picture of Arkoko's brand logo"
          title="arkoko."
          description="Helping gamers minimize daily micro-decisions through data-driven analytics"
          caseLink="/projects/arkoko"
        />
        <ProjectBox
          imageURL={aniflux}
          imageALT="Picture of AniFlux's brand logo"
          title="aniflux."
          description="Exploring a modern re-design to the anime and manga database experience"
          caseLink="/projects/aniflux"
        />
        <ProjectBox
          imageURL={riskthinking}
          imageALT="Picture of riskthinking's brand logo"
          title="riskthinking."
          description="Work sample for riskthinking.ai visualizing climate risk datasets"
          caseLink="/projects/riskthinking"
        />
        <ProjectBox
          imageURL={kv}
          imageALT="Picture of Kevin Vo's brand logo"
          title="my portfolio."
          description="A deep dive on a junior web developer's perspective to self-branding"
          caseLink="/projects/portfolio"
        />

        <Link
          href="/projects"
          className="my-4 flex max-w-fit select-none items-center gap-2 rounded-full px-4 font-medium leading-5 text-slate-200 transition-colors hover:text-sky-300 "
        >
          View all projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </Link>
      </section>
    </MainContainer>
  )
}
