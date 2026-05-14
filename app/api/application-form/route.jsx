import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const dynamic = "force-dynamic";

const uploadMaxSize = 1024 * 1024 * 5;
const formatsAllowed = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.object({
  jobTitle: z.string().min(1).max(100),
  email: z.string().email().max(50),
  fullName: z.string().max(50),
  address: z.string().max(100),
  phone: z.string().min(10).max(20),
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const validatedData = schema.parse(Object.fromEntries(formData));

    const file = formData.get("resume");
    if (!file || typeof file !== "object") {
      return NextResponse.json(
        { error: "Resume file is required" },
        { status: 400 }
      );
    }

    if (!formatsAllowed.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file format" },
        { status: 400 }
      );
    }

    if (file.size > uploadMaxSize) {
      return NextResponse.json(
        { error: "File size exceeds limit" },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",").shift() ||
      req.socket?.remoteAddress ||
      "Unknown";

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

    // Convert ArrayBuffer to Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const emailTemplate = generateEmailTemplate({ ...validatedData, ip: ip });

    let emailDetails = {
      from: `"Acgile Careers" <${process.env.NODEMAILER_EMAIL}>`,
      replyTo: validatedData.email,
      to: process.env.RECEIVER_EMAILS.split(",")
        ? process.env.RECEIVER_EMAILS.split(",")
        : process.env.RECEIVER_EMAILS,
      subject: `Job Application for ${validatedData.jobTitle}`,
      html: emailTemplate,
      attachments: [
        {
          filename: file.name,
          content: fileBuffer,
        },
      ],
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(emailDetails, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return NextResponse.json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const generateEmailTemplate = (data) =>
  `
  <h2 style="font-size:18px;font-family:sans-serif;font-weight:700;margin:0;">New Application Received for ${data.jobTitle}</h2> 
  <h3 style="font-size:16px;font-family:sans-serif;margin:0;margin-bottom:5px;margin-top:10px">Details:</h3>
  <table style="font-family:sans-serif;border-collapse:collapse">
    <tbody>
    <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">Full Name</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">
        ${data.fullName}</td>
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
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">Address</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">${data.address}</td>
      </tr>
      <tr>
        <th style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">User's IP Address</th>
        <td style="border-width:1px;border-style:solid;border-color:#dee1e4;padding:10px;padding-left:20px;padding-right:20px;min-width:100px">${data.ip}</td>
      </tr>
    </tbody>
  </table>
  `;
