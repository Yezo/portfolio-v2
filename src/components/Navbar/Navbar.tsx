"use client"

import { usePathname } from "next/navigation"
import Logo from "@/components/Typography/Logo"
import NavbarLink from "@/components/Navbar/NavbarLink"

const navItems = {
  "/": {
    name: "home",
  },
  "/works": {
    name: "works",
  },
  "/profile": {
    name: "profile",
  },
  "/contact": {
    name: "contact",
  },
}

export default function Navbar() {
  let pathname = usePathname() || "/"
  if (pathname.includes("/works/")) {
    pathname = "/works"
  }

  return (
    <>
      <aside className="pb-10 font-faustina md:w-[150px] md:flex-shrink-0">
        <div className="space-y-4 lg:sticky lg:top-20 lg:space-y-10">
          <div className="flex flex-col md:flex-row ">
            <Logo />
          </div>

          <nav
            className="relative flex scroll-pr-6 flex-row items-start tracking-wider md:relative md:flex-col md:overflow-auto"
            id="nav"
          >
            <ul className="mb-2 mt-2 flex flex-row gap-4 space-x-0 md:mt-0 md:flex-col">
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavbarLink path={path} pathname={pathname} name={name} key={path} />
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
