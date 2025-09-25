import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config({ path: "./.env" }); //  make sure this line is BEFORE using process.env


const app = express();
app.use(cors());
app.use(express.json());

// Create transporter for Brevo
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true if using 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Route to handle form submissions
app.post("/api/quote", async (req, res) => {
  try {
    const { firstName, lastName, phone, email, zip, message } = req.body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: "New Fence Quote Request",
      text: `
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}
        Zip: ${zip}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Backend running on port ${process.env.PORT}`)
);
