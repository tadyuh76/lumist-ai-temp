"use client";

import { useEffect } from "react";

const ImagePrefetch = () => {
  useEffect(() => {
    // List of all images to prefetch
    const imagesToPrefetch = [
      // Logo images
      "/logo.svg",
      "/logo-with-text.svg",
      "/logo-light.svg",

      // Interface images
      "/interface-home.png",
      "/interface-exam.png",

      // University logos
      "/universities/1.stanford.png",
      "/universities/2.mit.png",
      "/universities/3.harvard.png",
      "/universities/4.columbia.png",
      "/universities/5.yales.png",
      "/universities/6.usf.png",
      "/universities/7.ftu.png",
      "/universities/8.hust.png",
      "/universities/9.neu.png",
      "/universities/10.ueh.png",
      "/universities/11.hcmut.png",
      "/universities/12.ptit.png",

      // Benefits images
      "/benefits/1.png",
      "/benefits/2.png",
      "/benefits/3.png",

      "/ai-chat.png",

      // Bento images
      "/bento/ai-vocab.png",
      "/bento/ai-study-plan.png",
      "/bento/lumist-score.png",
      "/bento/analytics.png",
      "/bento/error-bank.png",
    ];

    // Create link elements for prefetching
    const links: HTMLLinkElement[] = [];

    imagesToPrefetch.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      links.push(link);
    });

    // Cleanup function to remove preload links when component unmounts
    return () => {
      links.forEach((link) => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePrefetch;
