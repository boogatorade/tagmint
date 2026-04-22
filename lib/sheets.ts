import { google } from 'googleapis';

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
];

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error('Missing Google service account credentials in environment variables.');
  }

  const privateKey = rawKey.replace(/\\n/g, '\n');

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

export async function appendToGoogleSheet(order: OrderData): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error('Missing GOOGLE_SHEET_ID environment variable.');
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  // Check if the sheet is empty and initialize headers if needed
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1!A1:I1',
  });

  const existingRows = existing.data.values;
  if (!existingRows || existingRows.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [HEADERS],
      },
    });
  }

  const row = [
    order.date,
    order.name,
    order.email,
    order.package,
    `$${(order.amount / 100).toFixed(2)}`,
    order.shopUrl,
    order.listingUrls,
    order.sessionId,
    'Pending',
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  });
}
