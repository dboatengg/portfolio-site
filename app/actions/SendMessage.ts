'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(formData: FormData) {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  if (!name || !email || !message) {
    throw new Error('All fields are required.');
  }

  try {
    await resend.emails.send({
        // from: 'Dickson Boateng <hello@dicksonboateng.com>',
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'dicksonboateng@proton.me', 
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family:Inter, sans-serif; background:#0d1117; color:#e6edf3; padding:24px; border-radius:12px; max-width:600px; margin:auto;">
          <h2 style="color:#58a6ff; font-weight:600;">New Message from ${name}</h2>
          <p style="margin:8px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin-top:16px; line-height:1.6; white-space:pre-wrap;">${message}</p>
          <hr style="border:none; border-top:1px solid #30363d; margin:24px 0;">
          <p style="font-size:12px; color:#8b949e; text-align:center;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
