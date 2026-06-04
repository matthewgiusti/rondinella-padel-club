import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

export const META_PIXEL_ID = "1309487903488710";

type PixelParams = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Safely sends a Meta Pixel event. No-op on the server or before fbq loads.
 */
export function trackPixel(
  event: string,
  params?: PixelParams,
  type: "track" | "trackCustom" = "track",
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (params) {
    window.fbq(type, event, params);
  } else {
    window.fbq(type, event);
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
