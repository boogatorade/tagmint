import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tagmint-app.vercel.app"),
  title: {
    default: "TagMint — Etsy & eBay SEO Optimization That Actually Works",
    template: "%s | TagMint",
  },
  description:
    "TagMint is a live Etsy SEO optimization and eBay SEO service. We rewrite your listing titles, tags, and descriptions using real search data — more views, more sales, delivered in 48 hours.",
  keywords: [
    "etsy seo optimization",
    "etsy listing optimization service",
    "ebay seo service",
    "etsy listing seo",
    "etsy tags optimizer",
    "etsy title optimization",
    "ebay listing optimization",
    "etsy shop seo",
  ],
  authors: [{ name: "TagMint" }],
  creator: "TagMint",
  publisher: "TagMint",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tagmint-app.vercel.app",
    siteName: "TagMint",
    title: "TagMint — Etsy & eBay SEO Optimization That Actually Works",
    description:
      "TagMint rewrites your Etsy & eBay listing titles, tags, and descriptions using real search data. Get 4× more views in 48 hours — no ad spend required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TagMint — Etsy & eBay SEO Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TagMint — Etsy & eBay SEO Optimization That Actually Works",
    description:
      "TagMint rewrites your Etsy & eBay listing titles, tags, and descriptions using real search data. Get 4× more views in 48 hours.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tagmint-app.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Google Ads conversion tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18046372429"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18046372429');
        `}
      </Script>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#0a0a0f", color: "#f0f0f5" }}>
        {children}
      </body>
    </html>
  );
}
