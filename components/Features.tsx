"use client";

import Image from "next/image";

const FEATURES = [
  {
    title: "Performance marketing",
    description:
      "Generate predictable, scalable revenue with data-backed ad campaigns.",
    bg: "bg-[#EDE4DC]",
    image: "/assets/services/ads.png",
  },
  {
    title: "SEO, AEO, & GEO strategy",
    description:
      "Get discovered first across search, AI, and local platforms where buyers are looking.",
    bg: "bg-[#CFE3DF]",
    image: "/assets/services/seo.png",
  },
  {
    title: "Web design & development",
    description:
      "Turn visitors into customers with high-converting, performance-driven websites.",
    bg: "bg-[#DCD7F0]",
    image: "/assets/services/wd.png",
  },
  {
    title: "Content & demand gen",
    description:
      "Build authority and consistently attract high-intent leads through strategic content.",
    bg: "bg-[#CFE3DF]",
    image: "/assets/services/co.png",
  },
  {
    title: "Growth & CRO consultations",
    description:
      "Unlock hidden revenue by optimizing every step of your customer journey.",
    bg: "bg-[#E6D8D8]",
    image: "/assets/services/ro.png",
  },
  {
    title: "Automation & markOps",
    description:
      "Save time and scale effortlessly with streamlined marketing and sales automation.",
    bg: "bg-[#EFEFEF]",
    image: "/assets/services/ma.png",
  },
];

export default function Features() {
  return (
    <section id = "features" className="bg-[#F4F4F4] py-32">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[48px] font-extrabold text-[#2E2E2E] leading-tight">
          Everything your business needs to
        </h2>
        <p className="mt-4 text-[36px] text-[#0E7C66] italic font-medium">
          make your brand unforgettable
        </p>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-2xl p-10 flex flex-col items-center text-center`}
            >
              {/* Image */}
              <div className="h-[140px] flex items-center justify-center mb-8">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={160}
                  height={120}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2E2E2E]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#4A4A4A] leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
