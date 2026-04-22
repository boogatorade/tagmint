"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const PACKAGES = {
  basic: {
    name: "Listing Tune-Up",
    price: "$7",
    turnaround: "48 hours",
    includes: [
      "2 listings fully optimized",
      "Keyword-researched title",
      "All 13 tags rewritten",
      "SEO-optimized description",
      "Delivered within 48 hours",
    ],
    listingsNeeded: 2,
  },
  standard: {
    name: "Shop Boost",
    price: "$19",
    turnaround: "48 hours",
    includes: [
      "4 listings fully optimized",
      "Keyword-researched titles",
      "All 13 tags per listing rewritten",
      "SEO-optimized descriptions",
      "Keyword research report",
      "Delivered within 48 hours",
    ],
    listingsNeeded: 4,
  },
  premium: {
    name: "Full Shop Overhaul",
    price: "$49",
    turnaround: "5 business days",
    includes: [
      "11 listings fully optimized",
      "Keyword-researched titles",
      "All 13 tags per listing rewritten",
      "SEO-optimized descriptions",
      "Full shop SEO audit",
      "Competitor analysis",
      "30-day check-in + 1 free revision",
      "Delivered within 5 business days",
    ],
    listingsNeeded: 11,
  },
} as const;

type PackageKey = keyof typeof PACKAGES;

export default function CheckoutForm() {
  const searchParams = useSearchParams();
  const rawPackage = searchParams.get("package") ?? "basic";
  const packageKey: PackageKey =
    rawPackage in PACKAGES ? (rawPackage as PackageKey) : "basic";
  const pkg = PACKAGES[packageKey];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shopUrl, setShopUrl] = useState("");
  const [listingUrls, setListingUrls] = useState("");
  const [listingDetails, setListingDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package: packageKey,
          name,
          email,
          shopUrl,
          listingUrls,
          listingDetails,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#0a0a0f",
    border: "1px solid #2a2a3e",
    color: "#f0f0f5",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#a0a0b0",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      {/* Order Summary */}
      <div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "#f0f0f5" }}>
          Order Summary
        </h1>
        <p className="text-sm mb-8" style={{ color: "#a0a0b0" }}>
          Review what&apos;s included in your package before proceeding.
        </p>

        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: "#111118", border: "1px solid #1a1a2e" }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#10b981" }}
              >
                {pkg.name}
              </p>
              <p className="text-4xl font-bold" style={{ color: "#f0f0f5" }}>
                {pkg.price}
              </p>
              <p className="text-xs mt-1" style={{ color: "#a0a0b0" }}>
                one-time payment
              </p>
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "#0d2818",
                color: "#10b981",
                border: "1px solid #10b98133",
              }}
            >
              {pkg.turnaround} delivery
            </div>
          </div>

          <div style={{ borderTop: "1px solid #1a1a2e" }} className="pt-6">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#a0a0b0" }}
            >
              What&apos;s included
            </p>
            <ul className="space-y-2.5">
              {pkg.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#c0c0d0" }}
                >
                  <span style={{ color: "#10b981" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="mt-6 pt-6 text-xs"
            style={{ borderTop: "1px solid #1a1a2e", color: "#606070" }}
          >
            Please provide{" "}
            {`up to ${pkg.listingsNeeded} listing URLs`}{" "}
            in the form.
          </div>
        </div>
      </div>

      {/* Order Form */}
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#f0f0f5" }}>
          Your Details
        </h2>
        <p className="text-sm mb-8" style={{ color: "#a0a0b0" }}>
          We&apos;ll use this to research and deliver your optimized listings.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              required
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #10b981")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #2a2a3e")}
            />
          </div>

          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              required
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #10b981")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #2a2a3e")}
            />
            <p className="text-xs mt-1.5" style={{ color: "#505060" }}>
              We&apos;ll send your optimized listings here.
            </p>
          </div>

          <div>
            <label style={labelStyle}>Etsy or eBay Shop URL</label>
            <input
              type="url"
              required
              placeholder="https://www.etsy.com/shop/YourShopName or ebay.com/str/yourstore"
              value={shopUrl}
              onChange={(e) => setShopUrl(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #10b981")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #2a2a3e")}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Listing URLs{" "}
              <span
                style={{
                  color: "#505060",
                  fontWeight: 400,
                  textTransform: "none",
                }}
              >
                (one per line, up to {pkg.listingsNeeded})
              </span>
            </label>
            <textarea
              required
              rows={6}
              placeholder={`https://www.etsy.com/listing/123456789/your-listing-name\nhttps://www.etsy.com/listing/987654321/another-listing`}
              value={listingUrls}
              onChange={(e) => setListingUrls(e.target.value)}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #10b981")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #2a2a3e")}
            />
            <p className="text-xs mt-1.5" style={{ color: "#505060" }}>
              Paste the full Etsy listing URL(s) — we&apos;ll do the rest.
            </p>
          </div>

          <div>
            <label style={labelStyle}>Paste Your Current Listing Details</label>
            <p className="text-xs mb-2" style={{ color: "#505060" }}>
              So we can optimize them right away — paste your current title, tags, and description for each listing
            </p>
            <textarea
              rows={10}
              name="listingDetails"
              placeholder={`Example:\n\nListing 1: etsy.com/listing/123\nCurrent Title: Lavender Candle\nCurrent Tags: candle, lavender, gift\nCurrent Description: This is a handmade candle...\n\nListing 2: ...`}
              value={listingDetails}
              onChange={(e) => setListingDetails(e.target.value)}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #10b981")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #2a2a3e")}
            />
          </div>

          {error && (
            <div
              className="p-4 rounded-xl text-sm"
              style={{
                backgroundColor: "#1a0a0a",
                border: "1px solid #3a1a1a",
                color: "#f08080",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#10b981", color: "#0a0a0f" }}
          >
            {loading ? "Redirecting to payment…" : "Proceed to Payment →"}
          </button>

          <p className="text-xs text-center" style={{ color: "#505060" }}>
            Secured by Stripe. We never store your card details.
          </p>
        </form>
      </div>
    </main>
  );
}
