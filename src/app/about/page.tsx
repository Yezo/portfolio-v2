import dynamic from "next/dynamic"

import { FRONTEND_DATA, STYLING_DATA, BACKEND_DATA } from "@/lib/aboutdata"
import { ExternalLinkIcon, GithubIcon, SendIcon } from "lucide-react"

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

      <section className="mt-12">
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

      <section className="mt-12">
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

const LinkedInSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}
