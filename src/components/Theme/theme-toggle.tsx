"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [clicked, setClicked] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  //Enable if you want no animation on the sun and moon icons on page load
  // const handleClick = () => {
  //   setTheme(theme === "light" ? "dark" : "light")
  //   setClicked(true)
  // }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <SunIcon size={18} className="animate-in fade-in duration-700" />
      ) : (
        <MoonIcon size={18} className="animate-in fade-in duration-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
