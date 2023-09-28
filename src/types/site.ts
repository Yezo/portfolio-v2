export type SiteConfig = {
  name: string
  description: string
  links: LinksType
  githubs: LinksType
  stack: StackType
}

export type LinksType = {
  main: string
  nunko: string
  trackr: string
  arkoko: string
  riskthinking: string
  aniflux: string
  kore: string
}

export type StackType = {
  main: string[]
  nunko: string[]
  trackr: string[]
  arkoko: string[]
  riskthinking: string[]
  aniflux: string[]
  kore: string[]
}
