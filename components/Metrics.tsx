"use client";

import FadeIn from "./FadeIn";

export default function Metrics() {
  return (
    <section className="bg-[#F4F4F4] pt-28 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <FadeIn>
          <h2 className="text-[48px] leading-[1.15] font-extrabold text-[#2E2E2E]">
            Why choose Flywheel
            <br />
            over{" "}
            <span className="text-[#0E7C66] italic font-medium">
              literally
            </span>{" "}
            everyone else?
          </h2>
        </FadeIn>

        {/* Metrics Row */}
        <div className="mt-24 grid md:grid-cols-3 gap-20 items-center">

          <FadeIn>
            <div>
              <div className="text-[56px] font-extrabold text-[#2E2E2E]">
                14.5X
              </div>
              <p className="mt-4 text-[#4A4A4A] max-w-[260px] mx-auto">
                Average RoAS across all clients in 2025
              </p>
            </div>
          </FadeIn>

          {/* Center Orange Highlight Block */}
          <FadeIn>
            <div className="flex justify-center">
              <div className="bg-[#FF6A2A] text-white px-10 py-6 rounded-xl shadow-[6px_6px_0px_#000]">
                <div className="text-xl font-bold">
                  Your marketing actually attracts your ideal audience
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <div className="text-[56px] font-extrabold text-[#2E2E2E]">
                14 Days
              </div>
              <p className="mt-4 text-[#4A4A4A] max-w-[260px] mx-auto">
                That's the average time it takes for our clients to see their first results after we start working together.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}