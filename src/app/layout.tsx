import "../styles/globals.css"
import { Faustina, Spectral, Nunito, Inter } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"
import { ThemeProvider } from "@/components/Theme/theme-provider"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: {
    default: "Kevin Vo",
    template: "%s | Kevin Vo",
  },
  description: "design-focused fullstack developer • open to opportunities",
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

const faustina = Faustina({
  variable: "--font-faustina",
  display: "swap",
  subsets: ["latin"],
})

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
})

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${faustina.variable} ${spectral.variable} ${nunito.variable} ${inter.variable} `}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col font-inter antialiased selection:bg-sky-400/10 selection:text-sky-300 dark:bg-page-gradient md:mt-20 md:flex-row lg:mx-auto lg:mt-24">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
