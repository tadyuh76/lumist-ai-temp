"use client";

import RotatingText from "@/components/RotatingText";
import Image from "next/image";

const rotatingWords = ["accessible", "affordable", "fun"];

export default function MissionSection() {
  return (
    <section id="mission" className="relative py-16 sm:py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left side - Mission text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-base font-medium text-gray-600 tracking-wide uppercase">
                OUR MISSION
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                Making SAT{" "}
                <div className="inline-block relative">
                  <RotatingText
                    texts={rotatingWords}
                    mainClassName="px-3 sm:px-4 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl transition-width duration-300"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={4000}
                  />
                </div>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Lumist was born from a simple yet powerful observation: when
                students feel overwhelmed, they disengage. When they disengage,
                they underperform. We believed there had to be a better way –
                one that transforms SAT preparation from a source of stress into
                a journey of growth and discovery.
              </p>
            </div>
          </div>

          {/* Right side - AI Chat Interface */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src="/ai-chat.png"
                alt="AI Chat Interface"
                width={500}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
