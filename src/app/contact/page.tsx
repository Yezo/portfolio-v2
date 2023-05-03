import TitleH1 from "@/components/Typography/TitleH1"

export const metadata = {
  title: "Contact",
  description: "Contact page for Kevin Vo's Portfolio",
}

export default function ContactPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <div className="border-b border-[#2b2b2b]/20 pb-2">
        <TitleH1>{`Contact`}</TitleH1>
      </div>
    </main>
  )
}
