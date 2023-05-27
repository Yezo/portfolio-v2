export default function MainContainer({ children }: { children: React.ReactNode }) {
  return <main className="max-w-[600px] flex-auto py-1">{children}</main>
}
