export default function Badge({ children }: { children: React.ReactNode }) {
  return <div className="rounded-full bg-white px-4 py-1 text-black">{children}</div>
}
