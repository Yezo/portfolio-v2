export default function TitleH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-rubik text-2xl font-medium tracking-tighter [word-spacing:-.04em]  dark:text-[#F3F4F6] lg:text-2xl">
      {children}
    </h1>
  )
}
