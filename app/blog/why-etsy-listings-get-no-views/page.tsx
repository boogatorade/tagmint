import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Why Your Etsy Listings Get No Views (And How to Fix It) — TagMint",
  description:
    "If your Etsy listings are getting zero views, it's almost never the photos. Here's the real reason buyers aren't finding you — and exactly how to fix it.",
};

export default function WhyEtsyListingsGetNoViews() {
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
        .reason-block {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px 28px;
          margin: 2rem 0;
        }
        .reason-label {
          display: inline-block;
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #f87171;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }
        .fix-label {
          display: inline-block;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          color: #34d399;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 9999px;
          margin-bottom: 12px;
          margin-left: 8px;
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
        .stat-pill {
          display: inline-block;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          color: #34d399;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 4px 14px;
          border-radius: 9999px;
        }
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
            <span className="pill-tag text-xs font-semibold px-3 py-1 rounded-full">Etsy SEO</span>
            <span className="text-xs" style={{ color: "#404060" }}>April 2025 · 8 min read</span>
          </div>

          <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", lineHeight: 1.15 }}>
            Why Your Etsy Listings Get No Views (And How to Fix It)
          </h1>

          <p className="text-lg mb-12 leading-relaxed" style={{ color: "#8080a0" }}>
            You spent hours photographing your products, writing a description, setting up your shop — and you're getting single-digit weekly views. Maybe zero. It feels personal. It isn't. It's almost always fixable, and the fix is almost never what you think it is.
          </p>

          <div className="prose">

            <h2>First: Understand How Etsy Search Actually Works</h2>
            <p>
              Etsy is a search engine with a marketplace attached. Every time a buyer opens the app or site and types a query, Etsy's algorithm runs through millions of listings and decides which ones to surface — and in what order.
            </p>
            <p>
              The algorithm weighs several factors: <strong>relevancy</strong> (do your title, tags, and attributes match what the buyer typed?), <strong>listing quality score</strong> (do buyers click and buy when they see this listing?), <strong>recency</strong> (has this listing been renewed or updated recently?), and <strong>shop quality</strong> (reviews, completion rate, shipping performance).
            </p>
            <p>
              Most sellers with zero views have a relevancy problem, not a quality problem. Your listing is beautiful. Etsy just doesn't know who to show it to.
            </p>

            {/* REASON 1 */}
            <div className="reason-block">
              <div>
                <span className="reason-label">Problem 1</span>
                <span className="fix-label">Fixable</span>
              </div>
              <h3 style={{ marginTop: 0 }}>Your Title Isn't Matching Real Search Queries</h3>
              <p>
                This is the most common cause of zero views. If your title is "Blue Ceramic Mug — Handmade Pottery," Etsy has almost no idea what search queries to rank you for. "Handmade" appears in 3 million listings. "Ceramic mug" is searched by people who are browsing, not buying.
              </p>
              <p>
                <strong>The fix:</strong> Research what buyers actually type. Use Etsy's autocomplete — type "ceramic mug" and look at every dropdown suggestion. Those are real searches happening right now. You might find "ceramic mug for plant lover" (247,000 searches/month) or "coffee mug gift for teacher" (89,000 searches). Pick the one that fits your product and lead your title with it.
              </p>
              <p>
                Your full title should be 120–140 characters and read like a natural sentence, not a keyword list. "Coffee Mug Gift for Teacher — Handmade Blue Ceramic, Funny Appreciation Gift, End of Year Teacher Gift" is better than "Ceramic Mug Blue Handmade Pottery Coffee Tea Gift."
              </p>
            </div>

            {/* REASON 2 */}
            <div className="reason-block">
              <div>
                <span className="reason-label">Problem 2</span>
                <span className="fix-label">Fixable</span>
              </div>
              <h3 style={{ marginTop: 0 }}>Your Tags Are All Single Words</h3>
              <p>
                Single-word tags are a waste. "Mug" as a tag means you're competing with every mug seller on the platform for a keyword that converts at almost zero percent. Buyers who search just "mug" are window-shopping, not buying.
              </p>
              <p>
                <strong>The fix:</strong> Every tag should be a phrase. Etsy allows up to 20 characters per tag. Use every character. Think about the buyer's moment: Are they buying a gift? "teacher appreciation gift." Are they buying for an occasion? "end of year teacher gift." Are they looking for a specific style? "minimalist pottery mug."
              </p>
              <p>
                Each of your 13 tags should target a <strong>different type of buyer</strong> searching from a different angle. If three of your tags are basically the same idea (mug, coffee mug, ceramic mug), you're wasting two slots.
              </p>
            </div>

            {/* REASON 3 */}
            <div className="reason-block">
              <div>
                <span className="reason-label">Problem 3</span>
                <span className="fix-label">Fixable</span>
              </div>
              <h3 style={{ marginTop: 0 }}>Your Listing Is in the Wrong Category</h3>
              <p>
                Etsy uses your category as a primary filter. If your listing is in the wrong category — or a category that's too broad — you'll miss every buyer who's using Etsy's browse and filter features.
              </p>
              <p>
                <strong>The fix:</strong> Search for your own product on Etsy and look at where the top-ranking competitors are listed. Click their listings and check the category breadcrumb. If the best-performing similar listings are in "Kitchen & Dining &gt; Mugs & Teacups" and yours is in "Home & Living &gt; Home Décor," you're fighting from the wrong corner.
              </p>
              <p>
                Category also unlocks relevant attributes. A listing in the right subcategory might offer occasion, color, material, and size attributes — each of which gives Etsy more data to match your listing to buyers.
              </p>
            </div>

            {/* REASON 4 */}
            <div className="reason-block">
              <div>
                <span className="reason-label">Problem 4</span>
                <span className="fix-label">Fixable</span>
              </div>
              <h3 style={{ marginTop: 0 }}>Your Listing Quality Score Is Low</h3>
              <p>
                Etsy tracks what happens <em>after</em> a buyer sees your listing in search. If they click, stay on the page, and buy — your quality score goes up. If they click and immediately bounce, or (worse) never click at all, your score drops and Etsy stops showing you.
              </p>
              <p>
                <strong>The fix:</strong> You can't directly improve your quality score, but you can improve the inputs. A high-quality hero image increases click-through rate. A clear title that sets correct expectations reduces bounce. Competitive pricing increases conversion. Plenty of reviews build trust.
              </p>
              <p>
                If your listing is brand new, it has no quality score history — which is one reason new listings sometimes get a brief ranking boost, then fall. This is normal. Etsy is gathering data. The boost is an opportunity to get early clicks and reviews that build lasting rank.
              </p>
            </div>

            {/* REASON 5 */}
            <div className="reason-block">
              <div>
                <span className="reason-label">Problem 5</span>
                <span className="fix-label">Fixable</span>
              </div>
              <h3 style={{ marginTop: 0 }}>You're Competing Against Established Sellers on High-Volume Keywords</h3>
              <p>
                If your shop has 10 reviews and you're targeting "birthday gift for her" — a keyword with millions of results and dominated by shops with 5,000+ reviews — you will appear on page 40. Nobody looks at page 40.
              </p>
              <p>
                <strong>The fix:</strong> Target lower-competition, higher-specificity keywords. "Blue ceramic mug for coffee lover birthday" might have 3,000 monthly searches and only 200 competing listings. For a new shop, that's a front-page opportunity. Own the niche first, then expand.
              </p>
              <p>
                Tools like eRank show you a competition score alongside search volume. Look for keywords with high-to-medium search volume and low-to-medium competition. These are the gaps where new sellers can actually win.
              </p>
            </div>

            {/* REASON 6 */}
            <div className="reason-block">
              <div>
                <span className="reason-label">Problem 6</span>
                <span className="fix-label">Fixable</span>
              </div>
              <h3 style={{ marginTop: 0 }}>You Haven't Touched the Listing in Months</h3>
              <p>
                Etsy gives a small ranking boost to recently renewed or updated listings. It's not huge — relevancy still matters far more — but it's real. A listing that was last touched eight months ago is competing against listings that were updated last week.
              </p>
              <p>
                <strong>The fix:</strong> Regularly review and refresh your listings. Update the title based on seasonal search trends (buyer behavior in December is different from July). Swap in holiday-specific tags when relevant. Even a small edit to the description counts as an update and can trigger a recrawl.
              </p>
              <p>
                Seasonal refreshes are especially important: "gift for mom" searches spike around Mother's Day, "personalized ornament" spikes in November, "graduation gift" spikes in May. Update your tags to capture the moment.
              </p>
            </div>

            <h2>The Real Problem Isn't Your Products</h2>
            <p>
              Almost every seller who comes to us with a "no views" problem has good products. Their photos are clean. Their descriptions are warm. Their prices are fair. The problem is invisible to them because it lives in the keywords — a layer of the listing most sellers never think critically about.
            </p>
            <p>
              The good news: keyword problems are among the most fixable problems in selling. You don't need new products, new photos, or a new shop. You need your title, tags, and description to speak the same language as your buyers.
            </p>

            <div className="callout">
              <p style={{ marginBottom: 12, color: "#d0d0e8", fontWeight: 700, fontSize: "1.1rem" }}>
                Skip the research. Let TagMint fix it for you.
              </p>
              <p style={{ marginBottom: 20 }}>
                TagMint uses AI and real search data to rewrite your Etsy titles, tags, and descriptions. You send us your listing URL, we send back ready-to-paste copy within 48 hours. No spreadsheets, no keyword tools, no guessing. Starting at $7 for one listing.
              </p>
              <Link href="/#pricing" className="btn-primary px-7 py-3 text-sm">
                Fix My Listings →
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
