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
    // Require valid auth for all request paths except those listed below
    // ($ at end represents homepage)
    // "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|img|login|not-found|$).*)"

    // List all routes that need to be protected
    "/home",
    "/customers",
    "/tickets"
  ]
}