import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter signup. Forwards to a Resend audience when RESEND_API_KEY and
 * RESEND_AUDIENCE_ID are configured; otherwise succeeds as a no-op so the
 * form stays friendly before the keys arrive. The `website` field is a
 * honeypot — bots fill it, humans never see it.
 */
export async function POST(request: Request) {
  let body: { email?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 });
  }

  if (body.website) {
    // Honeypot tripped: pretend success, store nothing.
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (!res.ok) {
      console.error(`Resend contact creation failed with status ${res.status}`);
      return NextResponse.json({ ok: false, error: 'provider_error' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error('Resend request failed');
    return NextResponse.json({ ok: false, error: 'provider_error' }, { status: 502 });
  }
}
