import Link from "next/link"

type Props = {
  children: React.ReactNode
  url: string
}

export default function WordLink({ children, url }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="font-rubik text-[0.95rem] font-medium leading-[1.6] tracking-tight [word-spacing:-.02em] hover:underline dark:text-[#F3F4F6] [&:not(:first-child)]:mt-4 "
    >
      {children}
    </Link>
  )
}
