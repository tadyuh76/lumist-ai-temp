"use client";

import BackToTopButton from "@/components/BackToTopButton";
import BenefitsSection from "@/components/BenefitsSection";
import BentoGridSection from "@/components/BentoGridSection";
import CTASection from "@/components/CTASection";
import DistractionFreeSection from "@/components/DistractionFreeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FunSATSection from "@/components/FunSATSection";
import Galaxy from "@/components/Galaxy";
import Header from "@/components/Header";
import ImagePrefetch from "@/components/ImagePrefetch";
import MissionSection from "@/components/MissionSection";
import UniversityLogos from "@/components/UniversityLogos";
import {
  ArrowUpRight,
  CircleQuestionMark,
  LucideBlocks,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [hideLoading, setHideLoading] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    const particles = particlesRef.current;
    if (!logo || !container || !text || !particles) return;

    const rotationDuration = 2000;

    const timer3 = setTimeout(() => {
      text.classList.add("text-fade-out");
    }, rotationDuration - 500);

    // First animation completes after 2 seconds and logo to white
    const timer = setTimeout(() => {
      logo.classList.remove("animate-spin-bounce");
      logo.classList.add("animate-spin-scale");

      const svgElements = logo.querySelectorAll("path, circle");
      svgElements.forEach((element) => {
        const el = element as HTMLElement;
        el.style.transition = "all 1s cubic-bezier(0.76, 0, 0.24, 1)";
        el.style.opacity = "0.7";
        element.setAttribute("fill", "var(--white)");
      });
    }, rotationDuration);

    const timer2 = setTimeout(() => {
      container.style.backgroundColor = "var(--background)";
    }, rotationDuration + 300);

    // Fade out particles
    const timer4 = setTimeout(() => {
      particles.style.transition = "opacity 1s cubic-bezier(0.76, 0, 0.24, 1)";
      particles.style.opacity = "0";
    }, rotationDuration);

    // Show hero content 500ms before spin-scale completes (at 5.5s)
    const timer6 = setTimeout(() => {
      setShowHero(true);
    }, rotationDuration + 1000);

    // Hide loading animation after spin-scale completes (at 6s)
    const timer7 = setTimeout(() => {
      setHideLoading(true);
    }, rotationDuration + 2000);

    // Remove particles completely
    const timer5 = setTimeout(() => {
      particles.style.display = "none";
    }, rotationDuration + 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer3);
      clearTimeout(timer2);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-loading-bg bg-transition overflow-hidden"
    >
      {/* Prefetch images during loading */}
      <ImagePrefetch />
      {/* Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 z-0 bg-[#060313]">
        <Galaxy
          density={0.8}
          glowIntensity={0.3}
          saturation={0.3}
          hueShift={140}
          twinkleIntensity={0.8}
          rotationSpeed={0.1}
          repulsionStrength={7}
          autoCenterRepulsion={1.5}
          starSpeed={-0.2}
        />
      </div>

      {/* Background Logo - Always visible after loading with stagger delay */}
      {showHero && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0, delay: 0.7 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 pointer-events-none"
        >
          <svg
            width="640"
            height="640"
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_393_15)">
              <path
                d="M319.772 150.894C323.053 209.276 294.098 267.331 240 298.564C185.901 329.798 121.147 325.846 72.2273 293.814L121.702 265.25C151.722 276.156 186.174 274.215 216 256.995C245.825 239.775 264.733 210.909 270.298 179.458L319.772 150.894ZM79.9996 21.436C156.526 -22.7467 254.381 3.47328 298.564 80.0001C302.642 87.0643 306.119 94.311 309.013 101.68L266.762 126.074C264.358 118.534 261.113 111.134 256.994 104C226.067 50.4313 157.568 32.0773 104 63.0053C57.5652 89.8142 37.5909 144.852 53.2375 193.926L89.1099 173.215L113.11 214.785L34.9858 259.89C30.0515 253.699 25.5141 247.064 21.4355 240C-22.7472 163.473 3.47279 65.6188 79.9996 21.436Z"
                fill="white"
              />
              <circle cx="160" cy="160" r="24" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_393_15">
                <rect width="320" height="320" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      )}

      {/* Loading Animation */}
      {!hideLoading && (
        <div className="fixed inset-0 z-10" style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}>
          {/* Logo at exact center */}
          <div className="opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ willChange: 'transform' }}>
            <div ref={logoRef} className="relative animate-spin-bounce" style={{ willChange: 'transform' }}>
              <svg
                width="128"
                height="128"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_393_15)">
                  <path
                    d="M319.772 150.894C323.053 209.276 294.098 267.331 240 298.564C185.901 329.798 121.147 325.846 72.2273 293.814L121.702 265.25C151.722 276.156 186.174 274.215 216 256.995C245.825 239.775 264.733 210.909 270.298 179.458L319.772 150.894ZM79.9996 21.436C156.526 -22.7467 254.381 3.47328 298.564 80.0001C302.642 87.0643 306.119 94.311 309.013 101.68L266.762 126.074C264.358 118.534 261.113 111.134 256.994 104C226.067 50.4313 157.568 32.0773 104 63.0053C57.5652 89.8142 37.5909 144.852 53.2375 193.926L89.1099 173.215L113.11 214.785L34.9858 259.89C30.0515 253.699 25.5141 247.064 21.4355 240C-22.7472 163.473 3.47279 65.6188 79.9996 21.436Z"
                    fill="white"
                  />
                  <circle cx="160" cy="160" r="24" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_393_15">
                    <rect width="320" height="320" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Text positioned absolutely below logo */}
          <p
            ref={textRef}
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 text-slate-300 text-xl tracking-wide transition-opacity duration-[2000ms] ease-[cubic-bezier(0.76,0,0.24,1)] "
            style={{ marginTop: "100px", letterSpacing: "3px", willChange: 'opacity', transform: 'translateZ(0)' }}
          >
            aligning the stars...
          </p>
        </div>
      )}

      {/* Hero Content */}
      {showHero && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10 min-h-screen"
        >
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <Header />
          </motion.div>

          {/* Main Content */}
          <main className=" mx-auto px-4 sm:px-6 pt-24 sm:pt-32">
            {/* NEW Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="flex justify-center mb-6"
            >
              <button
                onClick={() =>
                  window.open("https://app.lumist.ai/review", "_blank")
                }
                className="cursor-pointer inline-flex border border-border-light items-center bg-white/50 hover:bg-white/70 active:bg-white/80 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-md"
              >
                <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs mr-3">
                  NEW
                </span>
                Track and review your errors with AI
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Hero Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                All-in-One AI Workspace
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                for <span className="text-primary">SAT Prep</span>
              </h1>
            </motion.div>

            {/* Hero Subtitle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-center mb-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-grey max-w-xl mx-auto leading-relaxed font-medium">
                <span className="text-black">
                  Lumist learns how you learn
                  <LucideBlocks className="w-5 h-5 sm:w-6 sm:h-6 mx-1 sm:mx-2 mb-1 inline-block" />
                </span>
                <span className="hidden sm:inline">— </span>
                <span className="sm:hidden">adapting questions</span>
                <span className="hidden sm:inline">
                  adapting questions, pacing, and strategy to
                </span>{" "}
                <span className="text-black">
                  <span className="sm:hidden">to close gaps faster</span>
                  <span className="hidden sm:inline">
                    close your gaps faster
                  </span>
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mx-1 sm:mx-2 mb-1 inline-block" />
                </span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.0,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
            >
              <button
                onClick={() => window.open("https://app.lumist.ai", "_blank")}
                className="cursor-pointer w-full sm:w-auto bg-primary hover:bg-primary-hover active:bg-primary-active text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 active:scale-[0.98] flex items-center justify-center"
              >
                Start your SAT Journey
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById("bento-grid")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer w-full sm:w-auto border-2 border-primary hover:border-primary-hover active:border-primary-active text-primary hover:text-primary-hover active:text-primary-active px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 active:scale-[0.98] flex items-center justify-center">
                See how it works
                <CircleQuestionMark className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative mx-auto"
            >
              {/* Home Interface (Base Layer) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="relative z-10 -left-8 md:-left-20 w-full aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/interface-home.png"
                  alt="Lumist Home Interface"
                  width={1440}
                  height={900}
                  className="w-full h-full object-cover animate-float"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900'%3E%3Crect width='1440' height='900' fill='%23f3f4f6'/%3E%3C/svg%3E"
                />
              </motion.div>

              {/* Exam Interface (Overlay) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.6,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="absolute top-8 -right-8 md:-right-20 lg:top-8 lg:-right-72 z-20 w-full aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/interface-exam.png"
                  alt="Lumist Exam Interface"
                  width={1440}
                  height={900}
                  className="w-full h-full object-cover animate-float-delayed"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900'%3E%3Crect width='1440' height='900' fill='%23f3f4f6'/%3E%3C/svg%3E"
                />
              </motion.div>
            </motion.div>
          </main>

          {/* University Logos Section */}
          <UniversityLogos />

          {/* Benefits Section */}
          <BenefitsSection />

          {/* Mission Section */}
          <MissionSection />

          {/* Fun SAT Section */}
          <FunSATSection />

          {/* Distraction-Free Section */}
          <DistractionFreeSection />

          {/* Bento Grid Section */}
          <BentoGridSection />

          {/* CTA Section */}
          <CTASection />

          {/* FAQ Section */}
          <FAQSection />

          {/* Footer */}
          <Footer />
        </motion.div>
      )}

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}
