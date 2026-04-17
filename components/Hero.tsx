"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#CFE3DF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-28 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="z-10">

          <h1 className="text-[56px] leading-[1.05] font-extrabold text-[#2E2E2E]">
            Make marketing
            <br />
            <span className="text-[#0E7C66] italic font-medium">
              work
            </span>{" "}
            for your business
            <br />
          </h1>

          <p className="mt-8 text-lg text-[#4A4A4A] max-w-[480px]">
            Flywheel is an AI-first marketing agency that helps Orthodontic practices, Real Estate firms, and Interior Design companies drive leads, build predictable pipelines, and generate more revenue.
          </p>

          <div className="mt-10 flex items-center gap-6">
              <a
              href="#book-call"
              className="inline-block bg-[#FF6A2A] text-white px-10 py-4 rounded-xl font-semibold shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition"
            >
              Get a FREE audit
            </a>


            <div className="flex items-center gap-2 text-sm text-[#2E2E2E]">
              ⭐⭐⭐⭐
              <span>4.3 Great team to work with</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[500px]">

          {/* Main Image */}
          <div className="absolute right-0 top-0 rotate-12">
            <Image
              src="/assets/services/heroim.png"
              alt="Flywheel marketing"
              width={420}
              height={520}
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* Floating ROI Card */}
          <div className="absolute bottom-10 right-10 bg-white p-6 rounded-xl shadow-xl border">
            <p className="text-xs text-gray-500">Avg RoAS</p>
            <p className="text-2xl font-bold">14.5X</p>
          </div>

          {/* Floating Card */}
          <div className="absolute top-20 left-0 bg-white p-4 rounded-xl shadow-xl border">
            <p className="text-sm font-medium">2 weeks time-to-first-result</p>
          </div>

        </div>
      </div>
    </section>
  );
}
