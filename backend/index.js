import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL_USER = process.env.EMAIL_USER?.trim();
const EMAIL_PASS = process.env.EMAIL_PASS?.replace(/\s+/g, "");
const isVercel = process.env.VERCEL === "1";
const PORT = Number(process.env.PORT) || 5000;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
  if (!isVercel) process.exit(1);
}

// 1. Create the transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// 2. The API Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "name, email, and message are required" });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `New Portfolio Message from ${name}`,
    text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error?.message || "Failed to send email",
    });
  }
});

if (!isVercel) {
  transporter
    .verify()
    .then(() => {
      app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
    })
    .catch((error) => {
      console.error("SMTP verification failed:", error?.message || error);
      process.exit(1);
    });
}

export default app;
