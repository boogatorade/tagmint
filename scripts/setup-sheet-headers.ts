/**
 * setup-sheet-headers.ts
 *
 * Initializes (or resets) the Google Sheet with the correct column headers.
 * Run this once after creating your sheet.
 *
 * Run with: npx tsx --env-file=.env.local scripts/setup-sheet-headers.ts
 */

import { google } from 'googleapis';

const HEADERS = [
  'Date',
  'Name',
  'Email',
  'Package',
  'Amount',
  'Shop URL',
  'Listing URLs',
  'Session ID',
  'Status',
  'Notes',
];

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.');
  }

  const privateKey = rawKey.replace(/\\n/g, '\n');

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function main() {
  console.log('\n--- TagMint: Google Sheet header setup ---\n');

  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    console.error('MISSING: GOOGLE_SHEET_ID is not set in your environment.');
    console.error('Fix: Add GOOGLE_SHEET_ID=your-sheet-id to .env.local and re-run.');
    process.exit(1);
  }

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  if (!email || !rawKey) {
    console.error('MISSING: GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.');
    console.error('Fix: Fill in both values in .env.local and re-run.');
    process.exit(1);
  }

  console.log(`Sheet ID: ${sheetId}`);
  console.log(`Service account: ${email}`);
  console.log(`Headers to write: ${HEADERS.join(' | ')}\n`);

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    // Check what's already in row 1
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:J1',
    });

    const existingRow = existing.data.values?.[0];

    if (existingRow && existingRow.length > 0) {
      console.log('Row 1 already has content:');
      console.log(' ', existingRow.join(' | '));
      console.log('\nOverwriting with correct headers...');
    } else {
      console.log('Row 1 is empty. Writing headers...');
    }

    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [HEADERS],
      },
    });

    console.log('\nSUCCESS! Headers written to row 1 of your Google Sheet.');
    console.log('Open the sheet to confirm:');
    console.log(`  https://docs.google.com/spreadsheets/d/${sheetId}/edit`);
    console.log('\nNext step: run the connection test:');
    console.log('  npx tsx --env-file=.env.local scripts/test-sheets.ts');
  } catch (err: unknown) {
    const error = err as Error & { status?: number };
    console.error('FAILED to write headers.\n');

    if (error.status === 403 || error.message?.includes('403')) {
      console.error('Diagnosis: Permission denied.');
      console.error('Fix: Open the sheet and share it with your service account email:');
      console.error(`     ${email}`);
      console.error('     Set permission to Editor.');
    } else if (error.status === 404 || error.message?.includes('404')) {
      console.error('Diagnosis: Sheet not found. Check your GOOGLE_SHEET_ID.');
      console.error(`     Current value: ${sheetId}`);
    } else {
      console.error('Error details:', error.message ?? err);
    }

    process.exit(1);
  }
}

main();
