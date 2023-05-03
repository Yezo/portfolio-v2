import Logo from "@/components/Typography/Logo"
import "../styles/globals.css"
import { Faustina, M_PLUS_1 } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"

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

const mplus = M_PLUS_1({
  variable: "--font-mplus",
  weight: ["400", "500", "700", "800"],
  display: "swap",
  subsets: ["latin"],
})

const faustina = Faustina({
  variable: "--font-faustina",
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mplus.variable} ${faustina.variable}`}>
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col bg-background font-mplus antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-24">
        <Navbar />

        {children}
      </body>
    </html>
  )
}
