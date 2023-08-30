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
        className="text-[0.95rem] font-medium leading-[1.6] tracking-tight underline underline-offset-4 transition-colors duration-300 ease-in-out [word-spacing:-.02em] dark:text-[#F3F4F6] hover:dark:text-[#adadad]"
      >
        {children}
      </Link>
    </>
  )
}
