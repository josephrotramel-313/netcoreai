import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

function expectedActionToken(password: string): string {
  return crypto.createHmac('sha256', password).update('nc-delete-action').digest('hex')
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const password = process.env.DASHBOARD_PASSWORD
  if (!password) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const provided = req.headers.get('x-action-token') ?? ''
  const expected = expectedActionToken(password)
  const valid =
    provided.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected))

  if (!valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const expressUrl =
    process.env.EXPRESS_INTERNAL_URL ??
    process.env.NEXT_PUBLIC_EXPRESS_URL ??
    'http://localhost:5001'

  const internalSecret = process.env.INTERNAL_API_SECRET
  const headers: Record<string, string> = {}
  if (internalSecret) headers['x-internal-secret'] = internalSecret

  const upstream = await fetch(`${expressUrl}/leads/${id}`, {
    method: 'DELETE',
    headers,
  })

  if (!upstream.ok) {
    const body = await upstream.json().catch(() => ({}))
    return NextResponse.json(body, { status: upstream.status })
  }

  return NextResponse.json({ deleted: true, id })
}
