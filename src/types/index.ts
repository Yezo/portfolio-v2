import { ReactNode } from "react"

export type BodyProps = {
  className?: string
  children: ReactNode
}

export type MainProps = {
  className?: string
  children: ReactNode
}

export type SectionProps = {
  className?: string
  children: ReactNode
}

export type AsideProps = {
  className?: string
  children: ReactNode
}

export type HeaderProps = {
  className?: string
  children: ReactNode
}

export type NavProps = {
  className?: string
  children: ReactNode
}

export type HoverCardItemProps = {
  children: ReactNode
  imageUrl: string
  imageAlt: string
  imageTitle: string
  imageSubtitle?: string
}

export type WordLinkProps = {
  className?: string
  children: ReactNode
  href: string
  newTab?: boolean
}

export type LogoProps = {
  className?: string
}

export type ParagraphProps = {
  className?: string
  children: ReactNode
}

export type H1Props = {
  className?: string
  children: ReactNode
}

export type H2Props = {
  className?: string
  children: ReactNode
}

export type H3Props = {
  className?: string
  children: ReactNode
}

export type SidebarItemProps = {
  path: string
  pathname: string
  name: string
  children: React.ReactNode
}

export type ProjectItemProps = {
  imageUrl: string
  imageAlt: string
  imageTitle: string
  imageDescription: string
  externalUrl: string
  data: string[]
}
