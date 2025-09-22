"use client";

import { useEffect, useRef, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

interface ScrollContextType {
  scrollY: number;
  scrollDirection: "up" | "down";
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: "down",
  scrollProgress: 0,
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const scrollDataRef = useRef({
    scrollY: 0,
    scrollDirection: "down" as "up" | "down",
    scrollProgress: 0,
  });

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    let lastScrollY = 0;
    let scrollDirection: "up" | "down" = "down";

    lenis.on("scroll", (e: { scroll: number }) => {
      const currentScrollY = e.scroll;
      
      // Only update direction if there's a meaningful change (threshold to avoid micro-movements)
      const threshold = 1;
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
        lastScrollY = currentScrollY;
      }
      
      const progress = Math.min(currentScrollY / (document.body.scrollHeight - window.innerHeight), 1);

      scrollDataRef.current = {
        scrollY: currentScrollY,
        scrollDirection: scrollDirection,
        scrollProgress: progress,
      };

      // Dispatch custom event for components to listen to
      window.dispatchEvent(new CustomEvent("premiumScroll", {
        detail: scrollDataRef.current
      }));
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add smooth scroll behavior to anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.href.includes("#")) {
        e.preventDefault();
        const id = anchor.href.split("#")[1];
        const element = document.getElementById(id);
        
        if (element) {
          lenis.scrollTo(element, {
            offset: -100,
            duration: 2,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollDataRef.current}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;