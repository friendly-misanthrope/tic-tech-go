export default async function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Header goes here */}
      <div>
        { children }
      </div>
    </div>
  )
}