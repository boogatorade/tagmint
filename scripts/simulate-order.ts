/**
 * simulate-order.ts
 *
 * Simulates a complete order end-to-end — the same code path that runs when
 * a real customer pays. Use this to verify your Google Sheet and email
 * notifications are working before going live.
 *
 * Run with: npx tsx --env-file=.env.local scripts/simulate-order.ts
 */

import { appendToGoogleSheet } from '../lib/sheets';
import { sendOwnerNotification } from '../lib/notify';

const FAKE_ORDER = {
  name: 'Jane Test',
  email: 'customer@example.com',
  shopUrl: 'https://www.etsy.com/shop/test-shop',
  listingUrls: 'https://www.etsy.com/listing/111,https://www.etsy.com/listing/222',
  package: 'standard',
  amount: 4900, // $49.00 in cents
  date: new Date().toISOString(),
  sessionId: `sim_${Date.now()}`,
};

async function main() {
  console.log('\n--- TagMint: End-to-end order simulation ---\n');
  console.log('Simulating an order with the following data:');
  console.log(`  Name:       ${FAKE_ORDER.name}`);
  console.log(`  Email:      ${FAKE_ORDER.email}`);
  console.log(`  Package:    ${FAKE_ORDER.package}`);
  console.log(`  Amount:     $${(FAKE_ORDER.amount / 100).toFixed(2)}`);
  console.log(`  Shop URL:   ${FAKE_ORDER.shopUrl}`);
  console.log(`  Session ID: ${FAKE_ORDER.sessionId}`);
  console.log();

  let sheetsOk = false;
  let emailOk = false;

  // Step 1: Google Sheets
  console.log('[1/2] Appending order to Google Sheet...');
  try {
    await appendToGoogleSheet(FAKE_ORDER);
    console.log('      OK — row appended successfully.');
    sheetsOk = true;
  } catch (err: unknown) {
    const error = err as Error;
    console.error('      FAILED:', error.message ?? err);
    console.error('      Run `npx tsx --env-file=.env.local scripts/test-sheets.ts` for details.');
  }

  // Step 2: Email notification
  console.log('[2/2] Sending owner notification email...');
  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    console.warn('      SKIPPED — OWNER_EMAIL is not set in .env.local.');
    console.warn('      Add OWNER_EMAIL, NOTIFY_EMAIL, and NOTIFY_EMAIL_PASSWORD to enable email alerts.');
  } else {
    try {
      await sendOwnerNotification(FAKE_ORDER);
      console.log(`      OK — notification sent to ${ownerEmail}.`);
      emailOk = true;
    } catch (err: unknown) {
      const error = err as Error;
      console.error('      FAILED:', error.message ?? err);
      console.error('      Check NOTIFY_EMAIL and NOTIFY_EMAIL_PASSWORD in .env.local.');
    }
  }

  // Summary
  console.log('\n--- Simulation complete ---\n');

  if (sheetsOk && (emailOk || !ownerEmail)) {
    console.log('Everything is working!');
    if (sheetsOk) {
      console.log(`  Google Sheet: https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}/edit`);
    }
    if (emailOk) {
      console.log(`  Check ${ownerEmail} for the test notification email.`);
    }
    console.log('\nYou are ready to accept real orders.');
  } else {
    console.log('Some steps failed. Fix the errors above, then run this script again.');
    process.exit(1);
  }
}

main();
