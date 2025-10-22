import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const _body = await request.json();
    // TODO: integrate with SendGrid/SES via env vars
    // For now, simulate success response
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
