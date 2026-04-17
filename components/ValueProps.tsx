"use client";

import FadeIn from "./FadeIn";

export default function CinchSection() {
  return (
    <section className="bg-[#EFE4D8] py-32">
      <div className="max-w-[1100px] mx-auto px-6 text-center">

        <FadeIn>
          <h2 className="text-[44px] font-extrabold text-[#2E2E2E] leading-tight">
            Flywheel makes it a{" "}
            <span className="text-[#0E7C66] italic font-medium">
              cinch
            </span>{" "}
            to put your marketing strategy in motion.
          </h2>
        </FadeIn>

      </div>
    </section>
  );
}
