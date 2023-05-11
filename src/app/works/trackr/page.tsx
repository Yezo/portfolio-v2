import Image from "next/image"
import trackr from "../../../../public/trackr.png"
import WorksProjectHeader from "@/components/Works/WorksProjectHeader"
import WorksExternalLinks from "@/components/Works/WorksExternalLinks"
import Paragraph from "@/components/Typography/Paragraph"
import TitleH2 from "@/components/Typography/TitleH2"
import WorksEndNavigation from "@/components/Works/WorksEndNavigation"

export const metadata = {
  title: "trackr",
  description: "Trackr page for Kevin Vo's Portfolio",
}

export default function TrackrPage() {
  return (
    <main className="max-w-[555px] flex-auto py-1">
      <figure>
        <Image
          src={trackr}
          alt="Trackr"
          priority
          className="mb-1 max-h-[250px] min-w-full rounded object-cover"
        />
      </figure>

      <WorksExternalLinks
        githubURL="https://github.com/Yezo/learn-trackran"
        demoURL="https://trackr-beta.vercel.app/"
      />

      <WorksProjectHeader
        title="trackr"
        subtitle="Mar. 2023"
        technologies={["React", "TypeScript", "Tailwind", "Vite"]}
      />

      <section className="mt-8 space-y-6">
        <div>
          <TitleH2>The Objective</TitleH2>
          <Paragraph>{`Trackr is a way to keep track of all your job applications in one place. It allows for adding different jobs, editing existing applications, and also the removal of old applications. It also keeps track of certain statistics like how many are currently pending or rejected. `}</Paragraph>
        </div>

        <div>
          <TitleH2>Challenges</TitleH2>
          <Paragraph>{`I wanted to create a small CRUD project without the use of a database to store data. Since my other projects have never dealt with LocalStorage, I thought this would be a good project to learn more about it. All the job applications are stored in LocalStorage which meant if the user came back on a different day to add more job applications to Trackr, the previous applications would still be there.`}</Paragraph>
        </div>

        <div>
          <TitleH2>Areas of improvement</TitleH2>
          <Paragraph>{`The single most outstanding imporvement would obviously be to expand this project to use a CRUD API and implementing user authentication for the adding, editing, removal, and storing of all job applications. It would be a more streamlined experience and it would also prevent users from losing their existing data in cases where the user uses a different device for their job applications. `}</Paragraph>
        </div>
      </section>

      <WorksEndNavigation
        demoURL="https://trackr-beta.vercel.app/"
        demoTitle="Trackr"
        previousURL="/works/kore"
        previousTitle="Kore"
        nextURL="/works/arkoko"
        nextTitle="Arkoko"
      ></WorksEndNavigation>
    </main>
  )
}
