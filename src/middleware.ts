import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"
import { NextRequest } from "next/server"

export default withAuth(
  async function middleware(request: NextRequest) {
    // Can log all requests here with logger middleware

  }, {
    // Returns user to page they were attempting to access before authentication
    isReturnToCurrentPage: true
  }
)

export const config = {
  matcher: [
    // Require valid auth for all request paths except homepage and those listed below
    "/home",
    "/customers",
    "/tickets"
  ]
}