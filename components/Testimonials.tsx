"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Helen Guo",
      handle: "@HelenGuo_",
      text: "We've been using Flywheel for years. Good for re-engagement. You can get creative with messaging.",
    },
    {
      name: "Nathan Woods",
      handle: "@HeisNathan",
      text: "We’ve done some rad winbacks. The Flywheel team is one of my favs.",
    },
    {
      name: "Chris Lander",
      handle: "@chris_basis",
      text: "+1 for Flywheel. Have only done a few campaigns, but it’s been wonderful.",
    },
    {
      name: "Amanda Lee",
      handle: "@amandalee",
      text: "Flywheel completely changed how we approach lifecycle marketing.",
    },
    {
      name: "Jordan Miles",
      handle: "@jordandtc",
      text: "Direct mail + email together is insanely powerful.",
    },
  ];

  const loopItems = [...testimonials, ...testimonials];

  useEffect(() => {
    const speed = 0.5; // lower = slower

    const animate = () => {
      if (!sliderRef.current) return;

      if (!isPaused) {
        positionRef.current -= speed;

        if (
          Math.abs(positionRef.current) >=
          sliderRef.current.scrollWidth / 2
        ) {
          positionRef.current = 0;
        }

        sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <section className="bg-[#F4F4F4] py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[48px] font-extrabold text-[#2E2E2E]">
          Flywheel is 🔥 for{" "}
          <span className="text-[#0E7C66] italic font-medium">
            real-estate and interior design teams
          </span>
        </h2>

        {/* Slider */}
        <div
          className="mt-20 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            className="flex gap-8 w-max will-change-transform"
          >
            {loopItems.map((item, i) => (
              <div
                key={i}
                className="max-w-[320px] bg-white rounded-2xl border-2 border-[#2E2E2E] p-8 text-left relative"
              >
                <div className="absolute top-6 right-6 text-xl">
                  🐦
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gray-300" />
                  <div>
                    <p className="font-semibold text-[#2E2E2E]">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.handle}
                    </p>
                  </div>
                </div>

                <p className="text-[#4A4A4A] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

    {/* CTA */}
    <br></br>
      <a
        href="#book-call"
        className="inline-block bg-[#FF6A2A] text-white px-10 py-4 rounded-xl font-semibold shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition"
      >
        TRY IT RISK-FREE
      </a>

      </div>
    </section>
  );
}
