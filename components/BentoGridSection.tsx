"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function BentoGridSection() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [baseRotation, setBaseRotation] = useState(0);
  const lastScrollY = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // Calculate rotation speed based on scroll speed (original implementation)
      const rotationSpeed = Math.abs(scrollDelta) * 0.5;

      // Determine direction: down = clockwise, up = counter-clockwise
      const direction = scrollDelta > 0 ? 1 : -1;

      setRotation((prev) => prev + rotationSpeed * direction);
      lastScrollY.current = currentScrollY;
    };

    // Continuous base rotation animation
    const animate = () => {
      setBaseRotation((prev) => prev + 0.3); // Gentle base rotation speed
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="bento-grid"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Everything You Need
            <br />
            to <span className="text-primary">Ace the SAT</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1240px] mx-auto">
          {/* AI-Powered Study Planning - Top Left */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 lg:row-span-2 bg-[#D7F49E] rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[320px] lg:h-[660px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mt-6">
                AI-Powered
                <br />
                Study Planning
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 right-0 lg:-left-40 lg:w-[200%]">
              <Image
                src="/bento/ai-study-plan.png"
                alt="AI Study Planning interface"
                width={1000}
                height={300}
                className="w-full h-auto lg:h-full object-contain object-bottom lg:object-bottom-right"
              />
            </div>
          </motion.div>

          {/* Predictive Scoring Engine - Top Right */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 lg:col-span-2 bg-primary rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[320px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12 lg:mt-6">
                Predictive
                <br />
                Scoring Engine
              </h3>
              <p className="text-white text-sm lg:text-base max-w-[200px] sm:max-w-xl">
                Our AI doesn&apos;t just track where you are,
                <br className="hidden sm:block" />
                it guides you towards the fastest path
                <br className="hidden sm:block" />
                to improve your score.
              </p>
            </div>
            <div className="absolute top-16 -right-40 sm:top-12 sm:right-8 w-4/5 sm:w-92 lg:w-96 h-32 lg:h-48">
              <Image
                src="/bento/lumist-score.png"
                alt="Lumist Predicted Score interface"
                width={600}
                height={0}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Center Lumist.ai Logo */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 flex flex-col items-center justify-center min-h-[320px]"
          >
            <div
              ref={logoRef}
              className="w-32 sm:w-40 lg:w-64 h-32 sm:h-40 lg:h-64 mb-4"
              style={{
                transform: `rotate(${baseRotation + rotation}deg)`,
                willChange: "transform",
                backfaceVisibility: "hidden",
                perspective: "1000px",
              }}
            >
              <Image
                src="/logo-light.svg"
                alt="Lumist Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain"
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                }}
              />
            </div>
            {/* <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-800">
              Lumist<span className="text-primary">.ai</span>
            </h3> */}
          </motion.div>

          {/* AI Vocab Garden - Middle Right */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 bg-[#CAC5FD] rounded-2xl lg:rounded-3xl relative overflow-hidden min-h-[320px]"
          >
            <div className="relative z-10 h-full">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-6 lg:mt-8 ml-6 lg:ml-8">
                AI Vocab
                <br />
                Garden
              </h3>
            </div>
            <div className="absolute bottom-6 sm:bottom-24 -right-8 lg:-bottom-12 lg:-right-12 w-100 sm:w-140 lg:w-96 h-48 lg:h-60">
              <Image
                src="/bento/ai-vocab.png"
                alt="AI Vocabulary Garden interface"
                width={500}
                height={240}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Comprehensive Analytics - Bottom Left */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 lg:col-span-2 bg-[#bbdefb] rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[320px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Comprehensive
                <br />
                Analytics
              </h3>
            </div>
            <div className="absolute sm:bottom-20 right-4 lg:bottom-12 lg:right-4 w-full sm:w-4/5 lg:w-150 h-48 lg:h-60">
              <Image
                src="/bento/analytics.png"
                alt="Comprehensive Analytics interface"
                width={800}
                height={0}
                className="w-full h-full object-contain object-bottom-right"
              />
            </div>
          </motion.div>

          {/* Smart Error Bank - Bottom Right */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 bg-[#B6F1C6] rounded-2xl lg:rounded-3xl relative overflow-hidden min-h-[320px]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-6 lg:mt-8 ml-6 lg:ml-8">
                Smart
                <br />
                Error Bank
              </h3>
            </div>
            <div className="absolute -bottom-28 lg:-bottom-20 -right-16 w-150 lg:w-112">
              <Image
                src="/bento/error-bank.png"
                alt="Smart Error Bank interface"
                width={860}
                height={0}
                className="w-full h-full object-contain object-bottom-right"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
