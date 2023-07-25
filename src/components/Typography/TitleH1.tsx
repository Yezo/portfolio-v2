export default function TitleH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-spectral text-2xl font-medium tracking-tighter transition-colors  [word-spacing:-.04em]  dark:text-[#F3F4F6] lg:text-4xl">
      {children}
    </h1>
  )
}
