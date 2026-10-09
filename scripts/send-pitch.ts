// scripts/send-pitch.ts
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { Resend } from "resend";
import { buildPitchEmail, buildPitchEmailText } from "../emails/pitch";

const resend = new Resend(process.env.RESEND_API_KEY);

// ✏️ PER-RECIPIENT — change these per send
const PROSPECT_NAME = "The Fertility Centrum Team";
const PROSPECT_BUSINESS = "The Fertility Centrum";
const RECIPIENT_EMAIL = "dicksonboateng@proton.me";
const PREVIEW_URL = "https://fertility-centrum.vercel.app";

// ✏️ YOUR INFO — set once, use everywhere
const SENDER = {
  senderName: "Dickson Boateng",
  senderTitle: "Web Designer & Developer",
  senderSite: "https://dicksonboateng.com",
  senderSiteLabel: "dicksonboateng.com",
  senderEmail: "dicksonboateng@proton.me",
  senderPhone: "+233 53 268 3209",
  senderLogoUrl: "https://dicksonboateng.com/logos/boateng-light.png",
  accentColor: "#2563eb",
};

async function sendPitch() {
  console.log(`Sending to ${RECIPIENT_EMAIL}...`);

  const { data, error } = await resend.emails.send({
    from: "Dickson Boateng <contact@dicksonboateng.com>",
    to: [RECIPIENT_EMAIL],
    replyTo: "dicksonboateng@proton.me",
    subject: `A website concept for ${PROSPECT_BUSINESS}`,
    html: buildPitchEmail({
      prospectName: PROSPECT_NAME,
      prospectBusiness: PROSPECT_BUSINESS,
      previewUrl: PREVIEW_URL,
      ...SENDER,
    }),
    text: buildPitchEmailText({
      prospectName: PROSPECT_NAME,
      prospectBusiness: PROSPECT_BUSINESS,
      previewUrl: PREVIEW_URL,
      ...SENDER,
    }),
  });

  if (error) {
    console.error("❌ Failed:", error);
    process.exit(1);
  }

  console.log("✅ Sent successfully:", data);
}

sendPitch();