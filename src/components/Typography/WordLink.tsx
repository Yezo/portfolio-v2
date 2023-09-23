import Link from "next/link"

type Props = {
  children: React.ReactNode
  url: string
}

export default function WordLink({ children, url }: Props) {
  return (
    <>
      {" "}
      <Link
        href={url}
        target="_blank"
        className="font-medium leading-[1.6] text-zinc-900 transition-colors ease-in-out [word-spacing:-.02em]  hover:text-[#237bd3] focus-visible:text-sky-300 dark:text-slate-100  hover:dark:text-sky-300"
      >
        {children}
      </Link>
    </>
  )
}
