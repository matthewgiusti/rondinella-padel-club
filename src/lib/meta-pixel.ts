import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

export const META_PIXEL_ID = "1309487903488710";
export const GA4_MEASUREMENT_ID = "G-BSTVHFN3MP";

type PixelParams = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Safely sends a Google Analytics 4 event. No-op on the server or before gtag loads.
 */
export function trackGA(event: string, params?: PixelParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params ?? {});
}

/**
 * Safely sends an event to both Meta Pixel and Google Analytics 4.
 * No-op on the server or before the respective scripts load.
 */
export function trackPixel(
  event: string,
  params?: PixelParams,
  type: "track" | "trackCustom" = "track",
) {
  // Meta Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq(type, event, params);
    } else {
      window.fbq(type, event);
    }
  }
  // Mirror the same event to GA4 (skip PageView — handled by useGA4PageViews)
  if (event !== "PageView") {
    trackGA(event, params);
  }
}

/**
 * Fires a PageView on every client-side route change (SPA navigation).
 * The base snippet already fires the initial PageView on first load.
 */
export function usePixelPageViews() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      // Initial PageView is sent by the base snippet — skip to avoid double count.
      first.current = false;
      return;
    }
    trackPixel("PageView");
  }, [pathname]);
}

/**
 * Fires a GA4 page_view on every client-side route change (SPA navigation).
 * The base gtag config fires the initial page_view on first load.
 */
export function useGA4PageViews() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      // Initial page_view sent by the base gtag config — skip to avoid double count.
      first.current = false;
      return;
    }
    trackGA("page_view", {
      page_path: pathname,
      page_location: typeof window !== "undefined" ? window.location.href : undefined,
      page_title: typeof document !== "undefined" ? document.title : undefined,
    });
  }, [pathname]);
}

/**
 * Fires a custom ScrollDepth event at 50% and 90% of the page, once per route.
 */
export function usePixelScrollDepth() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const fired = new Set<number>();
    const thresholds = [50, 90];

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackPixel("ScrollDepth", { percent: t, path: pathname }, "trackCustom");
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
}
