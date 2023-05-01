import Logo from "@/components/Typography/Logo"
import "../styles/globals.css"
import { Inter, Kaisei_Tokumin, Faustina } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar"

const kaisei = Kaisei_Tokumin({
  variable: "--font-kaisei",
  weight: ["400", "500", "700", "800"],
  display: "swap",
  subsets: ["cyrillic"],
})
const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
})
const faustina = Faustina({
  variable: "--font-faustina",
  display: "swap",
  subsets: ["latin"],
})

export const metadata = {
  title: "Kevin Vo",
  description: "Kevin Vo - Software Developer Portfolio Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${kaisei.variable} ${faustina.variable}`}>
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col bg-background font-inter antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-24">
        <aside className="w-[140px] space-y-8">
          <Logo />
          <Navbar />
        </aside>
        {children}
      </body>
    </html>
  )
}
