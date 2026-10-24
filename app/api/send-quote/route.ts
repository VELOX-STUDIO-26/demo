import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuotePayload = {
  name?: string;
  email?: string;
  business?: string;
  industry?: string;
  service?: string;
  budget?: string;
  message?: string;
};

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const sanitize = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured" },
      { status: 500 },
    );
  }

  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const business = sanitize(body.business) || "N/A";
  const industry = sanitize(body.industry) || "N/A";
  const service = sanitize(body.service) || "N/A";
  const budget = sanitize(body.budget) || "N/A";
  const message = sanitize(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const htmlContent = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Business:</strong> ${escapeHtml(business)}</p>
    <p><strong>Industry:</strong> ${escapeHtml(industry)}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    await resend.emails.send({
      from: "AI METRIX <noreply@aimetrixllc.com>",
      to: "info@aimetrixllc.com",
      subject: `Quote Request from ${name}`,
      html: htmlContent,
      reply_to: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
