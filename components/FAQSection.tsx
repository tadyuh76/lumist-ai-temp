"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How Lumist.ai is different from other SAT prep platforms?",
    answer:
      "Unlike traditional prep methods, Lumist adapts to your unique learning style, schedule, and goals. Our AI creates dynamic study plans that evolve with your progress, while our calm, Notion-inspired interface keeps you focused without overwhelming you.",
  },
  {
    question: "How quickly can I start studying?",
    answer:
      "You can begin studying within minutes. Our intelligent onboarding takes less than 5 minutes to understand your starting point, target score, and test date. Your personalized study plan is ready immediately after.",
  },
  {
    question: "Is Lumist suitable for all skill levels?",
    answer:
      "Yes! Whether you're aiming to improve from 1000 to 1200 or pushing for a perfect 1600, Lumist adapts to your current level and creates a path to reach your goals.",
  },
  {
    question: "Can I take full-length practice tests?",
    answer:
      "Yes! Our distraction-free test suite provides authentic SAT practice with section timers, flagging tools, a digital scratchpad, and integrated Desmos graphing calculator—exactly like the real test.",
  },
  {
    question: "How long before I see improvement?",
    answer:
      "Most students begin seeing measurable improvement within 2-3 weeks of consistent practice. Our AI tracks your progress in real-time and provides your Lumist Predicted Score with confidence intervals, so you can see exactly how you're improving.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Lumist.ai.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.76, 0, 0.24, 1],
                      opacity: { duration: 0.3 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
