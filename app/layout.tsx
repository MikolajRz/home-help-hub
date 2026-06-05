import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homehelphub.com"),

  title: {
    default: "Home Help Hub",
    template: "%s | Home Help Hub",
  },

  description:
    "Solutions for home problems, gardening issues and useful home calculators.",
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