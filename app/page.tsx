import Link from "next/link";
import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Etsy & eBay SEO Optimization Service — Get 4× More Views in 48 Hours",
  description:
    "TagMint rewrites your Etsy and eBay listing titles, tags, and descriptions using real buyer-search data. Most sellers see 4× more views within 3 weeks. No ad spend. Starting at $7.",
  alternates: {
    canonical: "https://tagmint-app.vercel.app",
  },
  openGraph: {
    title: "Etsy & eBay SEO Optimization Service — Get 4× More Views in 48 Hours",
    description:
      "TagMint rewrites your Etsy and eBay listing titles, tags, and descriptions using real buyer-search data. Most sellers see 4× more views within 3 weeks. Starting at $7.",
    url: "https://tagmint-app.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TagMint Etsy & eBay SEO Optimization",
  description:
    "TagMint is a professional Etsy SEO optimization and eBay SEO service. We rewrite listing titles, tags, and descriptions using real search data to increase views and sales.",
  provider: {
    "@type": "Organization",
    name: "TagMint",
    url: "https://tagmint-app.vercel.app",
  },
  serviceType: "SEO Optimization",
  areaServed: "Worldwide",
  url: "https://tagmint-app.vercel.app",
  offers: [
    {
      "@type": "Offer",
      name: "Listing Tune-Up",
      description: "2 Etsy or eBay listings fully optimized — title, 13 tags, and description. Delivered within 48 hours.",
      price: "7.00",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Shop Boost",
      description: "4 listings fully optimized plus a keyword research report. Delivered within 48 hours.",
      price: "19.00",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Full Shop Overhaul",
      description: "11 listings optimized with a full shop SEO audit and competitor analysis. Delivered within 5 business days.",
      price: "49.00",
      priceCurrency: "USD",
    },
  ],
};

const IMG = {
  dashboard: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&q=80",
  product1: "https://images.unsplash.com/photo-1602874801006-e26c4c1a0f39?w=700&auto=format&q=80",
  product2: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=700&auto=format&q=80",
  product3: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&auto=format&q=80",
  seller1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&q=80",
  seller2: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&q=80",
  seller3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&q=80",
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b0f14", color: "#e7ecf1" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        :root {
          --bg: #0b0f14;
          --bg-2: #11161d;
          --panel: #141b24;
          --line: #1e2833;
          --line-2: #2a3644;
          --text: #e7ecf1;
          --text-2: #a7b3c0;
          --text-3: #6c7987;
          --accent: #3ba676;
          --accent-2: #2d8a61;
        }
        * { font-family: 'Inter', sans-serif; }
        body { background: var(--bg); }
        .ink { color: var(--text); }
        .ink-2 { color: var(--text-2); }
        .ink-3 { color: var(--text-3); }
        .accent { color: var(--accent); }
        .nav-bar {
          background: rgba(11,15,20,0.72);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--line);
        }
        .panel {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 14px;
        }
        .panel-hover { transition: border-color 0.15s ease, background 0.15s ease; }
        .panel-hover:hover { border-color: var(--line-2); }
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 44px; padding: 0 22px; border-radius: 10px;
          font-size: 14px; font-weight: 600; letter-spacing: -0.01em;
          transition: all 0.15s ease; cursor: pointer;
        }
        .btn-primary {
          background: var(--accent); color: #fff;
          border: 1px solid var(--accent-2);
        }
        .btn-primary:hover { background: var(--accent-2); }
        .btn-secondary {
          background: transparent; color: var(--text);
          border: 1px solid var(--line-2);
        }
        .btn-secondary:hover { border-color: #3d4c5e; background: #131a22; }
        .chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 6px;
          font-size: 12px; font-weight: 500;
          background: #0e141b; border: 1px solid var(--line); color: var(--text-2);
        }
        .chip-good {
          background: rgba(59,166,118,0.08);
          border: 1px solid rgba(59,166,118,0.25);
          color: #6ed1a1;
        }
        .chip-bad {
          background: rgba(180,70,70,0.08);
          border: 1px solid rgba(180,70,70,0.25);
          color: #d47a7a;
        }
        .h-display {
          font-weight: 800; letter-spacing: -0.035em; line-height: 1.05;
        }
        .h-section {
          font-weight: 700; letter-spacing: -0.025em;
        }
        .label {
          text-transform: uppercase; letter-spacing: 0.12em;
          font-size: 11px; font-weight: 600; color: var(--text-3);
        }
        .divider { height: 1px; background: var(--line); }
        .code-font { font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 13px; }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary .chev { transform: rotate(90deg); }
        .grid-lines {
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at top, rgba(0,0,0,0.6), transparent 70%);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="nav-bar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo size={28} />
          <div className="hidden md:flex items-center gap-7">
            {["How It Works", "Results", "Pricing"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm ink-2 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <Link href="/blog" className="text-sm ink-2 hover:text-white transition-colors">
              Blog
            </Link>
          </div>
          <a href="#pricing" className="btn btn-primary" style={{ height: 36, padding: "0 16px" }}>
            Get started
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-[0.35]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="chip mb-6">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              SEO optimization for Etsy &amp; eBay sellers
            </div>

            <h1 className="h-display ink mb-6" style={{ fontSize: "clamp(44px, 6vw, 72px)" }}>
              More buyers find your listings.
              <br />
              <span className="ink-3">Delivered in 48 hours.</span>
            </h1>

            <p className="text-lg ink-2 max-w-xl mb-10 leading-relaxed">
              TagMint rewrites your titles, tags, and descriptions using real search data — so shoppers
              on Etsy and eBay actually discover what you&apos;re selling.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <a href="#pricing" className="btn btn-primary">Start from $7 →</a>
              <a href="#results" className="btn btn-secondary">View results</a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[IMG.seller1, IMG.seller2, IMG.seller3].map((src, i) => (
                  <img key={i} src={src} alt=""
                       className="w-8 h-8 rounded-full object-cover"
                       style={{ border: "2px solid var(--bg)" }} />
                ))}
              </div>
              <div className="text-sm">
                <span className="ink" style={{ fontWeight: 600 }}>200+ sellers</span>
                <span className="ink-3"> · 4.9 avg rating</span>
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="mt-20 grid grid-cols-3 gap-px rounded-xl overflow-hidden"
               style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
            {[
              { num: "4×", label: "Avg. view increase in 3 weeks" },
              { num: "48h", label: "Typical turnaround" },
              { num: "200+", label: "Sellers optimized" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-6" style={{ background: "var(--bg-2)" }}>
                <div className="h-display ink" style={{ fontSize: 40 }}>{s.num}</div>
                <div className="text-sm ink-3 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="label mb-3">The problem</p>
            <h2 className="h-section ink text-3xl md:text-4xl mb-4">
              Great products stay invisible for three reasons.
            </h2>
            <p className="ink-2">
              The algorithm doesn&apos;t care how nice your photos are if the text isn&apos;t pulling weight.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "01", title: "Titles that blend in", body: "Etsy and eBay read titles like search queries. Leading with 'Handmade Soy Candle' puts you next to 200,000 identical listings. Buyer-intent keywords win the click." },
              { n: "02", title: "Tags going unused", body: "You get 13 tags. Most sellers use single words — 'candle', 'gift' — that have near-zero standalone search volume. Long-tail phrases are where real shoppers live." },
              { n: "03", title: "Front-loaded content missing", body: "Both platforms weight the first 160 characters of your description heavily. If they aren't dense with real keywords, you hand rank to competitors who noticed." },
            ].map((c) => (
              <div key={c.n} className="panel panel-hover p-7">
                <div className="code-font ink-3 mb-4">{c.n}</div>
                <h3 className="ink text-lg font-semibold mb-2" style={{ letterSpacing: "-0.01em" }}>{c.title}</h3>
                <p className="text-sm ink-2 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="label mb-3">How it works</p>
            <h2 className="h-section ink text-3xl md:text-4xl mb-4">
              Three steps. No calls. No setup.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "01", title: "Send your listing links", body: "Paste Etsy or eBay URLs at checkout. That's it — no onboarding, no spreadsheets." },
              { n: "02", title: "We research & rewrite", body: "We study what's ranking in your niche, pull real search data, and rewrite every word from scratch." },
              { n: "03", title: "Paste into your shop", body: "Delivered to your inbox, ready to copy. Most sellers see the needle move within 2–3 weeks." },
            ].map((c) => (
              <div key={c.n} className="panel p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md"
                       style={{ background: "rgba(59,166,118,0.12)", color: "var(--accent)", fontWeight: 700, fontSize: 13 }}>
                    {c.n}
                  </div>
                </div>
                <h3 className="ink text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm ink-2 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section id="results" className="py-24 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="label mb-3">Before &amp; after</p>
            <h2 className="h-section ink text-3xl md:text-4xl mb-4">
              A real lavender candle listing.
            </h2>
            <p className="ink-2">Getting 4 views a week. Here&apos;s what changed.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="panel p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="chip chip-bad">Before</span>
                <span className="code-font ink-3">4 views / week</span>
              </div>
              <p className="code-font ink mb-5" style={{ lineHeight: 1.6 }}>
                Handmade Soy Candle, Lavender Scented, Perfect Gift
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["candle", "soy", "lavender", "gift", "handmade", "scented", "wax", "home"].map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <p className="text-xs ink-3 mt-5">Generic. No buyer intent. 200,000+ competing titles.</p>
            </div>
            <div className="panel p-7" style={{ borderColor: "rgba(59,166,118,0.35)" }}>
              <div className="flex items-center justify-between mb-5">
                <span className="chip chip-good">After</span>
                <span className="code-font accent">94 views / week</span>
              </div>
              <p className="code-font ink mb-5" style={{ lineHeight: 1.6 }}>
                Lavender Soy Candle Gift for Her — Stress Relief Aromatherapy Candle, Birthday Gift Women, Clean Burn 40hr
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["lavender candle gift for her", "stress relief candle", "aromatherapy soy candle", "birthday gift women", "clean burn candle", "self care gift"].map(t => (
                  <span key={t} className="chip chip-good">{t}</span>
                ))}
              </div>
              <p className="text-xs ink-3 mt-5">Buyer-intent keywords. Indexed under 6+ queries. Page 2 in 3 weeks.</p>
            </div>
          </div>

          {/* Big stat */}
          <div className="panel p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="label mb-2">Net result</p>
              <div className="h-display ink" style={{ fontSize: 56 }}>
                4 <span className="ink-3">→</span> 94 <span className="ink-3 text-2xl font-normal">views / week</span>
              </div>
              <p className="ink-2 mt-2 text-sm max-w-md">
                No ad spend. No new photos. No price change. Text was the only variable.
              </p>
            </div>
            <div className="flex gap-2">
              {[IMG.product1, IMG.product2, IMG.product3].map((src, i) => (
                <img key={i} src={src} alt=""
                     className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover"
                     style={{ border: "1px solid var(--line)" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="label mb-3">Pricing</p>
            <h2 className="h-section ink text-3xl md:text-4xl mb-4">
              One-time or monthly — your call.
            </h2>
            <p className="ink-2">Pay once for a quick boost, or subscribe and keep your shop climbing every month.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 items-start">
            {/* Basic */}
            <div className="panel p-8 flex flex-col">
              <p className="label mb-4">Listing Tune-Up</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="h-display ink" style={{ fontSize: 48 }}>$7</span>
                <span className="text-sm ink-3">one-time</span>
              </div>
              <p className="text-sm ink-2 mb-6">Test the waters with your two best listings.</p>
              <ul className="flex-1 space-y-2.5 mb-7">
                {["2 listings fully optimized", "Keyword-researched title", "All 13 tags rewritten", "SEO-optimized description", "Delivered within 48 hours"].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm ink-2">
                    <span className="accent" style={{ fontWeight: 700 }}>✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link href="/checkout?package=basic" className="btn btn-secondary w-full">Get started</Link>
            </div>

            {/* Standard — featured */}
            <div className="panel p-8 flex flex-col relative"
                 style={{ borderColor: "var(--accent)", background: "#101a16" }}>
              <div className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-md text-xs font-semibold"
                   style={{ background: "var(--accent)", color: "#fff" }}>
                Most popular
              </div>
              <p className="label mb-4" style={{ color: "var(--accent)" }}>Shop Boost</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="h-display ink" style={{ fontSize: 48 }}>$19</span>
                <span className="text-sm ink-3">one-time</span>
              </div>
              <p className="text-sm ink-2 mb-6">Optimize your top 4 listings and get a keyword map.</p>
              <ul className="flex-1 space-y-2.5 mb-7">
                {["4 listings fully optimized", "Keyword-researched titles", "All 13 tags per listing", "SEO-optimized descriptions", "Keyword research report", "Delivered within 48 hours"].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm ink-2">
                    <span className="accent" style={{ fontWeight: 700 }}>✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link href="/checkout?package=standard" className="btn btn-primary w-full">Get started →</Link>
            </div>

            {/* Premium */}
            <div className="panel p-8 flex flex-col">
              <p className="label mb-4">Full Shop Overhaul</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="h-display ink" style={{ fontSize: 48 }}>$49</span>
                <span className="text-sm ink-3">one-time</span>
              </div>
              <p className="text-sm ink-2 mb-6">A full SEO rebuild for sellers ready to scale.</p>
              <ul className="flex-1 space-y-2.5 mb-7">
                {["11 listings fully optimized", "Keyword-researched titles", "All 13 tags per listing", "SEO-optimized descriptions", "Full shop SEO audit", "Competitor analysis", "Delivered within 5 business days"].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm ink-2">
                    <span className="accent" style={{ fontWeight: 700 }}>✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link href="/checkout?package=premium" className="btn btn-secondary w-full">Get started</Link>
            </div>
          </div>

          {/* ── SUBSCRIPTION PLANS ── */}
          <div className="mt-8 mb-4 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
            <p className="label" style={{ whiteSpace: "nowrap" }}>or subscribe &amp; save</p>
            <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Monthly */}
            <div className="panel p-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <p className="label">Pro Monthly</p>
                <span className="chip">Recurring</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="h-display ink" style={{ fontSize: 48 }}>$14.99</span>
                <span className="text-sm ink-3">/ month</span>
              </div>
              <p className="text-sm ink-2 mb-6">For sellers who want consistent growth, not one-off fixes.</p>
              <ul className="flex-1 space-y-2.5 mb-7">
                {[
                  "4 listing optimizations per month",
                  "24-hour turnaround",
                  "Monthly keyword trend report",
                  "Priority chat support",
                  "Cancel any time",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm ink-2">
                    <span className="accent" style={{ fontWeight: 700 }}>✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link href="/subscribe?plan=monthly" className="btn btn-secondary w-full">Subscribe monthly</Link>
            </div>

            {/* Annual — featured */}
            <div className="panel p-8 flex flex-col relative" style={{ borderColor: "var(--accent)", background: "#101a16" }}>
              <div className="absolute -top-2.5 right-6 px-2.5 py-0.5 rounded-md text-xs font-semibold"
                   style={{ background: "var(--accent)", color: "#fff" }}>
                Best value — 45% off
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="label" style={{ color: "var(--accent)" }}>Pro Annual</p>
                <span className="chip chip-good">Save $80/yr</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="h-display ink" style={{ fontSize: 48 }}>$99</span>
                <span className="text-sm ink-3">/ year</span>
              </div>
              <p className="text-sm mb-6" style={{ color: "#3ba676" }}>~$8.25/month · billed once a year</p>
              <ul className="flex-1 space-y-2.5 mb-7">
                {[
                  "4 listing optimizations per month",
                  "24-hour turnaround",
                  "Monthly keyword trend report",
                  "Priority chat support",
                  "Free Full Shop Overhaul on sign-up ($49 value)",
                  "Quarterly competitor analysis report",
                  "2 bonus listings every December",
                ].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm ink-2">
                    <span className="accent" style={{ fontWeight: 700 }}>✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
              <Link href="/subscribe?plan=annual" className="btn btn-primary w-full">Subscribe annually →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="label mb-3">Sellers</p>
            <h2 className="h-section ink text-3xl md:text-4xl">
              Built for shops that make real money.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { quote: "Went from 6 views a week to over 80 on my ceramics line. Paid for itself the first weekend.", name: "James R.", role: "Etsy · Ceramics", img: IMG.seller1 },
              { quote: "I wrote titles like I was describing products to a friend. TagMint showed me how buyers actually search.", name: "Dan K.", role: "Etsy · Jewelry", img: IMG.seller2 },
              { quote: "Thought it was a gimmick for $7. Three of my listings hit page 1 within ten days.", name: "Michael P.", role: "eBay · Vintage", img: IMG.seller3 },
            ].map((t, i) => (
              <div key={i} className="panel p-7">
                <p className="ink leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt="" className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="text-sm ink" style={{ fontWeight: 600 }}>{t.name}</p>
                    <p className="text-xs ink-3">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto panel p-12 md:p-14 text-center"
             style={{ background: "linear-gradient(180deg, #101a16 0%, #0b0f14 100%)", borderColor: "rgba(59,166,118,0.3)" }}>
          <h2 className="h-section ink text-3xl md:text-4xl mb-4">
            Stop guessing at your SEO.
          </h2>
          <p className="ink-2 mb-8 max-w-lg mx-auto">
            Join 200+ Etsy and eBay sellers who fixed their titles, tags, and descriptions — once.
          </p>
          <a href="#pricing" className="btn btn-primary">Fix my listings →</a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="label mb-3">FAQ</p>
            <h2 className="h-section ink text-3xl md:text-4xl">Questions, answered.</h2>
          </div>
          <div className="space-y-2">
            {[
              { q: "What exactly do I get after purchasing?", a: "A ready-to-paste document with your optimized listing title, all 13 tags, and a fully rewritten description. Just copy it into your Etsy listing editor and publish." },
              { q: "How long does it take?", a: "Listing Tune-Up and Shop Boost: 48 hours. Full Shop Overhaul: 5 business days. You'll receive an email confirmation with your expected delivery time after purchase." },
              { q: "How do I use the new listing content?", a: "Log into Etsy → Shop Manager → Listings → open your listing → paste in the new title, tags, and description → Save. Etsy re-indexes within 24–48 hours." },
              { q: "How soon will I see results?", a: "Most sellers see measurable view increases within 2–3 weeks. Results vary by niche and competition, but our optimizations are based on real search data." },
              { q: "Does this work for eBay too?", a: "Yes — we optimize for Cassini (eBay's search) and Etsy's algorithm differently. Titles, item specifics, and description keywords are tuned per platform." },
            ].map((item, i) => (
              <details key={i} className="panel overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none ink"
                         style={{ fontWeight: 500 }}>
                  <span>{item.q}</span>
                  <span className="chev ml-4 text-xl transition-transform ink-3">›</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed ink-2"
                     style={{ borderTop: "1px solid var(--line)", paddingTop: "1rem" }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ChatWidget />

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size={24} />
          <p className="text-xs ink-3">
            © 2025 TagMint · Etsy &amp; eBay SEO optimization
          </p>
          <div className="flex gap-6">
            {["How It Works", "Results", "Pricing"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="text-xs ink-3 hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
