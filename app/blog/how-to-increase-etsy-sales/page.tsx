import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "How to Increase Etsy Sales in 2025 — 10 Strategies That Work",
  description:
    "Struggling to get Etsy sales? These 10 proven strategies — covering SEO, titles, tags, photos, and pricing — can dramatically increase your views and conversions.",
};

export default function HowToIncreaseEtsySales() {
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
        .prose ul {
          color: #9090b0;
          margin-bottom: 1.2rem;
          padding-left: 1.5rem;
        }
        .prose ul li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        .prose strong { color: #e0e0f0; }
        .prose a { color: #10b981; text-decoration: underline; }
        .callout {
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
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
        {/* Meta */}
        <div className="flex items-center gap-3 mb-8">
          <span className="pill-tag text-xs font-semibold px-3 py-1 rounded-full">Etsy SEO</span>
          <span className="text-xs" style={{ color: "#404060" }}>April 2025 · 9 min read</span>
        </div>

        <h1 className="font-black mb-6" style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, color: "#f0f0f5" }}>
          How to Increase Etsy Sales in 2025: 10 Strategies That Actually Work
        </h1>
        <p style={{ color: "#7070a0", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Most Etsy sellers with low sales aren't making bad products — they're invisible. Here's how to fix that.
        </p>

        <div className="prose">
          <p>
            Etsy has over 90 million active buyers and 7 million sellers. The gap between shops making $500/month and those making $50,000/month usually isn't product quality — it's discoverability. If buyers can't find your listing, they can't buy from you.
          </p>
          <p>
            These 10 strategies are ranked by impact. Start from the top.
          </p>

          <h2>1. Rewrite Your Titles Using Buyer Search Terms</h2>
          <p>
            Your Etsy title is the single most important ranking factor. Most sellers write titles that describe their product to themselves: <strong>"Hand-poured lavender soy candle with cotton wick."</strong>
          </p>
          <p>
            But buyers search differently. They type: <strong>"lavender candle gift for mom"</strong> or <strong>"stress relief candle birthday gift women."</strong>
          </p>
          <p>
            Your title needs to match buyer intent, not product specs. Use all 140 characters. Front-load the most important keywords. Think about what someone types when they need your product — not what you'd call it.
          </p>

          <div className="callout">
            <p style={{ margin: 0, color: "#a0f0c0", fontWeight: 600 }}>
              💡 Before vs After
            </p>
            <p style={{ margin: "0.5rem 0 0", color: "#9090b0" }}>
              <strong>Before:</strong> "Lavender Soy Candle Handmade"<br/>
              <strong>After:</strong> "Lavender Candle Gift for Mom Birthday Gift for Her Stress Relief Soy Candle Anxiety Gift Best Friend Gift"
            </p>
          </div>

          <h2>2. Use All 13 Tags — and Use Them Strategically</h2>
          <p>
            Etsy gives you 13 tag slots. Most sellers use 6–8. That's leaving free ranking opportunities on the table.
          </p>
          <p>
            Each tag can be up to 20 characters and should be a phrase a buyer would actually search. Think multi-word phrases over single words — "candle gift women" outperforms "candle" every time because it captures intent.
          </p>
          <ul>
            <li>Don't repeat words already in your title (Etsy already indexes those)</li>
            <li>Use buyer occasion phrases: "birthday gift her", "wedding favor", "mothers day gift"</li>
            <li>Include style and material tags: "minimalist home decor", "natural soy wax"</li>
            <li>Think about who's buying: "gift for coworker", "new home gift", "self care gift"</li>
          </ul>

          <h2>3. Optimize Your First Photo for Click-Through Rate</h2>
          <p>
            Search ranking gets buyers to your listing. Your first photo convinces them to click. Etsy's algorithm tracks click-through rate — listings that get more clicks rank higher over time.
          </p>
          <p>
            The best-performing Etsy photos show the product in use or in context. A candle glowing on a cozy nightstand outperforms a candle on a white background. A piece of jewelry being worn by a real person outperforms a flat lay. Show the lifestyle, not just the item.
          </p>

          <h2>4. Write a Description That Sells and Ranks</h2>
          <p>
            Etsy descriptions don't directly impact search ranking — but they do impact conversion. A buyer who lands on your listing and reads a compelling description is more likely to buy. More purchases improve your listing's conversion rate, which does improve ranking.
          </p>
          <p>
            Lead with the benefit ("This candle will fill your home with calm for up to 60 hours"), not the spec. Answer the questions buyers have before they ask: dimensions, materials, shipping time, gift-wrapping options.
          </p>

          <h2>5. Price Competitively — But Not at the Bottom</h2>
          <p>
            Pricing too low signals low quality and attracts bargain hunters who leave neutral reviews. Pricing too high without established social proof loses buyers to competitors.
          </p>
          <p>
            Search Etsy for your product category. Find the listings with the most reviews in your segment. Price within 20% of those shops until you build review volume, then adjust upward as your reputation grows.
          </p>

          <h2>6. Get Your First 10–20 Reviews</h2>
          <p>
            Reviews are Etsy's strongest trust signal. A listing with 50 five-star reviews will outsell an identical listing with 3 reviews by a wide margin, at almost any price point.
          </p>
          <p>
            Include a handwritten note asking for a review. Follow up with a short thank-you message. Make it easy — some buyers just need a nudge. Those first 10–20 reviews compound: they push you higher in search, which gets you more buyers, which gets you more reviews.
          </p>

          <h2>7. Add Listings Consistently</h2>
          <p>
            Etsy's algorithm rewards active shops. New listings get a temporary visibility boost when they go live. Shops that add listings regularly are seen as more engaged and tend to rank better overall.
          </p>
          <p>
            Aim for 2–4 new listings per week when starting out. Even variations of existing products count — different sizes, colors, or gift sets are legitimate new listings that can each rank for different keywords.
          </p>

          <h2>8. Use Free Shipping (Or Build It Into Your Price)</h2>
          <p>
            Etsy gives ranking preference to listings with free shipping to US buyers. Buyers also convert at significantly higher rates when they don't see a shipping charge added at checkout.
          </p>
          <p>
            Calculate your average shipping cost, add it to your product price, then offer free shipping. Most buyers prefer a $18 item with free shipping over a $14 item with $4 shipping — even though they're identical.
          </p>

          <h2>9. Fill Out Every Attribute Field</h2>
          <p>
            When you create or edit a listing, Etsy shows you attribute fields: occasion, color, material, style, recipient. Many sellers skip these. Don't.
          </p>
          <p>
            Shoppers often use Etsy's filter sidebar to narrow results. If your listing doesn't have its attributes filled in, it won't appear in filtered searches — even if it would otherwise rank for the keyword.
          </p>

          <h2>10. Run a Strategic Sale or Discount</h2>
          <p>
            Etsy promotes sale listings more aggressively in search results — listings with a strikethrough price get a badge and tend to attract more clicks. Running a permanent 20–25% sale (by starting your prices 25% higher) is a commonly used strategy among top sellers.
          </p>
          <p>
            It also helps with Etsy's offsite ads — if Etsy is promoting your listings on Google or Facebook, a sale badge dramatically improves click-through rate.
          </p>

          <div className="callout" style={{ marginTop: "3rem" }}>
            <p style={{ margin: 0, color: "#a0f0c0", fontWeight: 700, fontSize: "1.05rem" }}>
              The fastest way to do all of this at once
            </p>
            <p style={{ margin: "0.75rem 0 0", color: "#9090b0" }}>
              Rewriting your titles, tags, and descriptions properly takes hours of research per listing. TagMint does it for you — paste your listing URL and get back fully optimized titles, all 13 tags, and a new description based on real search data. Starts at $7.
            </p>
            <Link href="/#pricing" className="btn-primary inline-block mt-4 px-6 py-2.5 rounded-full text-sm font-semibold">
              Try TagMint →
            </Link>
          </div>
        </div>

        {/* Back to blog */}
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
