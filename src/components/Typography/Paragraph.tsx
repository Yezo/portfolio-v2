export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-relaxed text-zinc-600 [word-spacing:-.02em] dark:text-[#d1d5db]/[.85] [&:not(:first-child)]:mt-4">
      {children}
    </p>
  )
}
