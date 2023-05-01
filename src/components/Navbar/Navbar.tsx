"use client"
import NavbarLink from "@/components/Navbar/NavbarLink"
import { motion as m } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

let tabs = [
  { id: "home", label: "home", url: "/" },
  { id: "works", label: "works", url: "/" },
  { id: "profile", label: "profile", url: "/" },
  { id: "contact", label: "contact", url: "/" },
]

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <>
      <ul className="space-y-3 font-kaisei tracking-tight">
        <NavbarLink url="/" title="home" />
        <NavbarLink url="/works" title="works" />
        <NavbarLink url="/" title="profile" />
        <NavbarLink url="/" title="contact" />
      </ul>
    </>
  )
}
