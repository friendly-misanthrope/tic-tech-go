import { HomeIcon, File, UsersRound } from "lucide-react"
import Link from 'next/link'
import { NavButton } from "@/components/NavButton"

export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-10">
      <div className="flex h-8 items-center justify-between w-full">
        
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />
          <Link href="/home" title="Home">
            <h1>Leo&apos;s Device Repair</h1>
          </Link>
        </div>

        <div>
          <NavButton icon={File} label="Tickets" href="/tickets" />
          <NavButton icon={UsersRound} label="Customers" href="/tickets" />
        </div>

      </div>
    </header>
  )
}