export default function TitleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pb-2 font-rubik text-2xl font-medium tracking-tighter transition-colors [word-spacing:-.04em] first:mt-0  dark:text-[#F3F4F6] lg:text-xl">
      {children}
    </h2>
  )
}
