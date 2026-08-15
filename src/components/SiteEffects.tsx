"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteEffects() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll<HTMLElement>(".reveal-group, .reveal-photo, .reveal-background");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
