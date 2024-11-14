import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-4 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="font-extrabold sm:text-2xl">Leo&apos;s Device Repair</h1>
          <address>
            400 Broad Street<br />
            Seattle, WA 98109
          </address>
          <div>
            <h2 className="font-bold">Hours: </h2>
            <p>
              Mon-Fri: 9am to 5pm<br />
              Sat: 11am to 4pm<br />
            </p>
          </div>
          
          <Link href="tel:5559052100" className="hover:underline">
            (206)555-2100
          </Link>
        </div>
      </main>
      
    </div>
  );
}