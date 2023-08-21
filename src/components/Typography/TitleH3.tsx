export default function TitleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className=" pb-2 font-spectral text-2xl font-light tracking-tighter transition-colors [word-spacing:-.04em] first:mt-0 dark:text-[#F3F4F6] lg:text-xl">
      {children}
    </h3>
  )
}
