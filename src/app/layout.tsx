import "../styles/globals.css"
import { Faustina, Rubik, Alegreya, Inter, Spectral } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"
import { ThemeProvider } from "@/components/Theme/theme-provider"
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: {
    default: "Kevin Vo",
    template: "%s | Kevin Vo",
  },
  description: "Kevin Vo - Software Developer",
  openGraph: {
    title: "Kevin Vo",
    description: "Kevin Vo - Software Developer",
    url: "https://kvo.vercel.app/",
    siteName: "Kevin Vo",
    locale: "en-US",
    type: "website",
  },
}

const faustina = Faustina({
  variable: "--font-faustina",
  display: "swap",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
})

const alegreya = Alegreya({
  variable: "--font-alegreya",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
})

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${faustina.variable} ${rubik.variable} ${alegreya.variable} ${inter.variable} ${spectral.variable} `}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col bg-background antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-24">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
