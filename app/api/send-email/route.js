import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, message } = await req.json();

    console.log('Creating transporter with credentials:', {
      user: process.env.EMAIL_USER,
      // Not logging the actual password for security
      hasPassword: !!process.env.EMAIL_PASS
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true
    });

    // Verify the connection configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🚨 URGENT: Emergency Blood Needed',
      text: message,
      priority: 'high',
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    console.log('Attempting to send email to:', email);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return NextResponse.json({ message: 'Emergency alert sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ 
      error: 'Failed to send alert: ' + (error.message || error.toString())
    }, { status: 500 });
  }
} 