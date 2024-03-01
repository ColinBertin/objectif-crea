import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_ACCOUNT,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      const mailOptions = {
        to: process.env.MAIL_ACCOUNT,
        subject: subject,
        text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      res.status(200).json({ message: "The email as been sent!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while sending the email." });
    }
  } else {
    res.status(405).json({ error: "POST method." });
  }
}
