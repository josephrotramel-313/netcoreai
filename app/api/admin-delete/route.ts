import { NextResponse } from "next/server"
import { isValidAdminPassword } from "@/lib/admin-password"
import { deleteUnsubscribe, getUnsubscribes } from "@/lib/unsubscribe-store"

const HOUR_MS = 60 * 60 * 1000
const MAX_ATTEMPTS = 10
const attempts = new Map<string, { count: number; resetAt: number }>()

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 })
  }

  const forwarded = req.headers.get("x-forwarded-for")
  const ip = forwarded?.split(",")[0].trim() ?? "unknown"
  const now = Date.now()

  let record = attempts.get(ip)
  if (!record || now > record.resetAt) {
    record = { count: 0, resetAt: now + HOUR_MS }
    attempts.set(ip, record)
  }
  if (record.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: "Too many attempts" }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const submitted: string = body?.password ?? ""
  const id: string = body?.id ?? ""

  if (!isValidAdminPassword(submitted)) {
    record.count += 1
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 })
  }

  await deleteUnsubscribe(id)
  const unsubscribes = await getUnsubscribes()
  return NextResponse.json({ ok: true, unsubscribes })
}
