"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import Image from "next/image";

const STEPS = [
  {
    title: "Audit",
    description:
      "We get on a call to understand your business, goals, and challenges. Then we identify the highest-impact opportunities that AI can unlock for your marketing.",
    image: "/assets/services/audit.png",
  },
  {
    title: "Automate the distractions",
    description:
      "We automate time-consuming, low-impact tasks that eat up your day - this can involve segmentation, campaign setup, lead scoring, and reporting. Your team now has more time to focus on strategy and creativity.",
    image: "/assets/services/aut.png",
  },
  {
    title: "Measure, optimize, scale",
    description:
      "We set up real-time dashboards to track performance and RoAS. We'll also continuously optimize campaigns based on data, and scale what’s working to drive predictable growth.",
    image: "/assets/services/opt.png",
  },
  {
    title: "Build topical authority in your niche",
    description:
      "We will help drive consistent organic traffic through social media, SEO, and build your business into a brand people trust.",
    image: "/assets/services/auth.png",
  },
];

export default function Steps() {
  const [activeIndex, setActiveIndex] = useState(0); // default = Convert (matches your screenshot)

  return (
    <section id = "steps" className="bg-[#CFE3DF] py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-[56px] font-extrabold text-[#2E2E2E]">
              Fast launch. Measurable results.
            </h2>
            <p className="mt-4 text-[36px] text-[#0E7C66] italic">
              Here’s how we work. No empty promises, straightforward timelines.
            </p>
          </div>
        </FadeIn>

        {/* Layout */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (Steps) */}
          <div className="space-y-14">

            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="cursor-pointer flex gap-8"
                >

                  {/* Number + Line */}
                  <div className="flex flex-col items-center">

                    <span
                      className={`text-[28px] ${
                        isActive
                          ? "text-[#0E7C66]"
                          : "text-[#0E7C66]/40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Line UNDER number */}
                    {isActive && (
                      <motion.div
                        layoutId="line"
                        className="mt-6 w-[2px] h-[80px] bg-[#2E2E2E]"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div>

                    <h3
                      className={`text-[34px] ${
                        isActive
                          ? "font-extrabold text-[#2E2E2E]"
                          : "font-bold text-[#2E2E2E]/40"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-6 max-w-[480px] text-[#4A4A4A] text-lg leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              );
            })}

          </div>

          {/* RIGHT SIDE (Image) */}
          <div className="relative h-[420px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={STEPS[activeIndex].image}
                  alt={STEPS[activeIndex].title}
                  width={400}
                  height={320}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}