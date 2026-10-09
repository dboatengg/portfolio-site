// emails/pitch.tsx

// =============================================
// BODY COPY
// =============================================
const BODY_PARAGRAPHS = [
  "I came across your website recently and wanted to reach out. Your clinic clearly delivers world-class care. But the current state of your website doesn't quite reflect that level of excellence. It feels like it was built years ago.",
  "For a clinic doing such important work, I believe the website should earn a patient's trust before they even walk through your doors.",
  "So my team and I took the liberty of building a preview of what a modern version of your website could look like.",
];

const CLOSING_PARAGRAPH =
  "If you're interested in taking this further, I'd love to talk about taking on the full project and doing a complete redesign. And if not, no worries at all, I hope you find some of the ideas in it useful.";

export function buildPitchEmail({
  prospectName = "The Team",
  prospectBusiness = "The Fertility Centrum",
  previewUrl = "https://fertility-centrum.vercel.app",
  senderName = "Dickson Boateng",
  senderTitle = "Web Designer & Developer",
  senderSite = "https://dicksonboateng.com",
  senderSiteLabel = "dicksonboateng.com",
  senderEmail = "dicksonboateng@proton.me",
  senderPhone = "+233 53 268 3209",
  accentColor = "#2563eb",
}: {
  prospectName?: string;
  prospectBusiness?: string;
  previewUrl?: string;
  senderName?: string;
  senderTitle?: string;
  senderSite?: string;
  senderSiteLabel?: string;
  senderEmail?: string;
  senderPhone?: string;
  accentColor?: string;
}) {
  const bodyHtml = BODY_PARAGRAPHS.map((p) => {
    const interpolated = p.replace(/\{prospectBusiness\}/g, prospectBusiness);
    return `<p class="body-text" style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#374151;">
                ${interpolated}
              </p>`;
  }).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light only" />
  <title>Website concept for ${prospectBusiness}</title>

  <style>
    @media (max-width: 600px) {
      .section-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .outer-padding { padding: 20px 10px !important; }
      .body-text { font-size: 15px !important; }
      .btn { padding: 14px 24px !important; font-size: 15px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f7f7f7;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#4b5563;line-height:1.6;-webkit-font-smoothing:antialiased;">

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f7f7f7;">
    <tr>
      <td class="outer-padding" align="center" style="padding:40px 16px;">

        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background-color:#fafafa;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- TOP ACCENT LINE -->
          <tr>
            <td style="height:3px;background:${accentColor};"></td>
          </tr>

          <!-- BODY -->
          <tr>
            <td class="section-padding" style="padding:36px 36px 32px;">

              <p class="body-text" style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#1f2937;">
                Hi ${prospectName},
              </p>
${bodyHtml}
              <!-- CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 32px;">
                <tr>
                  <td align="center" style="border-radius:999px;background-color:${accentColor};">
                    <a href="${previewUrl}" target="_blank" class="btn" style="display:inline-block;padding:15px 30px;font-family:'Inter',-apple-system,sans-serif;font-size:15px;font-weight:500;color:#ffffff;text-decoration:none;border-radius:999px;letter-spacing:0.01em;">
                      View the preview &nbsp;→
                    </a>
                  </td>
                </tr>
              </table>

              <p class="body-text" style="margin:0 0 28px;font-size:16px;line-height:1.7;color:#374151;">
                ${CLOSING_PARAGRAPH}
              </p>

              <!-- DIVIDER -->
              <div style="height:1px;background-color:#e5e7eb;margin:0 0 24px;"></div>

              <!-- SIGNATURE -->
              <p class="body-text" style="margin:0 0 4px;font-size:16px;line-height:1.6;color:#374151;">
                Warm regards,
              </p>
              <p style="margin:0 0 16px;font-family:'Newsreader',Georgia,serif;font-size:20px;font-weight:400;color:#1f2937;letter-spacing:-0.01em;">
                ${senderName}
              </p>

              <p style="margin:0 0 2px;font-size:13px;color:#6b7280;">
                ${senderTitle}
              </p>
              <p style="margin:0 0 2px;font-size:13px;">
                <a href="${senderSite}" target="_blank" style="color:${accentColor};text-decoration:none;">${senderSiteLabel}</a>
              </p>
              <p style="margin:0 0 2px;font-size:13px;">
                <a href="mailto:${senderEmail}" style="color:${accentColor};text-decoration:none;">${senderEmail}</a>
              </p>
              <p style="margin:0;font-size:13px;color:#6b7280;">
                ${senderPhone}
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `;
}

export function buildPitchEmailText({
  prospectName = "The Team",
  prospectBusiness = "The Fertility Centrum",
  previewUrl = "https://fertility-centrum.vercel.app",
  senderName = "Dickson Boateng",
  senderTitle = "Web Designer & Developer",
  senderSite = "https://dicksonboateng.com",
  senderSiteLabel = "dicksonboateng.com",
  senderEmail = "dicksonboateng@proton.me",
  senderPhone = "+233 53 268 3209",
}: {
  prospectName?: string;
  prospectBusiness?: string;
  previewUrl?: string;
  senderName?: string;
  senderTitle?: string;
  senderSite?: string;
  senderSiteLabel?: string;
  senderEmail?: string;
  senderPhone?: string;
}) {
  const bodyText = BODY_PARAGRAPHS.map((p) =>
    p.replace(/\{prospectBusiness\}/g, prospectBusiness)
  ).join("\n\n");

  return `Hi ${prospectName},

${bodyText}

View the preview: ${previewUrl}

${CLOSING_PARAGRAPH}

Warm regards,
${senderName}
${senderTitle}
${senderSiteLabel}
${senderEmail}
${senderPhone}`;
}