import type { Metadata, Viewport } from "next";
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

// Viewport configuration (dla mobile)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2d5a2c", // zielony kolor marki dla paska przeglądarki na mobile
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hometopia",
    template: "%s | Hometopia",
  },

  description:
    "Practical home and garden guides, DIY repairs, plant care, and smart solutions for your everyday household challenges.",

  applicationName: "Hometopia",
  authors: [{ name: "Hometopia Team", url: siteUrl }],
  creator: "Hometopia Team",
  publisher: "Hometopia",

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

  // Manifest dla PWA
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Hometopia",
    title: "Hometopia",
    description:
      "Practical home and garden guides, DIY repairs, plant care, and smart solutions.",
    url: siteUrl,
    locale: "en_US",
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
    creator: "@hometopia",
    site: "@hometopia",
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Dodatkowe meta tagi
  category: "home improvement",
  classification: "DIY, Home Improvement, Gardening",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Apple-specific
  appleWebApp: {
    capable: true,
    title: "Hometopia",
    statusBarStyle: "black-translucent",
  },

  // Verification dla Google Search Console (opcjonalnie)
  verification: {
    google: "your-google-verification-code", // zastąp swoim kodem
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
        <Header />

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