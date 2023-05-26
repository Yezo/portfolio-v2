export default function TitleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[#2b2b2b]/20 pb-2 font-alegreya text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-[#fff]/20 dark:text-white">
      {children}
    </h2>
  )
}
