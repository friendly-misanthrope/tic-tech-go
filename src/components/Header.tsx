import { HomeIcon, File, UsersRound } from "lucide-react"
import Link from 'next/link'
import { NavButton } from "@/components/NavButton"

export default function Header() {
  return (
    <header>
      <div>
        
        <div>
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