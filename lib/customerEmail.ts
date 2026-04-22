import { Resend } from 'resend';

interface OrderData {
  name: string;
  email: string;
  shopUrl: string;
  package: string;
  sessionId: string;
}

const PACKAGE_LABELS: Record<string, string> = {
  basic: 'Listing Tune-Up',
  standard: 'Shop Boost',
  premium: 'Full Shop Overhaul',
};

function buildCustomerHtml(order: OrderData, optimizedContent: string): string {
  const escapedContent = optimizedContent
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your optimized listings are ready!</title>
</head>
<body style="margin:0;padding:0;background-color:#f9f9f9;font-family:Arial,Helvetica,sans-serif;color:#222;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9f9f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:8px;border:1px solid #e5e5e5;">

          <!-- Header -->
          <tr>
            <td style="padding:28px 40px 20px;border-bottom:1px solid #eeeeee;">
              <span style="font-size:20px;font-weight:700;color:#10b981;">TagMint</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">

              <p style="margin:0 0 16px;font-size:16px;color:#222;">Hi ${order.name},</p>
              <p style="margin:0 0 24px;font-size:15px;color:#444;line-height:1.6;">
                Your optimized listings are ready. Copy and paste each section directly into your Etsy or eBay listing editor and save.
              </p>

              <hr style="border:none;border-top:1px solid #eeeeee;margin:0 0 24px;">

              <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#10b981;">Your Optimized Listings</p>
              <div style="background:#f7f7f7;border:1px solid #e0e0e0;border-radius:6px;padding:20px;font-size:14px;color:#333;line-height:1.8;white-space:pre-wrap;word-break:break-word;">${escapedContent}</div>

              <hr style="border:none;border-top:1px solid #eeeeee;margin:28px 0;">

              <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#222;">How to apply these</p>
              <ol style="margin:0 0 24px;padding-left:20px;font-size:14px;color:#555;line-height:1.9;">
                <li>Go to your Shop Manager &rarr; Listings</li>
                <li>Click Edit on the listing you want to update</li>
                <li>Paste in the new title, tags, and description &rarr; Save</li>
              </ol>

              <div style="text-align:center;margin-top:32px;">
                <a href="https://tagmint-app.netlify.app" style="display:inline-block;background-color:#10b981;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:6px;">Optimize more listings &rarr;</a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #eeeeee;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#999;">TagMint &mdash; Etsy &amp; eBay SEO Optimization</p>
              <p style="margin:0;font-size:11px;color:#ccc;">Order ref: ${order.sessionId.slice(-8).toUpperCase()}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

function buildCustomerText(order: OrderData, optimizedContent: string): string {
  return `Hi ${order.name}!

Great news — your optimized listings are done.

Copy and paste each section directly into your Etsy or eBay listings. These are optimized for the search algorithm AND for buyers.

========================================
YOUR OPTIMIZED LISTINGS
========================================

${optimizedContent}

========================================
HOW TO USE THESE
========================================

1. Go to Etsy > Shop Manager > Listings
2. Click Edit on each listing you want to update
3. Copy/paste the new title, tags, and description into each field, then save

========================================
PRO TIPS
========================================

• Use all 13 tags on every listing — unused tags are missed search opportunities
• Etsy's algorithm weighs your first few words most heavily, so keep your strongest keywords up front in titles
• Refresh your listings every few months as trends shift — small tweaks can make a big difference in search ranking

========================================

Want more listings optimized? Visit https://tagmint-app.netlify.app

---
TagMint — Etsy SEO Optimization
Questions? Reply to this email.`.trim();
}

export async function sendCustomerDelivery(
  order: OrderData,
  optimizedContent: string
): Promise<void> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'TagMint <onboarding@resend.dev>',
      to: order.email,
      subject: 'Your optimized Etsy listings are ready! 🌿 — TagMint',
      html: buildCustomerHtml(order, optimizedContent),
      text: buildCustomerText(order, optimizedContent),
    });
    console.log(`[customerEmail] Delivery sent to customer: ${order.email}`);
  } catch (err) {
    console.error('[customerEmail] Failed to send customer delivery email:', err);
  }
}

export async function sendOwnerCopy(
  order: OrderData,
  optimizedContent: string
): Promise<void> {
  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    console.error('[customerEmail] OWNER_EMAIL env var is not set — skipping owner copy.');
    return;
  }

  const packageLabel = PACKAGE_LABELS[order.package] ?? order.package;
  const subject = `✅ Order fulfilled — ${order.name} (${packageLabel})`;

  const escapedContent = optimizedContent
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;color:#333;max-width:600px;margin:0 auto;padding:20px;">
  <h2 style="color:#10b981;">&#9989; Order Fulfilled</h2>

  <h3>Customer Details</h3>
  <table style="border-collapse:collapse;width:100%;">
    <tr><td style="padding:4px 8px;font-weight:bold;">Name</td><td style="padding:4px 8px;">${order.name}</td></tr>
    <tr><td style="padding:4px 8px;font-weight:bold;">Email</td><td style="padding:4px 8px;">${order.email}</td></tr>
    <tr><td style="padding:4px 8px;font-weight:bold;">Shop URL</td><td style="padding:4px 8px;"><a href="${order.shopUrl}">${order.shopUrl}</a></td></tr>
    <tr><td style="padding:4px 8px;font-weight:bold;">Package</td><td style="padding:4px 8px;">${packageLabel} (${order.package})</td></tr>
    <tr><td style="padding:4px 8px;font-weight:bold;">Session ID</td><td style="padding:4px 8px;font-size:0.85em;color:#555;">${order.sessionId}</td></tr>
  </table>

  <h3>Optimized Content Delivered</h3>
  <pre style="background:#f3f4f6;border:1px solid #d1d5db;border-radius:6px;padding:16px;font-size:13px;line-height:1.6;white-space:pre-wrap;word-break:break-word;">${escapedContent}</pre>

  <hr style="margin-top:24px;">
  <p style="color:#10b981;font-weight:bold;">&#9989; This content was sent to ${order.email}</p>
  <p style="font-size:0.85em;color:#888;">Session: ${order.sessionId}</p>
</body>
</html>`.trim();

  const textBody = `Order Fulfilled — ${order.name} (${packageLabel})

Customer Details
----------------
Name:       ${order.name}
Email:      ${order.email}
Shop URL:   ${order.shopUrl}
Package:    ${packageLabel} (${order.package})
Session ID: ${order.sessionId}

Optimized Content Delivered
----------------------------
${optimizedContent}

---
This content was sent to ${order.email}.`.trim();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'TagMint <onboarding@resend.dev>',
      to: ownerEmail,
      subject,
      html: htmlBody,
      text: textBody,
    });
    console.log(`[customerEmail] Owner copy sent to ${ownerEmail}`);
  } catch (err) {
    console.error('[customerEmail] Failed to send owner copy:', err);
  }
}
