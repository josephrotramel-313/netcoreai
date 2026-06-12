import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

// 5 submissions per IP per 10 minutes
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);
  const result = rateLimit(ip, LIMIT, WINDOW_MS);

  if (!result.success) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${result.resetInSeconds} seconds.` },
      {
        status: 429,
        headers: {
          "Retry-After": String(result.resetInSeconds),
          "X-RateLimit-Limit": String(LIMIT),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // Parse and validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as Record<string, unknown>).email !== "string"
  ) {
    return NextResponse.json({ error: "Email is required." }, { status: 422 });
  }

  const email = ((body as Record<string, unknown>).email as string).trim().toLowerCase();

  // Basic email format validation (RFC 5322 simplified)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  // TODO: forward to your email service / CRM here
  // e.g. await sendToMailchimp(email) or await sendgrid.send(...)

  return NextResponse.json(
    { message: "Thanks! We'll be in touch soon." },
    {
      status: 200,
      headers: {
        "X-RateLimit-Limit": String(LIMIT),
        "X-RateLimit-Remaining": String(result.remaining),
      },
    }
  );
}
