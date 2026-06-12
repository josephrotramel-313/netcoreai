import { NextResponse } from 'next/server'
import crypto from 'crypto'

const HOUR_MS = 60 * 60 * 1000
const MAX_ATTEMPTS = 10
const attempts = new Map<string, { count: number; resetAt: number }>()

function generateDashboardToken(password: string): string {
  return crypto.createHmac('sha256', password).update('nc-dashboard-session').digest('hex')
}

export async function POST(req: Request) {
  const password = process.env.DASHBOARD_PASSWORD
  if (!password) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0].trim() ?? 'unknown'
  const now = Date.now()

  let record = attempts.get(ip)
  if (!record || now > record.resetAt) {
    record = { count: 0, resetAt: now + HOUR_MS }
    attempts.set(ip, record)
  }
  if (record.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Too many attempts' }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const submitted: string = body?.password ?? ''

  const submittedBuf = Buffer.from(submitted)
  const passwordBuf = Buffer.from(password)
  const valid =
    submittedBuf.length === passwordBuf.length &&
    crypto.timingSafeEqual(submittedBuf, passwordBuf)

  if (!valid) {
    record.count += 1
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  attempts.delete(ip)
  const token = generateDashboardToken(password)

  const res = NextResponse.json({ ok: true })
  res.cookies.set('dashboard-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  return res
}
