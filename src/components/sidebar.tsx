"use client"

import { usePathname } from "next/navigation"
import { Aside } from "@/components/layout/aside"
import { Header } from "@/components/layout/header"
import { Logo } from "@/components/layout/logo"
import { Nav } from "@/components/layout/nav"
import { navConfig } from "@/config/nav"
import { SidebarItemProps } from "@/types"
import Link from "next/link"

export const Sidebar = () => {
  let pathname = usePathname() || "/"
  if (pathname.includes("/projects/")) pathname = "/projects"

  return (
    <>
      <Aside>
        <Header className="min-h-full justify-between md:space-y-12 lg:sticky lg:top-20">
          <Logo />

          <Nav className="flex-col items-start justify-between md:space-y-8">
            <ul className="my-2 flex flex-row gap-4 space-x-0 md:mt-0 md:flex-col">
              {Object.entries(navConfig).map(([path, { name, icon }]) => {
                return (
                  <SidebarItem path={path} pathname={pathname} name={name} key={path}>
                    {icon}
                  </SidebarItem>
                )
              })}
            </ul>
          </Nav>
        </Header>
      </Aside>
    </>
  )
}

export function SidebarItem({ path, pathname, name, children }: SidebarItemProps) {
  return (
    <li
      key={path}
      className={`relative block max-w-fit font-inter text-sm tracking-tight outline-none transition-colors hover:text-slate-200 ${
        path === pathname ? "font-medium text-slate-200" : "text-[#babdc5]"
      }`}
    >
      <Link href={path} className="flex items-center gap-4">
        <span className="hidden md:inline"> {children}</span>
        <span className="pb-[2px]">{name}</span>
      </Link>
    </li>
  )
}
