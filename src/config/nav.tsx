import { NavConfig } from "@/types/nav"
import { EmailSVG, HomeSVG, ProjectSVG, ResumeSVG } from "@/assets/icons"

export const navConfig: NavConfig = {
  "/": {
    name: "home",
    icon: <HomeSVG />,
  },
  "/projects": {
    name: "projects",
    icon: <ProjectSVG />,
  },
  // "/thoughts": {
  //   name: "thoughts",
  //   icon: <ThoughtsSVG />,
  // },
  "/resume.pdf": {
    name: "resume",
    icon: <ResumeSVG />,
  },
  "mailto:kvo.codes@gmail.com": {
    name: "contact",
    icon: <EmailSVG />,
  },
}
