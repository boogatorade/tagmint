import { Resend } from 'resend';

interface OrderData {
  name: string;
  email: string;
  shopUrl: string;
  listingUrls: string;
  package: string;
  amount: number;
  date: string;
  sessionId: string;
}

const PACKAGE_LABELS: Record<string, string> = {
  basic: 'Listing Tune-Up',
  standard: 'Shop Boost',
  premium: 'Full Shop Overhaul',
};

export async function sendOwnerNotification(order: OrderData): Promise<void> {
  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    console.error('[notify] OWNER_EMAIL env var is not set — skipping notification.');
    return;
  }

  const amountFormatted = `$${(order.amount / 100).toFixed(2)}`;
  const packageLabel = PACKAGE_LABELS[order.package] ?? order.package;
  const subject = `💰 New TagMint Sale — ${amountFormatted} [${packageLabel}]`;

  const listingUrlsFormatted = order.listingUrls
    ? order.listingUrls
        .split(',')
        .map((url) => url.trim())
        .filter(Boolean)
        .map((url) => `  • ${url}`)
        .join('\n')
    : '  (none provided)';

  const body = `
New Sale on TagMint!

Customer Details
----------------
Name:       ${order.name}
Email:      ${order.email}

Order Details
-------------
Package:    ${packageLabel} (${order.package})
Amount:     ${amountFormatted}
Date:       ${order.date}
Session ID: ${order.sessionId}

Shop URL:   ${order.shopUrl}

Listing URLs:
${listingUrlsFormatted}

---
Log in to your Google Sheet to view all orders.
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #16a34a;">💰 New TagMint Sale!</h2>

  <h3>Customer Details</h3>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 4px 8px; font-weight: bold;">Name</td><td style="padding: 4px 8px;">${order.name}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Email</td><td style="padding: 4px 8px;">${order.email}</td></tr>
  </table>

  <h3>Order Details</h3>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 4px 8px; font-weight: bold;">Package</td><td style="padding: 4px 8px;">${packageLabel} (${order.package})</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Amount</td><td style="padding: 4px 8px; color: #16a34a; font-size: 1.1em;">${amountFormatted}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Date</td><td style="padding: 4px 8px;">${order.date}</td></tr>
    <tr><td style="padding: 4px 8px; font-weight: bold;">Session ID</td><td style="padding: 4px 8px; font-size: 0.85em; color: #555;">${order.sessionId}</td></tr>
  </table>

  <h3>Shop URL</h3>
  <p><a href="${order.shopUrl}">${order.shopUrl}</a></p>

  <h3>Listing URLs</h3>
  <ul>
    ${
      order.listingUrls
        ? order.listingUrls
            .split(',')
            .map((url) => url.trim())
            .filter(Boolean)
            .map((url) => `<li><a href="${url}">${url}</a></li>`)
            .join('\n    ')
        : '<li>(none provided)</li>'
    }
  </ul>

  <hr style="margin-top: 24px;">
  <p style="font-size: 0.85em; color: #888;">Log in to your Google Sheet to view all orders.</p>
</body>
</html>
`.trim();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'TagMint <onboarding@resend.dev>',
      to: ownerEmail,
      subject,
      text: body,
      html: htmlBody,
    });
    console.log(`[notify] Owner notification sent to ${ownerEmail}`);
  } catch (err) {
    console.error('[notify] Failed to send owner notification:', err);
  }
}
