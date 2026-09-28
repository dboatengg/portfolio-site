import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !phone || !service || !message) {
    return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
    );
    }

    const data = await resend.emails.send({
      from: "Portfolio Site <onboarding@resend.dev>", // Replace after verifying your domain
      to: ["dicksonboateng@proton.me"], // Your email address
      subject: `New enquiry: ${service} from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
} catch (error) {
  console.error("Contact form error:", error);
  return NextResponse.json(
    { error: "Something went wrong. Please try again." },
    { status: 500 }
  );
}
}