import { NextRequest, NextResponse } from "next/server"
import { isValidAdminToken } from "@/lib/admin-token"

export const config = {
  matcher: ["/admin6k3-hgio/:path*"],
}

export function proxy(req: NextRequest) {
  // The login page itself must stay reachable without a session.
  if (req.nextUrl.pathname === "/admin6k3-hgio") {
    return NextResponse.next()
  }

  const password = process.env.ADMIN_PASSWORD
  const token = req.cookies.get("admin-token")?.value ?? ""

  if (!password || !isValidAdminToken(token, password)) {
    return NextResponse.redirect(new URL("/admin6k3-hgio", req.url))
  }

  return NextResponse.next()
}
