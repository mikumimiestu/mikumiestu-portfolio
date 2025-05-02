"use client";

import { useEffect, useState, RefObject } from "react";

type UseInViewOptions = {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function useInView(
  ref: RefObject<Element>,
  {
    once = false,
    threshold = 0,
    rootMargin = "0px",
  }: UseInViewOptions = {}
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting && once) {
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, once, threshold, rootMargin]);

  return isInView;
}