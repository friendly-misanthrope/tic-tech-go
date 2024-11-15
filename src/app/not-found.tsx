import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Page Not Found"
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center sm:justify-center mt-14 sm:mt-0 gap-6 px-3 sm:px-12 min-h-dvh text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">Oh no! We can't find that page.</h1>
      <Image
        className="rounded-xl"
        src="/img/oops.jpg"
        alt="Image of a dog eating paperwork"
        width={560}
        height={420}
      />
      <p className="text-xl sm:text-2xl sm:mt-6">The resource you have requested doesn't exist.</p>
      <Button
        variant="ghost"
        size="lg"
        asChild
      >
        <Link href="/home" className="mt-6 bg-slate-900">
          Go Home
        </Link>
      </Button>
      
    </div>
  )
}