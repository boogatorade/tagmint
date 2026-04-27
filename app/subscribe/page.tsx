"use client";

import { useState } from "react";
import Link from "next/link";

const PLANS = {
  monthly: {
    name: "TagMint Pro — Monthly",
    price: "$14.99",
    billing: "per month",
    perks: [
      "4 listing optimizations per month",
      "24-hour turnaround (vs 48h one-time)",
      "Monthly keyword trend report",
      "Priority chat support",
      "Cancel any time",
    ],
  },
  annual: {
    name: "TagMint Pro — Annual",
    price: "$99",
    billing: "per year  ·  saves $80",
    perks: [
      "4 listing optimizations per month",
      "24-hour turnaround",
      "Monthly keyword trend report",
      "Priority chat support",
      "Free Full Shop Overhaul on sign-up ($49 value)",
      "Quarterly competitor analysis report",
      "2 bonus listings in December",
    ],
  },
} as const;

type PlanKey = keyof typeof PLANS;

export default function SubscribePage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const raw = searchParams?.plan ?? "monthly";
  const planKey: PlanKey = raw === "annual" ? "annual" : "monthly";
  const plan = PLANS[planKey];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shopUrl, setShopUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/create-subscription-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey, name, email, shopUrl }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Something went wrong.");
      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#0e141b",
    border: "1px solid #1e2833",
    color: "#e7ecf1",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 600,
    color: "#6c7987",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  };

  return (
    <div style={{ backgroundColor: "#0b0f14", color: "#e7ecf1", minHeight: "100vh" }}>
      <style>{`* { font-family: 'Inter', sans-serif; }`}</style>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #1e2833", backgroundColor: "#0b0f14" }} className="px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 w-fit no-underline">
            <span style={{ color: "#3ba676" }}>✦</span>
            <span className="text-xl font-bold" style={{ color: "#e7ecf1" }}>TagMint</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Plan summary */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6c7987" }}>
            Your Plan
          </p>
          <h1 className="text-2xl font-bold mb-6" style={{ color: "#e7ecf1" }}>
            {plan.name}
          </h1>

          <div className="rounded-2xl p-8" style={{ background: "#141b24", border: "1px solid #1e2833" }}>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-black" style={{ color: "#e7ecf1" }}>{plan.price}</span>
              <span className="text-sm" style={{ color: "#6c7987" }}>{plan.billing}</span>
            </div>

            {planKey === "annual" && (
              <div className="mt-2 mb-6 inline-block px-3 py-1 rounded-full text-xs font-semibold"
                   style={{ background: "rgba(59,166,118,0.12)", color: "#3ba676", border: "1px solid rgba(59,166,118,0.3)" }}>
                Best value — 45% cheaper than monthly
              </div>
            )}

            {/* Plan toggle */}
            <div className="flex gap-2 mb-6 mt-4">
              {(["monthly", "annual"] as PlanKey[]).map((p) => (
                <Link
                  key={p}
                  href={`/subscribe?plan=${p}`}
                  className="flex-1 text-center py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: planKey === p ? "#3ba676" : "transparent",
                    color: planKey === p ? "#fff" : "#6c7987",
                    border: `1px solid ${planKey === p ? "#3ba676" : "#1e2833"}`,
                  }}
                >
                  {p === "monthly" ? "Monthly" : "Annual"}
                </Link>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #1e2833" }} className="pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#6c7987" }}>
                What&apos;s included
              </p>
              <ul className="space-y-2.5">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm" style={{ color: "#a7b3c0" }}>
                    <span style={{ color: "#3ba676", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs mt-5" style={{ color: "#3c4f60" }}>
            Your subscription starts immediately after payment. You&apos;ll receive a
            welcome email with instructions on how to submit your first listings.
          </p>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#e7ecf1" }}>Your Details</h2>
          <p className="text-sm mb-8" style={{ color: "#6c7987" }}>
            We&apos;ll use this to set up your account and deliver your optimizations each month.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label style={labelStyle}>Full Name</label>
              <input type="text" required placeholder="Jane Smith" value={name}
                onChange={(e) => setName(e.target.value)} style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = "1px solid #3ba676")}
                onBlur={(e) => (e.currentTarget.style.border = "1px solid #1e2833")} />
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
              <input type="email" required placeholder="jane@example.com" value={email}
                onChange={(e) => setEmail(e.target.value)} style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = "1px solid #3ba676")}
                onBlur={(e) => (e.currentTarget.style.border = "1px solid #1e2833")} />
              <p className="text-xs mt-1.5" style={{ color: "#3c4f60" }}>
                We&apos;ll send your monthly optimizations here.
              </p>
            </div>

            <div>
              <label style={labelStyle}>Etsy or eBay Shop URL</label>
              <input type="url" required placeholder="https://www.etsy.com/shop/YourShopName"
                value={shopUrl} onChange={(e) => setShopUrl(e.target.value)} style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.border = "1px solid #3ba676")}
                onBlur={(e) => (e.currentTarget.style.border = "1px solid #1e2833")} />
            </div>

            {error && (
              <div className="p-4 rounded-xl text-sm"
                   style={{ background: "#1a0a0a", border: "1px solid #3a1a1a", color: "#f08080" }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "#3ba676", color: "#fff" }}>
              {loading ? "Redirecting to payment…" : `Subscribe ${plan.price} →`}
            </button>

            <p className="text-xs text-center" style={{ color: "#3c4f60" }}>
              Secured by Stripe. Cancel any time from your billing portal.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
