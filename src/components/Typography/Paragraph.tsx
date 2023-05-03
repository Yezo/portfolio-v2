export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.95rem] leading-7 text-[#444444] [&:not(:first-child)]:mt-6">{children}</p>
  )
}
