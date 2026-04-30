import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, telegram, address, signature, date } = body;

    const data = await resend.emails.send({
      from: 'D&H Partners <no-reply@cmefgroup.com>',
      to: [process.env.SUPPORT_EMAIL as string],
      subject: `New Contract Signed: ${fullName}`,
      html: `
        <h1>Contract Agreement Signed</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Telegram:</strong> ${telegram}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Signature:</strong> ${signature}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
