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
    default: "Hometopia",
    template: "%s | Hometopia",
  },

  description:
    "Practical home and garden guides, DIY repairs, plant care, and smart solutions for your everyday household challenges.",

  applicationName: "Hometopia",
  authors: [{ name: "Hometopia Team" }],
  creator: "Hometopia",

  keywords: [
    "home repairs",
    "DIY fixes",
    "plumbing guide",
    "heating problems",
    "gardening tips",
    "home maintenance",
    "plant care",
    "boiler not working",
    "radiator not heating",
  ],

  openGraph: {
    type: "website",
    siteName: "Hometopia",
    title: "Hometopia",
    description:
      "Practical home and garden guides, DIY repairs, plant care, and smart solutions.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hometopia - Home & Garden Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hometopia",
    description:
      "Practical home and garden guides, DIY repairs, plant care, and smart solutions.",
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
      <body className="min-h-screen flex flex-col bg-[#f8f6f0] text-gray-800">
        {/* HEADER */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#dce4d8]">
          <Header />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          <div className="mx-auto max-w-7xl px-4 py-6">
            {children}
          </div>
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}