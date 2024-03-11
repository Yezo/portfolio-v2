import { ProjectItem } from "@/components/project-item"
import { siteConfig } from "@/config/site"
import { Main } from "@/components/layout/main"
import { H2 } from "@/components/layout/h2"
import { Section } from "@/components/layout/section"
import { Paragraph } from "@/components/layout/paragraph"
import { WordLink } from "@/components/layout/wordlink"
import {
  PaperPlaneIcon,
  CopyIcon,
  ArrowTopRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Arrow } from "@radix-ui/react-hover-card"
import Link from "next/link"
import { CopyButton } from "@/components/ui/copy-button"

export const metadata = {
  title: "About",
  description: "About page for Kevin Vo's Portfolio",
}

export default function AboutPage() {
  return (
    <div className="space-y-8 md:space-y-8">
      <div className="space-y-1 ">
        <H2>Current focus</H2>
        <div className="space-y-4">
          <Paragraph className="text-sm">
            I'm currently searching for a professional home. I'm most comfortable with frontend
            positions but am also capable of fullstack duties. Outside of the job search, I've been
            learning more about design systems and component compositions.
          </Paragraph>
          <Paragraph className="text-sm">
            In my spare time, I enjoy taking daily walks, watching travel vlogs, catching up on
            manga, and helping rid
            <WordLink href="https://oldschool.runescape.com/" newTab={true} className="text-sm">
              Glienor
            </WordLink>
            of all things evil.
          </Paragraph>
        </div>
      </div>

      <div className="space-y-1">
        <H2>Design philosophy</H2>
        <Paragraph className="text-sm">
          I believe in minimalism as the key to design — each and every detail matters in guiding
          the user to their destination. Design simple, then add more when needed.
        </Paragraph>
      </div>

      <div className="space-y-1">
        <H2>Font</H2>
        <Paragraph className="text-sm">
          It's always
          <WordLink href="https://rsms.me/inter/" newTab={true}>
            Inter.
          </WordLink>
          My recent favorite is
          <WordLink href="https://rsms.me/inter/" newTab={true} className="font-bricolage">
            Bricolage Grotesque.
          </WordLink>
        </Paragraph>
      </div>

      <div className="space-y-1">
        <H2>Stack</H2>
        <Paragraph className="pb-2 text-sm">
          My personal toolbox for crafting web applications.
        </Paragraph>
        <ul className="list-disc pl-3 text-sm md:pl-10">
          <ListItem
            title="React.js"
            description="framework of a choice"
            url={"https://react.dev/"}
          />
          <ListItem
            title="Next.js"
            description="framework of a framework of choice"
            url={"https://nextjs.org/"}
          />
          <ListItem
            title="TailwindCSS"
            description="for styling components"
            url={"https://tailwindcss.com/"}
          />
          <ListItem
            title="shad/cn"
            description="new standard for component libraries"
            url={"https://ui.shadcn.com/"}
          />
          <ListItem
            title="NextAuth"
            description="user authentication & authorization library"
            url={"https://authjs.dev/"}
          />
          <ListItem title="MongoDB" description="noSQL database" url={"https://www.mongodb.com/"} />
          <ListItem
            title="PostgreSQL"
            description="relational database"
            url={"https://neon.tech/"}
          />
          <ListItem
            title="Drizzle"
            description="simple and intuitive ORM "
            url={"https://orm.drizzle.team/"}
          />
          <ListItem title="Vercel" description="for deployments " url={"https://vercel.com"} />
        </ul>
      </div>

      <div className="space-y-1">
        <H2>Contact</H2>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-100">Email</div>
              <div className="hidden text-xs text-sub md:block">kvo.codes@gmail.com</div>
            </div>
            <div className="flex gap-4 ">
              <Link
                href="mailto:kvo.codes@gmail.com"
                target="_blank"
                className="flex items-center gap-2 bg-main text-xs transition-colors duration-300 hover:bg-main/20 hover:text-slate-100"
              >
                <PaperPlaneIcon className="h-3 w-3" /> Compose
              </Link>

              <CopyButton />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-100">Resume</div>
              <div className="hidden text-xs text-sub md:block">hire me</div>
            </div>
            <div>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 bg-main text-xs transition-colors duration-300 hover:bg-main/20 hover:text-slate-100"
              >
                <ArrowTopRightIcon className="h-3 w-3" /> Open
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-100">GitHub</div>
              <div className="hidden text-xs text-sub md:block">github.com/Yezo</div>
            </div>
            <div>
              <Link
                href="https://github.com/Yezo"
                target="_blank"
                className="flex items-center gap-2 bg-main text-xs transition-colors duration-300 hover:bg-main/20 hover:text-slate-100"
              >
                <GitHubLogoIcon /> Visit
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-slate-100">LinkedIn</div>
              <div className="hidden text-xs text-sub md:block">linkedin.com/in/kvocodes</div>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/kvocodes/"
                target="_blank"
                className="flex items-center gap-2 bg-main text-xs transition-colors duration-300 hover:bg-main/20 hover:text-slate-100"
              >
                <LinkedInLogoIcon /> Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ListItemProps = {
  className?: string

  title: string
  url: string
  description: string
}

const ListItem = ({ className, title, url, description }: ListItemProps) => {
  return (
    <li className={cn("list-disc text-sm", className)}>
      <WordLink href={url} newTab={true}>
        {title}
      </WordLink>
      <span className="text-sub"> — {description}</span>
    </li>
  )
}
