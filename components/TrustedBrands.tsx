"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function TrustedBrands() {
  return (
    <section className="bg-[#FFFFFF] py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <FadeIn>
          <h2 className="text-[56px] leading-[1.1] font-extrabold text-[#2E2E2E] text-center">
            Trusted by real-estate & interior design
            <br />
            brands that like to {" "}
            <span className="text-[#0E7C66] italic font-medium">
              stay ahead
            </span>
          </h2>
        </FadeIn>

        {/* Logo Slider */}
        <div className="mt-20 overflow-hidden relative">

          <div className="flex w-max animate-scroll gap-16 items-center">

            {/* First Set */}
            {[
              "/assets/clients/ei.png",
              "/assets/clients/cs.png",
              "/assets/clients/en.png",
              "/assets/clients/bst.png",
              "/assets/clients/ho.png",
              "/assets/clients/ms.png",
              "/assets/clients/ph.png",
              "/assets/clients/gb.png",
              "/assets/clients/bs.png",
              "/assets/clients/ch.png",
              "/assets/clients/fp.png",
              "/assets/clients/ed.png",
              "/assets/clients/am.png",
              "/assets/clients/si.png",
              "/assets/clients/sp.png",
              "/assets/clients/ss.png",
              "/assets/clients/gi.png",
              "/assets/clients/th.png",
              "/assets/clients/vi.png",
            ].map((logo, i) => (
              <div key={i} className="min-w-[160px] flex justify-center">
                <Image
                  src={logo}
                  alt="brand"
                  width={140}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}

            {/* Duplicate Set (for infinite loop) */}
            {[
              "/assets/clients/ei.png",
              "/assets/clients/cs.png",
              "/assets/clients/en.png",
              "/assets/clients/bst.png",
              "/assets/clients/ho.png",
              "/assets/clients/ms.png",
              "/assets/clients/ph.png",
              "/assets/clients/gb.png",
              "/assets/clients/bs.png",
              "/assets/clients/ch.png",
              "/assets/clients/fp.png",
              "/assets/clients/ed.png",
              "/assets/clients/am.png",
              "/assets/clients/si.png",
              "/assets/clients/sp.png",
              "/assets/clients/ss.png",
              "/assets/clients/gi.png",
              "/assets/clients/th.png",
              "/assets/clients/vi.png",
            ].map((logo, i) => (
              <div key={`dup-${i}`} className="min-w-[160px] flex justify-center">
                <Image
                  src={logo}
                  alt="brand"
                  width={140}
                  height={40}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>

        </div>
        </div>
    </section>
  );
}
