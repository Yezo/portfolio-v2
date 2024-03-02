import { bricolage, inter } from "@/assets/fonts"
import { Analytics } from "@vercel/analytics/react"
import { Main } from "@/components/layout/main"
import { Body } from "@/components/layout/body"
import { Sidebar } from "@/components/sidebar"
import "@/styles/globals.css"

export const metadata = {
  title: {
    default: "Kevin Vo",
    template: "%s | Kevin Vo",
  },
  description: "design-focused fullstack developer • open to opportunities",
  metadataBase: new URL("https://kevinvo.me"),
  openGraph: {
    title: "Kevin Vo",
    description: "design-focused fullstack developer • open to opportunities",
    url: "https://kevinvo.me",
    siteName: "Kevin Vo",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Kevin Vo",
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} `}>
      <Body>
        <Sidebar />
        <Main>{children}</Main>
        <Analytics />
      </Body>
    </html>
  )
}
