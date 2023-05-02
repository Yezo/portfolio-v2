import Link from "next/link"

type Props = {
  path: string
  pathname: string
  name: string
}

export default function NavbarLink({ path, pathname, name }: Props) {
  return (
    <li
      key={path}
      className={`relative block max-w-fit select-none  outline-none transition-colors   ${
        path === pathname
          ? "font-semibold text-black before:absolute before:-bottom-1 before:h-0.5  before:w-full before:origin-left before:bg-[#237bd3]"
          : "text-[#2b2b2b] before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#237bd3] before:transition  hover:before:scale-100"
      }`}
    >
      <Link href={path}>{name}</Link>
    </li>
  )
}
