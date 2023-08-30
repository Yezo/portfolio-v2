export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.9rem] font-light leading-7 text-[#282828] md:text-[0.95rem]">
      {children}
    </div>
  )
}
