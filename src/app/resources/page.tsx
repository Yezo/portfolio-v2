import dynamic from "next/dynamic"

import { RESOURCE_DATA, COMPANY_DATA } from "@/lib/resourcedata"

const MainContainer = dynamic(() => import("@/components/Main/MainContainer"))
const TitleH1 = dynamic(() => import("@/components/Typography/TitleH1"))
const TitleH2 = dynamic(() => import("@/components/Typography/TitleH2"))
const Paragraph = dynamic(() => import("@/components/Typography/Paragraph"))
const ResourceLink = dynamic(() => import("@/components/Resource/ResourceLink"))

export const metadata = {
  title: "Resources",
  description: "Resources page for Kevin Vo's Portfolio",
}

export default function ResourcesPage() {
  return (
    <MainContainer>
      <TitleH1>{`Resources`}</TitleH1>

      <Paragraph>{`Here, I've carefully curated a list of talented individuals and innovative businesses that can serve as invaluable resources for learning and inspiration. My goal is to spread my enthusiasm for modern web design, igniting the same passion in others as these people below have done so for me. `}</Paragraph>

      <section className="mt-12">
        <TitleH2>Individuals</TitleH2>
        <div className="divide-y divide-[#d6d6d6] dark:divide-[#333333]">
          {RESOURCE_DATA.map((item, index) => (
            <ResourceLink
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
              url={item.url}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <TitleH2>Companies</TitleH2>
        <div className="divide-y divide-[#d6d6d6] dark:divide-[#333333]">
          {COMPANY_DATA.map((item, index) => (
            <ResourceLink
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
              url={item.url}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>
    </MainContainer>
  )
}
