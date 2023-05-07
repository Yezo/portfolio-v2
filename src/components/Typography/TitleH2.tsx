export default function TitleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[#2b2b2b]/20 pb-2 font-alegreya text-2xl font-semibold tracking-tight text-[#2b2b2b] transition-colors first:mt-0">
      {children}
    </h2>
  )
}
