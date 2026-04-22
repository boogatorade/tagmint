/**
 * test-sheets.ts
 *
 * Verifies the Google Sheets connection using env vars from .env.local.
 * Run with: npx tsx --env-file=.env.local scripts/test-sheets.ts
 */

import { appendToGoogleSheet } from '../lib/sheets';

function checkEnvVars(): boolean {
  const required = [
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY',
    'GOOGLE_SHEET_ID',
  ];

  let allPresent = true;

  for (const key of required) {
    const value = process.env[key];
    if (!value) {
      console.error(`  MISSING: ${key}`);
      allPresent = false;
    } else {
      // Show a safe preview so you can confirm the right value is loaded
      const preview =
        key === 'GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY'
          ? value.slice(0, 40) + '...'
          : value;
      console.log(`  OK: ${key} = ${preview}`);
    }
  }

  return allPresent;
}

async function main() {
  console.log('\n--- TagMint: Google Sheets connection test ---\n');

  console.log('Checking environment variables...');
  const envOk = checkEnvVars();

  if (!envOk) {
    console.error(`
One or more required environment variables are missing.

Fix: open .env.local and fill in the missing values, then re-run:
  npx tsx --env-file=.env.local scripts/test-sheets.ts

See SETUP.md > "Google Service Account" for instructions on where to get these values.
`);
    process.exit(1);
  }

  console.log('\nAll env vars present. Attempting to append a test row...\n');

  const testOrder = {
    name: 'TEST',
    email: 'test@email.com',
    shopUrl: 'test-shop',
    listingUrls: 'test-listing',
    package: 'Basic',
    amount: 1000, // $10.00 in cents
    date: new Date().toISOString(),
    sessionId: 'TEST_SESSION',
  };

  try {
    await appendToGoogleSheet(testOrder);
    console.log('SUCCESS! Test row appended to your Google Sheet.');
    console.log('Open the sheet and look for the row with "TEST" in the Name column.');
    console.log('\nYour Google Sheets integration is working correctly.');
  } catch (err: unknown) {
    const error = err as Error & { code?: string; status?: number };
    console.error('FAILED to write to Google Sheet.\n');

    if (error.message?.includes('invalid_grant') || error.message?.includes('Invalid JWT')) {
      console.error('Diagnosis: The private key is invalid or malformed.');
      console.error('Fix: Re-copy the "private_key" field from your service account JSON file.');
      console.error('     Make sure the value in .env.local is wrapped in double quotes and');
      console.error('     that \\n sequences are preserved (do not expand them into real newlines).');
    } else if (error.status === 403 || error.message?.includes('403')) {
      console.error('Diagnosis: The service account does not have access to the sheet.');
      console.error('Fix: Open your Google Sheet, click Share, and share it with:');
      console.error(`     ${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL}`);
      console.error('     Set the permission to Editor.');
    } else if (error.status === 404 || error.message?.includes('404')) {
      console.error('Diagnosis: The GOOGLE_SHEET_ID does not match any sheet.');
      console.error('Fix: Check the sheet URL. The ID is the long string between /d/ and /edit.');
      console.error(`     Current value: ${process.env.GOOGLE_SHEET_ID}`);
    } else if (error.code === 'ENOTFOUND' || error.message?.includes('network')) {
      console.error('Diagnosis: Network error — could not reach Google APIs.');
      console.error('Fix: Check your internet connection and try again.');
    } else {
      console.error('Error details:', error.message ?? err);
    }

    process.exit(1);
  }
}

main();
