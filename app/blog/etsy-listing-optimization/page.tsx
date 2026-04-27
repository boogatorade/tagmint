import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Etsy Listing Optimization: The Complete Checklist for 2025",
  description:
    "A step-by-step Etsy listing optimization checklist covering titles, tags, photos, descriptions, pricing, and attributes — everything you need to rank higher and sell more.",
};

export default function EtsyListingOptimization() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#080810", color: "#f0f0f5" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .text-gradient {
          background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-blur {
          background: rgba(8,8,16,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .prose h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #f0f0f5;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .prose h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #e0e0f0;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .prose p {
          color: #9090b0;
          line-height: 1.85;
          margin-bottom: 1.2rem;
          font-size: 1.0125rem;
        }
        .prose ul { color: #9090b0; margin-bottom: 1.2rem; padding-left: 1.5rem; }
        .prose ul li { margin-bottom: 0.5rem; line-height: 1.7; }
        .prose strong { color: #e0e0f0; }
        .prose a { color: #10b981; text-decoration: underline; }
        .callout {
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
        }
        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(16,185,129,0.15);
          border: 1px solid rgba(16,185,129,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          font-size: 11px;
          color: #10b981;
        }
        .pill-tag {
          background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.08));
          border: 1px solid rgba(16,185,129,0.3);
          color: #34d399;
        }
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          transition: all 0.2s ease;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .score-bar {
          height: 6px;
          border-radius: 3px;
          background: rgba(255,255,255,0.06);
          margin-top: 0.4rem;
          overflow: hidden;
        }
        .score-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #10b981, #34d399); }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/"><Logo size={32} /></Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" style={{ color: "#a0a0b0", fontSize: 14 }} className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/#pricing" style={{ color: "#a0a0b0", fontSize: 14 }} className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" style={{ color: "#10b981", fontSize: 14 }} className="font-semibold">Blog</Link>
          </div>
          <Link href="/#pricing" className="btn-primary px-5 py-2 rounded-full text-sm font-semibold">Get Started →</Link>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="max-w-2xl mx-auto px-6 pt-36 pb-32">
        <div className="flex items-center gap-3 mb-8">
          <span className="pill-tag text-xs font-semibold px-3 py-1 rounded-full">Etsy SEO</span>
          <span className="text-xs" style={{ color: "#404060" }}>April 2025 · 10 min read</span>
        </div>

        <h1 className="font-black mb-6" style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, color: "#f0f0f5" }}>
          Etsy Listing Optimization: The Complete Checklist for 2025
        </h1>
        <p style={{ color: "#7070a0", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Go through every element of your listing with this checklist and you'll have a better-optimized page than 90% of sellers on the platform.
        </p>

        <div className="prose">
          <p>
            Etsy listing optimization isn't one thing — it's a combination of a dozen signals that all feed into where and how often your listing appears in search. Most sellers fix one or two and wonder why results are limited. A fully optimized listing hits all of them.
          </p>
          <p>
            Go through this checklist for your worst-performing listings first. Those are the ones with the most upside.
          </p>

          <h2>The Etsy Listing Optimization Checklist</h2>

          <h3>✦ Title</h3>
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            {[
              "Uses all (or nearly all) 140 characters",
              "Starts with the most important buyer search phrase",
              "Includes at least 2–3 distinct keyword variations",
              "Reads naturally enough that buyers understand it at a glance",
              "Includes occasion or recipient where relevant (e.g. 'gift for mom')",
              "Does NOT use all caps or keyword stuffing that hurts readability",
            ].map((item, i) => (
              <div key={i} className="checklist-item">
                <div className="check-icon">✓</div>
                <p style={{ margin: 0, color: "#9090b0", fontSize: "0.95rem" }}>{item}</p>
              </div>
            ))}
          </div>

          <h3>✦ Tags</h3>
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            {[
              "All 13 tag slots are filled",
              "Tags are multi-word phrases (not single words)",
              "No tags repeat keywords already in the title",
              "Includes occasion/recipient tags (e.g. 'birthday gift women')",
              "Includes style/aesthetic tags (e.g. 'boho home decor')",
              "Includes use-case or problem tags (e.g. 'anxiety relief gift')",
              "No tags are longer than 20 characters",
            ].map((item, i) => (
              <div key={i} className="checklist-item">
                <div className="check-icon">✓</div>
                <p style={{ margin: 0, color: "#9090b0", fontSize: "0.95rem" }}>{item}</p>
              </div>
            ))}
          </div>

          <h3>✦ Photos</h3>
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            {[
              "First photo shows product clearly with no clutter",
              "At least one lifestyle photo showing product in use/context",
              "All 10 photo slots are used",
              "Photos are high resolution (at least 2000px on the short side)",
              "Includes a scale reference photo so buyers understand size",
              "Includes a photo showing packaging (buyers care about gifts)",
              "All photos use natural or consistent lighting",
            ].map((item, i) => (
              <div key={i} className="checklist-item">
                <div className="check-icon">✓</div>
                <p style={{ margin: 0, color: "#9090b0", fontSize: "0.95rem" }}>{item}</p>
              </div>
            ))}
          </div>

          <h3>✦ Description</h3>
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            {[
              "First 160 characters describe the product clearly (shown in search previews)",
              "Leads with the benefit, not the specification",
              "Includes dimensions, materials, and care instructions",
              "Mentions shipping/processing time",
              "Addresses common questions before they're asked",
              "Includes a call to action (message me for custom orders, etc.)",
              "Naturally includes 2–3 keyword phrases without stuffing",
            ].map((item, i) => (
              <div key={i} className="checklist-item">
                <div className="check-icon">✓</div>
                <p style={{ margin: 0, color: "#9090b0", fontSize: "0.95rem" }}>{item}</p>
              </div>
            ))}
          </div>

          <h3>✦ Attributes & Categories</h3>
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            {[
              "Listed in the most specific subcategory available",
              "All relevant attributes are filled in (color, material, occasion, recipient, style)",
              "Shipping profile is accurate and up to date",
              "Free shipping is enabled (or price includes shipping)",
              "Processing time is set conservatively (better to ship early than late)",
            ].map((item, i) => (
              <div key={i} className="checklist-item">
                <div className="check-icon">✓</div>
                <p style={{ margin: 0, color: "#9090b0", fontSize: "0.95rem" }}>{item}</p>
              </div>
            ))}
          </div>

          <h2>How to Prioritize Which Listings to Optimize First</h2>
          <p>
            If you have many listings, use this order:
          </p>
          <ul>
            <li><strong>Listings with views but no sales</strong> — these have traffic but poor conversion. Focus on photos, description, and price.</li>
            <li><strong>Listings with no views</strong> — these have a discoverability problem. Focus on title, tags, and category.</li>
            <li><strong>Your best sellers</strong> — these already work. Small SEO improvements here have the highest ROI because you're amplifying what's already proven.</li>
          </ul>

          <h2>How to Track Whether Your Optimization Is Working</h2>
          <p>
            Go to your Etsy Shop Manager → Stats → Listings. For each listing you've optimized, track:
          </p>
          <ul>
            <li><strong>Impressions:</strong> How many times your listing appeared in search. An increase means your tags/title are working.</li>
            <li><strong>Visits:</strong> How many people clicked through to your listing. A high impression-to-visit ratio means your first photo and title are compelling.</li>
            <li><strong>Conversion rate:</strong> Orders ÷ visits. Low conversion usually points to pricing, photos, or description issues.</li>
          </ul>
          <p>
            Wait at least 2–4 weeks after any changes before drawing conclusions. Etsy's algorithm is slow to re-index and even slower to fully reflect changes in your ranking.
          </p>

          <h2>The Biggest Mistake Sellers Make</h2>
          <p>
            Optimizing once and never updating. Buyer search behavior changes seasonally. What worked in January may underperform in October. Top sellers revisit and refresh their highest-traffic listings every few months — updating tags for seasonal occasions, refreshing photos, and tweaking titles based on what search terms are driving traffic.
          </p>
          <p>
            Etsy's algorithm also slightly favors recently updated listings, so even a small edit to a title or description can give a listing a brief visibility boost.
          </p>

          <div className="callout" style={{ marginTop: "3rem" }}>
            <p style={{ margin: 0, color: "#a0f0c0", fontWeight: 700, fontSize: "1.05rem" }}>
              Get your listings fully optimized in 48 hours
            </p>
            <p style={{ margin: "0.75rem 0 0", color: "#9090b0" }}>
              Going through every item on this checklist for every listing takes hours. TagMint does the research and rewriting for you — title, all 13 tags, and description — using real buyer search data for your specific niche. Starts at $7 per listing.
            </p>
            <Link href="/#pricing" className="btn-primary inline-block mt-4 px-6 py-2.5 rounded-full text-sm font-semibold">
              Optimize My Listings →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/blog" className="text-sm font-semibold" style={{ color: "#10b981" }}>← Back to Blog</Link>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size={28} />
          <p className="text-xs" style={{ color: "#404060" }}>© 2025 TagMint · Results typically visible within 2–3 weeks</p>
          <div className="flex gap-6">
            <Link href="/#how-it-works" className="text-xs" style={{ color: "#404060" }}>How It Works</Link>
            <Link href="/#pricing" className="text-xs" style={{ color: "#404060" }}>Pricing</Link>
            <Link href="/blog" className="text-xs" style={{ color: "#404060" }}>Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
