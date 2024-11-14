import Header from "@/components/Header"

export default async function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto w-full max-width-8xl">
      <Header />
      <div className="px-4 py-2">
        { children }
      </div>
    </div>
  )
}