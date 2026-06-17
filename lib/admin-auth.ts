import { cookies } from "next/headers"
import crypto from "crypto"

export function generateAdminToken(password: string): string {
  return crypto.createHmac("sha256", password).update("nc-admin-session").digest("hex")
}

export async function isAdminAuthorized(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false

  const cookieStore = await cookies()
  const token = cookieStore.get("admin-token")?.value ?? ""
  const expected = generateAdminToken(password)

  const tokenBuf = Buffer.from(token)
  const expectedBuf = Buffer.from(expected)
  return (
    tokenBuf.length === expectedBuf.length && crypto.timingSafeEqual(tokenBuf, expectedBuf)
  )
}
