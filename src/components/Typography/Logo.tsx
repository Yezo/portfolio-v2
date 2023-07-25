import Link from "next/link"

export default function Logo() {
  return (
    <Link
      className="select-none font-spectral text-4xl tracking-tighter dark:text-[#F3F4F6]"
      href="/"
    >
      {"kv."}
    </Link>
  )
}
