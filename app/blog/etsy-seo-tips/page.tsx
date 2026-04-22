import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "7 Etsy SEO Tips That Actually Work in 2025 — TagMint",
  description:
    "Etsy SEO has gotten harder. Here are 7 proven strategies to rank higher on Etsy search in 2025 — covering titles, tags, descriptions, and more.",
};

export default function EtsySeoTips() {
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
        .tip-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          flex-shrink: 0;
          box-shadow: 0 0 16px rgba(16,185,129,0.35);
        }
        .tip-block {
          background: rgba(16,185,129,0.04);
          border: 1px solid rgba(16,185,129,0.15);
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
            <span className="text-xs" style={{ color: "#404060" }}>April 2025 · 7 min read</span>
          </div>

          <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", lineHeight: 1.15 }}>
            7 Etsy SEO Tips That Actually Work in 2025
          </h1>

          <p className="text-lg mb-12 leading-relaxed" style={{ color: "#8080a0" }}>
            Etsy's search algorithm has evolved significantly. The vague advice circulating in Facebook groups — "use all 13 tags!" and "add keywords to your description!" — isn't wrong, it's just incomplete. Here's what actually moves the needle.
          </p>

          <div className="prose">

            {/* TIP 1 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">1</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Lead Your Title with the Exact Phrase Buyers Type</h2>
              </div>
              <p>
                Etsy's algorithm weights the <strong>first 40 characters of your title</strong> more heavily than anything that follows. This is not speculation — Etsy's own seller handbook says the beginning of your title carries the most SEO weight.
              </p>
              <p>
                The mistake most sellers make: starting with their brand name or a descriptor instead of a keyword. "Sunshine Studio — Personalized Oak Cutting Board" buries the real keyword. "Personalized Oak Cutting Board — Wedding Gift, Engraved" leads with what buyers search.
              </p>
              <p>
                Before writing your title, ask yourself: <em>what would someone type into Etsy's search bar at the exact moment they are ready to buy this?</em> That phrase belongs at the front.
              </p>
            </div>

            {/* TIP 2 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">2</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Use All 13 Tags — But Make Each One a Phrase, Not a Word</h2>
              </div>
              <p>
                Etsy allows 13 tags and each can be up to 20 characters. Single-word tags like "candle" or "gift" are nearly useless — the competition is enormous and the buyer intent is zero. Long-tail phrases like "lavender candle gift for her" or "stress relief birthday gift" are what actually convert.
              </p>
              <p>
                Each tag should represent a <strong>distinct search query a different type of buyer might use</strong>. Think about the occasions (Mother's Day, wedding, housewarming), the recipient (gift for mom, gift for new homeowner), the benefits (stress relief, aromatherapy, clean burn), and the material or style (soy wax, hand-poured, minimalist).
              </p>
              <p>
                A good rule of thumb: if your tag is one word, it's probably too broad. If it reads like something a real human would type, it's probably right.
              </p>
            </div>

            {/* TIP 3 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">3</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Match Your Tags to Your Title Keywords</h2>
              </div>
              <p>
                Etsy explicitly states that when your title and tags contain <strong>matching phrases</strong>, it sends a stronger relevancy signal to the algorithm. This is called "reinforcement" — your title and tags are corroborating each other.
              </p>
              <p>
                This does <em>not</em> mean copy-pasting your title into your tags. It means if your title leads with "Personalized Oak Cutting Board," one of your tags should also be "personalized cutting board" or "engraved cutting board." The exact match doesn't need to be identical, just semantically aligned.
              </p>
              <p>
                Don't waste tags on keywords that have zero presence in your title or description. Etsy's system is looking for consistency across your listing.
              </p>
            </div>

            {/* TIP 4 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">4</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Optimize the First 160 Characters of Your Description</h2>
              </div>
              <p>
                Etsy indexes the first 160 characters of your listing description for its internal search. More importantly, Google indexes these characters as the meta snippet when your listing appears in Google Shopping or organic search results.
              </p>
              <p>
                Many sellers write the first sentence as a creative hook — "Welcome to my shop! I'm so excited to share this listing with you." That's 160 characters of wasted SEO potential.
              </p>
              <p>
                Instead, open with a keyword-dense sentence that describes exactly what the item is: <em>"This hand-poured lavender soy candle makes the perfect stress relief gift for women — ideal for birthdays, self-care, or as a Mother's Day gift."</em> That single sentence hits six different search angles in 160 characters.
              </p>
            </div>

            {/* TIP 5 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">5</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Target Low-Competition Keywords, Not Just High-Volume Ones</h2>
              </div>
              <p>
                New and small shops can't compete on "candle gift" — there are 200,000+ results. But "lavender candle anxiety relief gift box" might have 800 monthly searches and only 400 listings. That's a page-one opportunity.
              </p>
              <p>
                Tools like eRank, Marmalead, and Etsy's own search bar autocomplete can help you find these niches. When you type a root keyword into Etsy search, the dropdown suggestions show you exactly what real buyers are searching for in real-time.
              </p>
              <p>
                The goal isn't just traffic — it's <strong>relevant traffic from buyers who are ready to purchase</strong>. A listing ranking #3 for "personalized nurse gift candle" will convert far better than one ranking #47 for "scented candle."
              </p>
            </div>

            {/* TIP 6 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">6</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Fill Out Every Listing Attribute Etsy Gives You</h2>
              </div>
              <p>
                When you create or edit a listing, Etsy offers category-specific attributes: color, material, occasion, style, size, and more. Most sellers leave many of these blank. Don't.
              </p>
              <p>
                These attributes are used by Etsy's filter system. When a buyer narrows their search to "gifts for women" or "handmade jewelry" using the left-rail filters, listings without those attributes get removed from results entirely — even if their keywords are perfect.
              </p>
              <p>
                Attributes also feed into Etsy's personalization algorithm, which surfaces listings to buyers based on their past browsing behavior. The more complete your attributes, the more data Etsy has to match your listing to the right shoppers.
              </p>
            </div>

            {/* TIP 7 */}
            <div className="tip-block">
              <div className="flex items-start gap-4 mb-4">
                <span className="tip-number">7</span>
                <h2 style={{ marginTop: 0, marginBottom: 0 }}>Improve Click-Through Rate — It Affects Your Ranking</h2>
              </div>
              <p>
                Etsy's algorithm tracks <strong>click-through rate (CTR)</strong>: how often buyers click your listing when they see it in search results. A listing with a low CTR gets deprioritized over time, even if its keywords are strong.
              </p>
              <p>
                CTR is driven primarily by two things: your <strong>hero image</strong> and your <strong>price</strong>. But your title matters too — in mobile search, buyers see only the first 35–45 characters of your title. If those characters don't communicate value or specificity, they scroll past.
              </p>
              <p>
                Test different hero images over time using Etsy's A/B testing feature (available for Star Seller accounts). Even a 15% improvement in CTR can push you several pages higher in search without changing a single keyword.
              </p>
            </div>

            <h2>The Bottom Line</h2>
            <p>
              Etsy SEO isn't about gaming an algorithm — it's about communicating clearly to both Etsy's search engine and the humans searching on it. Your title, tags, and description work together as a system. When all three reinforce the same buyer-intent keywords, Etsy's algorithm has everything it needs to rank you for the searches that matter.
            </p>
            <p>
              The challenge is that this takes real research — studying competitor listings, using keyword tools, and rewriting copy that reads naturally while hitting all the right signals. Most sellers don't have time to do this well for every listing.
            </p>

            <div className="callout">
              <p style={{ marginBottom: 12, color: "#d0d0e8", fontWeight: 700, fontSize: "1.1rem" }}>
                Let TagMint do the research for you.
              </p>
              <p style={{ marginBottom: 20 }}>
                TagMint delivers AI-powered, keyword-researched titles, tags, and descriptions to your inbox within 48 hours. We handle the research, the rewriting, and the optimization — you just paste it into Etsy and publish. Starting at $7 for a single listing.
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
