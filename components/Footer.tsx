"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-16 flex items-center px-4 md:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 w-full">
          {/* Company Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6 flex flex-col items-center md:items-start"
          >
            <Image
              src="/logo-with-text.svg"
              alt="Lumist Logo"
              width={200}
              height={0}
              className="w-48 sm:w-56 md:w-64 h-full object-contain"
            />
            <p className="text-gray-600 leading-relaxed max-w-md text-center md:text-left">
              AI-powered SAT prep that adapts to your learning style.
              Personalized study plans, gamified vocab, and real-time progress
              tracking.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://app.lumist.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Start Learning
              </a>
            </div>
          </motion.div>

          {/* Navigation Columns - Wrap in container for tablet 2-column layout */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Navigation Column 1 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Navigation
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="cursor-pointer block text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("benefits")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="cursor-pointer block text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  Benefits
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("mission")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="cursor-pointer block text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  Mission
                </button>
              </div>
            </motion.div>

            {/* Navigation Column 2 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">More</h3>
              <div className="space-y-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("bento-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="cursor-pointer block text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="cursor-pointer block text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="border-t border-gray-200 pt-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-500 text-sm">
            © 2025 Lumist.ai. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary transition-colors duration-200 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
