"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const UniversityLogos = () => {
  const [currentSet, setCurrentSet] = useState(0);

  // All 12 university logos
  const allLogos = [
    { src: "/universities/1.stanford.png", name: "Stanford University" },
    { src: "/universities/2.mit.png", name: "MIT" },
    { src: "/universities/3.harvard.png", name: "Harvard University" },
    { src: "/universities/4.columbia.png", name: "Columbia University" },
    { src: "/universities/5.yales.png", name: "Yale University" },
    { src: "/universities/6.usf.png", name: "University of San Francisco" },
    { src: "/universities/7.ftu.png", name: "Foreign Trade University" },
    {
      src: "/universities/8.hust.png",
      name: "Hanoi University of Science and Technology",
    },
    { src: "/universities/9.neu.png", name: "National Economics University" },
    {
      src: "/universities/10.ueh.png",
      name: "University of Economics Ho Chi Minh City",
    },
    {
      src: "/universities/11.hcmut.png",
      name: "Ho Chi Minh City University of Technology",
    },
    {
      src: "/universities/12.ptit.png",
      name: "Posts and Telecommunications Institute of Technology",
    },
  ];

  // Split into two sets of 6
  const logoSets = [
    allLogos.slice(0, 6), // First 6 logos
    allLogos.slice(6, 12), // Last 6 logos
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 z-10 mt-12">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Trusted by
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Top Performing Students
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Join thousands of high-achieving students who trust Lumist to help
              them reach their SAT goals and get into their dream schools.
            </p>
          </div>

          {/* Right Side - Logo Grid */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSet}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center"
              >
                {logoSets[currentSet].map((logo, index) => (
                  <motion.div
                    key={`${currentSet}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="flex items-center justify-center w-full h-20"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain transition-opacity duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityLogos;
