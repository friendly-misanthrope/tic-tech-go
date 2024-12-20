import { HomeIcon, File, UsersRound, LogOut } from "lucide-react"
import Link from 'next/link'
import { NavButton } from "@/components/NavButton"
import { ModeToggle } from "@/components/ModeToggle"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-10">
      <div className="flex h-8 items-center justify-between w-full">
        
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />
          <Link href="/home" title="Home" className="flex justify-center items-center gap-2 ml-0">
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">Leo&apos;s Device Repair</h1>
          </Link>
        </div>

        <div>
          <NavButton icon={File} label="Tickets" href="/tickets" />
          <NavButton icon={UsersRound} label="Customers" href="/customers" />
          <ModeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="logout"
            title="logout"
            className="rounded-full"
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>

      </div>
    </header>
  )
}