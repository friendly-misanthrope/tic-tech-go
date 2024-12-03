import { BackButton } from "@/components/BackButton";
import { getCustomerById } from "@/lib/queries/getCustomers";


export default async function NewTicketForm(
  { customerId }: { customerId: string | undefined }
) {
  try {
    if (customerId) {
      const customer = await getCustomerById(parseInt(customerId))
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              404: Customer ID {customerId} Not Found
            </h2>
            <BackButton
              title={"Go Back"}
              variant="ghost"
            />
          </>
        )
      }
  
      if (!customer.isActive) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer with ID {customerId} is not active
            </h2>
            <BackButton
              title={"Go Back"}
              variant="ghost"
            />
          </>
        )
      }
    }

  } catch(e) {
    if (e instanceof Error) {
      throw e
    }
  }
}