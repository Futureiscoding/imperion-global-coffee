import nodemailer from "nodemailer";
import { z } from "zod";

const requestWindows = new Map();

const inquirySchema = z.object({
  formType: z.enum(["offer-sheet", "sample", "documents-request", "macadamia-interest", "general"]),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(2).max(160),
  country: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(10).max(5000),
  shipToAddress: z.string().trim().max(500).optional(),
  courierAccount: z.string().trim().max(200).optional(),
  courierTermsAccepted: z.boolean().optional(),
  port: z.string().trim().max(100).optional(),
  grades: z.string().trim().max(300).optional(),
  volume: z.string().trim().max(200).optional(),
  website: z.string().trim().max(254).optional(),
  documents: z.string().trim().max(500).optional(),
  reason: z.string().trim().max(1000).optional(),
  style: z.string().trim().max(200).optional(),
  targetStart: z.string().trim().max(100).optional(),
  turnstileToken: z.string().trim().max(5000).optional(),
  honeypot: z.string().max(200).optional(),
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });
  const forwarded = req.headers["x-forwarded-for"];
  const ip = (typeof forwarded === "string" ? forwarded.split(",")[0] : req.socket?.remoteAddress) || "unknown";
  const now = Date.now();
  const recent = (requestWindows.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) return res.status(429).json({ message: "Too many requests. Please try again later." });
  recent.push(now);
  requestWindows.set(ip, recent);

  const parsed = inquirySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Please check the required fields." });
  if (parsed.data.honeypot) return res.status(200).json({ message: "Thank you." });
  if (parsed.data.formType === "sample" && parsed.data.courierTermsAccepted !== true) {
    return res.status(400).json({ message: "Please acknowledge the sample courier terms." });
  }
  if (parsed.data.formType === "documents-request" && (!parsed.data.documents || !parsed.data.reason)) {
    return res.status(400).json({ message: "Please describe the documents and reason for request." });
  }
  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!parsed.data.turnstileToken) {
      return res.status(400).json({ message: "Please complete the website security check." });
    }
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: parsed.data.turnstileToken,
      }),
    }).then((response) => response.json());
    if (!verification.success) {
      return res.status(400).json({ message: "The security check could not be completed." });
    }
  }

  if (!process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
    return res.status(500).json({ message: "Email service is not configured yet." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
    port: Number(process.env.ZOHO_SMTP_PORT || 465),
    secure: String(process.env.ZOHO_SMTP_PORT || 465) === "465",
    auth: { user: process.env.ZOHO_SMTP_USER, pass: process.env.ZOHO_SMTP_PASS },
  });

  const {
    formType,
    name,
    email,
    company,
    country,
    phone,
    message,
    shipToAddress,
    courierAccount,
    port,
    grades,
    volume,
    website,
    documents,
    reason,
    style,
    targetStart,
  } = parsed.data;
  const safeText = (value) => String(value || "").replace(/[<>&]/g, "");
  const inboxes = {
    "documents-request": process.env.DOCUMENTS_TO_EMAIL,
    "macadamia-interest": process.env.MACADAMIA_TO_EMAIL,
    "offer-sheet": process.env.SALES_TO_EMAIL,
    sample: process.env.SALES_TO_EMAIL,
    general: process.env.CONTACT_TO_EMAIL,
  };
  const recipient = inboxes[formType] || process.env.CONTACT_TO_EMAIL || "info@imperionglobalholdings.co.ke";

  try {
    await transporter.sendMail({
      from: `"Imperion Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New ${formType} inquiry from ${safeText(name)}`,
      html: `
        <h2>New ${safeText(formType)} inquiry</h2>
        <p><strong>Name:</strong> ${safeText(name)}</p>
        <p><strong>Company:</strong> ${safeText(company)}</p>
        <p><strong>Email:</strong> ${safeText(email)}</p>
        <p><strong>Country:</strong> ${safeText(country)}</p>
        <p><strong>Phone:</strong> ${safeText(phone)}</p>
        ${shipToAddress ? `<p><strong>Ship-to address:</strong> ${safeText(shipToAddress)}</p>` : ""}
        ${courierAccount ? `<p><strong>Courier account:</strong> ${safeText(courierAccount)}</p>` : ""}
        ${port ? `<p><strong>Destination port:</strong> ${safeText(port)}</p>` : ""}
        ${grades ? `<p><strong>Grades:</strong> ${safeText(grades)}</p>` : ""}
        ${volume ? `<p><strong>Expected volume:</strong> ${safeText(volume)}</p>` : ""}
        ${website ? `<p><strong>Company website:</strong> ${safeText(website)}</p>` : ""}
        ${documents ? `<p><strong>Documents requested:</strong> ${safeText(documents)}</p>` : ""}
        ${reason ? `<p><strong>Reason:</strong> ${safeText(reason)}</p>` : ""}
        ${style ? `<p><strong>Kernel style:</strong> ${safeText(style)}</p>` : ""}
        ${targetStart ? `<p><strong>Target start:</strong> ${safeText(targetStart)}</p>` : ""}
        <p><strong>Message:</strong><br />${safeText(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Imperion Global Holdings" <${process.env.ZOHO_SMTP_USER}>`,
      to: email,
      replyTo: process.env.CONTACT_TO_EMAIL || "info@imperionglobalholdings.co.ke",
      subject: "We received your Imperion inquiry",
      html: "<p>Thank you for contacting Imperion Global Holdings.</p><p>We have received your inquiry and will reply from an official @imperionglobalholdings.co.ke address.</p>",
    });

    return res.status(200).json({ message: "Thank you. Your inquiry has been received." });
  } catch {
    return res.status(500).json({ message: "Email sending failed." });
  }
}
