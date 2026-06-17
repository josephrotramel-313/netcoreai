import crypto from "crypto"

export function isValidAdminPassword(submitted: string): boolean {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false

  const submittedBuf = Buffer.from(submitted)
  const passwordBuf = Buffer.from(password)
  return (
    submittedBuf.length === passwordBuf.length &&
    crypto.timingSafeEqual(submittedBuf, passwordBuf)
  )
}
