import { Suspense } from "react";
import CheckoutForm from "./CheckoutForm";
import Link from "next/link";
import { Logo } from "@/components/Logo";

function LoadingFallback() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex items-center justify-center">
      <p style={{ color: "#a0a0b0" }}>Loading order details…</p>
    </div>
  );
}

export default function CheckoutPage() {
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
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center no-underline">
            <Logo size={30} />
          </Link>
          <Link href="/#pricing" className="text-sm" style={{ color: "#a0a0b0" }}>
            ← Back to pricing
          </Link>
        </div>
      </nav>

      <Suspense fallback={<LoadingFallback />}>
        <CheckoutForm />
      </Suspense>
    </div>
  );
}
