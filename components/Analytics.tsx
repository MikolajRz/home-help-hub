// components/Analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

// Vercel Analytics – jeśli masz zainstalowany pakiet
// npm install @vercel/analytics @vercel/speed-insights
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Zmienne środowiskowe – ustaw własne ID w .env.local
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
const ENABLE_VERCEL_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS !== "false";
const ENABLE_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_GA === "true" && !!GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Śledzenie zmian strony dla Google Analytics (ga4)
  useEffect(() => {
    if (!ENABLE_GOOGLE_ANALYTICS) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  if (!ENABLE_VERCEL_ANALYTICS && !ENABLE_GOOGLE_ANALYTICS) {
    return null;
  }

  return (
    <>
      {/* Google Analytics (GA4) – tag manager / gtag */}
      {ENABLE_GOOGLE_ANALYTICS && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `,
            }}
          />
        </>
      )}

      {/* Vercel Analytics – lekki, bez ciasteczek */}
      {ENABLE_VERCEL_ANALYTICS && <VercelAnalytics />}

      {/* Vercel Speed Insights – monitorowanie wydajności */}
      {ENABLE_VERCEL_ANALYTICS && <SpeedInsights />}
    </>
  );
}