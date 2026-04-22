import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Etsy & eBay SEO Blog — TagMint",
  description:
    "Free Etsy and eBay SEO guides from the TagMint team. Learn how to rank higher, get more views, and convert more buyers.",
};

const posts = [
  {
    slug: "etsy-seo-tips",
    title: "7 Etsy SEO Tips That Actually Work in 2025",
    excerpt:
      "Most Etsy sellers are leaving views on the table with generic titles and wasted tags. Here's what the algorithm actually rewards — and how to use it.",
    date: "April 2025",
    readTime: "7 min read",
    tag: "Etsy SEO",
  },
  {
    slug: "why-etsy-listings-get-no-views",
    title: "Why Your Etsy Listings Get No Views (And How to Fix It)",
    excerpt:
      "Zero views on a beautiful listing is one of the most frustrating things in selling. It's almost never your photos — here's what's actually going wrong.",
    date: "April 2025",
    readTime: "8 min read",
    tag: "Etsy SEO",
  },
  {
    slug: "ebay-seo-guide",
    title: "eBay SEO: How to Rank Higher and Sell More",
    excerpt:
      "eBay's Cassini search engine works differently from Etsy's. Understanding its ranking signals can help you dominate category search results.",
    date: "April 2025",
    readTime: "6 min read",
    tag: "eBay SEO",
  },
];

export default function BlogIndex() {
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
        .card-glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.2s ease;
        }
        .card-glass:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(16,185,129,0.25);
          transform: translateY(-2px);
        }
        .pill-tag {
          background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(52,211,153,0.08));
          border: 1px solid rgba(16,185,129,0.3);
          color: #34d399;
        }
        .hero-glow {
          position: absolute;
          width: 500px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          transition: all 0.2s ease;
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
          <Link href="/#pricing" className="btn-primary px-5 py-2 rounded-full text-sm font-semibold">
            Get Started →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="hero-glow" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 pill-tag">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
            Free Etsy &amp; eBay SEO Guides
          </div>
          <h1 className="font-black mb-5" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}>
            The <span className="text-gradient">TagMint Blog</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#8080a0" }}>
            Practical SEO advice for Etsy and eBay sellers who are tired of being invisible on search.
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-12 px-6 pb-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-glass rounded-2xl p-7 flex flex-col group">
              <div className="flex items-center justify-between mb-5">
                <span className="pill-tag text-xs font-semibold px-3 py-1 rounded-full">{post.tag}</span>
                <span className="text-xs" style={{ color: "#404060" }}>{post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold leading-snug mb-3 group-hover:text-emerald-400 transition-colors" style={{ color: "#f0f0f5" }}>
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#6060a0" }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "#404060" }}>{post.date}</span>
                <span className="text-sm font-semibold" style={{ color: "#10b981" }}>Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
