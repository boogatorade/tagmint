import Link from "next/link";

export default function CancelPage() {
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

      <main className="max-w-xl mx-auto px-6 py-32 text-center">
        {/* X icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ backgroundColor: "#1a0a0a", border: "2px solid #3a1a1a" }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8L24 24M24 8L8 24"
              stroke="#f08080"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4" style={{ color: "#f0f0f5" }}>
          Payment cancelled
        </h1>
        <p className="text-base mb-10 leading-relaxed" style={{ color: "#a0a0b0" }}>
          No worries — your card wasn&apos;t charged. You can go back and try again whenever you&apos;re ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#pricing"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#10b981", color: "#0a0a0f" }}
          >
            Back to Pricing
          </Link>
          <Link
            href="/"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all"
            style={{ border: "1px solid #2a2a3e", color: "#a0a0b0" }}
          >
            Go to Home
          </Link>
        </div>

        <p className="text-xs mt-12" style={{ color: "#404050" }}>
          Have questions? Email us at{" "}
          <a
            href="mailto:hello@tagmint.co"
            style={{ color: "#10b981" }}
          >
            hello@tagmint.co
          </a>
        </p>
      </main>
    </div>
  );
}
