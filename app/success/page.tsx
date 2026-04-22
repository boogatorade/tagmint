import Link from "next/link";

const PACKAGES: Record<string, { name: string; turnaround: string; includes: string[] }> = {
  basic: {
    name: "Listing Tune-Up",
    turnaround: "2 business days",
    includes: ["1 listing optimized", "Title + 13 tags + description"],
  },
  standard: {
    name: "Shop Boost",
    turnaround: "2 business days",
    includes: ["3 listings optimized", "Title + 13 tags + description per listing", "Keyword research report"],
  },
  premium: {
    name: "Full Shop Overhaul",
    turnaround: "5 business days",
    includes: [
      "10 listings optimized",
      "Title + 13 tags + description per listing",
      "Full shop SEO audit",
      "Competitor analysis",
      "30-day check-in + 1 free revision",
    ],
  },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawPackage = typeof params.package === "string" ? params.package : "basic";
  const pkg = PACKAGES[rawPackage] ?? PACKAGES.basic;

  return (
    <div
      style={{ backgroundColor: "#0a0a0f", color: "#f0f0f5", minHeight: "100vh" }}
      className="font-sans"
    >
      {/* Navbar */}
      <nav
        style={{ backgroundColor: "#0a0a0f", borderBottom: "1px solid #1a1a2e" }}
        className="px-6 py-4"
      >
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 no-underline w-fit">
            <span style={{ color: "#10b981" }}>✦</span>
            <span className="text-xl font-bold" style={{ color: "#f0f0f5" }}>
              TagMint
            </span>
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        {/* Checkmark */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ backgroundColor: "#0d2818", border: "2px solid #10b981" }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 20L16 28L32 12"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4" style={{ color: "#f0f0f5" }}>
          Payment received!
        </h1>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a0a0b0" }}>
          We&apos;ll have your optimized listings ready within{" "}
          <span style={{ color: "#10b981", fontWeight: 600 }}>{pkg.turnaround}</span>.
          Keep an eye on your inbox — we&apos;ll email you as soon as they&apos;re done.
        </p>

        {/* Order summary */}
        <div
          className="rounded-2xl p-8 text-left mb-10"
          style={{ backgroundColor: "#111118", border: "1px solid #1a1a2e" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#10b981" }}>
            Your Order — {pkg.name}
          </p>
          <ul className="space-y-2.5">
            {pkg.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#c0c0d0" }}>
                <span style={{ color: "#10b981" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Next steps */}
        <div
          className="rounded-2xl p-8 text-left mb-10"
          style={{ backgroundColor: "#0d2818", border: "1px solid #10b98133" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#10b981" }}>
            What happens next
          </p>
          <ol className="space-y-3">
            {[
              "Check your email for a confirmation with your order details.",
              "We'll research your listings and craft keyword-optimized content.",
              `You'll receive your ready-to-paste content within ${pkg.turnaround}.`,
              "Copy the new title, tags, and description into your Etsy listing editor.",
              "Publish and watch your views climb over the next 2–3 weeks.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#a0d0b8" }}>
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: "#10b98122", color: "#10b981" }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
          style={{ border: "1px solid #2a2a3e", color: "#a0a0b0" }}
        >
          ← Back to TagMint
        </Link>
      </main>
    </div>
  );
}
