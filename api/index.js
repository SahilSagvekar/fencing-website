import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, phone, email, zip, message } = req.body;

    // Configure transporter inside function (serverless best practice)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP (optional in production, good for debugging)
    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
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
    console.error("Error sending email:", err.response || err.message || err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
