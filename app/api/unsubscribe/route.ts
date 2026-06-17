import { NextRequest, NextResponse } from "next/server"
import { addUnsubscribe } from "@/lib/unsubscribe-store"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : ""

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
  }

  const entry = await addUnsubscribe(email)
  return NextResponse.json({ ok: true, id: entry.id })
}
