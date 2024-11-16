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
  const {
    nom,
    prenom,
    email,
    Tele,
    faculte,
    niveau,
    specialite,
    recherche,
    source
  } = body;

  try {
    // Create user in the database with the complete model
    const registration = await prisma.registration.create({
      data: {
        nom,
        prenom,
        email,
        Tele,
        faculte,
        niveau,
        specialite,
        recherche,
        source,
      },
    });

    // Send verification email with user's ID
    const mailOptions = {
      from: process.env.FROM_EMAIL_GMAIL,
      to: email,
      subject: "Verify your attendance",
      html: `
        <h1>Dear visitor, welcome to ESENET 2024</h1>
        <p>Hi ${prenom} ${nom},</p>
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
      { header: 'Nom', key: 'nom', width: 15 },
      { header: 'Prenom', key: 'prenom', width: 15 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Tele', key: 'Tele', width: 15 },
      { header: 'Faculte', key: 'faculte', width: 20 },
      { header: 'Niveau', key: 'niveau', width: 15 },
      { header: 'Specialite', key: 'specialite', width: 20 },
      { header: 'Recherche', key: 'recherche', width: 20 },
      { header: 'Source', key: 'source', width: 20 },
    ];

    allRegistrations.forEach(reg => {
      worksheet.addRow(reg);
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
