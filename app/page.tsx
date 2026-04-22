import Link from "next/link";
import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Etsy & eBay SEO Optimization Service — Get 4× More Views in 48 Hours",
  description:
    "TagMint rewrites your Etsy and eBay listing titles, tags, and descriptions using real buyer-search data. Most sellers see 4× more views within 3 weeks. No ad spend. Starting at $7.",
  alternates: {
    canonical: "https://tagmint-app.netlify.app",
  },
  openGraph: {
    title: "Etsy & eBay SEO Optimization Service — Get 4× More Views in 48 Hours",
    description:
      "TagMint rewrites your Etsy and eBay listing titles, tags, and descriptions using real buyer-search data. Most sellers see 4× more views within 3 weeks. Starting at $7.",
    url: "https://tagmint-app.netlify.app",
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
    url: "https://tagmint-app.netlify.app",
  },
  serviceType: "SEO Optimization",
  areaServed: "Worldwide",
  url: "https://tagmint-app.netlify.app",
  offers: [
    {
      "@type": "Offer",
      name: "Listing Tune-Up",
      description: "1 Etsy or eBay listing fully optimized — title, 13 tags, and description. Delivered within 48 hours.",
      price: "7.00",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Shop Boost",
      description: "3 listings fully optimized plus a keyword research report. Delivered within 48 hours.",
      price: "19.00",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Full Shop Overhaul",
      description: "10 listings optimized with a full shop SEO audit and competitor analysis. Delivered within 5 business days.",
      price: "49.00",
      priceCurrency: "USD",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#080810", color: "#f0f0f5" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .glow-green { box-shadow: 0 0 40px rgba(16,185,129,0.15); }
        .glow-green-sm { box-shadow: 0 0 20px rgba(16,185,129,0.1); }
        .text-gradient {
          background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .card-glass:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(16,185,129,0.2);
          transform: translateY(-2px);
          transition: all 0.2s ease;
        }
        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .nav-blur {
          background: rgba(8,8,16,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .pill-badge {
          background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.08));
          border: 1px solid rgba(16,185,129,0.3);
        }
        .price-featured {
          background: linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%);
          border: 1px solid rgba(16,185,129,0.4);
        }
        .stat-card {
          background: rgba(16,185,129,0.05);
          border: 1px solid rgba(16,185,129,0.15);
        }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span.arrow { transform: rotate(180deg); }
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          transition: all 0.2s ease;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 25px rgba(16,185,129,0.35); }
        .btn-outline {
          border: 1px solid rgba(255,255,255,0.12);
          color: #f0f0f5;
          background: rgba(255,255,255,0.03);
          transition: all 0.2s ease;
        }
        .btn-outline:hover { border-color: rgba(16,185,129,0.4); background: rgba(16,185,129,0.05); }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent); }
        .section-alt { background: rgba(255,255,255,0.015); }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size={32} />
          <div className="hidden md:flex items-center gap-8">
            {["How It Works", "Results", "Pricing"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                style={{ color: "#a0a0b0", fontSize: 14 }}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <Link
              href="/blog"
              style={{ color: "#a0a0b0", fontSize: 14 }}
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
          <a href="#pricing" className="btn-primary px-5 py-2 rounded-full text-sm font-semibold">
            Get Started →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="hero-glow" />
        {/* subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(16,185,129,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="pill-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8" style={{ color: "#34d399" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            AI-Powered Etsy &amp; eBay SEO — Results in 48 Hours
          </div>

          <h1 className="font-black leading-none tracking-tight mb-6" style={{ fontSize: "clamp(42px, 7vw, 72px)", lineHeight: 1.05 }}>
            Your Etsy &amp; eBay Listings
            <br />
            <span className="text-gradient">Are Invisible.</span>
            <br />
            <span style={{ color: "#f0f0f5" }}>Let&apos;s Fix That.</span>
          </h1>

          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "#8080a0" }}>
            We rewrite your titles, tags, and descriptions using real search data —
            so buyers on Etsy and eBay actually find you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <a href="#pricing" className="btn-primary px-8 py-4 rounded-full font-semibold text-base">
              See Pricing →
            </a>
            <a href="#results" className="btn-outline px-8 py-4 rounded-full font-semibold text-base">
              See Before &amp; After
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { num: "4×", label: "Avg. view increase" },
              { num: "48h", label: "Delivery time" },
              { num: "13", label: "Tags rewritten" },
            ].map((s) => (
              <div key={s.label} className="stat-card rounded-2xl py-5 px-4">
                <div className="text-3xl font-black mb-1 text-gradient">{s.num}</div>
                <div className="text-xs" style={{ color: "#6060a0" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROBLEM ── */}
      <section className="section-alt py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10b981" }}>The Problem</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why Your Shop Isn&apos;t Growing</h2>
            <p style={{ color: "#6060a0" }}>Three silent killers are keeping your Etsy &amp; eBay listings buried.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "📛", title: "Bad Titles", body: "Etsy and eBay's algorithms read your title like a search query. Leading with 'Handmade Soy Candle' instead of your strongest buyer-intent keyword means you're invisible to people who'd actually buy." },
              { icon: "🏷️", title: "Wrong Tags", body: "Etsy gives you 13 tags and most sellers waste them on single-word generics like 'candle' or 'gift'. eBay buries listings that skip item specifics. Either way, weak tags mean invisible listings." },
              { icon: "📝", title: "Weak Descriptions", body: "Both Etsy and eBay index the first 160 characters of your description. If those characters don't contain primary keywords, you're handing rank to competitors who do." },
            ].map((c) => (
              <div key={c.title} className="card-glass rounded-2xl p-8" style={{ transition: "all 0.2s" }}>
                <div className="text-3xl mb-5">{c.icon}</div>
                <h3 className="text-lg font-bold mb-3">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6060a0" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10b981" }}>Process</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Simple. Fast. Hands-Off.</h2>
          </div>
          <div className="relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(16,185,129,0.3), transparent)", marginLeft: "calc(16.66% + 24px)", marginRight: "calc(16.66% + 24px)" }} />
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { step: "01", title: "Send Your Listing URLs", body: "Paste your Etsy listing links at checkout. No spreadsheets, no calls, no onboarding." },
                { step: "02", title: "We Research & Rewrite", body: "We dig into Etsy search data, competitor listings, and buyer-intent keywords — then rewrite everything from scratch." },
                { step: "03", title: "Paste In & Watch Views Climb", body: "Ready-to-paste text delivered to your inbox. Copy into Etsy, publish, done. Most sellers see results in 2–3 weeks." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm mx-auto mb-5 relative"
                    style={{ background: "linear-gradient(135deg,#10b981,#059669)", color: "#fff", boxShadow: "0 0 20px rgba(16,185,129,0.4)" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6060a0" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── RESULTS ── */}
      <section id="results" className="section-alt py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10b981" }}>Results</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Real Listings. Real Numbers.</h2>
            <p style={{ color: "#6060a0" }}>A soy candle Etsy listing that was getting 4 views a week.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="rounded-2xl p-8" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div className="flex items-center gap-2 mb-5">
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(239,68,68,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#f87171" }}>✗</div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f87171" }}>Before — Title</span>
              </div>
              <p className="text-base font-medium mb-4" style={{ color: "#d0a0a0" }}>
                &ldquo;Handmade Soy Candle, Lavender Scented, Perfect Gift&rdquo;
              </p>
              <p className="text-xs" style={{ color: "#804040" }}>Generic. No buyer intent. Competing against 200,000+ identical titles.</p>
            </div>
            <div className="rounded-2xl p-8 glow-green-sm" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.25)" }}>
              <div className="flex items-center gap-2 mb-5">
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#10b981" }}>✓</div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#10b981" }}>After — Title</span>
              </div>
              <p className="text-base font-medium mb-4" style={{ color: "#a0f0d0" }}>
                &ldquo;Lavender Soy Candle Gift for Her — Stress Relief Aromatherapy Candle, Birthday Gift Women, Clean Burn 40hr&rdquo;
              </p>
              <p className="text-xs" style={{ color: "#10b98199" }}>Leads with high-volume keyword. Targets gifting intent. Indexed under 6+ search queries.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="rounded-2xl p-8" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div className="flex items-center gap-2 mb-5">
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(239,68,68,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#f87171" }}>✗</div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f87171" }}>Before — Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["candle", "soy", "lavender", "gift", "handmade", "scented", "wax", "home", "decor", "relax", "natural", "artisan", "shop"].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ background: "rgba(239,68,68,0.08)", color: "#f87171", border: "1px solid rgba(239,68,68,0.15)" }}>{t}</span>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "#804040" }}>Single-word. Zero search volume. Maximum competition.</p>
            </div>
            <div className="rounded-2xl p-8 glow-green-sm" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.25)" }}>
              <div className="flex items-center gap-2 mb-5">
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#10b981" }}>✓</div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#10b981" }}>After — Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["lavender candle gift for her", "stress relief candle", "aromatherapy soy candle", "birthday gift women", "clean burn candle", "anxiety relief gift", "self care gift box", "mothers day candle", "soy wax candle", "home fragrance gift", "relaxation gift set", "lavender essential oil", "cozy home gift"].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ background: "rgba(16,185,129,0.1)", color: "#34d399", border: "1px solid rgba(16,185,129,0.2)" }}>{t}</span>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "#10b98199" }}>Long-tail buyer-intent phrases. Each tag targets a distinct shopper persona.</p>
            </div>
          </div>

          {/* Result callout */}
          <div className="rounded-2xl p-8 text-center glow-green relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.06) 100%)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(16,185,129,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
            <div className="relative">
              <div className="text-5xl font-black mb-2 text-gradient">4 → 94 views/week</div>
              <p className="text-sm" style={{ color: "#8080a0" }}>
                This listing jumped from page 18 to page 2 within 3 weeks. No ad spend. No photo changes. No price changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10b981" }}>Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Pay Once. Rank Forever.</h2>
            <p style={{ color: "#6060a0" }}>No subscriptions. No retainers. Results delivered to your inbox.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Basic */}
            <div className="card-glass rounded-2xl p-8 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#10b981" }}>Listing Tune-Up</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$7</span>
                <span className="text-sm mb-2" style={{ color: "#6060a0" }}>one time</span>
              </div>
              <p className="text-sm mb-8" style={{ color: "#6060a0" }}>Perfect for testing with your single best-selling listing.</p>
              <ul className="flex-1 space-y-3 mb-8">
                {["1 listing fully optimized", "Keyword-researched title", "All 13 tags rewritten", "SEO-optimized description", "Delivered within 48 hours"].map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#c0c0d0" }}>
                    <span style={{ color: "#10b981", fontSize: 16 }}>✓</span>{i}
                  </li>
                ))}
              </ul>
              <Link href="/checkout?package=basic" className="btn-outline block text-center py-3 rounded-full font-semibold text-sm">
                Get Started
              </Link>
            </div>

            {/* Standard — featured */}
            <div className="price-featured rounded-2xl p-8 flex flex-col relative glow-green" style={{ marginTop: -12 }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg,#10b981,#059669)", color: "#fff" }}>
                ✦ Most Popular
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#10b981" }}>Shop Boost</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$19</span>
                <span className="text-sm mb-2" style={{ color: "#6060a0" }}>one time</span>
              </div>
              <p className="text-sm mb-8" style={{ color: "#6060a0" }}>Optimize your top 3 listings and get a keyword strategy.</p>
              <ul className="flex-1 space-y-3 mb-8">
                {["3 listings fully optimized", "Keyword-researched titles", "All 13 tags per listing", "SEO-optimized descriptions", "Keyword research report", "Delivered within 48 hours"].map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#c0c0d0" }}>
                    <span style={{ color: "#10b981", fontSize: 16 }}>✓</span>{i}
                  </li>
                ))}
              </ul>
              <Link href="/checkout?package=standard" className="btn-primary block text-center py-3 rounded-full font-semibold text-sm">
                Get Started →
              </Link>
            </div>

            {/* Premium */}
            <div className="card-glass rounded-2xl p-8 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#10b981" }}>Full Shop Overhaul</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-black">$49</span>
                <span className="text-sm mb-2" style={{ color: "#6060a0" }}>one time</span>
              </div>
              <p className="text-sm mb-8" style={{ color: "#6060a0" }}>A complete SEO transformation for serious sellers ready to scale.</p>
              <ul className="flex-1 space-y-3 mb-8">
                {["10 listings fully optimized", "Keyword-researched titles", "All 13 tags per listing", "SEO-optimized descriptions", "Full shop SEO audit", "Competitor analysis", "Delivered within 5 business days"].map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#c0c0d0" }}>
                    <span style={{ color: "#10b981", fontSize: 16 }}>✓</span>{i}
                  </li>
                ))}
              </ul>
              <Link href="/checkout?package=premium" className="btn-outline block text-center py-3 rounded-full font-semibold text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl p-14 text-center relative overflow-hidden glow-green" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.14) 0%, rgba(5,150,105,0.07) 100%)", border: "1px solid rgba(16,185,129,0.25)" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(16,185,129,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Stop Being Invisible on Etsy.</h2>
            <p className="mb-8" style={{ color: "#8080a0" }}>Join sellers who stopped guessing and started ranking.</p>
            <a href="#pricing" className="btn-primary inline-block px-10 py-4 rounded-full font-bold text-base">
              Fix My Listings Today →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#10b981" }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black">Questions? Answered.</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "What exactly do I get after purchasing?", a: "A ready-to-paste document with your optimized listing title, all 13 tags, and a fully rewritten description. Just copy it into your Etsy listing editor and publish." },
              { q: "How long does it take?", a: "Listing Tune-Up and Shop Boost orders: 48 hours. Full Shop Overhaul: 5 business days. You'll receive an email confirmation with your expected delivery time after purchase." },
              { q: "How do I use the new listing content?", a: "Log into Etsy → Shop Manager → Listings → open your listing → paste in the new title, tags, and description → Save. Etsy re-indexes within 24–48 hours." },
              { q: "How soon will I see results?", a: "Most sellers see measurable view increases within 2–3 weeks. Results vary by niche and competition, but our optimizations are based on real search data — not guesswork." },
            ].map((item, i) => (
              <details key={i} className="card-glass rounded-2xl overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm list-none select-none">
                  <span>{item.q}</span>
                  <span className="arrow ml-4 flex-shrink-0 text-lg transition-transform" style={{ color: "#10b981", display: "inline-block" }}>›</span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6060a0" }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ChatWidget />

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size={28} />
          <p className="text-xs" style={{ color: "#404060" }}>
            © 2025 TagMint &nbsp;·&nbsp; Results typically visible within 2–3 weeks
          </p>
          <div className="flex gap-6">
            {["How It Works", "Results", "Pricing"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="text-xs transition-colors" style={{ color: "#404060" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
