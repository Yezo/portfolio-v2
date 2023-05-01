export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="leading-7 text-[#2b2b2b] [&:not(:first-child)]:mt-6">{children}</p>
}
