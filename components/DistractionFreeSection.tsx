"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Flag,
  Highlighter,
  X,
  BarChart3,
} from "lucide-react";

export default function DistractionFreeSection() {
  return (
    <section
      id="test-environment"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-white rounded-b-xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-4">
            {/* TRY NOW Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              <a
                href="https://app.lumist.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 text-sm font-medium border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100 transition-colors"
              >
                TRY NOW
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                <span className="text-primary">Distraction-Free</span>
                <br />
                Test Environment
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Every tool you&apos;ll need on test day — timers, flagging,
                highlighting, cross-out, Desmos calculator — built into your
                focused, distraction-free practice interface.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="space-y-0 pt-12"
            >
              <div className="flex items-center gap-4 py-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-gray-700 font-medium">Section Timer</span>
              </div>
              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Flag className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-gray-700 font-medium">Flagging</span>
              </div>
              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Highlighter className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-gray-700 font-medium">Highlighting</span>
              </div>
              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-gray-700 font-medium">
                  Cross-out Tool
                </span>
              </div>
              <div className="h-px bg-gray-200"></div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-gray-700 font-medium">
                  Desmos Calculator
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right side - iPad Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <div className="relative max-w-2xl mx-auto">
              <Image
                src="/ipad.png"
                alt="Lumist iPad interface showing distraction-free test environment"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
