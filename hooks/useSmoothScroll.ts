"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return { scrollTo };
}
