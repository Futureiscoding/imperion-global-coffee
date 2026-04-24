import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.com",
  port: Number(process.env.ZOHO_SMTP_PORT || 465),
  secure: String(process.env.ZOHO_SMTP_PORT || 465) === "465",
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, company, country, interest, message, source } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  if (!process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
    return res.status(500).json({ message: "Email service is not configured yet." });
  }

  try {
    await transporter.sendMail({
      from: `"Imperion Website" <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || "info@imperionglobalholdings.co.ke",
      replyTo: email,
      subject: `New ${source || "Website"} Inquiry from ${name}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country || "Not provided"}</p>
        <p><strong>Interest:</strong> ${interest || "Not provided"}</p>
        <p><strong>Source:</strong> ${source || "Website Form"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Inquiry sent successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Email sending failed." });
  }
}
