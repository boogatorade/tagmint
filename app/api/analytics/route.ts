import { NextRequest, NextResponse } from 'next/server';
import { appendAnalyticsRow, VisitorData } from '@/lib/sheets';

export const runtime = 'nodejs';

function parseUserAgent(ua: string): { browser: string; os: string; device: string } {
  let browser = 'Unknown';
  let os = 'Unknown';
  let device = 'Desktop';

  // Browser
  if (ua.includes('Edg/')) browser = 'Edge';
  else if (ua.includes('OPR/') || ua.includes('Opera')) browser = 'Opera';
  else if (ua.includes('Chrome/') && !ua.includes('Chromium')) browser = 'Chrome';
  else if (ua.includes('Safari/') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Firefox/')) browser = 'Firefox';
  else if (ua.includes('MSIE') || ua.includes('Trident/')) browser = 'IE';

  // OS
  if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
  else if (ua.includes('Windows NT')) os = 'Windows';
  else if (ua.includes('Mac OS X')) os = 'macOS';
  else if (ua.includes('iPhone')) os = 'iOS';
  else if (ua.includes('iPad')) os = 'iPadOS';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('Linux')) os = 'Linux';

  // Device
  if (ua.includes('Mobi') || ua.includes('Android') || ua.includes('iPhone')) device = 'Mobile';
  else if (ua.includes('iPad') || ua.includes('Tablet')) device = 'Tablet';

  return { browser, os, device };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '0.0.0.0';

    const ua = req.headers.get('user-agent') || '';
    const { browser, os, device } = parseUserAgent(ua);

    // Best-effort country from Vercel's geo headers
    const country =
      req.headers.get('x-vercel-ip-country') ||
      req.headers.get('cf-ipcountry') ||
      'Unknown';

    const visitor: VisitorData = {
      timestamp: new Date().toISOString(),
      visitorId: body.visitorId || 'unknown',
      ip,
      country,
      browser,
      os,
      device,
      referrer: body.referrer || '',
      page: body.page || '/',
      timeOnSite: Number(body.timeOnSite) || 0,
      isNew: Boolean(body.isNew),
      screenSize: body.screenSize || '',
    };

    // Fire-and-forget — don't block the response
    appendAnalyticsRow(visitor).catch((e) =>
      console.error('[analytics] sheet append failed:', e)
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[analytics] error:', err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
