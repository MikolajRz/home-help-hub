import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://home-help-hub-smoky.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Home Help Hub",
    template: "%s | Home Help Hub",
  },

  description:
    "Step-by-step home repair guides, gardening solutions, and practical calculators for homeowners.",

  applicationName: "Home Help Hub",
  authors: [{ name: "Home Help Hub Team" }],
  creator: "Home Help Hub",

  keywords: [
    "home repairs",
    "DIY fixes",
    "plumbing guide",
    "heating problems",
    "gardening tips",
    "home maintenance",
    "boiler not working",
    "radiator not heating",
  ],

  openGraph: {
    type: "website",
    siteName: "Home Help Hub",
    title: "Home Help Hub",
    description:
      "Step-by-step home repair guides, gardening solutions, and practical calculators.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Home Help Hub - DIY Home Repair Guides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Help Hub",
    description:
      "Step-by-step home repair guides, gardening solutions, and practical calculators.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0b0f19] text-gray-100">
        {/* BACKGROUND GLOW EFFECT */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        {/* HEADER */}
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <Header />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          <div className="mx-auto max-w-6xl px-4 py-6">
            {children}
          </div>
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}