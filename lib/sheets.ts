import { google } from 'googleapis';

export interface VisitorData {
  timestamp: string;
  visitorId: string;
  ip: string;
  browser: string;
  os: string;
  device: string;
  referrer: string;
  page: string;
  timeOnSite: number; // seconds
  isNew: boolean;
  screenSize: string;
  country: string;
}

const ANALYTICS_HEADERS = [
  'Timestamp',
  'Visitor ID',
  'IP Address',
  'Country',
  'Browser',
  'OS',
  'Device',
  'Referrer',
  'Page',
  'Time on Site (s)',
  'New / Returning',
  'Screen Size',
];

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

export async function appendAnalyticsRow(visitor: VisitorData): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return;

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  // Ensure "Analytics" sheet exists
  const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
  const sheetNames = meta.data.sheets?.map((s) => s.properties?.title) ?? [];

  if (!sheetNames.includes('Analytics')) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: 'Analytics' } } }],
      },
    });
    // Write headers
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Analytics!A1',
      valueInputOption: 'RAW',
      requestBody: { values: [ANALYTICS_HEADERS] },
    });
  }

  const row = [
    visitor.timestamp,
    visitor.visitorId,
    visitor.ip,
    visitor.country,
    visitor.browser,
    visitor.os,
    visitor.device,
    visitor.referrer || '(direct)',
    visitor.page,
    visitor.timeOnSite,
    visitor.isNew ? 'New' : 'Returning',
    visitor.screenSize,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Analytics!A1',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [row] },
  });
}

export async function getAnalyticsRows(): Promise<string[][]> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return [];

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Analytics!A2:L5000',
    });
    return (res.data.values as string[][]) ?? [];
  } catch {
    return [];
  }
}

export async function getOrderRows(): Promise<string[][]> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return [];

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A2:I5000',
    });
    return (res.data.values as string[][]) ?? [];
  } catch {
    return [];
  }
}
