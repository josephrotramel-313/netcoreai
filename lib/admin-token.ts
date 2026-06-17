import crypto from "crypto"

export function generateAdminToken(password: string): string {
  return crypto.createHmac("sha256", password).update("nc-admin-session").digest("hex")
}

export function isValidAdminToken(token: string, password: string): boolean {
  const expected = generateAdminToken(password)
  const tokenBuf = Buffer.from(token)
  const expectedBuf = Buffer.from(expected)
  return tokenBuf.length === expectedBuf.length && crypto.timingSafeEqual(tokenBuf, expectedBuf)
}
