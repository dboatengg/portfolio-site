// // scripts/preview-email.ts
// import { writeFileSync } from "fs";
// import { buildPitchEmail, buildPitchEmailText } from "../emails/pitch";

// const PREVIEW_URL = "https://your-preview-url.vercel.app"; // ✏️ EDIT THIS

// const html = buildPitchEmail({
//   recipientName: "The Fertility Centrum Team",
//   previewUrl: PREVIEW_URL,
//   senderName: "Dickson Boateng",
//   senderTitle: "Web Designer & Developer",
//   senderSite: "https://dicksonboateng.com",
//   senderEmail: "dicksonboateng@proton.me", // ← your proton email
//   senderPhone: "+233 53 268 3209",
// });

// const text = buildPitchEmailText({
//   recipientName: "The Fertility Centrum Team",
//   previewUrl: PREVIEW_URL,
//   senderName: "Dickson Boateng",
//   senderSite: "https://dicksonboateng.com",
//   senderEmail: "dicksonboateng@proton.me",
//   senderPhone: "+233 53 268 3209",
// });

// writeFileSync("email-preview.html", html);
// writeFileSync("email-preview.txt", text);

// console.log("✅ Written to email-preview.html");
// console.log("✅ Written to email-preview.txt");
// console.log("");
// console.log("Open the HTML to see it: open email-preview.html");
// console.log("Or copy from the TXT for plain-text sending.");