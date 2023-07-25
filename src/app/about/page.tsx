import { FRONTEND_DATA, STYLING_DATA, BACKEND_DATA } from "@/lib/aboutdata"
import dynamic from "next/dynamic"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const ResourceLink = dynamic(() => import("@/components/Resource/ResourceLink"))
const WordLink = dynamic(() => import("@/components/Typography/WordLink"))
const ExternalLinkContainer = dynamic(() => import("@/components/Contact/ExternalLinkContainer"))
const ExternalLinkButton = dynamic(() => import("@/components/Contact/ExternalLinkButton"))
const ExternalCopyEmailButton = dynamic(
  () => import("@/components/Contact/ExternalCopyEmailButton")
)
const LineSeparator = dynamic(() => import("@/components/Contact/LineSeparator"))

export const metadata = {
  title: "About",
  description: "About page for Kevin Vo's Portfolio",
}

export default function AboutPage() {
  return (
    <MainContainer>
      <TitleH1>{`About Me`}</TitleH1>

      <Paragraph>{`I'm a design-focused developer living in Canada, looking to join a team of talents. I have a passionate interest in front-end positions that blend the worlds of creative design and web development.`}</Paragraph>

      <Paragraph>{`Video games have played a significant role in shaping my life, as they have the incredible ability to fully immerse players in unforgettable experiences. It's my goal to recreate those captivating moments and deliver enriching and impactful web experiences to others. `}</Paragraph>

      <Paragraph>
        Presently, my primary tech stack revolves around developing web applications with{" "}
        <WordLink url="https://nextjs.org/">Next.js</WordLink>, which are then deployed on{" "}
        <WordLink url="https://vercel.com/">Vercel</WordLink>. For styling front-end components, I
        enjoy a combination of <WordLink url="https://tailwindcss.com/">TailwindCSS</WordLink> for
        hand-crafted components and{" "}
        <WordLink url="https://ui.shadcn.com/">shadcn/UI&apos;s </WordLink>
        component library for more complex elements.
      </Paragraph>

      <section className="mt-20">
        <TitleH2>Contact</TitleH2>
        <div className="divide-y divide-[#d6d6d6] dark:divide-[#333333]">
          <ExternalLinkContainer title="Let's connect" description="kvo.codes@gmail.com">
            <ExternalLinkButton url="mailto:kvo.codes@gmail.com" type="Compose">
              Compose
            </ExternalLinkButton>
            <LineSeparator />
            <ExternalCopyEmailButton />
          </ExternalLinkContainer>

          <ExternalLinkContainer title="Media" description="Should I make a twitter?">
            <ExternalLinkButton url="https://www.linkedin.com/in/kvocodes/" type="LinkedIn">
              LinkedIn
            </ExternalLinkButton>
            <LineSeparator />
            <ExternalLinkButton url="https://github.com/Yezo" type="GitHub">
              GitHub
            </ExternalLinkButton>
          </ExternalLinkContainer>

          <ExternalLinkContainer title="Résumé" description="Currently open to opportunities">
            <ExternalLinkButton url="/resume.pdf" type="External">
              Hire me
            </ExternalLinkButton>
          </ExternalLinkContainer>
        </div>
      </section>

      <section className="mt-20">
        <TitleH2>Frontend Ecosystem</TitleH2>
        <div className="divide-y divide-[#d6d6d6] dark:divide-[#333333]">
          {FRONTEND_DATA.map((item, index) => (
            <ResourceLink
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
              url={item.url}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <TitleH2>Backend & Tools</TitleH2>
        <div className="divide-y divide-[#d6d6d6] dark:divide-[#333333]">
          {BACKEND_DATA.map((item, index) => (
            <ResourceLink
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
              url={item.url}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <TitleH2>Styling</TitleH2>
        <div className="divide-y divide-[#d6d6d6] dark:divide-[#333333]">
          {STYLING_DATA.map((item, index) => (
            <ResourceLink
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
              url={item.url}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>
    </MainContainer>
  )
}
