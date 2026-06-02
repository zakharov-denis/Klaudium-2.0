import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  firstName: z.string().min(1).max(120),
  lastName: z.string().min(1).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(1).max(80),
  message: z.string().min(1).max(4000),
  honeypot: z.record(z.string(), z.string()).optional()
});

const topLevelHoneypotNames = [
  "website",
  "company",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments"
];

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (hasHoneypotSignal(payload)) {
    return NextResponse.json({ ok: true });
  }

  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid contact form payload" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "denis.data@hotmail.com";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Contact email is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fullName = `${firstName} ${lastName}`.trim();

  await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New Klaudium contact form message from ${fullName}`,
    text: [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message
    ].join("\n"),
    html: `
      <h2>New Klaudium contact form message</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
    `
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hasHoneypotSignal(payload: unknown) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return false;

  const record = payload as Record<string, unknown>;
  const topLevelValues = topLevelHoneypotNames.map((name) => record[name]);
  const nestedHoneypot = record.honeypot;
  const nestedValues =
    nestedHoneypot && typeof nestedHoneypot === "object" && !Array.isArray(nestedHoneypot)
      ? Object.values(nestedHoneypot)
      : [];

  return [...topLevelValues, ...nestedValues].some((value) => {
    if (value == null) return false;
    return String(value).trim().length > 0;
  });
}
