export default function TitleH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="border-b border-[#2b2b2b]/20 pb-2 font-rubik text-2xl font-medium tracking-tighter [word-spacing:-.04em] dark:border-[#fff]/20 dark:text-[#F3F4F6] lg:text-2xl">
      {children}
    </h1>
  )
}
