"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Orb from "./Orb";
import GlassSurface from "./GlassSurface";
import { Meteors } from "./ui/meteors";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="mx-4 sm:mx-6 md:mx-10 max-w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative bg-slate-900 rounded-2xl sm:rounded-3xl py-20 sm:py-32 md:py-40 overflow-hidden border border-gray-200 flex flex-col items-center justify-center px-6 sm:px-8"
          style={{ willChange: 'transform', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          {/* Background Orb */}
          <div className="absolute inset-0 z-1 mt-4" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

          {/* Meteors Effect */}
          <div className="absolute inset-0 z-0" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
            <Meteors number={40} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center w-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
            {/* Main Heading */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/90 leading-tight">
                Start Your Journey
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto px-4">
                Join 1000+ aspiring learners from all around the world
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                to achieve their dream SAT score
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <div
                onClick={() => window.open("https://app.lumist.ai", "_blank")}
                className="cursor-pointer hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
              >
                <div className="hidden sm:block">
                  <GlassSurface width={340} height={60} borderRadius={70}>
                    <div className="inline-flex items-center text-white font-semibold text-xl opacity-80">
                      Start your SAT Journey
                      <ArrowUpRight className="w-6 h-6 ml-3" />
                    </div>
                  </GlassSurface>
                </div>
                <div className="sm:hidden">
                  <GlassSurface width={280} height={56} borderRadius={70}>
                    <div className="inline-flex items-center text-white font-semibold text-lg opacity-80">
                      Start your SAT Journey
                      <ArrowUpRight className="w-5 h-5 ml-2" />
                    </div>
                  </GlassSurface>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
