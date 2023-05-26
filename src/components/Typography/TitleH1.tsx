export default function TitleH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="pb-2 font-alegreya text-2xl font-bold [word-spacing:-.04em] dark:text-[#F3F4F6] lg:text-4xl">
      {children}
    </h1>
  )
}
