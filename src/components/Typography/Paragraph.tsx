export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-rubik text-[1rem] font-light leading-8 tracking-normal text-[#282828] [&:not(:first-child)]:mt-4">
      {children}
    </p>
  )
}
