import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "The Complete Etsy Tags Guide 2025 — How to Choose Tags That Get Views",
  description:
    "Learn exactly how Etsy tags work, which tags get your listings found, and how to choose all 13 tags for maximum search visibility in 2025.",
};

export default function EtsyTagsGuide() {
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
        .tag-example {
          display: inline-block;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 0.25rem 0.65rem;
          font-size: 0.85rem;
          color: #c0c0e0;
          margin: 0.2rem;
          font-family: monospace;
        }
        .tag-good {
          background: rgba(16,185,129,0.1);
          border-color: rgba(16,185,129,0.25);
          color: #6ee7b7;
        }
        .tag-bad {
          background: rgba(239,68,68,0.08);
          border-color: rgba(239,68,68,0.2);
          color: #fca5a5;
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
        <div className="flex items-center gap-3 mb-8">
          <span className="pill-tag text-xs font-semibold px-3 py-1 rounded-full">Etsy SEO</span>
          <span className="text-xs" style={{ color: "#404060" }}>April 2025 · 8 min read</span>
        </div>

        <h1 className="font-black mb-6" style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, color: "#f0f0f5" }}>
          The Complete Etsy Tags Guide: How to Choose Tags That Actually Get Views
        </h1>
        <p style={{ color: "#7070a0", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Etsy gives you 13 tag slots. Most sellers waste them. Here's exactly how tags work and what to put in each one.
        </p>

        <div className="prose">
          <p>
            Etsy tags are one of the most misunderstood parts of the platform. Sellers either treat them as an afterthought or stuff them with random single words that don't match how buyers actually search. Both approaches leave views on the table.
          </p>
          <p>
            This guide covers everything — how the algorithm uses tags, what makes a good tag, real examples of high-performing vs. low-performing tags, and a framework for choosing all 13.
          </p>

          <h2>How Etsy Tags Actually Work</h2>
          <p>
            When a buyer searches on Etsy, the algorithm looks at several fields in your listing to determine relevance: title, tags, categories, and attributes. Tags are essentially your second title — they expand the set of search queries your listing can show up for.
          </p>
          <p>
            Etsy also combines tags with other fields. If your title contains "lavender candle" and your tag says "gift for mom," your listing can appear for the combined search "lavender candle gift for mom" — even though that exact phrase doesn't appear anywhere in full.
          </p>
          <p>
            This means your tags should <strong>complement</strong> your title, not repeat it. Every word already in your title is already being indexed — using the same words in your tags is wasted space.
          </p>

          <h2>The 3 Types of Tags You Need</h2>

          <h3>1. Occasion / Recipient Tags (4–5 slots)</h3>
          <p>
            These are the highest-converting tags on Etsy. Buyers shopping with intent ("I need a birthday gift for my sister") use occasion searches constantly.
          </p>
          <div style={{ margin: "1rem 0" }}>
            <span className="tag-example tag-good">birthday gift her</span>
            <span className="tag-example tag-good">mothers day gift</span>
            <span className="tag-example tag-good">gift for best friend</span>
            <span className="tag-example tag-good">christmas gift women</span>
            <span className="tag-example tag-good">new home gift</span>
          </div>

          <h3>2. Style / Aesthetic Tags (3–4 slots)</h3>
          <p>
            Many Etsy browsers search by aesthetic or style, especially in home decor, jewelry, and clothing. These tags capture browsers who may not know exactly what they want yet.
          </p>
          <div style={{ margin: "1rem 0" }}>
            <span className="tag-example tag-good">boho home decor</span>
            <span className="tag-example tag-good">minimalist jewelry</span>
            <span className="tag-example tag-good">cottagecore gift</span>
            <span className="tag-example tag-good">dark academia decor</span>
          </div>

          <h3>3. Use-Case / Problem Tags (3–4 slots)</h3>
          <p>
            These tags target buyers who are searching for a solution to a problem or feeling rather than a specific product type.
          </p>
          <div style={{ margin: "1rem 0" }}>
            <span className="tag-example tag-good">stress relief gift</span>
            <span className="tag-example tag-good">anxiety gift ideas</span>
            <span className="tag-example tag-good">self care package</span>
            <span className="tag-example tag-good">relaxation gift set</span>
          </div>

          <h2>Common Tag Mistakes (With Examples)</h2>

          <h3>Using single words</h3>
          <p>Single-word tags are nearly useless on Etsy. The competition is astronomical and the buyer intent is unclear.</p>
          <div style={{ margin: "1rem 0" }}>
            <span className="tag-example tag-bad">candle</span>
            <span className="tag-example tag-bad">jewelry</span>
            <span className="tag-example tag-bad">gift</span>
            <span className="tag-example tag-bad">handmade</span>
          </div>
          <p>Replace these with multi-word phrases that capture actual buyer searches.</p>

          <h3>Repeating your title keywords</h3>
          <p>
            If your title says "Lavender Soy Candle," don't use "lavender candle" or "soy candle" as tags. Etsy already indexes your title — you're wasting tag slots.
          </p>

          <h3>Using irrelevant broad categories</h3>
          <div style={{ margin: "1rem 0" }}>
            <span className="tag-example tag-bad">home decor</span>
            <span className="tag-example tag-bad">unique gift</span>
            <span className="tag-example tag-bad">handmade item</span>
          </div>
          <p>These are too competitive and too generic to drive meaningful traffic. Be specific.</p>

          <h2>A Framework for All 13 Tags</h2>
          <p>
            Here's a repeatable system for filling all 13 tags for any product. We'll use a lavender candle as the example.
          </p>

          <div className="callout">
            <p style={{ margin: 0, color: "#a0f0c0", fontWeight: 700 }}>Example: Lavender Soy Candle</p>
            <p style={{ margin: "0.75rem 0 0.25rem", color: "#606080", fontSize: "0.85rem", fontWeight: 600 }}>OCCASION TAGS (5):</p>
            <div>
              <span className="tag-example tag-good">birthday gift women</span>
              <span className="tag-example tag-good">mothers day candle</span>
              <span className="tag-example tag-good">gift for sister</span>
              <span className="tag-example tag-good">self care gift her</span>
              <span className="tag-example tag-good">thank you gift</span>
            </div>
            <p style={{ margin: "0.75rem 0 0.25rem", color: "#606080", fontSize: "0.85rem", fontWeight: 600 }}>STYLE TAGS (3):</p>
            <div>
              <span className="tag-example tag-good">boho candle decor</span>
              <span className="tag-example tag-good">farmhouse candle</span>
              <span className="tag-example tag-good">aesthetic room decor</span>
            </div>
            <p style={{ margin: "0.75rem 0 0.25rem", color: "#606080", fontSize: "0.85rem", fontWeight: 600 }}>USE-CASE TAGS (3):</p>
            <div>
              <span className="tag-example tag-good">anxiety relief gift</span>
              <span className="tag-example tag-good">relaxation candle</span>
              <span className="tag-example tag-good">stress relief candle</span>
            </div>
            <p style={{ margin: "0.75rem 0 0.25rem", color: "#606080", fontSize: "0.85rem", fontWeight: 600 }}>MATERIAL/SPECIFICS (2):</p>
            <div>
              <span className="tag-example tag-good">natural soy wax</span>
              <span className="tag-example tag-good">vegan candle gift</span>
            </div>
          </div>

          <h2>How Long Does It Take for Tags to Work?</h2>
          <p>
            Etsy typically takes 2–4 weeks to fully re-index a listing after you update tags. Don't judge the results in the first few days. Give it a full month before evaluating whether a tag update improved performance.
          </p>
          <p>
            Track your Etsy shop stats weekly — look at impressions (how many times your listing appeared in search) and visits. If impressions increase after a tag update, you're moving in the right direction.
          </p>

          <h2>How Many Tags Should You Change at Once?</h2>
          <p>
            If your listing is already getting some views, change no more than 5–7 tags at a time. Changing all 13 at once makes it impossible to know which tags are working. If your listing has near-zero views, a full overhaul is fine since you have nothing to lose.
          </p>

          <div className="callout" style={{ marginTop: "3rem" }}>
            <p style={{ margin: 0, color: "#a0f0c0", fontWeight: 700, fontSize: "1.05rem" }}>
              Don't want to do this research manually?
            </p>
            <p style={{ margin: "0.75rem 0 0", color: "#9090b0" }}>
              TagMint researches your specific niche and rewrites all 13 tags using real buyer search data — plus your full title and description. Paste your listing URL and get back a fully optimized listing in 48 hours. Starts at $7.
            </p>
            <Link href="/#pricing" className="btn-primary inline-block mt-4 px-6 py-2.5 rounded-full text-sm font-semibold">
              Try TagMint →
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
