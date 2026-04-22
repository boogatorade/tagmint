import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "eBay SEO: How to Rank Higher and Sell More — TagMint",
  description:
    "eBay's Cassini search engine rewards completeness, relevancy, and seller performance. Here's how to optimize your listings to rank higher and convert more buyers.",
};

export default function EbaySeoGuide() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "#080810", color: "#f0f0f5" }}
    >
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
        .prose ul {
          margin-bottom: 1.2rem;
          padding-left: 1.5rem;
        }
        .prose ul li {
          color: #9090b0;
          line-height: 1.8;
          margin-bottom: 0.4rem;
          list-style-type: disc;
          font-size: 1.0125rem;
        }
        .prose strong { color: #d0d0e8; font-weight: 700; }
        .prose a { color: #10b981; text-decoration: underline; text-underline-offset: 3px; }
        .section-block {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px 28px;
          margin: 2rem 0;
        }
        .callout {
          background: linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(5,150,105,0.05) 100%);
          border: 1px solid rgba(16,185,129,0.25);
          border-radius: 16px;
          padding: 28px 32px;
          margin: 2.5rem 0;
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
          display: inline-block;
          border-radius: 9999px;
          font-weight: 700;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 25px rgba(16,185,129,0.35); }
        .key-point {
          border-left: 3px solid #10b981;
          padding-left: 16px;
          margin: 1.5rem 0;
        }
        .key-point p { margin-bottom: 0; }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo size={32} />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how-it-works" style={{ color: "#a0a0b0", fontSize: 14 }} className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/#results" style={{ color: "#a0a0b0", fontSize: 14 }} className="hover:text-white transition-colors">Results</Link>
            <Link href="/#pricing" style={{ color: "#a0a0b0", fontSize: 14 }} className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" style={{ color: "#10b981", fontSize: 14 }} className="hover:text-white transition-colors font-semibold">Blog</Link>
          </div>
          <Link href="/#pricing" className="btn-primary px-5 py-2 text-sm">
            Get Started →
          </Link>
        </div>
      </nav>

      {/* ARTICLE */}
      <article className="pt-36 pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-8">
            <span className="pill-tag text-xs font-semibold px-3 py-1 rounded-full">eBay SEO</span>
            <span className="text-xs" style={{ color: "#404060" }}>April 2025 · 6 min read</span>
          </div>

          <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", lineHeight: 1.15 }}>
            eBay SEO: How to Rank Higher and Sell More
          </h1>

          <p className="text-lg mb-12 leading-relaxed" style={{ color: "#8080a0" }}>
            eBay's search engine — called Cassini — is fundamentally different from Etsy's. Understanding how it works is the single biggest lever you have for increasing visibility without spending a dollar on promoted listings.
          </p>

          <div className="prose">

            <h2>How Cassini Ranks Listings</h2>
            <p>
              Cassini's primary goal is to show buyers the listings most likely to result in a completed transaction. It weighs three main signals: <strong>relevancy</strong> (does this listing match the query?), <strong>seller performance</strong> (does this seller reliably complete transactions?), and <strong>listing completeness</strong> (does this listing have all the data Cassini needs to categorize and match it?).
            </p>
            <p>
              Unlike Etsy, eBay doesn't use freeform tags. Instead, it relies heavily on your <strong>title</strong>, <strong>item specifics</strong>, and <strong>category</strong> to understand what you're selling. If any of those three elements are weak or missing, Cassini can't rank you effectively — no matter how good your price or photos are.
            </p>

            <h2>1. Optimize Your Title for 80 Characters</h2>
            <p>
              eBay titles are capped at 80 characters. Every character counts. Cassini reads your title as a series of keyword phrases, so word placement and word choice directly determine which searches you appear in.
            </p>
            <p>
              <strong>What to include in your eBay title:</strong>
            </p>
            <ul>
              <li>Brand name (if relevant and searchable)</li>
              <li>Model number or specific product identifier</li>
              <li>Key attributes: color, size, material, condition</li>
              <li>What it is — the category-level noun (mug, watch, sneaker, camera)</li>
              <li>Buyer-intent modifiers: "vintage," "rare," "new sealed," "lot of 3"</li>
            </ul>

            <div className="key-point">
              <p>
                <strong>Never waste title characters</strong> on words like "look," "nice," "wow," "awesome," "L@@K," or exclamation marks. Cassini ignores them. Buyers don't search for them. They're pure noise.
              </p>
            </div>

            <p>
              A good framework: <em>[Brand] [Model/Identifier] [Key Attribute] [Category Noun] [Condition/Modifier].</em> For example: "Nike Air Force 1 Low White Size 10 Men's Sneaker New In Box" hits every major search signal a buyer looking for that shoe would use.
            </p>

            <h2>2. Item Specifics Are Not Optional</h2>
            <p>
              This is where most eBay sellers lose the most rank. Item specifics are the structured data fields eBay provides for each category — things like brand, color, size, material, style, model, and country of manufacture. Many sellers fill in two or three and leave the rest blank.
            </p>
            <p>
              Cassini explicitly uses item specifics to match listings to filtered searches. When a buyer narrows results by brand, color, or size — which most serious buyers do — listings without those specifics are <strong>excluded from the results entirely</strong>. You don't rank lower; you disappear.
            </p>

            <div className="section-block">
              <h3 style={{ marginTop: 0 }}>How to fill item specifics correctly</h3>
              <p>
                Go to your listing editor and fill in every field eBay offers, even the ones that seem obvious or redundant. If eBay asks for "Country/Region of Manufacture" and you don't know, your best guess is better than leaving it blank.
              </p>
              <p>
                Use eBay's recommended values when they appear as dropdown options — these are the values that Cassini recognizes and can index correctly. Typed-in custom values are less reliably indexed.
              </p>
              <p style={{ marginBottom: 0 }}>
                For high-value items (electronics, collectibles, clothing), eBay has started requiring item specifics and will suppress listings that lack them. Getting ahead of this is important.
              </p>
            </div>

            <h2>3. Category Selection Changes Everything</h2>
            <p>
              eBay's category tree is deep. A vintage camera can live in "Cameras & Photo &gt; Film Photography &gt; Film Cameras" or it can be dumped in "Antiques &gt; Decorative Arts &gt; Other." The first category unlocks camera-specific item specifics (brand, film type, lens mount, condition) and puts you in front of buyers actively shopping for cameras. The second does neither.
            </p>
            <p>
              When in doubt about category, search for the top-selling comparable items and check what category they're listed in. If the highest-performing listings are consistently in the same subcategory, that's where you should be.
            </p>
            <p>
              eBay also allows dual-category listings for a fee. For items that genuinely straddle two audiences — a vintage camera that's also a collectible, a handmade item that's also a gift — the dual-category investment can meaningfully increase impressions.
            </p>

            <h2>4. Seller Performance Directly Affects Rank</h2>
            <p>
              Cassini is unusual among marketplace search engines in that it explicitly incorporates <strong>seller performance metrics</strong> into ranking. Your defect rate, late shipment rate, cases closed without seller resolution, and positive feedback percentage all feed into your rank.
            </p>
            <p>
              This means two identical listings from two different sellers will rank differently based purely on seller health. An eBay seller with a 98.5% positive feedback rating and zero defects will outrank a similar seller with 96% feedback and occasional late shipments — even if both listings are identically optimized.
            </p>

            <div className="key-point">
              <p>
                SEO on eBay is not just a listing-level activity. Maintaining strong seller metrics is table-stakes for ranking. Handle returns quickly, ship on time, and resolve disputes before they escalate.
              </p>
            </div>

            <h2>5. Use the Subtitle Field Strategically</h2>
            <p>
              eBay offers a subtitle field (50 characters, small fee) that appears below your title in search results. It's <strong>not indexed by Cassini for keyword purposes</strong>, but it is visible to buyers — making it a conversion tool, not an SEO tool.
            </p>
            <p>
              Use the subtitle to add information that influences click-through: "Free Shipping — Includes Original Box & Papers," "Rare 1987 Edition — Only 3 Available," "Trusted Seller — 5,000+ Positive Reviews." These add trust and urgency without cluttering your keyword-critical title.
            </p>

            <h2>6. Description Matters for Google, Not Just eBay</h2>
            <p>
              Cassini largely ignores your description for ranking purposes — but Google doesn't. eBay listings regularly appear in Google search results, and Google indexes your full description. This means a well-written, keyword-rich description can drive organic traffic from Google directly to your eBay listing.
            </p>
            <p>
              Write your description for humans first — clear, detailed, and trustworthy — but front-load the key phrases. Cover the who (buyer: gift for dad, collector item), the what (exact product with attributes), the why (why buy this: condition, rarity, bundle value), and any relevant details that reduce buyer hesitation (returns policy, combined shipping).
            </p>

            <div className="callout">
              <p style={{ marginBottom: 12, color: "#d0d0e8", fontWeight: 700, fontSize: "1.1rem" }}>
                Optimize your eBay listings without the research grind.
              </p>
              <p style={{ marginBottom: 20 }}>
                TagMint rewrites your eBay listing titles and descriptions using real search data — so Cassini knows exactly what you're selling and buyers can actually find you. Fast turnaround, starting at $7.
              </p>
              <Link href="/#pricing" className="btn-primary px-7 py-3 text-sm">
                See Pricing →
              </Link>
            </div>

          </div>

          {/* Back to blog */}
          <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <Link href="/blog" style={{ color: "#10b981", fontSize: 14 }} className="hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size={28} />
          <p className="text-xs" style={{ color: "#404060" }}>
            © 2025 TagMint &nbsp;·&nbsp; Results typically visible within 2–3 weeks
          </p>
          <div className="flex gap-6">
            <Link href="/#how-it-works" className="text-xs transition-colors" style={{ color: "#404060" }}>How It Works</Link>
            <Link href="/#results" className="text-xs transition-colors" style={{ color: "#404060" }}>Results</Link>
            <Link href="/#pricing" className="text-xs transition-colors" style={{ color: "#404060" }}>Pricing</Link>
            <Link href="/blog" className="text-xs transition-colors" style={{ color: "#404060" }}>Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
