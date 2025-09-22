"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function FunSATSection() {
  const [isChestOpen, setIsChestOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [toastPosition, setToastPosition] = useState({ x: 0, y: 0 });

  // Preload cursor images to prevent flickering
  useEffect(() => {
    const preloadCursors = () => {
      const cursorImg = new window.Image();
      const cursorClickImg = new window.Image();
      cursorImg.src = "/cursor.svg";
      cursorClickImg.src = "/cursor-click.svg";
    };
    preloadCursors();
  }, []);

  const handleChestClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setToastPosition({ x: centerX, y: centerY });
    setIsChestOpen(true);
    setShowToast(true);

    // Hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  return (
    <section id="fun-sat" className="relative py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Horizontal Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Vertical Divider */}
        <div className="absolute -top-16 bottom-0 left-1/2 w-px bg-gradient-to-b from-gray-300 to-transparent hidden lg:block"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Fun SAT */}
          <div className="space-y-6 lg:pr-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                <span className="text-primary">Fun SAT</span>,<br />
                No Anxiety!
              </h2>

              <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                The SAT prep that doesn&apos;t feel like prep. No more
                overwhelming workbooks or boring drills, just bite-sized
                learning moments that fit your life and make 1600 feel genuinely
                achievable.
              </p>
            </div>

            {/* Treasure Chest Container */}
            <div
              className="bg-white rounded-2xl p-10 border border-gray-200 relative h-96"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                cursor: isClicking
                  ? 'url("/cursor-click.svg") 12 12, pointer'
                  : 'url("/cursor.svg") 12 12, pointer',
              }}
            >
              <div className="flex justify-center items-center h-full">
                <div
                  className="relative hover:scale-105 transition-transform duration-300"
                  onClick={handleChestClick}
                >
                  {!isChestOpen ? (
                    // Closed chest (using chest-close.svg)
                    <div className="w-52 h-52 flex items-center justify-center select-none">
                      <Image
                        src="/chest-close.svg"
                        alt="Closed treasure chest"
                        width={256}
                        height={256}
                        className="w-full h-full pointer-events-none select-none"
                        draggable={false}
                        style={{ userSelect: "none" }}
                      />
                    </div>
                  ) : (
                    // Open chest (using the SVG)
                    <div className="w-52 h-52 flex items-center justify-center select-none">
                      <Image
                        src="/chest-open.svg"
                        alt="Open treasure chest"
                        width={256}
                        height={256}
                        className="w-full h-full pointer-events-none select-none"
                        draggable={false}
                        style={{ userSelect: "none" }}
                      />
                    </div>
                  )}

                  {!isChestOpen && (
                    <div className="absolute -top-4 -right-20 select-none">
                      <div className="bg-yellow-400 text-black px-4 py-2 rounded-t-xl rounded-br-xl rounded-bl-xs text-base font-semibold shadow-lg">
                        Click me!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Free Access */}
          <div className="space-y-6 lg:pl-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                Free Access to
                <br />
                <span className="text-primary">10,000+ questions</span>
              </h2>

              <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                Lumist.ai offers{" "}
                <span className="font-semibold">more than double</span> the SAT®
                practice questions compared to the College Board, giving
                students comprehensive preparation for their exam.
              </p>
            </div>

            {/* Questions Bar Chart Image */}
            <div className="flex justify-center">
              <Image
                src="/questions-bar-chart.png"
                alt="Questions comparison bar chart"
                width={600}
                height={400}
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
              left: window.innerWidth < 1024 ? toastPosition.x - 175 : toastPosition.x - 150,
              top: toastPosition.y - 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              left: window.innerWidth < 1024 ? toastPosition.x - 175 : toastPosition.x + 120,
              top: window.innerWidth < 1024 ? toastPosition.y - 240 : toastPosition.y - 200,
            }}
            exit={{
              opacity: 0,
              scale: 0.2,
              left: window.innerWidth < 1024 ? toastPosition.x - 175 : toastPosition.x - 150,
              top: window.innerWidth < 1024 ? toastPosition.y - 290 : toastPosition.y - 250,
            }}
            transition={{
              duration: 0.7,
              ease: [0.68, -0.55, 0.265, 1.55],
              scale: {
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              },
              opacity: { duration: 0.3 },
              left: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
              top: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            className="fixed bg-white border border-gray-200 rounded-xl shadow-2xl p-4 sm:p-6 w-[350px] max-w-[90vw] z-50"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">😅</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    No treasure for you yet!
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Sign up on Lumist and unlock your real treasure of SAT
                    success! 💎
                  </p>
                </div>
              </div>
              <button
                onClick={() => window.open('https://app.lumist.ai', '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Open Lumist</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
