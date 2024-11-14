import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div>
          <h1>Leo&apos;s Computer <br/>Repair</h1>
          <address>
            400 Broad Street<br />
            Seattle, WA 98109
          </address>
          <p>
            Open Daily 9am -5pm
          </p>
          <Link href="tel:5559052100" className="hover:underline">
            (206)555-2100
          </Link>
        </div>
      </main>
      
    </div>
  );
}
