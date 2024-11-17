import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Page Not Found"
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center sm:justify-center mt-14 sm:mt-0 gap-6 sm:gap-4 px-3 sm:px-12 min-h-dvh text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">Oh no! We can't find that page.</h1>
      <Image
        className="rounded-xl"
        src="/img/oops.jpg"
        alt="Image of a dog eating paperwork"
        width={560}
        height={420}
      />
      
      <Button
        size="lg"
        asChild
        className="font-bold"
      >
        <Link href="/home" className="mt-0 sm:mt-4">
          Go Home
        </Link>
      </Button>
      
    </div>
  )
}