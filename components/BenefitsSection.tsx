"use client";

import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { Award, BookOpen, Maximize2, Target, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";

interface BenefitCard {
  title: string;
  description: string;
  src: string;
  content: () => React.ReactNode;
  features: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
}

const benefitCards: BenefitCard[] = [
  {
    title: "Know Exactly\n What to Study",
    description:
      "AI-powered personalized study plans that adapt to your unique learning style and schedule. Our intelligent system analyzes your performance patterns, identifies weak areas, and creates a dynamic study calendar that prioritizes the most impactful content for your improvement.",
    src: "/benefits/1.png",
    icon: <Target className="w-6 h-6" />,
    ctaText: "Start Planning",
    ctaLink: "https://app.lumist.ai",
    features: [
      "Dynamic study calendar that adapts to your schedule",
      "AI identifies your weak areas and prioritizes them",
      "Personalized practice blocks based on your learning patterns",
      "Smart pacing that prevents burnout while maximizing progress",
    ],
    content: () => (
      <>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-foreground">
            Intelligent Study Planning
          </h4>
          <p className="text-gray-600 leading-relaxed text-base">
            Say goodbye to generic study schedules. Our AI analyzes your
            performance, schedule, and learning preferences to create a
            completely personalized study plan that evolves with your progress.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Unlike traditional prep methods that follow rigid timelines, Lumist
            adapts in real-time to your learning pace, schedule changes, and
            performance patterns. This means you&rsquo;re always working on the
            most impactful content for your improvement.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-lg font-medium text-foreground">Key Features:</h5>
          <ul className="space-y-3">
            {benefitCards[0].features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-gray-700 italic leading-relaxed">
            &ldquo;Within my first week, Lumist helped me identify exactly which
            math concepts I needed to focus on. My study time became so much
            more efficient.&rdquo;
          </p>
          <p className="text-gray-500 text-sm mt-2">
            — Sarah M., 1520 SAT Score
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Enjoy Learning,\n Not Have to",
    description:
      "Gamified vocabulary and engaging quests that make SAT prep actually enjoyable rather than a chore. Our thoughtfully designed system includes spaced-repetition learning, daily achievement unlocks, and mastery meters that celebrate genuine competency gains while building sustainable study habits.",
    src: "/benefits/2.png",
    icon: <BookOpen className="w-6 h-6" />,
    ctaText: "Try Vocabulary",
    ctaLink: "https://app.lumist.ai/vocabulary",
    features: [
      "Spaced-repetition system with visual progress tracking",
      "Daily quests and achievement unlocks",
      "Mastery meters that celebrate real competency gains",
      "Bite-sized learning sessions that build momentum",
    ],
    content: () => (
      <>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-foreground">
            Gamified Learning Experience
          </h4>
          <p className="text-gray-600 leading-relaxed text-base">
            Transform SAT prep from a chore into an adventure. Our thoughtfully
            designed gamification system respects your time while building
            genuine motivation through meaningful progress and achievements.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            We&rsquo;ve carefully designed our gamification to avoid the
            pitfalls of addiction-based systems. Instead, we focus on
            celebrating genuine learning milestones and building sustainable
            study habits that will serve you long after test day.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-lg font-medium text-foreground">
            What Makes It Special:
          </h5>
          <ul className="space-y-3">
            {benefitCards[1].features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-blue-900">
              Ethical Gamification
            </span>
          </div>
          <p className="text-blue-700 leading-relaxed">
            Our system prioritizes intrinsic motivation over extrinsic rewards,
            ensuring sustainable learning habits that extend beyond test day. We
            believe in celebrating progress, not exploiting psychological
            triggers.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "See You're \n Getting Better",
    description:
      "Comprehensive analytics and predictive scoring to track your progress with unprecedented detail and accuracy. Our advanced analytics engine provides your Lumist Predicted Score with confidence intervals, detailed skill-level breakdowns across all SAT domains, and clear insights into your learning patterns and performance growth.",
    src: "/benefits/3.png",
    icon: <TrendingUp className="w-6 h-6" />,
    ctaText: "View Analytics",
    ctaLink: "https://app.lumist.ai/analytics",
    features: [
      "Lumist Predicted Score with confidence intervals",
      "Skill-level breakdowns across all SAT domains",
      "Progress trends and improvement velocity tracking",
      "Parent-friendly reports with actionable insights",
    ],
    content: () => (
      <>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-foreground">
            Comprehensive Progress Analytics
          </h4>
          <p className="text-gray-600 leading-relaxed text-base">
            Never wonder if you&rsquo;re improving. Our advanced analytics
            engine provides clear, actionable insights into your progress,
            helping you stay motivated and focused on what matters most.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Our Lumist Predicted Score isn&rsquo;t just a number—it&rsquo;s a
            sophisticated analysis of your performance patterns, learning
            velocity, and skill development across all SAT domains. Get
            confidence intervals, skill breakdowns, and personalized improvement
            recommendations.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="text-lg font-medium text-foreground">
            Analytics Features:
          </h5>
          <ul className="space-y-3">
            {benefitCards[2].features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-lg font-medium text-foreground">
            Example Analytics:
          </h5>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
              <div className="text-3xl font-bold text-green-700 mb-1">1230</div>
              <div className="text-sm text-green-600 font-medium">
                Predicted Score
              </div>
              <div className="text-xs text-green-500 mt-1">±30 confidence</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl text-center border border-blue-200">
              <div className="text-3xl font-bold text-blue-700 mb-1">+130</div>
              <div className="text-sm text-blue-600 font-medium">
                Points Growth
              </div>
              <div className="text-xs text-blue-500 mt-1">Last 50 days</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export function BenefitsSection() {
  const [active, setActive] = useState<BenefitCard | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section
      id="benefits"
      className="relative py-24 px-4 md:px-8 lg:px-16 bg-linear-to-b from-transparent to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl font-bold text-black mb-4"
          >
            With <span className="text-primary">Lumist.ai</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-2xl text-gray-600 font-medium"
          >
            You can...
          </motion.p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefitCards.map((card) => (
            <motion.div
              key={card.title}
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="aspect-[4/3]"
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className=" text-xl font-semibold text-foreground leading-tight max-w-40"
                    >
                      {card.title}
                    </motion.h3>
                  </div>
                  <div className="ml-4 p-2 bg-gray-100 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  src={active.src}
                  alt={active.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              <div className="p-6 pb-12 px-16">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-4xl font-semibold text-foreground mb-4 max-w-64 w-full"
                  style={{
                    lineHeight: "1.2",
                  }}
                >
                  {active.title}
                </motion.h3>

                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-gray-600 text-base leading-relaxed"
                >
                  {active.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default BenefitsSection;
