import { getCustomerById } from "@/lib/queries/getCustomers"
import { BackButton } from "@/components/BackButton"

export default async function CustomerFormPage({
  searchParams, 
}: {
  searchParams: Promise<{ [key: string]: string | undefined}>
}) {
  //! Remove log statement
  console.log(searchParams)
  try {
    const { customerId } = await searchParams
    // Edit customer form
    if (customerId) {
      const customer = await getCustomerById(parseInt(customerId))
      //! Remove log statement
      console.log(customer)
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton 
              title={"Go Back"}
              variant="ghost"
            />
          </>
        )
      }
      // customer form component
      else {
        // New customer form component
      }
    }
  } catch(e) {
    if (e instanceof Error) {
      throw e
    }
  }
}