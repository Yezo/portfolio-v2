export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-rubik text-[0.95rem] leading-[1.6] tracking-tight [word-spacing:-.02em] [&:not(:first-child)]:mt-4">
      {children}
    </p>
  )
}
