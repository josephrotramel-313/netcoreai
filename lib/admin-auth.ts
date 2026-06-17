import { cookies } from "next/headers"
import { generateAdminToken, isValidAdminToken } from "@/lib/admin-token"

export { generateAdminToken }

export async function isAdminAuthorized(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false

  const cookieStore = await cookies()
  const token = cookieStore.get("admin-token")?.value ?? ""
  return isValidAdminToken(token, password)
}
