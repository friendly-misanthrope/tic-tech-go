import NewTicketForm from "@/components/NewTicketForm"

export default async function TicketFormPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  try {
    // receives a customerId to create a new ticket,
    // receives a ticketId to edit an existing ticket
    const { customerId, ticketId } = await searchParams

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">Ticket ID or Customer ID is required to load form</h2>
        </>
      )
    }

    // New ticket form
    if (customerId) {
      <NewTicketForm
      customerId={customerId}
    />
    }
    

    // Edit ticket form
    if (ticketId) {

    }
    
  } catch(e) {
    if (e instanceof Error) {
      throw e
    }
  }
}