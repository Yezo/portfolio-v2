export default function TitleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className=" border-b border-[#2b2b2b]/20 pb-2 font-rubik text-2xl font-medium tracking-tighter transition-colors [word-spacing:-.04em] first:mt-0 dark:border-[#fff]/20 dark:text-[#F3F4F6] lg:text-xl">
      {children}
    </h2>
  )
}
