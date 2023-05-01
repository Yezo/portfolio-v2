import Link from "next/link"
import { useAtom } from "jotai/react"
import { navAtom } from "@/atoms/globals"
type Props = {
  url: string
  title: string
}
export default function NavbarLink({ url, title }: Props) {
  const [navLink, setNavLink] = useAtom(navAtom)

  const handleClick = (value: string) => {
    setNavLink(value)
  }
  return (
    <li
      className={`relative block max-w-fit select-none tracking-tight  outline-none transition-colors   ${
        navLink === title
          ? "text-black before:absolute before:-bottom-1 before:h-0.5 before:w-full  before:origin-left before:bg-[#237bd3]"
          : "text-[#2b2b2b] before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#237bd3] before:transition  hover:before:scale-100"
      }`}
      onClick={() => setNavLink(title)}
    >
      <Link href={url}>{title}</Link>
    </li>
  )
}
