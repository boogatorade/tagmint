import { getAnalyticsRows, getOrderRows } from '@/lib/sheets';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Simple password gate via query param: /admin?pw=YOUR_ADMIN_PASSWORD
async function checkAuth(): Promise<boolean> {
  const hdrs = await headers();
  const url = hdrs.get('x-url') || hdrs.get('referer') || '';
  // Auth is checked via searchParams in the page component below
  return true;
}

function formatTime(secs: number): string {
  if (!secs || secs === 0) return '—';
  if (secs < 60) return `${secs}s`;
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}m ${s}s`;
}

function timeAgo(iso: string): string {
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  } catch { return iso; }
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ pw?: string }>;
}) {
  const params = await searchParams;
  const pw = params.pw;
  const adminPw = process.env.ADMIN_PASSWORD || 'tagmint-admin';

  if (pw !== adminPw) {
    return (
      <div style={{ minHeight: '100vh', background: '#080810', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ textAlign: 'center', color: '#f0f0f5' }}>
          <p style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>🔒 Admin Access</p>
          <p style={{ color: '#6060a0', marginBottom: 20 }}>Add <code style={{ background: 'rgba(255,255,255,0.07)', padding: '2px 8px', borderRadius: 4 }}>?pw=YOUR_PASSWORD</code> to the URL</p>
          <p style={{ color: '#404060', fontSize: 13 }}>Set <code>ADMIN_PASSWORD</code> env var on Vercel to customize.</p>
        </div>
      </div>
    );
  }

  const [analyticsRaw, ordersRaw] = await Promise.all([
    getAnalyticsRows(),
    getOrderRows(),
  ]);

  // Build a set of visitor IDs that purchased
  // Orders sheet: col 7 = session ID, but we match by visitor ID where possible
  // Analytics cols: 0=Timestamp, 1=VisitorID, 2=IP, 3=Country, 4=Browser, 5=OS, 6=Device, 7=Referrer, 8=Page, 9=TimeOnSite, 10=New/Returning, 11=ScreenSize
  // Orders cols: 0=Date, 1=Name, 2=Email, 3=Package, 4=Amount, 5=ShopURL, 6=ListingURLs, 7=SessionID, 8=Status

  const purchasedSessions = new Set(ordersRaw.map((r) => r[7]).filter(Boolean));

  // Deduplicate: keep latest entry per visitorId, accumulate max time on site
  const visitorMap = new Map<string, {
    lastSeen: string; visitorId: string; ip: string; country: string;
    browser: string; os: string; device: string; referrer: string;
    pages: string[]; maxTime: number; isNew: boolean; screenSize: string;
    visits: number;
  }>();

  // Process oldest-first so latest overwrites
  for (const row of [...analyticsRaw].reverse()) {
    const [ts, vid, ip, country, browser, os, device, referrer, page, timeStr, newRet, screen] = row;
    if (!vid) continue;
    const time = parseInt(timeStr) || 0;
    const existing = visitorMap.get(vid);
    if (existing) {
      existing.visits += 1;
      existing.lastSeen = ts;
      existing.maxTime = Math.max(existing.maxTime, time);
      if (page && !existing.pages.includes(page)) existing.pages.push(page);
    } else {
      visitorMap.set(vid, {
        lastSeen: ts, visitorId: vid, ip, country, browser, os, device,
        referrer, pages: page ? [page] : [], maxTime: time,
        isNew: newRet === 'New', screenSize: screen, visits: 1,
      });
    }
  }

  const visitors = Array.from(visitorMap.values())
    .sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime());

  const totalVisitors = visitors.length;
  const newVisitors = visitors.filter((v) => v.isNew).length;
  const returningVisitors = totalVisitors - newVisitors;
  const totalPageviews = analyticsRaw.length;
  const totalOrders = ordersRaw.length;
  const totalRevenue = ordersRaw.reduce((sum, r) => {
    const amt = parseFloat((r[4] || '0').replace('$', ''));
    return sum + (isNaN(amt) ? 0 : amt);
  }, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#080810', fontFamily: "'Inter', sans-serif", color: '#f0f0f5', padding: '0 0 60px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        table { border-collapse: collapse; width: 100%; }
        th { text-align: left; font-size: 11px; font-weight: 600; color: #404060; text-transform: uppercase; letter-spacing: 0.08em; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.06); white-space: nowrap; }
        td { padding: 11px 14px; font-size: 13px; color: #9090b0; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
        tr:hover td { background: rgba(255,255,255,0.02); }
        .badge { display: inline-block; padding: 2px 8px; border-radius: 99px; font-size: 11px; font-weight: 600; }
        .badge-new { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
        .badge-ret { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.3); }
        .badge-buy { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); }
        .stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 20px 24px; }
      `}</style>

      {/* Header */}
      <div style={{ background: 'rgba(8,8,16,0.9)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 20, fontWeight: 800 }}>📊 TagMint Analytics</span>
        <span style={{ color: '#404060', fontSize: 13 }}>Live dashboard</span>
        <span style={{ marginLeft: 'auto', color: '#404060', fontSize: 12 }}>Auto-refreshes on page load</span>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px' }}>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Total Visitors', value: totalVisitors, icon: '👥' },
            { label: 'New Visitors', value: newVisitors, icon: '✨' },
            { label: 'Returning', value: returningVisitors, icon: '🔄' },
            { label: 'Total Pageviews', value: totalPageviews, icon: '📄' },
            { label: 'Total Orders', value: totalOrders, icon: '🛒' },
            { label: 'Total Revenue', value: `$${totalRevenue.toFixed(2)}`, icon: '💰' },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#f0f0f5' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#404060', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Visitors table */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', marginBottom: 32 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>👤 Visitors</span>
            <span style={{ color: '#404060', fontSize: 13 }}>{totalVisitors} unique</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Last Seen</th>
                  <th>Visitor ID</th>
                  <th>IP Address</th>
                  <th>Country</th>
                  <th>Browser</th>
                  <th>OS</th>
                  <th>Device</th>
                  <th>Referrer</th>
                  <th>Pages</th>
                  <th>Time on Site</th>
                  <th>Visits</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {visitors.length === 0 && (
                  <tr><td colSpan={12} style={{ textAlign: 'center', color: '#303050', padding: 40 }}>No visitors yet — data will appear here once people visit the site.</td></tr>
                )}
                {visitors.map((v) => {
                  const purchased = purchasedSessions.has(v.visitorId);
                  return (
                    <tr key={v.visitorId}>
                      <td style={{ color: '#e0e0f0', whiteSpace: 'nowrap' }}>{timeAgo(v.lastSeen)}</td>
                      <td style={{ fontFamily: 'monospace', fontSize: 11, color: '#505070' }}>{v.visitorId.slice(0, 16)}…</td>
                      <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{v.ip}</td>
                      <td>{v.country}</td>
                      <td>{v.browser}</td>
                      <td>{v.os}</td>
                      <td>{v.device}</td>
                      <td style={{ maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.referrer || '(direct)'}</td>
                      <td style={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.pages.join(', ')}</td>
                      <td>{formatTime(v.maxTime)}</td>
                      <td style={{ color: '#e0e0f0' }}>{v.visits}</td>
                      <td>
                        {purchased
                          ? <span className="badge badge-buy">💳 Purchased</span>
                          : v.isNew
                            ? <span className="badge badge-new">New</span>
                            : <span className="badge badge-ret">Returning</span>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders table */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>🛒 Orders</span>
            <span style={{ color: '#404060', fontSize: 13 }}>{totalOrders} total · ${totalRevenue.toFixed(2)} revenue</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Package</th>
                  <th>Amount</th>
                  <th>Shop URL</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersRaw.length === 0 && (
                  <tr><td colSpan={7} style={{ textAlign: 'center', color: '#303050', padding: 40 }}>No orders yet.</td></tr>
                )}
                {[...ordersRaw].reverse().map((r, i) => (
                  <tr key={i}>
                    <td style={{ whiteSpace: 'nowrap', color: '#e0e0f0' }}>{r[0]}</td>
                    <td style={{ color: '#e0e0f0' }}>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                    <td style={{ color: '#34d399', fontWeight: 600 }}>{r[4]}</td>
                    <td style={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r[5]}</td>
                    <td>
                      <span className="badge" style={{ background: r[8] === 'Fulfilled' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)', color: r[8] === 'Fulfilled' ? '#34d399' : '#fbbf24', border: `1px solid ${r[8] === 'Fulfilled' ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}` }}>
                        {r[8] || 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
