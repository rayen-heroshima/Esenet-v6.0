
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import nodemailer from 'nodemailer';
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

// Disable static generation for this route
export const dynamic = 'force-dynamic';

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT),
  secure: false, // false for non-SSL/TLS
  auth: {
    user: process.env.FROM_EMAIL_GMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

// Named export for POST method
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstname, lastname, email, phone, university, heardAboutUs } = body;

  try {
    // Create user in the database
    const registration = await prisma.registration.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        university,
        heardAboutUs,
      },
    });

    // Send verification email with user's ID
    const mailOptions = {
      from: process.env.FROM_EMAIL_GMAIL,
      to: email,
      subject: "Verify your attendance",
      html: `
        <h1>Dear visitor, welcome to ESENET 2024</h1>
        <p>Hi ${firstname} ${lastname},</p>
        <p>Your registration code number is: <strong>${registration.id}</strong></p>
        <p>See you on November 27th 😃.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Fetch all registrations for the Excel report
    const allRegistrations = await prisma.registration.findMany();

    // Create Excel file with all registrations
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Registrations');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'First Name', key: 'firstname', width: 15 },
      { header: 'Last Name', key: 'lastname', width: 15 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Phone', key: 'phone', width: 15 },
      { header: 'University', key: 'university', width: 20 },
      { header: 'Heard About Us', key: 'heardAboutUs', width: 20 },
    ];

    allRegistrations.forEach(registration => {
      worksheet.addRow(registration);
    });

    const filePath = path.join(process.cwd(), 'registrations.xlsx');
    await workbook.xlsx.writeFile(filePath);

    // Send the Excel file to the specified email
    const adminMailOptions = {
      from: process.env.FROM_EMAIL_GMAIL,
      to: 'hamzafallahi7@gmail.com',
      subject: 'All User Registrations',
      text: 'Please find attached the list of all registrations.',
      attachments: [
        {
          filename: 'registrations.xlsx',
          path: filePath,
        },
      ],
    };

    await transporter.sendMail(adminMailOptions);

    // Clean up the file after sending
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error("Error cleaning up the file:", err);
    }

    return NextResponse.json({ message: 'User registered and emails sent successfully.' });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
