"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type CaseStudy = {
  brand: string;
  heading: string;
  description: string;
  roi: string;
  conversion: string;
  revenue: string;
  imageTop: string;
  imageBottom: string;
  logo: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    brand: "elixir",
    heading:
      "How Elixir Interior drives 15L+ in conversions with Flywheel",
    description:
      "An interior design company that leveraged content and highly targeted ad campaigns to drive results and move their brand up-market in less than 6 months.",
    roi: "23X",
    conversion: "9.59%",
    revenue: "45L+",
    imageTop: "/assets/testimonials/ts1.png",
    imageBottom: "/assets/testimonials/sj.png",
    logo: "/assets/clients/ei.png",
  },
  /*{
    brand: "bulletproof",
    heading:
      "How Bulletproof Increased LTV with Lifecycle Postcards",
    description:
      "Automated winback campaigns helped revive dormant customers at scale.",
    roi: "980%",
    conversion: "6.12%",
    revenue: "$58,240",
    imageTop: "/case/bullet-top.png",
    imageBottom: "/case/bullet-bottom.png",
    logo: "/logos/bulletproof.svg",
  },
  {
    brand: "boom",
    heading:
      "How BOOM! Increased Repeat Purchase Rate",
    description:
      "Strategic segmentation improved campaign efficiency and profitability.",
    roi: "1124%",
    conversion: "7.21%",
    revenue: "$64,880",
    imageTop: "/case/boom-top.png",
    imageBottom: "/case/boom-bottom.png",
    logo: "/logos/boom.svg",
  },
  {
    brand: "orbitbaby",
    heading:
      "How OrbitBaby Reached Dormant Customers Profitably",
    description:
      "Lifecycle-based postcard automation delivered consistent ROI gains.",
    roi: "1340%",
    conversion: "7.95%",
    revenue: "$71,903",
    imageTop: "/case/orbit-top.png",
    imageBottom: "/case/orbit-bottom.png",
    logo: "/logos/orbitbaby.svg",
  },*/
];

export default function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CASE_STUDIES[activeIndex];

  return (
    <section id = "case-studies" className="bg-[#E8E7F0] py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Dynamic Images */}
          <div className="relative h-[460px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active.imageTop}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 rotate-[-18deg]"
              >
                <Image
                  src={active.imageTop}
                  alt={active.brand}
                  width={340}
                  height={220}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.imageBottom}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-20 rotate-[6deg]"
              >
                <Image
                  src={active.imageBottom}
                  alt={active.brand}
                  width={420}
                  height={250}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT — Content */}
          <div>
            <h2 className="text-[44px] font-extrabold text-[#2E2E2E] leading-tight">
              {active.heading}
            </h2>

            <p className="mt-6 text-[#4A4A4A] text-lg leading-relaxed">
              {active.description}
            </p>

            {/* Metrics */}
            <div className="mt-10 flex gap-12">
              <Metric label="ROI" value={active.roi} />
              <Metric label="Conversion Rate" value={active.conversion} />
              <Metric label="Sales Generated" value={active.revenue} />
            </div>

            {/* CTA */}
            <button className="mt-10 px-10 py-4 rounded-xl border-2 border-black font-semibold shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition">
              <a href= "#book-call"> I want results like this</a>
            </button>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="mt-20 flex justify-center gap-14 border-t pt-10">
          {CASE_STUDIES.map((item, index) => (
            <button
              key={item.brand}
              onClick={() => setActiveIndex(index)}
              className={`opacity-50 hover:opacity-100 transition ${
                index === activeIndex ? "opacity-100" : ""
              }`}
            >
              <Image
                src={item.logo}
                alt={item.brand}
                width={120}
                height={40}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[36px] font-extrabold text-[#2E2E2E]">
        {value}
      </p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}