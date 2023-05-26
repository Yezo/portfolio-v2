export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-rubik font-light leading-7 tracking-normal text-[#282828] [word-spacing:-.04em] [&:not(:first-child)]:mt-4">
      {children}
    </p>
  )
}
