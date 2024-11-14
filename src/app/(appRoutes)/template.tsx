export default async function AppTemplate({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="animate-appear">
      { children }
    </div>
  )
}