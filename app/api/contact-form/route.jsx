import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().max(50),
  firstName: z.string().max(15),
  lastName: z.string().max(15),
  phone: z.string().min(10).max(20),
  message: z.string().max(800),
});

export async function POST(req) {
  const formData = await req.json();
  const validation = schema.safeParse(formData);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const emailReceivers = process.env.RECEIVER_EMAILS.split(",")
    ? process.env.RECEIVER_EMAILS.split(",")
    : process.env.RECEIVER_EMAILS;
  const ip =
    req.headers.get("x-forwarded-for")?.split(",").shift() ||
    req.socket?.remoteAddress ||
    "Unknown";

  try {
    // Send email of the form submission
    let transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.hostinger.com",
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
      },
    });
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);

          reject(error);
        } else {
          resolve(success);
        }
      });
    });

    const emailTemplate = generateEmailTemplate({ ...formData, ip: ip });

    let emailDetails = {
      from: `"Acgile Careers" <${process.env.NODEMAILER_EMAIL}>`,
      replyTo: formData.email,
      to: emailReceivers,
      subject: "Contact Form Submission",
      html: emailTemplate,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(emailDetails, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else resolve(info);
      });
    });

    // Return a success response
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { message: "Error processing form submission" },
      { status: 500 }
    );
  }
}

const generateEmailTemplate = (data) =>
  `
  <h2 style="font-size:18px;font-family:sans-serif;font-weight:700;margin:0;">A User Submitted Contact Form</h2> 
  <h3 style="font-size:16px;font-family:sans-serif;margin:0;margin-bottom:5px;margin-top:10px">Details:</h3>
  <table style="font-family:sans-serif;border-collapse:collapse">
    <tbody>
    <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">Full Name</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">
        ${data.firstName} ${data.lastName}</td>
      </tr>
      <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">Email</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px"><a href="mailto:${data.email}">${data.email}</a></td>
      </tr>
      <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">Phone</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px"><a href="tel:${data.phone}">${data.phone}</a></td>
      </tr>
      <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">Message</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">${data.message}</td>
      </tr>
      <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">User's IP Address</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">${data.ip}</td>
      </tr>
    </tbody>
  </table>
  `;
